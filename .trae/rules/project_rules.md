---
description: 

globs: 

alwaysApply: true
---
---

description: 自定义地图信息浮窗实现和逻辑

globs: ["pages/index/index.wxml", "pages/index/index.wxss", "pages/index/index.js"]

alwaysApply: true

---

# 自定义地图信息浮窗（Custom Map Callout）

本项目未使用微信小程序 `map` 组件自带的 `callout`，而是采用自定义实现，以解决样式自定义和跨平台显示一致性的问题，并能更好地控制显示逻辑。

## 组件结构

-**中国历史事件的自定义浮窗** `<view class="custom-callout china-event-callout">` 定义在 ](mdc:pages/index/index.wxml) 的 `.popup-container` 内。

-**世界历史事件的自定义浮窗** `<view class="custom-callout world-event-callout">` 同样定义在 `.popup-container` 内。

- 两个浮窗的显示优先级和层叠关系通过 `chineseCalloutIsSecondary` 和 `worldPopupIsSecondary` 这两个 `data` 状态变量来控制。当一个浮窗显示时，另一个如果也需要显示，则会被设置为次要（通常表现为更低的 `z-index` 或半透明，具体样式由CSS控制）。

## 显示控制

-**中国历史事件**：

- 当点击地图上的中国历史事件标记（`marker`）时，`onMarkerTap` 函数被触发。

  -`onMarkerTap` 会根据 `markerId`（小于200）从 `this.currentPeriodDisplayableEvents` (当前时期在地图上可显示的中国事件列表，已经过排序和坐标调整) 中找到对应的事件数据。

- 找到事件后，其信息（包括格式化后的年份 `startYearDisplay`, `endYearDisplay` 和地图标签序号 `mapLabel`）被存入 `selectedMarkerInfo`，从而触发中国事件浮窗的显示。
- 如果此时世界事件浮窗已显示，则 `worldPopupIsSecondary` 会被设为 `true`，中国事件浮窗优先显示。

-**世界历史事件**：

- 当点击底部世界历史事件面板中的条目时，`onWorldEventTap` 函数被触发。

  -`onWorldEventTap` 会根据事件 `id` 从 `currentWorldHistoryEvents` 或 `allRealWorldHistoryData` 中找到对应的世界事件详情。

- 事件详情（包括格式化后的年份和 `mapLabel`）被存入 `selectedWorldEventDetail`，触发世界事件浮窗的显示。
- 如果此时中国事件浮窗已显示，则 `chineseCalloutIsSecondary` 会被设为 `true`，世界事件浮窗优先显示。
- 点击地图上的世界历史事件标记（`markerId >= 200`）时，也会间接触发 `onWorldEventTap` 逻辑，显示对应的世界事件浮窗。

-**关闭逻辑**：

- 点击地图空白处（`onMapTap`）会清空 `selectedMarkerInfo` 和 `selectedWorldEventDetail`，关闭所有浮窗。
- 每个浮窗内部通常会有一个关闭按钮，分别绑定 `onCloseChineseCallout` 和 `onCloseWorldEventDetailPopup`，点击后仅清空对应浮窗的状态。
- 切换历史时期（`onPeriodTap`）时，所有已打开的浮窗状态和面板都会被重置和关闭。

## 样式和布局

- 浮窗样式定义在 [pages/index/index.wxss](mdc:pages/index/index.wxss) 的 `.custom-callout` 类下。
- 针对中国事件和世界事件的特定样式（如背景色、边框色）可以通过 `.china-event-callout` 和 `.world-event-callout` 进行区分。
- 样式包括绝对定位、居中（或接近标记点的位置）、背景、圆角、阴影、最大宽度/高度限制、内容自动换行和内部滚动等。

-`.popup-container` 作为容器，可能也定义了 `z-index` 等属性来管理浮窗的层级。

---
description: 
globs: 
alwaysApply: true
---
---
description: 数据管理与结构
globs: ["data/*.js", "pages/index/index.js"]
alwaysApply: true
---

# 数据管理与结构

## 中国历史数据

- **统一数据源**：所有中国历史事件数据已整合到 [data/china_history.js](mdc:data/china_history.js) 文件中。不再使用分散的 `period_*.js` 文件。
- **数据结构**：每个事件对象包含以下主要字段：
  - `id`（**纯数字**，以 `1` 开头的6位数，如 `100000`），作为事件的唯一原始标识。
  - `title`（标题）
  - `locationName`、`latitude`、`longitude`（地理位置信息）
  - `details` 或 `description`（描述详情）
  - `startYear`、`endYear`（起止年份。点状事件二者相同；对于持续性事件，`endYear` 为实际结束年份）
- **数据加载与处理**：
  - 主页面 [pages/index/index.js](mdc:pages/index/index.js) 直接导入 `chinaHistoryData` 来自 `data/china_history.js`。
  - **时期数据映射 (`dataPeriodMap`)**：在 `pages/index/index.js` 中，`dataPeriodMap` 的构建逻辑已更新。它不再依赖于事件对象中的 `period` 字段，而是根据 `comprehensiveTimePeriods` 中定义的时期名称，结合 `dynastyStartYearsMap` 计算出每个时期的起止年份范围，然后从 `allChinaHistoryData` (即导入的 `chinaHistoryData`) 中筛选出在该年份范围内的事件，从而填充 `dataPeriodMap`。
  - **唯一ID (`prefixedId`) 生成**：虽然原始 `id` 是唯一的数字，但在 `pages/index/index.js` 加载数据时，仍然会根据事件所属的综合时期（如"夏"、"商"）为其生成一个带前缀的 `prefixedId`（例如 `xia-100100`）。这个 `prefixedId` 主要用于内部逻辑和组件的 `key`，而地图标记点 `marker` 的 `id` 则通常使用基于其在当前时期事件列表中顺序的数字索引 (0, 1, 2...)。

## 世界历史数据

- **统一数据源**：所有世界历史事件数据已整合到 [data/world_history.js](mdc:data/world_history.js) 文件中。
- **数据结构**：每个事件对象包含以下主要字段：
  - `id`（**纯数字**，以 `2` 开头的6位数，通常以100递增，如 `200000`, `200100`），作为事件的唯一原始标识。
  - `title`（标题）
  - `startYear`、`endYear`（起止年份）
  - `description`（描述详情）
  - `locationName`、`latitude`、`longitude`（可选的地理位置信息，用于地图标记）
  - `mapLabel`（在 `_refreshActiveWorldEvents` 中动态添加，用于地图标记的数字序号）
- **数据加载与筛选**：
  - 主页面 [pages/index/index.js](mdc:pages/index/index.js) 导入 `worldHistoryData` 来自 `data/world_history.js` (赋值给 `allRealWorldHistoryData`)。
  - 通过 `_refreshActiveWorldEvents` 函数（在 `onPeriodTap` 和 `onToggleWorldHistoryPanel` 中调用）根据当前选中的中国历史时期的起止年份，动态筛选出时间范围上重叠的世界历史事件。
  - 筛选后的事件被添加 `mapLabel` 序号，存入 `currentWorldHistoryEvents`，用于世界史面板展示和地图标记点生成。

## 王朝疆域数据

- **数据结构**：各时期疆域 GeoJSON 数据（或等效JS对象）存放于 [data/borders/](mdc:data/borders) 子目录下，文件如 `ming.geojson.js`。
- **加载与显示**：
  - [pages/index/index.js](mdc:pages/index/index.js) 中的 `borderData` 对象映射时期键名到对应的疆域数据模块。
  - `loadAndDisplayDynastyBorders` 方法负责根据当前选定时期，调用 `fetchAndParseDynastyBorder` 获取对应的边界数据，然后通过 `parseGeoJsonToPolygons` 将其转换为小程序 `map` 组件 `polygons` 属性所需的格式，最终存储在 `data` 的 `dynastyPolygons` 数组中，并绑定到地图上进行渲染。

  ---
description: 
globs: 
alwaysApply: true
---
---
description: 地图标记点处理逻辑
globs: ["pages/index/index.js", "pages/index/index.wxml"]
alwaysApply: true
---

# 地图标记点 (Marker) 处理逻辑

## Marker 数ges/index/index.js](mdc:pages/index/index.js) 中的 `updateMarkersForPeriod` (及其辅助 `_continueUpdateMarkers`) 是负责为当前选定时期准备和显示所有地图标记点的核心。

- **中国历史事件 Marker**：
  - 根据当前选定时期 (`selectedPeriod`) 的年份范围，从 `allChinaHistoryData` 中筛选出相关事件。
  - 筛选出的事件按 `startYear` (然后按 `originalId`) 排序。
  - 调用 `dinates` 对地理坐标相近的事件进行微小偏移。
  - 排序和偏移后的事件列表存储在 `this.currentPeriodDisplayableEvents` 中。
  - 为 `currentPeriodDisplayableEvents` 中的每个事件生成一个 marker 对象。**marker 的 `id` 是该事件在 `currentPeriodDisplayableEvents` 数组中的索引 (0, 1, 2...)**。这确保了地图标记 `id` 与其在当前时期事件列表中的顺序一致，方便点击时查找。
  - `label.content` 显示的是 `index + 1`，即从1开始的序号。
  - `iconPath` 使用 `NORMAL_ICON_PATH` (蓝色图钉)。

- **世界历史事件 Marker**：
  - 在 `onPeriodTap` 或 `onToggleWorldHistoryPanel` 触发 `_refreshActiveWorldEvents` 时，会根据当前中国时期的年份范围筛选出相关的世界历史事件，并进行排序、添加 `mapLabel` 序号，存入 `currentWorldHistoryEvents`。
  - `updateMarkersForPeriod` (在其内部的 `_continueUprentWorldHistoryEvents`。
  - 如果有世界事件，它们也会经过 `adjustOverlappingCoordinates` 进行坐标偏移处理。
  - 为每个有效的世界事件生成 marker 对象。
  - **marker 的 `id` 是 `200 + index`** (其中 `index` 是其在经过筛选和坐标调整后的 `currentWorldHistoryEvents` 数组中的索引)。`id >= 200` 用于区分世界事件标记点。
  - `label.content` 显示的是事件对象上的 `mapLabel` 属性值 (从1开始的序号，在 `_refre中生成)。
  - `iconPath` 使用 `WORLD_ICON_PATH` (橙色图钉)。

- **统一添加 Marker**：
  - 中国和世界历史事件的 marker 对象准备好后，会合并到一个 `allMarkers` 数组中。
  - 调用 `mapCtx.addMarkers({ markers: allMarkers, clear: true })` 一次性将所有标记点添加到地图上，并清除旧的标记点。这可以避免多次调用 `addMarkers` 可能导致的性能问题或标记点丢失。

## Marker 点击与交互 (`onMarkerTap`)

- 当用户点击地图上的任一标ap` 函数被触发，参数 `e.markerId` 即为被点击 marker 的 `id`。 如果 `markerId >= 200`，则判定为世界历史事件标记点。会从 `currentWorldHistoryEvents` 中根据 `markerId - 200` 的索引找到对应事件，并调用 `onWorldEventTap` 的逻辑（传递事件的原始 `id`）来显示世界事件的详情浮窗和时间轴指示器。
  - 如果 `markerId < 200`，则判定为中国历史事件标记点。会从 `this.currentPeriodDisplayableEvents` 中根据 `markerId` (即数组索引) 找到对应事件，设置 `selectedMarkerInfo` 以显示中国事件的详情浮窗，并更新子时间轴指示器。
- **防止误触**：`onMarkerTap` 会记录点击时间，`onMapTap` (地图空白处点击) 会检查这个时间，以防止因事件冒泡导致在点击标记点时错误地关闭了浮窗。

## Marker 自动偏移 (`adjustOverlappingCoordinates`)

- **函数**：`adjustOverlappingCoordinates` 函数在 [pages/index/index.js](mdc:pages/index/index.js) 文件末尾定义。
- **目的**：解决多个事件地理坐标完全相同或非常接近时，地图标记点堆叠在一起难以点击和分辨的问题。
- **逻辑**：
  - 接收一个事件对象数组作为输入。
  - 遍历数组，找出地理坐标（`latitude`, `longitude`）在 `COORD_THRESHOLD` (一个很小的阈值，如0.001) 内的事件组。
  - 对于每个重叠组，第一个事件的坐标保持不变。
  - 从第二个事件开始，围绕第一个事件的坐标，以 `OFFSET_INCREMENT` 为基础半径，采用多层圆环布局策略（每层最多8个点）计算新的偏移坐标。偏移半径会随层数增加而增大，但有 `MAX_RADIUS` 限制，避免散得太开。
  - 确保偏移后的新坐标仍在合法的经纬度范围内。
- **应用**：在 `updateMarkersForPeriod` (内部的 `_continueUpdateMarkers`) 中，分别对筛选和排序后的中国历史事件列表和世界历史事件列表调用此函数，然后再根据调整后的坐标生成 marker 对象。

## Marker 高亮 (中国历史事件)

- **触发**：当用户从中国历史事件面板 (`.chinese-history-panel`) 点击一个事件条目时 (`onChineseEventTap`)。
- **逻辑**：
  1. 找到被点击事件在 `currentPeriodDisplayableEvents` 中的索引 (`markerIndex`)。
  2. 设置 `this.data.highlightedMarkerId` 为该 `markerIndex`。
  3. 设置 `this.data.skipViewAdjust = true`，防止后续的 `updateMarkersForPeriod` 意外调整地图视野。
  4. 调用 `updateMarkersForPeriod`。此函数在生成 marker 对象时，会检查 `this.data.highlightedMarkerId`：
     - 如果当前 marker 的索引与 `highlightedMarkerId` 匹配，其 `width` 和 `height`会设为较大值 (如40x40)，`label.bgColor` 也会使用高亮颜色 (如 `#2196F3E5`)。
     - 其他 marker 则使用普通尺寸和颜色。
  5. 地图标记点重新渲染后，调用 `moveToEventLocation` 将地图中心平移到高亮事件的坐标。
  6. 启动一个2秒的定时器 (`setTimeout`)。
  7. 定时器结束后：
     - 将 `this.data.highlightedMarkerId` 设回 `null`。
     - 保持 `this.data.skipViewAdjust = true`。
     - 再次调用 `updateMarkersForPeriod`，此时所有 marker 都会恢复普通状态。
     - 在 `updateMarkersForPeriod` 的回调中，将 `this.data.skipViewAdjust` 设回 `false`，以便后续操作可以正常调整视野。
- **目的**：临时放大并突出显示用户从面板中选择的事件对应的地图标记点，引导用户视线，然后自动恢复。

---
description: 
globs: 
alwaysApply: true
---
---
description: 主时间轴与子时间轴逻辑
globs: ["pages/index/index.js", "pages/index/index.wxml", "pages/index/index.wxss"]
alwaysApply: true
---

# 主时间轴与子时间轴逻辑

## 主时间轴 (Static History Ruler)

- **结构与定义**：主时间轴的视觉结构在 [pages/index/index.wxml](mdc:pages/index/index.wxml) 中由 `.static-history-ruler-container` 及其子元素定义。其样式在 [pagesindex.wxss](mdc:pages/index/index.wxss) 中控制。
- **固定刻度标签**：
  - 时间轴背景上显示的数字年份标签（如 -2500, -2000, ..., 2500）由 [pages/index/index.js](mdc:pages/index/index.js) 中的 `generateNumericalLabels` 函数生成。
  - 该函数使用固定的 `TIMELINE_DISPLAY_START` (-2500) 和 `TIMELINE_DISPLAY_END` (2500) 作为时间轴的起止点，通常按 `TIMELINE_STEP` (500年) 的间隔生成标签。
  - 每个标签的位置（百分比）是相对于这个固定范围计算的。
- **中国历史时期指示器**：
  - 一个绿色的竖条指示器（`.ruler-indicator`）在主时间轴上显示当前选中的中国历史时期的**起始年份**位置。
  - "早期文明与起源"时期不显示此指示器。
  - 指示器的位置（`currentRulerPosition`，一个百分比值）在 `onPeriodTap` 事件中通过调用 `calculateAndSetPosition` 函数来计算和设置。
  - `calculateAndSetPosition` 使用选中时期的起始年份（来自 `dynastyStartYearsMap`），并根据 `TIMELINE_DISPLAY_START` 和 `TIMELINE_DISPLAY_END` 将其归一化为百分比。早于 `TIMELINE_DISPLAY_START` 的年份会被视为 `TIMELINE_DISPLAY_START` 进行定位。
- **世界历史事件指示器 (主时间轴)**：
  - 当用户点击世界历史事件（从面板或地图标记）并显示其详情浮窗时，一个小的**橙色**竖条指示器 (`.world-event-on-main-timeline`) 会出现在主时间轴上，标记该世界事件的**起始年份**位置。
  - 其位置（`worMainTimelinePosition`，百分比）由 `calculateWorldEventTimelinePositions` 函数计算，同样相对于 `TIMELINE_DISPLAY_START` 和 `TIMELINE_DISPLAY_END` 进行归一化。
  - 关闭世界事件详情浮窗时，此指示器会消失。

## 子时间轴 (Sub-Timeline)

- **显示条件与结构**：
  - 子时间轴（`.sub-timeline-container`）仅在当前选中的中国历史时期**不是**"早期文明与起源"时显示。
  - 它用于展示当前中国历史时期的精确起止年份。
- **内容与控制**：
  - 子时间轴的起止年份标签（`subTimelineStartLabel`, `subTimelineEndLabel`）和实际年份（`subTimelineStartYear`, `subTimelineEndYear`p` 事件中，通过 `updateSubTimeline` 函数根据选定时期从 `dynastyStartYearsMap` 和 `comprehensiveTimePeriods` 计算得出并设置。
  - `showSubTimeline` data 属性控制其整体的显示与隐藏。
- **中国历史事件指示器 (子时间轴)**：
  - 当用户点击地图上的中国历史事件标记 (`onMarkerTap`)，并且该事件的详情浮窗 (`selectedMarkerInfo`) 显示时，一条**绿色**的条状指示器 (`.sub-timeline-indicator`) 会出现在子时间轴上。
  - 该指示器的起始位置 (`selectedEventStartYearPosition`，百分比) 和宽度 (`selectedEventDurationWidth`，百分比) 表示该事件的起止年份相对于当前子时间轴所示时期的范围。
  - 这些值由 `calculateAndSetSubTimelineIndicator` 函数计算。
  - 当关闭事件浮窗 (如点击地图空白 `onMapTap`) 或切换到新时期 (`onPeriodTap`) 时，此指示器会消失。
- **世界历史事件指示器 (子时间轴)**：
  - 当用户点击世界历史事件并显示其详情浮窗 (`selectedWorldEventDetail`) 时，如果该世界事件的时间范围与当前子时间轴显示的中国时期有重叠，一条**橙色**的条状指示器 (`.sub-timeline-indicator.world-event-indicator`) 也会出现在子时间轴上。
  - 其位置 (`worldEventOnSubTimelinePosition`) 和宽度 (`worldEventOnSubTimelineDurationWidth`) 由 `calculateWorldEventTimelinePositions` 函数计算，逻辑与中国事件指示器类似，但基于世界事件的年份。
  - **重叠处理**：如果中国事件指示器和世界事件指示器在子时间轴上同时显示且时间范围有重叠，`_checkAndUpdateSubTimelineOverlap` 函数会检测到此情况，并通过设置 `subTimelineWorldEventIsOverlap` 为 `true`，通常使得世界事件的指示器条变为半透明（通过 `.sub-indicator-overlap` 类实现），以区分层次。

## 时期选择与面板交互

- **时期选择按钮**：
  - 页面底部有一个横向滚动的视图（`.period-buttons-scroll`），包含代表各个中国历史时期的按钮。
  - 这些按钮由 `comprehensiveTimePeriods` 数组和 `buttonLabelMap` 对象在 [pages/index/index.js](mdc:pages/index/index.js) 中定义和生成。
  - 点击任一时期按钮会触发 `onPeriodTap` 事件。
- **`onPeriodTap` 核心逻辑**：
  - 更新 `selectedPeriod` 状态。
  - 调用 `calculateAndSetPosition` 更新主时间轴指示器。
  - 调用 `updateSubTimeline` 更新子时间轴的显示和内容。
  - 清空所有已选中的事件详情（`selectedMarkerInfo`, `selectedWorldEventDetail`）和相关的指示器位置。
  - 关闭所有历史事件面板（中国史 `.chinese-history-panel` 和世界史 `.world-history-panel`）。
  - 调用 `_refreshActiveWorldEvents` 重新加载并筛选与新时期相关的世界历史事件（但不立即显示面板）。
  - 调用 `loadAndDisplayDynastyBorders` 加载并显示新时期的疆域。
  - 调用 `updateMarkersForPeriod` 清除旧标记并加载、显示新时期的中国历史事件标记（此时也会根据 `currentWorldHistoryEvents` 添加世界事件标记）。