// index.js
// 引入各个时期的数据文件
// const ancientData = require('../../data/period_ancient.js').ancientData; // 删除
// const prehistoricData = require('../../data/period_prehistoric.js').prehistoricData; // 删除
// const civilizationOriginData = require('../../data/period_civilization_origin.js').civilizationOriginData; // 删除
// const springAutumnData = require('../../data/period_spring_autumn.js').springAutumnData; // 删除
// const warringStatesData = require('../../data/period_warring_states.js').warringStatesData; // 删除
// const hundredSchoolsData = require('../../data/period_hundred_schools.js').hundredSchoolsData; // 删除
// const suiData = require('../../data/period_sui.js').suiData; // 删除
// const tangData = require('../../data/period_tang.js').tangData; // 删除
// const mingData = require('../../data/period_ming.js').mingData; // 删除
// const qingData = require('../../data/period_qing.js').qingData; // 删除
// const xiaData = require('../../data/period_xia.js').xiaData; // 删除
// const shangData = require('../../data/period_shang.js').shangData; // 删除
// const zhouData = require('../../data/period_zhou.js').zhouData; // 删除
// const qinData = require('../../data/period_qin.js').qinData; // 删除
// const hanData = require('../../data/period_han.js').hanData; // 删除
// const songData = require('../../data/period_song.js').songData; // 删除
// const yuanData = require('../../data/period_yuan.js').yuanData; // 删除
// const threeKingdomsData = require('../../data/period_three_kingdoms.js').threeKingdomsData; // 删除
// const jinData = require('../../data/period_jin.js').jinData; // 删除
// const northSouthData = require('../../data/period_north_south.js').northSouthData; // 删除
// const fiveDynastiesData = require('../../data/period_five_dynasties.js').fiveDynastiesData; // 删除
// const modernData = require('../../data/period_modern.js').modernData; // 删除

// 导入工具函数
const util = require('../../utils/util.js');

// 导入新的中国历史数据
const chinaHistoryModule = require('../../data/china_history.js');
const allChinaHistoryData = chinaHistoryModule.chinaHistoryData;

// 导入真实的世界历史数据
const worldHistoryModule = require('../../data/world_history.js');
const allRealWorldHistoryData = worldHistoryModule.worldHistoryData;

// mockWorldHistoryData 将被移除，直接使用 allRealWorldHistoryData
// const mockWorldHistoryData = [ 
// ... (mock data removed)
// ];

// 保留原有的时间轴范围常量
const TIMELINE_DISPLAY_START = -2500;
const TIMELINE_DISPLAY_END = 2500;
const TIMELINE_STEP = 500; // 主时间轴刻度间隔

// 1. 更新时期列表，包含细分的现代时期
const comprehensiveTimePeriods = [
  '早期文明与起源', // Covers prehistoric, civilization_origin
  '夏',
  '商',
  '周', // Covers Western Zhou, Eastern Zhou (conceptually, Spring/Autumn and Warring States are sub-periods)
  '春秋',
  '战国',
  // '诸子百家', //百家争鸣是春秋战国时期的一个现象，不是一个独立的朝代时期。
  '秦',
  '汉',
  '三国',
  '晋', // Covers Western Jin, Eastern Jin
  '南北朝',
  '隋',
  '唐',
  '五代十国',
  '宋', // Covers Northern Song, Southern Song
  '元',
  '明',
  '清', // Covers early Qing, and conceptually includes "Late Qing" as its final phase
  '晚清', // Specific focus period
  '民国初期', // Republic - Early
  '国府', // Republic - Nanjing Decade
  '抗战', // Republic - War of Resistance
  '解放', // Republic - Liberation War
  '建国初期', // PRC - Early
  '探索', // PRC - Socialist Construction / Exploration
  // '特殊时期', // This can be a sub-period within '探索' or handled by events' specific years
  '改革开放', // PRC - Reform and Opening Up
  '市场经济', // PRC - Socialist Market Economy
  '新时代' // PRC - New Era
];

// 2. 更新按钮标签映射
const buttonLabelMap = {
  '早期文明与起源': '起源',
  '夏': '夏',
  '商': '商',
  '周': '周',
  '春秋': '春秋',
  '战国': '战国',
  '秦': '秦',
  '汉': '汉',
  '三国': '三国',
  '晋': '晋',
  '南北朝': '南北朝',
  '隋': '隋',
  '唐': '唐',
  '五代十国': '五代', 
  '宋': '宋',
  '元': '元',
  '明': '明',
  '清': '清',
  '晚清': '晚清',
  '民国初期': '民国初',
  '国府': '国府',
  '抗战': '抗战',
  '解放': '解放',
  '建国初期': '建国初',
  '探索': '探索',
  // '特殊时期': '特殊', //
  '改革开放': '改革',
  '市场经济': '市场',
  '新时代': '新时代'
};

// 3. 时期对应的指示器位置 - 此对象可能不再主要用于定位，但为了完整性，检查其与 comprehensiveTimePeriods 的对应
const periodRulerPositions = { 
  // This map might be deprecated if ruler position is purely based on year.
  // For now, ensure keys match comprehensiveTimePeriods if still used somewhere.
  // Example:
  '夏': 20, 
  '商': 40,
  // ... other periods
  '晚清': 190,
  '民国初期': 192,
  '国府': 193,
  '抗战': 194,
  '解放': 195,
  '建国初期': 196,
  '探索': 197, // Changed from '探索建设'
  // '特殊时期': 198.5,
  '改革开放': 199,
  '市场经济': 199.5,
  '新时代': 200
};

// 4. 更新标准朝代/时期起始年份映射 (加入细分现代时期)
const dynastyStartYearsMap = {
    // '早期文明与起源' is special, handled by its wide range or specific event years.
    // Typically, its start might be considered TIMELINE_DISPLAY_START for filtering.
    '夏': -2070,
    '商': -1600,
    '周': -1046, // 西周开始
    '春秋': -770, // 东周开始，春秋始于此
    '战国': -475, // 或 -403，采纳史学常见-475
    '秦': -221,
    '汉': -202, // 西汉建立
    '三国': 220,  // 魏国建立通常作为三国开始的标志
    '晋': 266,  // 西晋建立 (司马炎代魏)
    '南北朝': 420, // 刘裕建宋，通常作为南北朝开始的标志之一
    '隋': 581,
    '唐': 618,
    '五代十国': 907, // 朱温灭唐，后梁建立
    '宋': 960,  // 北宋建立
    '元': 1271, // 忽必烈定国号为元
    '明': 1368,
    '清': 1644, // 清军入关，顺治帝在北京即位，通常视为清朝统治全国的开始 (实际建立后金为1616)
    '晚清': 1840, // 鸦片战争爆发
    '民国初期': 1912, // 中华民国成立
    '国府': 1927, // 南京国民政府成立 (四一二后，宁汉合流趋向统一)
    '抗战': 1937, // 七七事变，全面抗战爆发
    '解放': 1945, // 抗战胜利后，解放战争开始 (通常指1945-1949)
    '建国初期': 1949, // 中华人民共和国成立
    '探索': 1956, // 社会主义改造基本完成，开始全面建设社会主义 (或以1957反右为转折点)
    // '特殊时期': 1966, // "文革"开始
    '改革开放': 1978, // 十一届三中全会
    '市场经济': 1992, // 南方谈话和中共十四大提出建立社会主义市场经济体制
    '新时代': 2012, // 中共十八大
};
// 为 "早期文明与起源" 提供一个非常早的起始年份，以便包含所有相关事件
const EARLIEST_YEAR = -10000; // Or link to TIMELINE_DISPLAY_START


// 标记点图标路径
const NORMAL_ICON_PATH = '/images/marker_china.png'; // 普通标记图标路径 (中国历史事件)
const WORLD_ICON_PATH = '/images/marker_world.png'; // 世界历史事件标记图标路径

// --- 新增：生成数字刻度标签的函数 ---
function generateNumericalLabels(startYear, endYear, step = 500) {
  // 使用定义的常量作为时间轴的固定起止点
  const actualStartYear = TIMELINE_DISPLAY_START;
  const actualEndYear = TIMELINE_DISPLAY_END;

  if (actualStartYear === null || actualEndYear === null) {
    return [];
  }
  const labels = [];
  
  // 对于极早期（小于-10000年）使用更大的间隔
  let currentYear = actualStartYear;
  let currentStep;
  
  while (currentYear <= actualEndYear) {
    // 根据年份范围动态调整标签间隔
    if (currentYear < -10000) {
      currentStep = 500000; // 50万年间隔
    } else if (currentYear < -1000) {
      currentStep = 1000; // 1千年间隔
    } else {
      currentStep = 500; // 500年间隔
    }
    
    let displayLabel;
    if (currentYear <= -10000) {
      const absYear = Math.abs(currentYear);
      if (absYear >= 1000000) {
        displayLabel = `-${(absYear/1000000).toFixed(1)}M`; // 显示为"-1.7M"
      } else {
        displayLabel = `-${(absYear/1000).toFixed(0)}K`; // 显示为"-30K"
      }
    } else {
      displayLabel = `${currentYear}`;
    }
    
    const position = calculatePosition(currentYear);
    labels.push({
      label: displayLabel,
      position: position
    });
    
    currentYear += currentStep;
  }
  
  function calculatePosition(year) {
    // 新的计算逻辑基于固定的 TIMELINE_DISPLAY_START 和 TIMELINE_DISPLAY_END
    const totalDisplaySpan = actualEndYear - actualStartYear;
    if (totalDisplaySpan <= 0) {
        return 50; // 如果范围无效，居中显示
    }
    // 将所有早于 actualStartYear 的年份视为 actualStartYear
    const normalizedYear = Math.max(year, actualStartYear);
    let positionPercent = ((normalizedYear - actualStartYear) / totalDisplaySpan) * 100;
    return Math.max(0, Math.min(100, positionPercent));
  }
  
  return labels;
}

// 5. 构建新的 dataPeriodMap 基于年份范围
const dataPeriodMap = {};
comprehensiveTimePeriods.forEach((compPeriodKey, index) => {
  let periodStartYear, periodEndYear;

  if (compPeriodKey === '早期文明与起源') {
    periodStartYear = -2000000; // 明确设置为-200万年，确保包含元谋人
    // 结束年份是下一个时期（夏）的开始年份
    const nextPeriodName = comprehensiveTimePeriods[index + 1];
    periodEndYear = dynastyStartYearsMap[nextPeriodName] ? dynastyStartYearsMap[nextPeriodName] -1 : TIMELINE_DISPLAY_END;
  } else {
    periodStartYear = dynastyStartYearsMap[compPeriodKey];
    if (periodStartYear === undefined) {
      console.warn(`時期 "${compPeriodKey}" 在 dynastyStartYearsMap 中沒有定義起始年份。`);
      dataPeriodMap[compPeriodKey] = [];
      return; // 跳过这个时期
    }

    if (index < comprehensiveTimePeriods.length - 1) {
      const nextPeriodName = comprehensiveTimePeriods[index + 1];
      periodEndYear = dynastyStartYearsMap[nextPeriodName] ? dynastyStartYearsMap[nextPeriodName] -1 : TIMELINE_DISPLAY_END;
    } else {
      // 这是最后一个时期
      periodEndYear = TIMELINE_DISPLAY_END; // 或者一个非常大的正数年份
    }
  }
  
  if (periodStartYear === undefined || periodEndYear === undefined) {
    console.warn(`時期 "${compPeriodKey}" 的起始或結束年份無法確定。`);
    dataPeriodMap[compPeriodKey] = [];
    return;
  }

  // 从 allChinaHistoryData 中筛选事件
  const filteredEvents = allChinaHistoryData.filter(event => {
    // 确保事件有 startYear
    if (event.startYear === undefined || event.startYear === null) return false;
    // 事件的开始年份必须在时期的范围内 [periodStartYear, periodEndYear]
    return event.startYear >= periodStartYear && event.startYear <= periodEndYear;
  });

  dataPeriodMap[compPeriodKey] = filteredEvents;
  // console.log(`为时期 "${compPeriodKey}" (范围: ${periodStartYear}-${periodEndYear}) 筛选了 ${filteredEvents.length} 个事件`);
});

// --- Helper function to generate prefixes from period names ---
function getPrefixForPeriod(periodKey) {
    // 确保periodKey是字符串，并且安全地用于文件名或ID前缀
    if (typeof periodKey !== 'string') {
        // console.warn(`Invalid periodKey for prefix: ${periodKey}`);
        return 'unknown';
    }
    // 简单规则：小写并替换空格（如果时期名复杂）
    // 或者直接使用映射表中的key（如果它们适合做前缀）
    // 这里我们假设 comprehensiveTimePeriods 中的字符串可以直接用（可能需要小写）
    // 例如，如果 periodKey 是 "夏", "商", "唐" 等，可以直接用
    // 如果是 "早期文明与起源"，可能要处理下
    
    // 查找 periodKey 在 comprehensiveTimePeriods 中的官方名称
    const officialPeriodName = comprehensiveTimePeriods.find(p => 
        p === periodKey || buttonLabelMap[p] === periodKey || p.toLowerCase().replace(/\s+/g, '') === periodKey.toLowerCase().replace(/\s+/g, '')
    );

    if (officialPeriodName) {
        // 使用 buttonLabelMap 的值作为短前缀，如果找不到，则尝试简化官方名称
        const shortLabel = buttonLabelMap[officialPeriodName];
        if (shortLabel && shortLabel.length < 10 && /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(shortLabel)) { // 确保是简单字符
            return shortLabel.toLowerCase();
        }
        // 简化官方名称作为前缀
        return officialPeriodName.toLowerCase().replace(/\s+/g, '_').substring(0, 10);
    }

    // 默认或回退机制
    // console.warn(`No standard prefix found for periodKey: ${periodKey}, using simplified version.`);
    return periodKey.toLowerCase().replace(/\s+/g, '_').substring(0, 10);
}
// --- End Helper ---

// 引入疆域数据
const { civilizationOriginGeoJson } = require('../../data/borders/civilization_origin.js');
const borderData = {
  '早期文明与起源': civilizationOriginGeoJson,
  '夏': require('../../data/borders/xia.geojson.js').xiaBorder,
  '商': require('../../data/borders/shang.geojson.js').shangBorder,
  '周': require('../../data/borders/zhou.geojson.js').zhouBorder,
  '春秋': require('../../data/borders/spring_autumn.geojson.js').springAutumnBorder,
  '战国': require('../../data/borders/warring_states.geojson.js').warringStatesBorder,
  '秦': require('../../data/borders/qin.geojson.js').qinBorder,
  '汉': require('../../data/borders/han.geojson.js').hanBorder,
  '三国': require('../../data/borders/three_kingdoms.geojson.js').threeKingdomsBorder,
  '晋': require('../../data/borders/jin.geojson.js').jinBorder,
  '南北朝': require('../../data/borders/north_south.geojson.js').northSouthBorder,
  '隋': require('../../data/borders/sui.geojson.js').suiBorder,
  '唐': require('../../data/borders/tang.geojson.js').tangBorder,
  '五代十国': require('../../data/borders/five_dynasties.geojson.js').fiveDynastiesTenKingdomsGeneralBorder,
  '宋': require('../../data/borders/song.geojson.js').songBorder,
  '元': require('../../data/borders/yuan.geojson.js').yuanBorder,
  '明': require('../../data/borders/ming.geojson.js').mingBorder,
  '清': require('../../data/borders/qing.geojson.js').QingBorder,
  '晚清': require('../../data/borders/late_qing.geojson.js').lateQingBorder,
  '民国初期': require('../../data/borders/nanjing_gov.js').nanjingNationalGovernment1930Border,
  '国府': require('../../data/borders/nanjing_gov.js').nanjingNationalGovernment1930Border,
  '抗战': require('../../data/borders/china.js').chinaBorder,
  '解放': require('../../data/borders/china.js').chinaBorder,
  '建国初期': require('../../data/borders/china.js').chinaBorder,
  '探索': require('../../data/borders/china.js').chinaBorder, // 修正键名
  '改革开放': require('../../data/borders/china.js').chinaBorder,
  '市场经济': require('../../data/borders/china.js').chinaBorder,
  '新时代': require('../../data/borders/china.js').chinaBorder
};

Page({
  data: {
    longitude: 108.95000, // 修改：使用中国中心点（秦岭-淮河一线附近）
    latitude: 34.26667,
    currentInfo: '请点击下方时间轴选择时期',
    timePeriods: comprehensiveTimePeriods,
    buttonLabelMap: buttonLabelMap,
    selectedPeriod: comprehensiveTimePeriods[0],
    markers: [],
    scale: 4, // 新增：设置初始缩放级别，4级可以看到整个中国
    // mapRotation: 0, // 移除：存储地图旋转角度
    allHistoryData: [], // Will store data with prefixed IDs
    selectedMarkerInfo: null, // 用于存储当前选中的标记点信息，以便在自定义浮窗中显示
    currentRulerPosition: null, // 主时间轴指示器位置
    width: 25, 
    height: 25, 
    // --- 新增：存储时间轴范围 ---
    timelineStartYear: TIMELINE_DISPLAY_START,
    timelineEndYear: TIMELINE_DISPLAY_END,
    totalTimeSpan: null,
    // --- 修改：分段点和比例 ---
    breakpointYear: -2070, // 夏朝开始作为分界点 (保持)
    prehistoricRatio: 0, // 史前部分占据时间轴的 0% (从 30 调整为 0)
    numericalLabels: [], // --- 新增：存储数字刻度标签 ---
    
    // --- 新增：追踪当前地图上标记点的数字 ID ---
    currentNumericMarkerIds: [],
    // --- 新增：子时间轴 Data --- 
    showSubTimeline: false, // 是否显示子时间轴
    subTimelineStartLabel: '', // 子时间轴起点标签
    subTimelineEndLabel: '', // 子时间轴终点标签
    subTimelineStartYear: null, // 子时间轴实际起始年份
    subTimelineEndYear: null,   // 子时间轴实际结束年份
    subTimelineDuration: 0, // 子时间轴总时长
    selectedEventStartYearPosition: null, // 选中事件在子时间轴上的开始位置百分比
    selectedEventDurationWidth: null, // 选中事件在子时间轴上的持续时间百分比宽度
    // --- 结束新增 --- 

    // --- 新增：同期世界史面板相关 --- 
    showWorldHistoryPanel: false,
    currentWorldHistoryEvents: [],
    allWorldHistoryData: allRealWorldHistoryData,
    // --- 新增：选中的世界历史事件详情及其在时间轴上的位置 --- 
    selectedWorldEventDetail: null,
    worldEventOnMainTimelinePosition: null, // 百分比
    worldEventOnSubTimelinePosition: null,  // 百分比
    // --- 结束新增 ---

    // --- 新增：将常量映射添加到 data 中 ---
    dataPeriodMap: dataPeriodMap,
    dynastyStartYearsMap: dynastyStartYearsMap,
    // 如果 comprehensiveTimePeriods 和 buttonLabelMap 也在 page 方法中通过 this.data 访问，
    // 虽然它们已经直接用于初始化其他 data 属性，但为保持一致性或明确性，也可以在此处再次显式添加。
    // comprehensiveTimePeriods: comprehensiveTimePeriods, // 已用于初始化 timePeriods
    // buttonLabelMap: buttonLabelMap, // 已用于初始化 buttonLabelMap
    // periodRulerPositions: periodRulerPositions, // 如果还在使用这个旧的映射
    // --- 结束新增 ---

    // --- 新增：控制弹窗层叠状态 ---
    chineseCalloutIsSecondary: false,
    worldPopupIsSecondary: false,
    // --- 结束新增 ---

    // --- 新增：控制子时间轴指示器重叠透明度状态 ---
    subTimelineWorldEventIsOverlap: false,
    subTimelineDomesticEventIsOverlap: false, // 可选，当前逻辑主要让世界事件条透明
    dynastyPolygons: [], // 新增：用于存储当前朝代的疆域多边形
    
    // 新增：中国历史相关数据
    showChineseHistoryPanel: false,
    currentChineseHistoryEvents: [],
    highlightedMarkerId: null, // 新增：高亮 marker id
    onlyShowHighlightedMarker: false, // 新增：只显示高亮 marker
    skipViewAdjust: false, // 新增：跳过视图调整标志

    // 新增：搜索相关数据
    showSearchPanel: false, // 控制搜索面板显示
    searchKeyword: '', // 搜索关键词
    hasSearched: false, // 新增：标记用户是否已执行搜索操作
    searchResults: { // 搜索结果
      chinaEvents: [],
      worldEvents: []
    },
    foundEventIdForHighlight: null, // 用于高亮搜索结果
    circles: [], // 新增：用于地图圆形覆盖物，显示高亮圆环
  },

  // Page 实例属性，用于存储当前显示的事件列表
  currentPeriodDisplayableEvents: [],

  onLoad: function () {
    // --- 获取 MapContext --- 
    // this.setData({ mapCtx: wx.createMapContext('map') }); // 删除旧的 setData 方式
    this.mapCtx = wx.createMapContext('map'); // 新增：将 mapCtx 直接赋值给页面实例属性
    if (!this.mapCtx) {
      console.error("onLoad: MapContext 初始化失败!");
    }
    // --- 结束获取 ---

    // --- 新增：定义地图初始视角常量 ---
    this.INITIAL_MAP_CENTER = {
      longitude: 108.95000, // 初始中心点经度 (例如：中国陕西西安附近)
      latitude: 34.26667,  // 初始中心点纬度
    };
    this.INITIAL_MAP_SCALE = 4; // 初始缩放级别
    // --- 结束新增 ---

    // --- 确保初始加载时面板和浮窗都是关闭状态 ---
    this.setData({
      showWorldHistoryPanel: false,
      showChineseHistoryPanel: false,
      selectedMarkerInfo: null,
      selectedWorldEventDetail: null,
      worldEventOnMainTimelinePosition: null,
      worldEventOnSubTimelinePosition: null,
      worldEventOnSubTimelineDurationWidth: null,
      chineseCalloutIsSecondary: false,
      worldPopupIsSecondary: false
    });

    // --- 数据加载与初始化 ---
    const processedData = [];
    const prefixesUsed = new Set(); // To track generated prefixes for debugging

    // Iterate through the imported data structure
    for (const periodKey in dataPeriodMap) {
        const periodArray = dataPeriodMap[periodKey];
        const prefix = getPrefixForPeriod(periodKey); // Get prefix
        prefixesUsed.add(prefix); // Track prefix

        if (Array.isArray(periodArray)) {
            periodArray.forEach(item => {
                if (item && item.id !== undefined) {
                    const originalId = item.id; // Store the original numeric ID
                    const prefixedId = `${prefix}-${originalId}`; // Create prefixed ID

                    // --- 修改：同时存储原始ID和前缀ID ---
                    processedData.push({
                        ...item, // Spread existing item properties
                        id: originalId, // Keep original numeric ID for potential direct use if needed elsewhere
                        prefixedId: prefixedId, // Store the unique prefixed ID
                        originalId: originalId // Explicitly store original numeric ID for marker mapping
                    });
                    // --- 结束修改 ---
                } else {
                    console.warn('Skipping item without ID in period:', periodKey, item);
                }
            });
        }
    }

    console.log('Generated Prefixes:', Array.from(prefixesUsed));
    console.log('Total items processed with prefixed IDs:', processedData.length);

    // Store the fully processed data with both IDs
    this.setData({
      allHistoryData: processedData,
    });
    console.log('合并后的历史数据加载完成 (带前缀ID):', this.data.allHistoryData.length, '条');

    // --- Calculate Timeline Span ---
    let minYear = null;
    let maxYear = null;

    this.data.allHistoryData.forEach(item => {
        if (item.startYear !== undefined) {
            if (minYear === null || item.startYear < minYear) {
                minYear = item.startYear;
            }
            // Use endYear if available, otherwise startYear for max calculation
            const yearForMax = item.endYear !== undefined ? item.endYear : item.startYear;
            if (maxYear === null || yearForMax > maxYear) {
                maxYear = yearForMax;
            }
        }
    });
    const totalSpan = (minYear !== null && maxYear !== null) ? maxYear - minYear : 0;
    console.log(`Timeline Span Calculated: ${minYear} to ${maxYear} (Total: ${totalSpan} years)`);
    this.setData({
        timelineStartYear: minYear,
        timelineEndYear: maxYear,
        totalTimeSpan: totalSpan
    });
    // --- End Timeline Span ---

    // --- Generate Numerical Labels ---
    this.setData({
       numericalLabels: generateNumericalLabels(this.data.timelineStartYear, this.data.timelineEndYear, 500) // Adjust step as needed
    });
    // --- End Generate Numerical Labels ---

    // Initial Load for the first period (默认"早期文明与起源")
    this.setData({ 
       selectedPeriod: this.data.timePeriods[0],
       // 确保世界历史面板和事件详情初始化时是关闭的
       showWorldHistoryPanel: false,
       selectedWorldEventDetail: null,
       worldEventOnMainTimelinePosition: null,
       worldEventOnSubTimelinePosition: null,
       worldEventOnSubTimelineDurationWidth: null,
       chineseCalloutIsSecondary: false,
       worldPopupIsSecondary: false
    });
    console.log('初始时期', this.data.selectedPeriod, '，指示器隐藏，开始加载标记点');
    // --- 修改：首次加载调用新的 updateMarkers ---
    this.updateMarkersForPeriod(this.data.selectedPeriod, true);
    // --- 新增：首次加载也调用疆域加载函数 ---
    this.loadAndDisplayDynastyBorders(this.data.selectedPeriod);
    this.setData({ 
      currentRulerPosition: null,
      // --- 新增：设置地图初始视角 ---
      longitude: this.INITIAL_MAP_CENTER.longitude,
      latitude: this.INITIAL_MAP_CENTER.latitude,
      scale: this.INITIAL_MAP_SCALE
      // --- 结束新增 ---
    });
    // --- 确保初始状态下子时间轴也不显示 ---
    this.setData({ showSubTimeline: false, selectedEventStartYearPosition: null }); 
    // --- 确保初始状态下也没有疆域 ---
    this.setData({ dynastyPolygons: [] }); 
  },

  // --- 修复：更新标记点的函数 ---
  updateMarkersForPeriod: function(period) {
    return new Promise((resolve, reject) => { 
      if (!this.mapCtx) { // 修改：检查 this.mapCtx
        console.warn("updateMarkersForPeriod: MapContext 未在 onLoad 中初始化，尝试现在创建。");
        this.mapCtx = wx.createMapContext('map'); // 修改：直接赋值给 this.mapCtx
        if (!this.mapCtx) {
          console.error("updateMarkersForPeriod: MapContext 紧急创建失败!");
          reject("MapContext 无法初始化! Emergency creation failed."); 
          return;
        }
      }
      this._continueUpdateMarkers(period, resolve, reject); // 调用辅助函数继续
    });
  },

  // --- 辅助函数：包含 updateMarkersForPeriod 的核心逻辑 ---
  _continueUpdateMarkers: function(period, resolve, reject) {
    try {
      // const worldEventsForMap = this.data.currentWorldHistoryEvents || []; // 这行可以稍后确认是否需要
      console.log(`开始更新 ${period} 时期的标记点 (Clear & Add)`);
      
      if (this.data.skipViewAdjust && this.data.highlightedMarkerId === null && 
          this.currentPeriodDisplayableEvents && this.currentPeriodDisplayableEvents.length > 0) {
        console.log('skipViewAdjust is true and no marker is highlighted. Markers will be redrawn, but includePoints will be skipped.');
      }
    } catch (error) {
      console.error('_continueUpdateMarkers 初始化失败:', error);
      reject(error);
      return;
    }
    
    let startYear = null;
    let endYear = null;
    try {
      if (period === '早期文明与起源') {
        startYear = -Infinity;
        endYear = dynastyStartYearsMap['夏'];
      } else {
        startYear = dynastyStartYearsMap[period];
        const periodIndex = comprehensiveTimePeriods.indexOf(period);
        if (startYear === undefined) {
          throw new Error(`无法在 dynastyStartYearsMap 中找到时期 '${period}' 的起始年份`);
        }
        if (periodIndex < comprehensiveTimePeriods.length - 1) {
          const nextPeriod = comprehensiveTimePeriods[periodIndex + 1];
          endYear = dynastyStartYearsMap[nextPeriod];
          if (endYear === undefined) {
            console.warn(`无法在 dynastyStartYearsMap 中找到下一个时期 '${nextPeriod}' 的起始年份来确定 '${period}' 的结束年份`);
            endYear = this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : new Date().getFullYear() + 50;
          }
        } else {
          endYear = this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : new Date().getFullYear() + 50;
        }
      }
      if (endYear === undefined || endYear === null) {
        throw new Error(`时期 '${period}' 的结束年份计算失败`);
      }
    } catch (error) {
      console.error(error.message);
      // this.setData({ markers: [] }); // markers 属性已废弃，通过mapCtx操作
      if (this.mapCtx) { // 修改：使用 this.mapCtx
        this.mapCtx.addMarkers({ markers: [], clear: true });
      } else {
        console.error("_continueUpdateMarkers: mapCtx is null when trying to clear markers on error.");
      }
      reject(error); 
      return;
    }

    console.log(`筛选年份范围: [${startYear ?? '-Infinity'}, ${endYear ?? '+Infinity'})`);
    const periodPrefix = getPrefixForPeriod(period);

    // --- 2. 筛选、排序、调整坐标 --- 
    // 只按时间段筛选属于这个时期的事件
    const filteredRawData = this.data.allHistoryData.filter(item => {
      const year = item.startYear; 
      const sYear = typeof startYear === 'number' ? startYear : -Infinity;
      const eYear = typeof endYear === 'number' ? endYear : Infinity;
      return year !== undefined && year >= sYear && year < eYear;
    });
    
    // 按开始年份排序
    filteredRawData.sort((a, b) => {
      const yearA = a.startYear === undefined ? Infinity : a.startYear;
      const yearB = b.startYear === undefined ? Infinity : b.startYear;
      if (yearA !== yearB) {
          return yearA - yearB;
      } else {
          return a.originalId - b.originalId; 
      }
    });
    const adjustedData = adjustOverlappingCoordinates(filteredRawData);
    console.log(`[DEBUG] 时期 '${period}' 最终用于生成 markers 的数据 (${adjustedData.length} 条):`, JSON.parse(JSON.stringify(adjustedData.map(i => ({id: i.originalId, pId: i.prefixedId, year: i.startYear, lat: i.latitude, lon: i.longitude, title: i.title})))));

    // 存储当前时期的事件，用于响应标记点点击
    this.currentPeriodDisplayableEvents = adjustedData;
    
    // --- 3. 准备 Marker 数据 --- 
    // 首先使用工具函数验证所有坐标数据
    const validatedData = util.validateCoordinates(adjustedData);

    let newMarkers = validatedData.map((item, index) => {
      // 经纬度已经验证过，不需要再做重复验证
      const lat = item.latitude;
      const lng = item.longitude;
      
      // 确认坐标有效性
      if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng)) {
        console.warn(`[updateMarkersForPeriod] 坐标仍然无效，跳过标记点: ${item.title} (ID: ${item.prefixedId}), Lat: ${lat}, Lng: ${lng}`);
        return null;
      }
      
      // 添加：如果只显示高亮的标记点，且当前标记点不是高亮标记点，则跳过
      if (this.data.onlyShowHighlightedMarker && this.data.highlightedMarkerId !== index) {
        return null;
      }
      
      const isHighlighted = this.data.highlightedMarkerId === index;
      
      // 关键修改：为每个事件添加面板序号属性（用于显示一致的标记编号）
      // 如果事件没有预先设置mapLabel，则使用当前索引+1
      const mapLabel = item.mapLabel || (index + 1);
      item.mapLabel = mapLabel; // 保存mapLabel到事件对象中
      
      return {
        id: index,
        latitude: lat,
        longitude: lng,
        width: this.data.width, // 修改：取消图钉变大效果
        height: this.data.height, // 修改：取消图钉变大效果
        label: {
          content: `${mapLabel}`, // 使用mapLabel代替index+1
          color: '#FFFFFF',
          fontSize: 12,
          bgColor: '#1976D2', // 修改：取消图钉变色效果
          padding: 2,
          borderRadius: 3,
          textAlign: 'center'
        },
        customCalloutType: 'china',
        iconPath: NORMAL_ICON_PATH
      };
    }).filter(marker => marker !== null && marker.latitude >= -90 && marker.latitude <= 90 && marker.longitude >= -180 && marker.longitude <= 180);

    // --- 只保留官方字段，确保经纬度为 number ---
    const markersForValidation = newMarkers.filter(m => m !== null).map(m => {
      return {
        id: m.id,
        latitude: typeof m.latitude === 'number' ? m.latitude : Number(m.latitude),
        longitude: typeof m.longitude === 'number' ? m.longitude : Number(m.longitude),
        width: m.width,
        height: m.height,
        label: m.label,
        iconPath: m.iconPath // 保留 iconPath 字段
      };
    });
    
    // 最终验证所有标记点坐标
    const finalMarkers = util.validateCoordinates(markersForValidation);
    // 输出最终 marker 数组详细内容
    console.log('[最终 addMarkers markers]', JSON.stringify(finalMarkers, null, 2));

    // --- 合并世界事件 marker ---
    let allMarkers = [...finalMarkers];
    const worldEvents = this.data.currentWorldHistoryEvents || [];
    if (worldEvents.length > 0) {
      try {
        // 对世界事件也做自动偏移，避免重叠
        const adjustedWorldEvents = adjustOverlappingCoordinates(worldEvents);
        
        // 构建世界事件标记并进行验证
        const worldMarkersRaw = adjustedWorldEvents.map((event, index) => {
          // 如果只显示高亮的标记点，且当前标记点不是高亮标记点，则跳过
          if (this.data.onlyShowHighlightedMarker && this.data.highlightedMarkerId !== (200 + index)) {
            return null;
          }
          
          const isHighlighted = this.data.highlightedMarkerId === (200 + index);
          
          return {
            id: 200 + index,
            latitude: event.latitude,
            longitude: event.longitude,
            width: this.data.width, // 修改：取消图钉变大效果
            height: this.data.height, // 修改：取消图钉变大效果
            label: {
              content: `${event.mapLabel}`,
              color: '#FFFFFF',
              fontSize: 12,
              bgColor: '#FF8C00', // 世界事件橙色（完全不透明）
              padding: 2,
              borderRadius: 3,
              textAlign: 'center'
            },
            customCalloutType: 'world',
            iconPath: WORLD_ICON_PATH
          };
        }).filter(marker => marker !== null);
        
        // 最终验证世界事件标记点坐标
        const worldMarkers = util.validateCoordinates(worldMarkersRaw);
        
        // 再次确认世界标记经纬度在有效范围内
        const validWorldMarkers = worldMarkers.map(marker => {
          // 确保经度在[-180, 180]范围内
          if (marker.longitude < -180 || marker.longitude > 180) {
            console.warn(`[世界经度修正] marker ID:${marker.id} 经度值 ${marker.longitude} 超出范围，进行修正`);
            let fixedLng = marker.longitude;
            while (fixedLng > 180) fixedLng -= 360;
            while (fixedLng < -180) fixedLng += 360;
            marker.longitude = fixedLng;
          }
          
          // 确保纬度在[-90, 90]范围内
          if (marker.latitude < -90 || marker.latitude > 90) {
            console.warn(`[世界纬度修正] marker ID:${marker.id} 纬度值 ${marker.latitude} 超出范围，进行修正`);
            marker.latitude = Math.max(-90, Math.min(90, marker.latitude));
          }
          
          return marker;
        });
        
        allMarkers = [...allMarkers, ...validWorldMarkers];
        console.log(`[WorldMarker] (from _continueUpdateMarkers) 共添加 ${worldMarkers.length} 个世界事件标记点 (已自动偏移重叠)`);
      } catch (error) {
        console.error('[WorldMarker] 处理世界事件标记点时出错:', error);
      }
    } else {
      console.log('[WorldMarker] (from _continueUpdateMarkers) 当前时期没有已准备好的带地理坐标的世界历史事件数据');
    }

    // --- 4. 只调用一次 addMarkers，clear: true ---
    const mapCtx = this.mapCtx; // 修改：直接使用 this.mapCtx
    if (!mapCtx) {
      console.error("_continueUpdateMarkers: this.mapCtx is null before addMarkers call.");
      reject("MapContext is null");
      return;
    }

    console.log(`准备更新地图，将添加 ${allMarkers.length} 个标记点。`);
    
    try {
      // 进行最终的全面验证，确保所有标记点都有有效的经纬度
      const validatedMarkers = util.validateCoordinates(allMarkers);
      
      // 如果验证后标记数量有变化，记录日志
      if (validatedMarkers.length !== allMarkers.length) {
        console.warn(`[标记验证] 验证前有 ${allMarkers.length} 个标记点，验证后有 ${validatedMarkers.length} 个标记点`);
      }
      
      // 再次检查每个标记点的经纬度值是否在有效范围内
      const finalMarkers = validatedMarkers.map(marker => {
        // 确保经度在[-180, 180]范围内
        if (marker.longitude < -180 || marker.longitude > 180) {
          console.warn(`[经度修正] marker ID:${marker.id} 经度值 ${marker.longitude} 超出范围，进行修正`);
          // 将经度值规范化到[-180, 180]范围
          let fixedLng = marker.longitude;
          while (fixedLng > 180) fixedLng -= 360;
          while (fixedLng < -180) fixedLng += 360;
          marker.longitude = fixedLng;
        }
        
        // 确保纬度在[-90, 90]范围内
        if (marker.latitude < -90 || marker.latitude > 90) {
          console.warn(`[纬度修正] marker ID:${marker.id} 纬度值 ${marker.latitude} 超出范围，进行修正`);
          marker.latitude = Math.max(-90, Math.min(90, marker.latitude));
        }
        
        return marker;
      });
      
      // 打印最终要添加的标记点数据，方便调试
      console.log(`[最终验证] 准备添加 ${finalMarkers.length} 个标记点`);
      
      // 再次确认是否仍有无效坐标
      if (util.hasInvalidCoordinates(finalMarkers)) {
        console.warn('[严重警告] 最终标记点中仍存在无效坐标，这可能导致地图组件报错！');
        // 打印存在问题的标记点，帮助调试
        finalMarkers.forEach(marker => {
          if (marker.longitude < -180 || marker.longitude > 180 ||
              marker.latitude < -90 || marker.latitude > 90) {
            console.error(`[问题标记] ID:${marker.id}, Lat:${marker.latitude}, Lng:${marker.longitude}`);
          }
        });
      }
      
      mapCtx.addMarkers({
        markers: finalMarkers,
        clear: true, // 确保这里是true，清除旧标记
        success: () => {
          console.log(`成功更新地图，添加了 ${finalMarkers.length} 个标记点 (IDs: ${finalMarkers.map(m=>m.id).join(', ')})`);
          if (!this.data.onlyShowHighlightedMarker && !this.data.skipViewAdjust && finalMarkers.length > 0) {
            const points = finalMarkers.map(marker => ({
              latitude: marker.latitude,
              longitude: marker.longitude
            }));
            mapCtx.includePoints({ // 使用 mapCtx 变量
              points: points,
              padding: [80, 80, 80, 80],
              success: () => {
                console.log('成功调整地图视野以显示所有标记点');
              },
              fail: (err) => {
                console.error('调整地图视野失败:', err);
              }
            });
          } else if (this.data.skipViewAdjust) {
              console.log('[Markers] skipViewAdjust is true, skipping includePoints.');
          }
          resolve();
        },
        fail: (err) => {
          console.error('更新 markers 失败 (addMarkers with clear:true):', err);
          // this.setData({ skipViewAdjust: false }); // skipViewAdjust 的管理逻辑可能需要审视
          
          // 打印出导致错误的标记点详情，帮助调试
          if (finalMarkers && finalMarkers.length > 0) {
            console.error('[错误详情] 问题可能出在以下标记点:', 
              finalMarkers.map(m => `ID:${m.id}, Lat:${m.latitude}, Lng:${m.longitude}`));
          }
          
          reject(err);
        }
      });
    } catch (error) {
      console.error('最终标记点验证或添加时出错:', error);
      reject(error);
    }

    // --- END OF REMOVAL ---
    
    // --- 新增：只显示高亮 marker ---
    // ... existing code ...
  },

  // --- 辅助函数：检查子时间轴重叠并更新状态 ---
  _checkAndUpdateSubTimelineOverlap: function() {
    const domesticEvent = this.data.selectedMarkerInfo;
    const worldEvent = this.data.selectedWorldEventDetail;

    if (domesticEvent && worldEvent && this.data.showSubTimeline && this.data.subTimelineDuration > 0) {
      const domesticStart = domesticEvent.startYear;
      const domesticEnd = domesticEvent.endYear || domesticEvent.startYear;
      const worldStart = worldEvent.startYear;
      const worldEnd = worldEvent.endYear || worldEvent.startYear;

      // 检查重叠：max(start1, start2) < min(end1, end2)
      const overlap = Math.max(domesticStart, worldStart) < Math.min(domesticEnd, worldEnd);
      
      if (overlap) {
        this.setData({
          subTimelineWorldEventIsOverlap: true, // 让世界事件条半透明
          subTimelineDomesticEventIsOverlap: false // 国内事件条保持不透明
        });
      } else {
        this.setData({
          subTimelineWorldEventIsOverlap: false,
          subTimelineDomesticEventIsOverlap: false
        });
      }
    } else {
      // 如果任一事件不存在，或子时间轴不显示，则不应有重叠效果
      this.setData({
        subTimelineWorldEventIsOverlap: false,
        subTimelineDomesticEventIsOverlap: false
      });
    }
  },

  // --- 新增：显示中国事件详情的函数，不调整地图视图 ---
  displayChineseEventDetail: function(chineseEvent) {
    if (!chineseEvent || chineseEvent.id === undefined) {
      console.error("无效的中国历史事件数据");
      return;
    }
    
    console.log('显示中国历史事件详情:', chineseEvent.title);
    
    // 检查世界事件详情是否已显示
    const isWorldDetailVisible = !!this.data.selectedWorldEventDetail;
    
    // 使用原始年份格式化显示，而不是时间轴上的调整后年份
    const originalStartYear = chineseEvent.startYear;
    const originalEndYear = chineseEvent.endYear || chineseEvent.startYear;
    
    this.setData({
      selectedMarkerInfo: {
        ...chineseEvent,
        title: chineseEvent.title,
        details: chineseEvent.details || chineseEvent.description || '暂无详情',
        startYearDisplay: formatYear(originalStartYear), // 使用原始年份
        endYearDisplay: originalStartYear === originalEndYear ? '' : formatYear(originalEndYear), // 使用原始年份
        mapLabel: chineseEvent.mapLabel || (this.currentPeriodDisplayableEvents.findIndex(item => item.id === chineseEvent.id) + 1)
      },
      chineseCalloutIsSecondary: false,
      worldPopupIsSecondary: isWorldDetailVisible
    });
    
    // 计算子时间轴时使用调整后的年份
    const adjustedStartYear = Math.max(originalStartYear, TIMELINE_DISPLAY_START);
    const adjustedEndYear = Math.max(originalEndYear, TIMELINE_DISPLAY_START);
    
    // 计算并设置子时间轴指示器
    this.calculateAndSetSubTimelineIndicator(adjustedStartYear, adjustedEndYear);
    this._checkAndUpdateSubTimelineOverlap();
  },

  // --- 修改：标记点点击事件 ---
  onMarkerTap: function(e) {
    const markerId = e.markerId;
    console.log(`onMarkerTap triggered, markerId: ${markerId}`);
    
    // 记录标记点点击时间，用于防止事件冒泡导致的onMapTap误触发
    this.lastMarkerTapTime = Date.now();
    
    // 清除标记点恢复定时器
    if (this.markerRestoreTimer) {
      clearTimeout(this.markerRestoreTimer);
      this.markerRestoreTimer = null;
    }
    
    // 检查是否是世界事件标记点
    if (markerId >= 200) {
      // 根据ID查找对应的世界历史事件
      const worldEvents = this.data.currentWorldHistoryEvents || [];
      const worldIndex = markerId - 200;
      const event = worldEvents[worldIndex];
      if (event) {
        // 直接调用displayWorldEventDetail函数，只显示详情不移动地图
        this.displayWorldEventDetail(event);
      }
      return;
    }
    
    // 否则为中国事件
    if (markerId === undefined || markerId === null) {
      console.warn(`[onMarkerTap] 无效的 markerId: '${markerId}'`);
      this.setData({ 
        selectedMarkerInfo: null, 
        selectedEventStartYearPosition: null,
        selectedEventDurationWidth: null,
        chineseCalloutIsSecondary: false,
      });
      return;
    }
    
    // 根据ID查找对应的中国历史事件
    const event = this.currentPeriodDisplayableEvents[markerId];
    if (!event) {
      console.error(`[onMarkerTap] 未找到对应的事件: markerId=${markerId}`);
      return;
    }
    
    // 使用新函数显示中国事件详情
    this.displayChineseEventDetail(event);
  },
  
  // --- 新增或修改：计算子时间轴指示器的函数 ---
  calculateAndSetSubTimelineIndicator: function(startYear, endYear) {
      // 确保子时间轴是可见的并且有有效的时间范围
      if (!this.data.showSubTimeline || this.data.subTimelineDuration <= 0 || startYear === undefined || startYear === null) {
          this.setData({
              selectedEventStartYearPosition: null,
              selectedEventDurationWidth: null
          });
          return;
      }
      
      const timelineStart = this.data.subTimelineStartYear;
      const timelineEnd = this.data.subTimelineEndYear; // 结束年份
      const timelineDuration = this.data.subTimelineDuration;

      // 对于早于TIMELINE_DISPLAY_START的年份，强制调整为TIMELINE_DISPLAY_START
      const normalizedStartYear = Math.max(startYear, TIMELINE_DISPLAY_START);
      const normalizedEndYear = Math.max(endYear === undefined || endYear === null ? normalizedStartYear : endYear, TIMELINE_DISPLAY_START);
      
      const eventStart = normalizedStartYear;
      const eventEnd = normalizedEndYear; // 如果没有结束年，视为单年事件

      // 计算事件相对于子时间轴起点的偏移量
      const startOffset = eventStart - timelineStart;
      // 计算事件的持续时间 (至少为0)
      let eventDuration = Math.max(0, eventEnd - eventStart);

      // 计算起始位置百分比 (限制在 0-100)
      let startPositionPercent = (startOffset / timelineDuration) * 100;
      startPositionPercent = Math.max(0, Math.min(100, startPositionPercent));

      // 计算宽度百分比 (限制在 0 到 (100 - startPositionPercent))
      let durationWidthPercent = (eventDuration / timelineDuration) * 100;
      durationWidthPercent = Math.max(0, durationWidthPercent); // 确保不为负
      
      // 为单年事件或持续时间过短的事件设置一个最小可见宽度（例如 0.5%）
      const minWidthPercent = 0.5; 
      if (durationWidthPercent < minWidthPercent && eventDuration <= 0) { // 只对单年或零时长事件应用最小宽度
          durationWidthPercent = minWidthPercent;
        }
      
      // 再次确保总宽度不超过100%
      durationWidthPercent = Math.min(durationWidthPercent, 100 - startPositionPercent);


      console.log(`[SubTimelineIndicator] Event:${eventStart}-${eventEnd}, Timeline:${timelineStart}-${timelineEnd}, Pos%:${startPositionPercent.toFixed(2)}, Width%:${durationWidthPercent.toFixed(2)}`);

                this.setData({
          selectedEventStartYearPosition: startPositionPercent,
          selectedEventDurationWidth: durationWidthPercent
        });
  },

  // --- 修改：地图点击，增加清除世界事件详情浮层 --- 
  onMapTap: function(e) {
    console.log("onMapTap triggered");
    
    // 添加标记点防抖，检查是否刚刚触发过marker点击
    if (this.lastMarkerTapTime && Date.now() - this.lastMarkerTapTime < 300) {
      console.log("忽略onMapTap - 可能是从标记点冒泡的事件");
      return;
    }
    
    // 清除标记点恢复定时器
    if (this.markerRestoreTimer) {
      clearTimeout(this.markerRestoreTimer);
      this.markerRestoreTimer = null;
    }
    
    // 添加调试信息，显示当前地图中心点
    if (this.mapCtx) {
      this.mapCtx.getCenterLocation({
        success: (res) => {
          console.log(`[地图中心] 经度=${res.longitude}, 纬度=${res.latitude}`);
        }
      });
    }
    
    this.setData({
      selectedMarkerInfo: null,
      selectedEventStartYearPosition: null,
      selectedEventDurationWidth: null,
      selectedWorldEventDetail: null,
      worldEventOnMainTimelinePosition: null,
      worldEventOnSubTimelinePosition: null,
      worldEventOnSubTimelineDurationWidth: null,
      chineseCalloutIsSecondary: false,
      worldPopupIsSecondary: false
    });
  },

  // includePoints 函数 (修改版)
  includePoints: function(points) { 
      if (!points || points.length < 1) return; 
      const mapCtx = this.mapCtx; // 修改：使用 this.mapCtx
      if (!mapCtx) {
        console.error("includePoints: MapContext 未初始化!");
        return;
      }

      if (this.data.skipViewAdjust) {
        console.log('[includePoints] skipViewAdjust is true, skipping includePoints.');
        return;
      }

      if (points.length === 1) { 
          this.setData({
            latitude: points[0].latitude,
            longitude: points[0].longitude
          });
          console.log('使用setData移动到单点位置，保持当前缩放级别');
      } else { 
          mapCtx.includePoints({
            padding: [40, 40, 40, 40], 
            points: points.map(p => ({
              latitude: p.latitude,
              longitude: p.longitude,
            })),
            success: () => console.log('includePoints success'),
            fail: (err) => {
                console.error('includePoints fail:', err);
            }
          });
      }
  },

  // calculateAndSetPosition 函数 (保持不变)
  calculateAndSetPosition: function(period) { 
      const periodStartYear = this.data.dynastyStartYearsMap[period];
      if (periodStartYear === undefined || period === '早期文明与起源') {
        this.setData({ currentRulerPosition: null });
        return;
      }

      // 使用固定的时间轴范围
      const timelineStart = TIMELINE_DISPLAY_START;
      const timelineEnd = TIMELINE_DISPLAY_END;
      const totalDisplaySpan = timelineEnd - timelineStart;

      if (totalDisplaySpan <= 0) {
        this.setData({ currentRulerPosition: 50 }); // Default to middle if span is invalid
        return;
      }
      
      // 对时期开始年份进行规范化，早于-2500的都按-2500算
      const normalizedPeriodStartYear = Math.max(periodStartYear, timelineStart);

      // 计算位置百分比
      // 指示器应该准确反映该时期开始点在整个 [-2500, 2500] 范围内的位置
      let positionPercent = ((normalizedPeriodStartYear - timelineStart) / totalDisplaySpan) * 100;
      
      // 确保百分比在 0 到 100 之间
      positionPercent = Math.max(0, Math.min(100, positionPercent));

      this.setData({
        currentRulerPosition: positionPercent,
      });
  },

  // --- 修改：时期点击，增加清除世界事件详情浮层 ---
  onPeriodTap: async function (e) { 
    const period = e.currentTarget.dataset.period; 
    console.log('Period tapped:', period);

    // 清除标记点恢复定时器
    if (this.markerRestoreTimer) {
      clearTimeout(this.markerRestoreTimer);
      this.markerRestoreTimer = null;
    }

    this.setData({
      selectedPeriod: period,
      selectedMarkerInfo: null,
      selectedEventStartYearPosition: null,
      selectedEventDurationWidth: null,
      showWorldHistoryPanel: false,
      showChineseHistoryPanel: false,
      // currentWorldHistoryEvents: [], // 由 _refreshActiveWorldEvents 处理
      currentChineseHistoryEvents: [],
      selectedWorldEventDetail: null,
      worldEventOnMainTimelinePosition: null,
      worldEventOnSubTimelinePosition: null,
      worldEventOnSubTimelineDurationWidth: null,
      chineseCalloutIsSecondary: false,
      worldPopupIsSecondary: false,
      subTimelineWorldEventIsOverlap: false,
      subTimelineDomesticEventIsOverlap: false,
      dynastyPolygons: [],
      skipViewAdjust: false, 
    });

    this.calculateAndSetPosition(period); 
    this.updateSubTimeline(period);     
    
    // --- 核心修改：在更新标记点之前准备好世界事件数据 ---
    this._refreshActiveWorldEvents(period);
    // --- 结束核心修改 ---

    // --- 预设目标中心点，保持当前缩放级别 ---
    let targetLongitude = 108.95000; // 默认中国中心
    let targetLatitude = 34.26667;

    // 示例：可以根据 period 为特定朝代设置不同的中心点
    // 您需要维护一个类似 dynastyFocusMap 的对象
    const dynastyFocusMap = {
      '唐': { lon: 108.953098, lat: 34.26729 }, // 长安
      '明': { lon: 116.407395, lat: 39.904211 }, // 北京
      '清': { lon: 116.407395, lat: 39.904211 }, // 北京
      // ... 其他朝代
    };

    if (dynastyFocusMap[period]) {
      targetLongitude = dynastyFocusMap[period].lon;
      targetLatitude = dynastyFocusMap[period].lat;
    }
    
    // --- 步骤1: 立即移动地图到预设中心，保持当前缩放级别，不带动画 ---
    if (this.mapCtx) {
        // 使用setData设置地图中心，不设置缩放级别以保持当前缩放
        this.setData({
            longitude: targetLongitude,
            latitude: targetLatitude
            // 不设置scale，保持当前缩放级别
        });
        console.log(`通过setData将地图移动到${period}的焦点位置: (${targetLatitude}, ${targetLongitude})，保持当前缩放级别`);
    } else {
        // mapCtx 未初始化时的备用方案
        this.setData({
            longitude: targetLongitude,
            latitude: targetLatitude
            // 不设置scale，保持当前缩放级别
        });
    }


    console.log(`[onPeriodTap] Triggering async operations for ${period}...`);
    
    // --- 步骤2: 异步加载疆域和标记点 ---
    // 注意：此时内部的 includePoints 可能会再次尝试调整视野，
    // 如果上一步的 moveToLocation 和 set scale 已经满足需求，
    // 也许可以考虑在 updateMarkersForPeriod 和 loadAndDisplayDynastyBorders
    // 内部增加一个参数或判断，来决定是否还要执行 includePoints。
    // 一个简单的做法是，如果 skipViewAdjust 为 true，则跳过 includePoints。
    // 切换朝代时，我们主动移动了视野，所以可以设置 skipViewAdjust 为 true
    this.setData({ skipViewAdjust: true }); 

    const results = await Promise.allSettled([
      this.loadAndDisplayDynastyBorders(period).catch(err => {
        console.error(`[Borders] 在 onPeriodTap->loadAndDisplayDynastyBorders 中捕获到错误:`, err);
        return { status: 'rejected', reason: err };
      }),
      this.updateMarkersForPeriod(period).catch(err => {
          console.error(`[onPeriodTap] updateMarkersForPeriod failed for ${period}:`, err);
          return { status: 'rejected', reason: err };
      })
    ]);
    console.log(`[onPeriodTap] All async operations for ${period} settled. Results:`, results);

    if (period === '早期文明与起源') {
      this.setData({
        currentRulerPosition: null,
      });
    }
    // 在所有操作完成后，可以将 skipViewAdjust 重置回 false，以便后续的事件点击等操作可以正常调整视野
    // 但如果希望切换朝代后地图固定，就不重置或者在其他地方按需重置
    // this.setData({ skipViewAdjust: false }); 
  },

  // --- 新增：带明确范围的 updateMarkers 调用 ---
  // This function is needed because onPeriodTap calculates the range, 
  // but the original updateMarkers recalculates it internally. 
  // It's better to pass the calculated range.
  updateMarkersForPeriodWithRange: function(period, startYear, endYear) {
      if (!this.data.mapCtx) { /* ... get mapCtx ... */ }
      console.log(`开始更新 ${period} 时期的标记点 (使用 MapContext API and Range: [${startYear ?? '-Inf'}, ${endYear ?? '+Inf'}))`);
      
      // --- 2. Filter using the provided range --- 
      const filteredRawData = this.data.allHistoryData
        .filter(item => {
          const year = item.startYear; 
          const sYear = typeof startYear === 'number' ? startYear : -Infinity;
          const eYear = typeof endYear === 'number' ? endYear : Infinity;
          // 只按时间段筛选
          return year !== undefined && year >= sYear && year < eYear;
        });
      console.log(`[DEBUG] 时期 '${period}' 筛选后 (${filteredRawData.length} 条) 待排序数据:`, JSON.parse(JSON.stringify(filteredRawData.map(i => ({id: i.originalId, year: i.startYear, title: i.title})))));

      // --- 按 startYear 排序 --- 
      filteredRawData.sort((a, b) => {
          const yearA = a.startYear === undefined ? Infinity : a.startYear;
          const yearB = b.startYear === undefined ? Infinity : b.startYear;
          // 主要按年份排序，如果年份相同，可以按 ID 辅助排序（可选）
          if (yearA !== yearB) {
              return yearA - yearB;
          } else {
              return a.originalId - b.originalId; // Ensure stable sort for same year
          }
      });
      // --- Log: Sorted Data Before Map ---
      console.log(`[DEBUG] 时期 '${period}' 排序后数据:`, JSON.parse(JSON.stringify(filteredRawData.map(i => ({id: i.originalId, year: i.startYear, title: i.title})))));

      // --- 新增：调用坐标调整函数 ---
      const adjustedData = adjustOverlappingCoordinates(filteredRawData); 
      console.log(`[DEBUG] 时期 '${period}' 坐标自动调整后数据 (${adjustedData.length} 条):`, JSON.parse(JSON.stringify(adjustedData.map(i => ({id: i.originalId, year: i.startYear, lat: i.latitude, lon: i.longitude, title: i.title})))));
      // --- 结束新增 --- 

      // --- 修改：Map 调整后的数据并使用带前缀的 ID --- 
      let newMarkersData = adjustedData.map((item, index) => {
            let lat = item.latitude;
            let lng = item.longitude;
            if (typeof lat !== 'number' || isNaN(lat)) lat = 0;
            if (typeof lng !== 'number' || isNaN(lng)) lng = 0;
            if (lat < -90) { console.error(`[Marker修正] latitude < -90:`, item); lat = -90; }
            if (lat > 90) { console.error(`[Marker修正] latitude > 90:`, item); lat = 90; }
            if (lng < -180) { console.error(`[Marker修正] longitude < -180:`, item); lng = -180; }
            if (lng > 180) { console.error(`[Marker修正] longitude > 180:`, item); lng = 180; }
            const markerId = item.prefixedId || `${periodPrefix}-${item.originalId}`;
            return {
                 id: markerId,
                 latitude: lat,
                 longitude: lng,
                 width: this.data.width,
                 height: this.data.height,
                 label: m.label,
                 iconPath: m.iconPath || undefined
            };
         }); 
      // --- 结束修改 ---

      // --- 只保留官方字段，确保经纬度为 number ---
      newMarkersData = newMarkersData.map(m => {
        return {
          id: m.id,
          latitude: typeof m.latitude === 'number' ? m.latitude : Number(m.latitude),
          longitude: typeof m.longitude === 'number' ? m.longitude : Number(m.longitude),
          width: m.width,
          height: m.height,
          label: m.label,
          iconPath: m.iconPath || undefined
        };
      });
      // 输出最终 marker 数组详细内容
      console.log('[最终 addMarkers markers]', JSON.stringify(newMarkersData, null, 2));

      // --- 过滤掉所有非法经纬度的 marker ---
      newMarkersData = newMarkersData.filter(marker => marker.latitude >= -90 && marker.latitude <= 90 && marker.longitude >= -180 && marker.longitude <= 180);
      // 输出所有 marker 的经纬度，便于排查
      if (newMarkersData.length > 0) {
        newMarkersData.forEach((m, i) => {
          if (m.latitude < -90 || m.latitude > 90 || m.longitude < -180 || m.longitude > 180) {
            console.error(`[最终过滤后仍有非法经纬度] index=${i}, lat=${m.latitude}, lng=${m.longitude}`);
          }
        });
      }

      // --- Handle potential duplicate IDs (using prefixed IDs) --- 
      const uniqueNewMarkersData = [];
      const uniqueNewPrefixedIds = [];
      const seenIds = new Set();
      newMarkersData.forEach(marker => {
          if (!seenIds.has(marker.id)) {
              uniqueNewMarkersData.push(marker);
              uniqueNewPrefixedIds.push(marker.id);
              seenIds.add(marker.id);
          } else {
              console.warn(`[DEBUG][Duplicate PrefixedID] 时期 '${period}' 内发现重复的前缀ID ${marker.id} (来自事件: '${marker.title}')，只添加第一个。`);
          }
      });

      console.log(`新时期 (${period}) 应包含的唯一前缀ID:`, uniqueNewPrefixedIds);
      console.log(`[DEBUG] 时期 '${period}' 最终准备 addMarkers 的数据 (${uniqueNewMarkersData.length} 条):`, JSON.parse(JSON.stringify(uniqueNewMarkersData))); 

      // --- (Rest of the logic: diffing, add/remove) --- 
      const oldMarkerIds = this.data.currentNumericMarkerIds;
      const idsToRemove = oldMarkerIds;
      const markersToAdd = uniqueNewMarkersData;
      
      console.log('需要移除的旧ID:', idsToRemove); 
      console.log('需要添加的新Marker对象 (传递给 addMarkers):', markersToAdd);
      
      const mapCtx = this.data.mapCtx;
      
      // 移除所有旧标记，避免ID冲突问题
      if (idsToRemove.length > 0) { 
        mapCtx.removeMarkers({ 
          markerIds: idsToRemove, 
          success: () => console.log('成功移除旧标记:', idsToRemove),
          fail: (err) => console.error('移除旧标记失败:', err)
        }); 
      }
      
      // 添加新标记
      if (markersToAdd.length > 0) { 
        // 先使用验证函数对标记点进行验证和修复
        const validatedMarkers = util.validateCoordinates(markersToAdd);
        
        // 再次确保所有标记点的经纬度都在有效范围内
        const finalMarkers = validatedMarkers.map(marker => {
          // 确保经度在[-180, 180]范围内
          if (marker.longitude < -180 || marker.longitude > 180) {
            console.warn(`[经度修正] marker ID:${marker.id} 经度值 ${marker.longitude} 超出范围，进行修正`);
            let fixedLng = marker.longitude;
            while (fixedLng > 180) fixedLng -= 360;
            while (fixedLng < -180) fixedLng += 360;
            marker.longitude = fixedLng;
          }
          
          // 确保纬度在[-90, 90]范围内
          if (marker.latitude < -90 || marker.latitude > 90) {
            console.warn(`[纬度修正] marker ID:${marker.id} 纬度值 ${marker.latitude} 超出范围，进行修正`);
            marker.latitude = Math.max(-90, Math.min(90, marker.latitude));
          }
          
          return marker;
        });
        
        setTimeout(() => { 
          mapCtx.addMarkers({ 
            markers: finalMarkers, 
            clear: false, 
            success: () => console.log('成功添加新标记:', finalMarkers.map(m => m.id)),
            fail: (err) => console.error('添加新标记失败:', err)
          }); 
        }, 50); 
      }
      
      // 更新状态
      this.setData({ 
        currentNumericMarkerIds: uniqueNewPrefixedIds 
      });
      console.log(`更新 currentNumericMarkerIds 为:`, uniqueNewPrefixedIds);
  },

  // --- 修改：控制世界历史面板的函数 ---
  onToggleWorldHistoryPanel: function() {
    const newState = !this.data.showWorldHistoryPanel;
    this.setData({
      showWorldHistoryPanel: newState,
      // 如果打开世界历史面板时，已选中的世界事件详情浮层也应关闭
      selectedWorldEventDetail: newState ? null : this.data.selectedWorldEventDetail,
      worldEventOnMainTimelinePosition: newState ? null : this.data.worldEventOnMainTimelinePosition,
      worldEventOnSubTimelinePosition: newState ? null : this.data.worldEventOnSubTimelinePosition,
      // 新增：如果打开世界历史面板，关闭中国历史面板
      showChineseHistoryPanel: false
    });
    if (newState) {
      this.loadWorldHistoryForCurrentPeriod();
    }
  },

  // --- 修改：关闭世界历史面板，增加清除世界事件详情浮层 ---
  onCloseWorldHistoryPanel: function() {
    this.setData({
      showWorldHistoryPanel: false,
      // 关闭世界历史面板时，也关闭可能已打开的世界事件详情
      selectedWorldEventDetail: null, 
      worldEventOnMainTimelinePosition: null,
      worldEventOnSubTimelinePosition: null
    });
  },

  loadWorldHistoryForCurrentPeriod: function() {
    const selectedPeriod = this.data.selectedPeriod;
    console.log(`[PanelLoad] 请求加载 '${selectedPeriod}' 时期的世界历史事件面板...`);
    
    // --- 核心修改：调用核心函数来刷新/确保数据是最新的 ---
    this._refreshActiveWorldEvents(selectedPeriod);
    // --- 结束核心修改 ---
    
    console.log(`[PanelLoad] 使用 _refreshActiveWorldEvents 刷新/加载数据，面板将显示 ${this.data.currentWorldHistoryEvents.length} 个事件。`);
  },

  // --- 新增：核心函数，准备当前时期用于地图和面板的世界事件 ---
  _refreshActiveWorldEvents: function(periodName) {
    const selectedPeriod = periodName;
    if (!this.data.allWorldHistoryData || this.data.allWorldHistoryData.length === 0) {
      this.setData({ currentWorldHistoryEvents: [] });
      console.warn('[WorldEventsRefresh] allWorldHistoryData为空，无法加载事件。');
      return;
    }

    let periodStartYear = null;
    let periodEndYear = null;
    const { dynastyStartYearsMap, timelineEndYear } = this.data;

    if (selectedPeriod === '早期文明与起源') {
      const xiaStartYear = dynastyStartYearsMap['夏'];
      if (xiaStartYear === undefined) {
        console.error('[WorldEventsRefresh] 夏朝起始年份未定义，无法筛选早期世界史');
        this.setData({ currentWorldHistoryEvents: [] });
        return;
      }
      periodStartYear = -2000000; // 修改为-200万年，确保包含元谋人
      periodEndYear = xiaStartYear -1; 
    } else {
      periodStartYear = dynastyStartYearsMap[selectedPeriod];
      const periodIndex = comprehensiveTimePeriods.indexOf(selectedPeriod);
      if (periodStartYear === undefined) {
        console.error(`[WorldEventsRefresh] 无法找到时期 '${selectedPeriod}' 的起始年份`);
        this.setData({ currentWorldHistoryEvents: [] });
        return;
      }
      if (periodIndex < comprehensiveTimePeriods.length - 1) {
        const nextPeriod = comprehensiveTimePeriods[periodIndex + 1];
        periodEndYear = dynastyStartYearsMap[nextPeriod] ? dynastyStartYearsMap[nextPeriod] - 1 : (timelineEndYear || new Date().getFullYear());
      } else {
        periodEndYear = timelineEndYear || new Date().getFullYear();
      }
    }

    if (periodStartYear === null || periodEndYear === null || periodStartYear > periodEndYear) {
      console.error(`[WorldEventsRefresh] 时期 '${selectedPeriod}' 的起止年份无效: ${periodStartYear} - ${periodEndYear}`);
      this.setData({ currentWorldHistoryEvents: [] });
      return;
    }
    console.log(`[WorldEventsRefresh] 筛选 '${selectedPeriod}' 同期世界史，中国时期年份范围: ${periodStartYear} - ${periodEndYear}`);

    // 特殊处理：如果是早期文明与起源时期，获取所有早于夏朝的世界事件
    let filteredEventsByDate;
    if (selectedPeriod === '早期文明与起源') {
      filteredEventsByDate = this.data.allWorldHistoryData.filter(event => {
        return event.startYear !== undefined && event.startYear < dynastyStartYearsMap['夏'];
      });
    } else {
      filteredEventsByDate = this.data.allWorldHistoryData.filter(event => {
        // 确保事件有有效的年份
        if (event.startYear === undefined || event.endYear === undefined) {
          return false;
        }
        
        const eventStartsBeforeOrDuringPeriod = event.startYear <= periodEndYear;
        const eventEndsDuringOrAfterPeriod = event.endYear >= periodStartYear;
        return eventStartsBeforeOrDuringPeriod && eventEndsDuringOrAfterPeriod;
      });
    }

    const filteredEventsWithGeo = filteredEventsByDate.filter(event => 
      event.latitude !== undefined && event.longitude !== undefined &&
      !isNaN(parseFloat(event.latitude)) && !isNaN(parseFloat(event.longitude))
    );
    
    const sortedEventsWithGeo = [...filteredEventsWithGeo].sort((a, b) => {
        if (a.startYear !== b.startYear) {
            return a.startYear - b.startYear;
        }
        return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
    });

    const finalProcessedEvents = sortedEventsWithGeo.map((event, index) => ({
      ...event,
      startYearDisplay: formatYear(event.startYear),
      endYearDisplay: event.startYear === event.endYear ? '' : formatYear(event.endYear),
      mapLabel: index + 1 
    }));

    this.setData({
      currentWorldHistoryEvents: finalProcessedEvents
    });
    console.log(`[WorldEventsRefresh] 为时期 '${selectedPeriod}', 准备了 ${finalProcessedEvents.length} 个世界事件 (带地理坐标，已排序和编号)。`);
    if (finalProcessedEvents.length > 0) {
        console.log(`[WorldEventsRefresh] 第一个事件: ${finalProcessedEvents[0].title} (序号 ${finalProcessedEvents[0].mapLabel}), 最后一个: ${finalProcessedEvents[finalProcessedEvents.length-1].title} (序号 ${finalProcessedEvents[finalProcessedEvents.length-1].mapLabel})`);
    }
    
    // --- 新增：在加载世界事件数据后立即更新地图标记 ---
    if (finalProcessedEvents.length > 0) {
      console.log(`[WorldEventsRefresh] 检测到有世界事件数据，更新地图标记...`);
      this.updateMarkersForPeriod(selectedPeriod);
    }
    // --- 结束新增 ---
  },

  // --- 修改：世界历史事件点击处理 (改为显示浮层并计算时间轴位置) ---
  onWorldEventTap: function(e) {
    const eventId = e.currentTarget.dataset.id;
    if (!eventId) {
      console.error("无法获取世界历史事件 ID");
      return;
    }
    
    // 记录点击时间，用于防止事件冒泡导致的onMapTap误触发
    this.lastMarkerTapTime = Date.now();
    
    // 清除标记点恢复定时器
    if (this.markerRestoreTimer) {
      clearTimeout(this.markerRestoreTimer);
      this.markerRestoreTimer = null;
    }
    
    console.log('点击的世界历史事件 ID:', eventId);
    // 先在当前显示的世界事件列表中找，因为这里已经有 mapLabel
    const eventFromList = this.data.currentWorldHistoryEvents.find(item => item.id === eventId);
    const selectedEvent = eventFromList || this.data.allWorldHistoryData.find(item => item.id === eventId);
    
    if (!selectedEvent) {
      console.error("未找到对应的世界历史事件数据: ", eventId);
      this.setData({
        selectedWorldEventDetail: null,
        worldEventOnMainTimelinePosition: null,
        worldEventOnSubTimelinePosition: null,
        worldEventOnSubTimelineDurationWidth: null,
        worldPopupIsSecondary: false,
        chineseCalloutIsSecondary: false
      });
      this._checkAndUpdateSubTimelineOverlap();
      return;
    }
    
    const eventDetail = {
      ...selectedEvent,
      startYearDisplay: formatYear(selectedEvent.startYear),
      endYearDisplay: selectedEvent.startYear === selectedEvent.endYear ? '' : formatYear(selectedEvent.endYear),
      mapLabel: selectedEvent.mapLabel // 保留 mapLabel 属性
    };
    
    const isChineseCalloutVisible = !!this.data.selectedMarkerInfo;
    this.setData({
      selectedWorldEventDetail: eventDetail,
      showWorldHistoryPanel: false,
      worldPopupIsSecondary: false,
      chineseCalloutIsSecondary: isChineseCalloutVisible,
      skipViewAdjust: true // 设置跳过视图调整标志，避免重复调整视野
    });
    this.calculateWorldEventTimelinePositions(selectedEvent);
    this._checkAndUpdateSubTimelineOverlap();
    
    // 保留moveToEventLocation调用，因为这是从面板点击的事件
    const worldIndex = this.data.currentWorldHistoryEvents.findIndex(item => item.id === selectedEvent.id);
    if (worldIndex !== -1 && selectedEvent.latitude && selectedEvent.longitude) {
      this.moveToEventLocation(selectedEvent.latitude, selectedEvent.longitude);
    }
  },

  // --- 新增：关闭世界事件详情浮层的函数 --- 
  onCloseWorldEventDetailPopup: function() {
    this.setData({
      selectedWorldEventDetail: null,
      worldEventOnMainTimelinePosition: null,
      worldEventOnSubTimelinePosition: null,
      worldEventOnSubTimelineDurationWidth: null,
      worldPopupIsSecondary: false,
      chineseCalloutIsSecondary: false 
    });
    this._checkAndUpdateSubTimelineOverlap(); // 新增：检查重叠
  },
  
  // --- 新增：计算世界事件在时间轴上位置的辅助函数 ---
  calculateWorldEventTimelinePositions: function(worldEvent) {
    if (!worldEvent || worldEvent.startYear === undefined) {
      this.setData({
        worldEventOnMainTimelinePosition: null,
        worldEventOnSubTimelinePosition: null,
        worldEventOnSubTimelineDurationWidth: null
      });
      return;
    }

    const eventStartYear = worldEvent.startYear;
    const eventEndYear = worldEvent.endYear !== undefined ? worldEvent.endYear : eventStartYear;

    let mainTimelinePos = null;
    let subTimelinePos = null;
    let subTimelineWidth = null;

    // 1. 计算在主时间轴上的位置
    const mainTimelineStart = TIMELINE_DISPLAY_START;
    const mainTimelineEnd = TIMELINE_DISPLAY_END;

    if (mainTimelineStart !== null && mainTimelineEnd !== null) {
      const overallTimelineSpan = mainTimelineEnd - mainTimelineStart;
      if (overallTimelineSpan > 0) {
        // 对于早于TIMELINE_DISPLAY_START的年份，强制调整为TIMELINE_DISPLAY_START
        const normalizedEventStartYear = Math.max(eventStartYear, mainTimelineStart);
        mainTimelinePos = ((normalizedEventStartYear - mainTimelineStart) / overallTimelineSpan) * 100;
        mainTimelinePos = Math.max(0, Math.min(100, mainTimelinePos));
      } else {
        mainTimelinePos = eventStartYear === mainTimelineStart ? 0 : (eventStartYear < mainTimelineStart ? 0 : 100);
      }
    }

    // 2. 计算在子时间轴上的位置和宽度 (如果子时间轴显示)
    const { showSubTimeline, subTimelineStartYear, subTimelineEndYear, subTimelineDuration } = this.data;
    if (showSubTimeline && subTimelineStartYear !== null && subTimelineEndYear !== null && subTimelineDuration > 0) {
      // 对于早于TIMELINE_DISPLAY_START的年份，强制调整为TIMELINE_DISPLAY_START
      const normalizedEventStartYear = Math.max(eventStartYear, TIMELINE_DISPLAY_START);
      const normalizedEventEndYear = Math.max(eventEndYear, TIMELINE_DISPLAY_START);
      
      if (normalizedEventStartYear <= subTimelineEndYear && normalizedEventEndYear >= subTimelineStartYear) { // 事件与子时间轴有交集
        const effectiveEventStart = Math.max(normalizedEventStartYear, subTimelineStartYear);
        const effectiveEventEnd = Math.min(normalizedEventEndYear, subTimelineEndYear);

        subTimelinePos = ((effectiveEventStart - subTimelineStartYear) / subTimelineDuration) * 100;
        subTimelineWidth = Math.max(0, ((effectiveEventEnd - effectiveEventStart) / subTimelineDuration) * 100);
        
        // 确保在0-100范围内
        subTimelinePos = Math.max(0, Math.min(100, subTimelinePos));
        subTimelineWidth = Math.max(0, Math.min(100 - subTimelinePos, subTimelineWidth));

      } else {
        // 事件完全在子时间轴范围之外
        subTimelinePos = null;
        subTimelineWidth = null;
      }
    }

    this.setData({
      worldEventOnMainTimelinePosition: mainTimelinePos,
      worldEventOnSubTimelinePosition: subTimelinePos,
      worldEventOnSubTimelineDurationWidth: subTimelineWidth
    });

    console.log(`计算得到的世界事件时间轴位置: Main=${mainTimelinePos !== null ? mainTimelinePos.toFixed(2) + '%' : 'null'}, Sub=${subTimelinePos !== null ? subTimelinePos.toFixed(2) + '%' : 'null'}, SubWidth=${subTimelineWidth !== null ? subTimelineWidth.toFixed(2) + '%' : 'null'} (事件: ${worldEvent.title})`);
  },

  // --- 新增：获取时期结束年份的辅助函数 ---
  getPeriodEndYear: function(periodName, periodStartYear) {
    const periodIndex = this.data.timePeriods.indexOf(periodName); // 使用 this.data.timePeriods
    if (periodIndex === -1) {
        console.error(`[getPeriodEndYear] 未知的时期名称: ${periodName}`);
        return this.data.timelineEndYear; // 返回一个默认值或总的时间轴结束点
    }

    if (periodIndex < this.data.timePeriods.length - 1) {
        const nextPeriod = this.data.timePeriods[periodIndex + 1];
        const nextPeriodStartYear = this.data.dynastyStartYearsMap[nextPeriod];
        if (nextPeriodStartYear !== undefined) {
            return nextPeriodStartYear -1; // 当前时期在本年结束，下个时期从下一年开始
        } else {
            // 如果下一个时期的开始年份未定义（例如，如果它是最后一个"自定义"时期），
            // 则可以将当前时期的结束年份视为总时间轴的结束
            console.warn(`[getPeriodEndYear] 下一个时期 '${nextPeriod}' 的起始年份未定义。时期 '${periodName}' 的结束年份将默认为总时间轴的结束。`);
            return this.data.timelineEndYear;
        }
    } else {
        // 这是列表中的最后一个时期
        return this.data.timelineEndYear; // 最后一个时期的结束年份就是总时间轴的结束
    }
  },

  // --- 新增：疆域边界相关函数 ---
  // (占位函数：实际加载和解析 GeoJSON)
  async fetchAndParseDynastyBorder(periodName) {
    console.log(`[Borders] 尝试从内存加载时期 "${periodName}" 的疆域数据`);
    try {
      const periodKey = periodName;
      if (borderData[periodKey]) {
        // 直接返回早期文明与起源的数据，不做额外处理
        if (periodKey === '早期文明与起源') {
          console.log(`[Borders] 直接使用"${periodKey}"的原始数据`);
          return borderData[periodKey]; // 直接返回Feature数组
        }
        
        // 三国特殊处理
        if (Array.isArray(borderData[periodKey]) && borderData[periodKey].length && borderData[periodKey][0].geojson) {
          console.log(`[Borders] 检测到"${periodKey}"是多政权数组数据格式`);
          return borderData[periodKey]; // 直接返回原始数组
        }
        
        // 其他普通GeoJSON数据
        console.log(`[Borders] 使用"${periodKey}"的标准GeoJSON数据`);
        return borderData[periodKey];
      } else {
        console.warn(`[Borders] 未找到时期 "${periodKey}" 的疆域数据模块。`);
        return null;
      }
    } catch (error) {
      console.error(`[Borders] 加载 ${periodName} 疆域数据时出错:`, error);
      throw error;
    }
  },

  // (占位函数：将 GeoJSON 转换为小程序 Polygon 格式)
  parseGeoJsonToPolygons: function(geoJsonData) {
    console.log("[Borders] 开始解析GeoJSON数据", typeof geoJsonData);
    
    // 检查参数是否有效
    if (!geoJsonData) {
      console.error("[Borders] GeoJSON数据为空");
      return [];
    }
    
    // 三国特殊处理：传入的是政权数组
    if (Array.isArray(geoJsonData) && geoJsonData.length && geoJsonData[0].geojson) {
      console.log("[Borders] 检测到三国多政权数据，使用不同颜色");
      const polygons = [];
      
      geoJsonData.forEach((item) => {
        const feature = item.geojson;
        const name = item.title || '';
        let color = { stroke: '#4CAF50', fill: '#4CAF501A' }; // 默认绿色
        
        // 根据政权名称指定不同颜色
        if (name.includes('蜀')) {
          color = { stroke: '#4CAF50', fill: '#4CAF501A' }; // 蜀汉-绿色
        } else if (name.includes('魏')) {
          color = { stroke: '#2196F3', fill: '#2196F31A' }; // 曹魏-蓝色
        } else if (name.includes('吴')) {
          color = { stroke: '#FF9800', fill: '#FF98001A' }; // 东吴-橙色
        }
        
        console.log(`[Borders] 处理${name}疆域，使用颜色: ${color.stroke}`);
        
        if (feature && feature.geometry && (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon')) {
          this._processGeometry(feature.geometry, polygons, 0, color);
        }
      });
      
      console.log(`[Borders] 三国疆域解析完成，生成了 ${polygons.length} 个多边形`);
      return polygons;
    }
    
    // 处理早期文明与起源的数据 - 格式为Feature数组
    if (Array.isArray(geoJsonData) && geoJsonData.length && geoJsonData[0].type === 'Feature') {
      console.log("[Borders] 检测到Feature数组格式数据（早期文明与起源）");
      const polygons = [];
      
      geoJsonData.forEach((feature, index) => {
        // 根据NAME属性判断是炎帝还是黄帝部落，设置不同颜色
        const name = feature.properties?.NAME || '';
        let color = { 
          stroke: '#4CAF50', 
          fill: '#4CAF501A' 
        };
        
        if (name.includes('炎帝')) {
          color = { stroke: '#FF5722', fill: '#FF57221A' }; // 炎帝-红橙色
          console.log(`[Borders] 处理炎帝部落区域，使用红橙色`);
        } else if (name.includes('黄帝')) {
          color = { stroke: '#FFC107', fill: '#FFC1071A' }; // 黄帝-黄色
          console.log(`[Borders] 处理黄帝部落区域，使用黄色`);
        } else {
          console.log(`[Borders] 处理早期文明区域: ${name}, 使用默认绿色`);
        }
        
        // 安全检查：确保feature和geometry都存在
        if (feature && feature.geometry && 
           (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon')) {
          this._processGeometry(feature.geometry, polygons, index, color);
        } else {
          console.warn(`[Borders] 早期文明区域 ${index} 缺少有效的geometry`);
        }
      });
      
      console.log(`[Borders] 早期文明区域解析完成，生成了 ${polygons.length} 个多边形`);
      return polygons;
    }
    
    // 其他普通GeoJSON数据的处理
    const polygons = [];
    
    // 处理不同类型的GeoJSON数据
    if (geoJsonData.type === 'FeatureCollection' && Array.isArray(geoJsonData.features)) {
      // 处理FeatureCollection
      console.log("[Borders] 处理FeatureCollection类型数据");
      geoJsonData.features.forEach((feature, index) => {
        if (feature && feature.geometry) {
          this._processGeometry(feature.geometry, polygons, index);
        }
      });
    } else if (geoJsonData.type === 'Feature' && geoJsonData.geometry) {
      // 处理单个Feature
      console.log("[Borders] 处理单个Feature类型数据");
      this._processGeometry(geoJsonData.geometry, polygons, 0);
    } else if (geoJsonData.type === 'Polygon' || geoJsonData.type === 'MultiPolygon') {
      // 直接处理几何对象
      console.log(`[Borders] 直接处理${geoJsonData.type}类型数据`);
      this._processGeometry(geoJsonData, polygons, 0);
    } else {
      console.error(`[Borders] 不支持的GeoJSON类型或无效数据:`, geoJsonData);
    }
    
    console.log(`[Borders] 解析完成，生成了 ${polygons.length} 个多边形`);
    return polygons;
  },
  
  // 辅助方法：处理几何对象
  _processGeometry: function(geometry, polygons, featureIndex, customColor) {
    if (!geometry || !geometry.type || !geometry.coordinates) {
      console.error("[Borders] 几何对象缺少类型或坐标", geometry);
      return;
    }
    
    // 默认颜色配置
    const colors = [
      { stroke: '#4CAF50', fill: '#4CAF501A' }, // 绿色
      { stroke: '#2196F3', fill: '#2196F31A' }, // 蓝色
      { stroke: '#FF9800', fill: '#FF98001A' }  // 橙色
    ];
    
    // 如果传入自定义颜色就使用自定义颜色，否则根据索引分配颜色
    const colorIndex = featureIndex % colors.length;
    const color = customColor || colors[colorIndex];
    
    // 坐标处理辅助函数
    const normalizeCoordinate = coord => {
      if (!Array.isArray(coord) || coord.length < 2) {
        console.warn("[Borders] 无效坐标:", coord);
        return [0, 0];
      }
      // 确保坐标在合法范围内
      let lng = parseFloat(coord[0]);
      let lat = parseFloat(coord[1]);
      
      // 处理无效值
      if (isNaN(lng) || isNaN(lat)) {
        console.warn("[Borders] 坐标含有NaN:", coord);
        return [0, 0];
      }
      
      // 规范化经度到[-180, 180]
      while (lng > 180) lng -= 360;
      while (lng < -180) lng += 360;
      
      // 规范化纬度到[-90, 90]
      lat = Math.max(-90, Math.min(90, lat));
      
      // 返回微信小程序地图要求的point格式
      return {
        longitude: lng,
        latitude: lat
      };
    };
    
    // 检查points数组是否有效
    const validatePoints = points => {
      return Array.isArray(points) && points.length >= 3;
    };
    
    // 处理多边形
    if (geometry.type === 'Polygon') {
      console.log(`[Borders] 处理Polygon，坐标环数量: ${geometry.coordinates.length}`);
      // 遍历所有坐标环（第一个是外环，其余是内环）
      if (Array.isArray(geometry.coordinates) && geometry.coordinates.length > 0) {
        const outerRing = geometry.coordinates[0];  // 取第一个环作为外环
        if (Array.isArray(outerRing) && outerRing.length >= 3) {
          // 将坐标转换为正确的格式
          const points = outerRing.map(normalizeCoordinate);
          
          if (validatePoints(points)) {
            // 添加到多边形数组
            polygons.push({
              points: points,
              strokeWidth: 2,
              strokeColor: color.stroke,
              fillColor: color.fill,
            });
          } else {
            console.warn("[Borders] 多边形点数不足，无法创建有效多边形");
          }
        } else {
          console.warn("[Borders] 无效的外环坐标:", outerRing);
        }
      } else {
        console.warn("[Borders] 无效的Polygon坐标:", geometry.coordinates);
      }
    }
    // 处理多重多边形
    else if (geometry.type === 'MultiPolygon') {
      console.log(`[Borders] 处理MultiPolygon，多边形数量: ${geometry.coordinates.length}`);
      // 遍历所有多边形
      if (Array.isArray(geometry.coordinates)) {
        geometry.coordinates.forEach((polygon, polygonIndex) => {
          if (Array.isArray(polygon) && polygon.length > 0) {
            const outerRing = polygon[0];  // 取第一个环作为外环
            if (Array.isArray(outerRing) && outerRing.length >= 3) {
              // 将坐标转换为正确的格式
              const points = outerRing.map(normalizeCoordinate);
              
              if (validatePoints(points)) {
                // 添加到多边形数组
                polygons.push({
                  points: points,
                  strokeWidth: 2,
                  strokeColor: color.stroke,
                  fillColor: color.fill,
                });
              } else {
                console.warn(`[Borders] 多边形[${polygonIndex}]点数不足，无法创建有效多边形`);
              }
            } else {
              console.warn(`[Borders] 无效的外环坐标 [${polygonIndex}]:`, outerRing);
            }
          } else {
            console.warn(`[Borders] 无效的多边形 ${polygonIndex}:`, polygon);
          }
        });
      } else {
        console.warn("[Borders] 无效的MultiPolygon坐标:", geometry.coordinates);
      }
    } else {
      console.warn(`[Borders] 不支持的几何类型: ${geometry.type}`);
    }
  },
  
  // --- 新增：子时间轴更新函数 ---
  updateSubTimeline: function(period) {
    console.log(`更新子时间轴：${period}`);
    if (period === '早期文明与起源') {
      // 早期文明时期不显示子时间轴
      this.setData({
        showSubTimeline: false,
        subTimelineStartLabel: '',
        subTimelineEndLabel: '',
        subTimelineStartYear: null,
        subTimelineEndYear: null,
        subTimelineDuration: 0
      });
      return;
    }

    const periodStartYear = this.data.dynastyStartYearsMap[period];
    if (periodStartYear === undefined) {
      console.error(`无法找到时期 '${period}' 的起始年份`);
      this.setData({ showSubTimeline: false });
      return;
    }

    // 计算当前时期的结束年份
    const periodIndex = comprehensiveTimePeriods.indexOf(period);
    let periodEndYear;
    if (periodIndex < comprehensiveTimePeriods.length - 1) {
      const nextPeriod = comprehensiveTimePeriods[periodIndex + 1];
      periodEndYear = this.data.dynastyStartYearsMap[nextPeriod] - 1;
    } else {
      // 最后一个时期，使用当前年份作为结束年份
      periodEndYear = new Date().getFullYear();
    }

    if (periodEndYear === undefined) {
      console.error(`无法计算时期 '${period}' 的结束年份`);
      this.setData({ showSubTimeline: false });
      return;
    }

    const duration = periodEndYear - periodStartYear + 1;
    this.setData({
      showSubTimeline: true,
      subTimelineStartLabel: formatYear(periodStartYear),
      subTimelineEndLabel: formatYear(periodEndYear),
      subTimelineStartYear: periodStartYear,
      subTimelineEndYear: periodEndYear,
      subTimelineDuration: duration
    });

    console.log(`子时间轴范围设置为: ${periodStartYear} 到 ${periodEndYear} (持续 ${duration} 年)`);
  },
  
  // 新增：控制中国历史面板的函数
  onToggleChineseHistoryPanel: function() {
    const newState = !this.data.showChineseHistoryPanel;
    this.setData({
      showChineseHistoryPanel: newState,
      // 如果打开中国历史面板，关闭世界历史面板
      showWorldHistoryPanel: false
    });
    if (newState) {
      this.loadChineseHistoryForCurrentPeriod();
    }
  },
  
  // 关闭中国历史面板
  onCloseChineseHistoryPanel: function() {
    this.setData({
      showChineseHistoryPanel: false
    });
  },
  
  // 加载当前朝代的中国历史事件
  loadChineseHistoryForCurrentPeriod: function() {
    const selectedPeriod = this.data.selectedPeriod;
    
    // 使用currentPeriodDisplayableEvents作为数据源
    let events = this.currentPeriodDisplayableEvents || [];
    
    if (!events || events.length === 0) {
      this.setData({ currentChineseHistoryEvents: [] });
      console.warn('[ChineseHistory] 当前时期没有可显示的事件数据。');
      return;
    }
    
    // 先对事件进行排序（保持与地图标记点相同的排序）
    const sortedEvents = [...events];
    
    // 使用事件上已有的mapLabel或设置新的mapLabel
    const processedEvents = sortedEvents.map((event, index) => {
      // 如果事件已有mapLabel（由_continueUpdateMarkers设置），则使用它
      // 否则使用索引+1作为默认值
      const mapLabel = event.mapLabel || (index + 1);
      
      return {
        ...event,
        startYearDisplay: formatYear(event.startYear),
        endYearDisplay: (event.endYear && event.endYear !== event.startYear) ? formatYear(event.endYear) : '',
        mapLabel: mapLabel
      };
    });
    
    console.log(`[ChineseHistory] 当前时期 '${selectedPeriod}' 中国历史事件:`, processedEvents);
    this.setData({
      currentChineseHistoryEvents: processedEvents
    });
  },
  
  // 处理中国历史事件点击
  onChineseEventTap: function(e) {
    const eventId = e.currentTarget.dataset.id;
    if (!eventId) {
      console.error("无法获取中国历史事件ID");
      return;
    }
    
    this.lastMarkerTapTime = Date.now();
    
    // 清除标记点恢复定时器
    if (this.markerRestoreTimer) {
      clearTimeout(this.markerRestoreTimer);
      this.markerRestoreTimer = null;
    }
    
    console.log('点击的中国历史事件ID:', eventId);
    const selectedEvent = this.data.currentChineseHistoryEvents.find(item => item.id === eventId);
    if (!selectedEvent) {
      console.error("未找到对应的中国历史事件数据:", eventId);
      return;
    }

    const markerIndex = this.currentPeriodDisplayableEvents.findIndex(item => item.id === selectedEvent.id);
    if (markerIndex !== -1) {
      this.setData({
        showChineseHistoryPanel: false, 
        selectedMarkerInfo: {
          ...selectedEvent,
          title: selectedEvent.title,
          details: selectedEvent.details || selectedEvent.description || '暂无详情',
          startYearDisplay: selectedEvent.startYearDisplay,
          endYearDisplay: selectedEvent.endYearDisplay,
          mapLabel: selectedEvent.mapLabel 
        },
        chineseCalloutIsSecondary: false,
        worldPopupIsSecondary: !!this.data.selectedWorldEventDetail
      });

      // 从面板点击事件时，保留原有行为，包括moveToEventLocation调用
      this.moveToEventLocation(selectedEvent.latitude, selectedEvent.longitude);
      
      this.calculateAndSetSubTimelineIndicator(selectedEvent.startYear, selectedEvent.endYear);
      this._checkAndUpdateSubTimelineOverlap();
    }
  },

  // 新增：关闭中国史弹窗的函数
  onCloseChineseCallout: function() {
    this.setData({
      selectedMarkerInfo: null,
      selectedEventStartYearPosition: null,
      selectedEventDurationWidth: null,
      chineseCalloutIsSecondary: false
    });
    this._checkAndUpdateSubTimelineOverlap();
  },

  // 新增：点击自定义浮窗时的处理函数
  onCalloutTap: function(e) {
    console.log('点击了信息浮窗', e);
    const eventType = e.currentTarget.dataset.type; // 'china' 或 'world'
    const latitude = Number(e.currentTarget.dataset.lat);
    const longitude = Number(e.currentTarget.dataset.lng);
    
    // 验证坐标有效性
    if (isNaN(latitude) || isNaN(longitude) || 
        latitude < -90 || latitude > 90 || 
        longitude < -180 || longitude > 180) {
      console.error(`浮窗点击 - 无效的地理坐标: type=${eventType}, lat=${latitude}, lng=${longitude}`);
      return;
    }
    
    // 使用移动地图函数定位到图钉位置
    this.moveToEventLocation(latitude, longitude);
  },

  // 新增：单点安全定位函数
  moveToEventLocation: function(latitude, longitude) {
    if (!this.mapCtx) return;
    
    // 验证经纬度有效性
    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);
    
    if (isNaN(latitude) || isNaN(longitude) || 
        latitude < -90 || latitude > 90 || 
        longitude < -180 || longitude > 180) {
      console.error(`无效的地理坐标: lat=${latitude}, lng=${longitude}`);
      return;
    }
    
    console.log(`移动到坐标: lat=${latitude}, lng=${longitude}`);
    
    // 清除上一次的定时器，避免样式冲突
    if (this.markerRestoreTimer) {
      clearTimeout(this.markerRestoreTimer);
      this.markerRestoreTimer = null;
    }
    
    // 从 currentPeriodDisplayableEvents 查找匹配的事件并高亮对应标记
    let foundIndex = -1;
    
    // 遍历当前时期的所有事件
    if (this.currentPeriodDisplayableEvents && this.currentPeriodDisplayableEvents.length > 0) {
      for (let i = 0; i < this.currentPeriodDisplayableEvents.length; i++) {
        const event = this.currentPeriodDisplayableEvents[i];
        // 使用接近比较，因为可能有微小的浮点误差
        if (Math.abs(event.latitude - latitude) < 0.0001 && 
            Math.abs(event.longitude - longitude) < 0.0001) {
          foundIndex = i; // 国内事件的 marker id 就是其在数组中的索引
          break;
        }
      }
    }
    
    // 如果在中国事件中没找到，再检查世界事件
    let isWorldEvent = false;
    if (foundIndex === -1 && this.data.currentWorldHistoryEvents && this.data.currentWorldHistoryEvents.length > 0) {
      for (let i = 0; i < this.data.currentWorldHistoryEvents.length; i++) {
        const event = this.data.currentWorldHistoryEvents[i];
        // 使用接近比较，因为可能有微小的浮点误差
        if (Math.abs(event.latitude - latitude) < 0.0001 && 
            Math.abs(event.longitude - longitude) < 0.0001) {
          foundIndex = i;
          isWorldEvent = true; // 标记为世界事件
          break;
        }
      }
    }
    
    if (foundIndex !== -1) {
      // 计算实际的 markerId（世界事件需要加200）
      const markerId = isWorldEvent ? (200 + foundIndex) : foundIndex;
      console.log(`找到坐标对应的标记点ID: ${markerId}${isWorldEvent ? ' (世界事件)' : ' (中国事件)'}`);
      
      this.setData({
        highlightedMarkerId: markerId,
        onlyShowHighlightedMarker: true // 只显示高亮的标记点
      });
      
      // 重新加载所有标记点，但只显示高亮的标记点
      this.updateMarkersForPeriod(this.data.selectedPeriod);
      
      // 高亮标记点一段时间后恢复
      this.markerRestoreTimer = setTimeout(() => {
        this.setData({
          highlightedMarkerId: null,
          onlyShowHighlightedMarker: false // 恢复显示所有标记点
        }, () => {
          // 重新加载所有标记点
          this.updateMarkersForPeriod(this.data.selectedPeriod);
          console.log('已恢复标记点高亮状态和显示所有标记点');
          this.markerRestoreTimer = null; // 清除定时器引用
        });
      }, 1500); // 1.5秒后恢复
    } else {
      console.log('未找到匹配的标记点，但仍会移动地图到指定位置');
    }
    
    // 直接移动到指定位置，保持当前缩放级别
    this.setData({
      latitude: Number(latitude),
      longitude: Number(longitude)
      // 不设置scale，保持当前缩放级别
    });
    console.log('已移动地图到指定位置，保持当前缩放级别');
  },

  // --- 调整地图视野，显示所有标记点 ---
  adjustMapToIncludeAllMarkers: function(markersInput) { 
    if (this.data.skipViewAdjust) {
      console.log("[adjustMapToIncludeAllMarkers] skipViewAdjust is true, skipping includePoints.");
      return Promise.resolve(); 
    }

    const markers = Array.isArray(markersInput) ? markersInput : this.data.allMarkers; 
    if (!markers || markers.length === 0) {
      console.log("无标记点，不调整地图视野");
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const points = markers.map(marker => {
        // 确保经纬度在有效范围内
        let lat = typeof marker.latitude === 'number' ? marker.latitude : Number(marker.latitude);
        let lng = typeof marker.longitude === 'number' ? marker.longitude : Number(marker.longitude);
        
        lat = Math.max(-90, Math.min(90, lat));
        lng = Math.max(-180, Math.min(180, lng));
        
        return {
          latitude: lat,
          longitude: lng
        };
      });

      if (points.length === 0) {
        console.warn("无有效点，不调整地图视野");
        return resolve();
      }

      // 在调用includePoints前检查所有点的有效性
      const validPoints = points.filter(p => 
        !isNaN(p.latitude) && 
        !isNaN(p.longitude) && 
        p.latitude >= -90 && 
        p.latitude <= 90 && 
        p.longitude >= -180 && 
        p.longitude <= 180
      );

      if (validPoints.length === 0) {
        console.warn("无有效点，不调整地图视野");
        return resolve();
      }

      this.mapCtx.includePoints({
        points: validPoints,
        padding: [80, 80, 80, 80],
        success: res => {
          console.log("成功调整地图视野以显示所有标记点");
          resolve(res);
        },
        fail: err => {
          console.error("调整地图视野失败", err);
          // 不要reject，让流程继续
          resolve();
        }
      });
    });
  },

  onShow: function() {
    // ... existing code ...
    if (this.data.currentPeriod && this.data.currentPeriod !== '早期文明与起源' && this.data.currentPeriod !== 'all') {
      this.updateSubTimeline(this.data.subTimelineStartYear, this.data.subTimelineEndYear);
    } else {
      this.setData({ showSubTimeline: false });
    }

    // 检查是否有待处理的世界事件详情显示
    if (this.pendingWorldEventDetail) {
      this.displayWorldEventDetail(this.pendingWorldEventDetail);
      this.pendingWorldEventDetail = null; // 清除待处理项
    }
  },

  onShareAppMessage: function () {
    // 用户点击右上角分享给朋友
    return {
      title: '救命！历史老师都惊呆了！这款中考历史神器，学渣也能逆袭！',
      path: '/pages/index/index',
      // imageUrl: '/images/map.png' // 移除这一行
    };
  },

  onShareTimeline: function () {
    // 用户点击右上角分享到朋友圈
    return {
      title: '历史提分黑科技，用地图学中考考点，绝了！',
      query: '', // query 参数，例如 'key=value'
      // imageUrl: '/images/map.png' // 移除这一行
    };
  },

  onHide: function() {
    console.log("页面隐藏 onHide");
    // ... existing code ...
  },

  // 搜索相关函数
  // 切换搜索面板显示
  onToggleSearchPanel: function() {
    // 直接显示搜索面板，不再显示底部小搜索框
    this.setData({
      showSearchPanel: true,
      // 如果打开搜索面板，关闭中国历史面板和世界历史面板
      showChineseHistoryPanel: false,
      showWorldHistoryPanel: false,
      // 重置搜索状态
      hasSearched: false,
      // 重置搜索结果
      searchResults: { chinaEvents: [], worldEvents: [] }
    });
  },

  // 关闭搜索面板
  onCloseSearchPanel: function() {
    this.setData({
      showSearchPanel: false,
      // 重置搜索状态
      hasSearched: false,
      // 可选择是否重置搜索关键词和结果
      // searchKeyword: '',
      // searchResults: { chinaEvents: [], worldEvents: [] }
    });
  },

  // 搜索输入框变化事件
  onSearchInputChange: function(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
  },

  // 执行搜索
  onSearchConfirm: function() {
    const keyword = this.data.searchKeyword;
    if (!keyword || keyword.trim() === '') {
      // 如果关键词为空，清空搜索结果
      this.setData({
        searchResults: { chinaEvents: [], worldEvents: [] },
        hasSearched: false // 重置搜索状态
      });
      return;
    }

    // 1. 搜索中国历史事件
    const chinaEvents = this.searchChinaEvents(keyword);
    
    // 2. 搜索世界历史事件
    const worldEvents = this.searchWorldEvents(keyword);

    // 3. 处理高亮
    const processedChinaEvents = chinaEvents.map(event => {
      return {
        ...event,
        title: this.highlightKeyword(event.title, keyword),
        details: this.highlightKeyword(event.details || event.description || '', keyword),
        locationName: this.highlightKeyword(event.locationName || '', keyword)
      };
    });

    const processedWorldEvents = worldEvents.map(event => {
      return {
        ...event,
        title: this.highlightKeyword(event.title, keyword),
        description: this.highlightKeyword(event.description || '', keyword),
        locationName: this.highlightKeyword(event.locationName || '', keyword)
      };
    });

    // 4. 更新搜索结果
    this.setData({
      searchResults: {
        chinaEvents: processedChinaEvents,
        worldEvents: processedWorldEvents
      },
      hasSearched: true // 设置已执行搜索标志
    });

    console.log(`搜索完成，找到 ${chinaEvents.length} 个中国历史事件和 ${worldEvents.length} 个世界历史事件`);
  },

  // 搜索中国历史事件
  searchChinaEvents: function(keyword) {
    // 从全部中国历史数据中搜索
    const allEvents = this.data.allHistoryData;
    
    if (!allEvents || allEvents.length === 0) {
      console.log('没有中国历史数据可供搜索');
      return [];
    }

    const results = [];
    const lowerKeyword = keyword.toLowerCase();

    // 遍历所有事件
    allEvents.forEach(event => {
      // 判断标题、详情、地点名称是否包含关键词
      const titleMatch = event.title && event.title.toLowerCase().includes(lowerKeyword);
      const detailsMatch = (event.details && event.details.toLowerCase().includes(lowerKeyword)) || 
                           (event.description && event.description.toLowerCase().includes(lowerKeyword));
      const locationMatch = event.locationName && event.locationName.toLowerCase().includes(lowerKeyword);

      if (titleMatch || detailsMatch || locationMatch) {
        // 找出该事件所属的时期
        const eventPeriod = this.findEventPeriod(event);
        
        // 添加到结果列表
        results.push({
          ...event,
          period: eventPeriod,
          startYearDisplay: formatYear(event.startYear),
          endYearDisplay: (event.endYear && event.endYear !== event.startYear) ? formatYear(event.endYear) : ''
        });
      }
    });

    // 按时间排序
    results.sort((a, b) => a.startYear - b.startYear);
    
    return results;
  },

  // 搜索世界历史事件
  searchWorldEvents: function(keyword) {
    // 从全部世界历史数据中搜索
    const allEvents = this.data.allWorldHistoryData;
    
    if (!allEvents || allEvents.length === 0) {
      console.log('没有世界历史数据可供搜索');
      return [];
    }

    const results = [];
    const lowerKeyword = keyword.toLowerCase();

    // 遍历所有事件
    allEvents.forEach(event => {
      // 判断标题、详情、地点名称是否包含关键词
      const titleMatch = event.title && event.title.toLowerCase().includes(lowerKeyword);
      const detailsMatch = (event.details && event.details.toLowerCase().includes(lowerKeyword)) || 
                           (event.description && event.description.toLowerCase().includes(lowerKeyword));
      const locationMatch = event.locationName && event.locationName.toLowerCase().includes(lowerKeyword);

      if (titleMatch || detailsMatch || locationMatch) {
        // 添加到结果列表
        results.push({
          ...event,
          startYearDisplay: formatYear(event.startYear),
          endYearDisplay: (event.endYear && event.endYear !== event.startYear) ? formatYear(event.endYear) : ''
        });
      }
    });

    // 按时间排序
    results.sort((a, b) => a.startYear - b.startYear);
    
    return results;
  },

  // 查找事件所属的时期
  findEventPeriod: function(event) {
    if (!event || event.startYear === undefined) {
      return null;
    }

    const startYear = event.startYear;
    
    // 对于极早期事件（早于夏朝），直接归入"早期文明与起源"
    if (startYear < this.data.dynastyStartYearsMap['夏']) {
      return '早期文明与起源';
    }
    
    // 遍历所有时期
    for (let i = 0; i < comprehensiveTimePeriods.length; i++) {
      const periodName = comprehensiveTimePeriods[i];
      const periodStartYear = dynastyStartYearsMap[periodName];
      
      if (periodStartYear === undefined) {
        continue;
      }
      
      // 特殊处理"早期文明与起源"
      if (periodName === '早期文明与起源') {
        const nextPeriodName = comprehensiveTimePeriods[1]; // 夏
        const nextPeriodStartYear = dynastyStartYearsMap[nextPeriodName];
        
        if (startYear < nextPeriodStartYear) {
          return periodName;
        }
        continue;
      }
      
      // 正常处理其他时期
      const nextPeriodIndex = i + 1;
      let periodEndYear;
      
      if (nextPeriodIndex < comprehensiveTimePeriods.length) {
        const nextPeriodName = comprehensiveTimePeriods[nextPeriodIndex];
        periodEndYear = dynastyStartYearsMap[nextPeriodName] - 1;
      } else {
        periodEndYear = TIMELINE_DISPLAY_END;
      }
      
      if (startYear >= periodStartYear && startYear <= periodEndYear) {
        return periodName;
      }
    }
    
    // 如果无法找到匹配的时期，默认使用"早期文明与起源"
    console.log(`未能确定事件（${event.title}, ${startYear}年）所属时期，默认使用"早期文明与起源"`);
    return '早期文明与起源';
  },

  // 搜索结果点击事件
  onSearchResultTap: function(e) {
    const type = e.currentTarget.dataset.type; // 'china' 或 'world'
    const id = e.currentTarget.dataset.id;
    
    if (type === 'china') {
      const period = e.currentTarget.dataset.period;
      // 处理中国历史事件点击
      this.navigateToChineseEvent(id, period);
    } else if (type === 'world') {
      // 处理世界历史事件点击
      this.navigateToWorldEvent(id);
    }

    // 关闭搜索面板
    this.setData({
      showSearchPanel: false
    });
  },

  // 添加广告相关的事件处理函数
  adLoad() {
    console.log('原生模板广告加载成功');
  },
  
  adError(err) {
    console.error('原生模板广告加载失败', err);
  },
  
  adClose() {
    console.log('原生模板广告关闭');
  },

  // 跳转到中国历史事件
  navigateToChineseEvent: function(eventId, periodName) {
    console.log(`跳转到中国历史事件 ID:${eventId}, 时期:${periodName}`);
    
    if (!periodName) {
      console.warn('未指定时期，将使用默认时期"早期文明与起源"');
      periodName = '早期文明与起源'; // 默认使用"早期文明与起源"
    }

    // 1. 先切换到对应时期
    this.onPeriodTap({ currentTarget: { dataset: { period: periodName } } });

    // 2. 等待标记点加载完成后，查找并点击目标事件标记
    setTimeout(() => {
      // 查找是否已在当前显示的事件中
      const foundEventIndex = this.currentPeriodDisplayableEvents.findIndex(event => event.id === eventId);
      
      if (foundEventIndex !== -1) {
        console.log(`找到目标事件，索引为 ${foundEventIndex}`);
        
        // 模拟点击标记点
        this.onMarkerTap({ markerId: foundEventIndex });
        
        // 移动地图到事件位置
        const event = this.currentPeriodDisplayableEvents[foundEventIndex];
        this.moveToEventLocation(event.latitude, event.longitude);
      } else {
        console.error(`未在当前时期找到目标事件，ID:${eventId}`);
        
        // 尝试在所有历史数据中找到该事件
        const event = this.data.allHistoryData.find(e => e.id === eventId);
        if (event && event.latitude && event.longitude) {
          console.log(`在全局数据中找到事件，将显示信息并移动地图`);
          this.displayChineseEventDetail(event);
          this.moveToEventLocation(event.latitude, event.longitude);
        }
      }
    }, 1000); // 延迟1秒等待标记点加载
  },

  // 跳转到世界历史事件
  navigateToWorldEvent: function(eventId) {
    console.log(`跳转到世界历史事件 ID:${eventId}`);
    
    // 1. 在所有世界历史事件中查找目标事件
    const event = this.data.allWorldHistoryData.find(event => event.id === eventId);
    
    if (!event) {
      console.error(`未找到世界历史事件，ID:${eventId}`);
      return;
    }
    
    // 2. 切换到包含该事件的时期
    const eventYear = event.startYear;
    let targetPeriod = null;
    
    // 对于早于夏朝的事件，直接归类到"早期文明与起源"
    if (eventYear < dynastyStartYearsMap['夏']) {
      targetPeriod = '早期文明与起源';
      console.log(`世界事件(${eventYear}年)早于夏朝(${dynastyStartYearsMap['夏']}年)，将使用"早期文明与起源"时期`);
    } else {
      // 查找包含该世界事件年份的中国时期
      for (let i = 0; i < comprehensiveTimePeriods.length; i++) {
        const periodName = comprehensiveTimePeriods[i];
        if (periodName === '早期文明与起源') continue; // 跳过早期文明，已在上面处理
        
        const periodStartYear = dynastyStartYearsMap[periodName];
        if (periodStartYear === undefined) {
          continue;
        }
        
        const nextPeriodIndex = i + 1;
        let periodEndYear;
        
        if (nextPeriodIndex < comprehensiveTimePeriods.length) {
          const nextPeriodName = comprehensiveTimePeriods[nextPeriodIndex];
          periodEndYear = dynastyStartYearsMap[nextPeriodName] - 1;
        } else {
          periodEndYear = TIMELINE_DISPLAY_END;
        }
        
        if (eventYear >= periodStartYear && eventYear <= periodEndYear) {
          targetPeriod = periodName;
          break;
        }
      }
    }
    
    if (!targetPeriod) {
      console.log(`未找到包含世界事件(${eventYear}年)的中国时期，默认使用"早期文明与起源"时期`);
      targetPeriod = '早期文明与起源'; // 默认使用早期文明与起源时期
    }
    
    // 先切换时期
    this.onPeriodTap({ currentTarget: { dataset: { period: targetPeriod } } });
    
    // 等待时期切换完成后，刷新世界事件并显示目标事件
    setTimeout(() => {
      // 确保当前时期的世界事件已加载
      this._refreshActiveWorldEvents(targetPeriod);
      
      // 查找世界事件并显示
      setTimeout(() => {
        const worldEvents = this.data.currentWorldHistoryEvents;
        const foundEventIndex = worldEvents.findIndex(e => e.id === eventId);
        
        if (foundEventIndex !== -1) {
          // 如果在当前时期的世界事件列表中找到了该事件
          const worldMarkerId = 200 + foundEventIndex;
          
          // 模拟点击世界事件标记
          this.onMarkerTap({ markerId: worldMarkerId });
          
          // 移动地图到事件位置
          if (event.latitude && event.longitude) {
            this.moveToEventLocation(event.latitude, event.longitude);
          }
        } else {
          // 如果未在当前时期找到，则直接调用onWorldEventTap
          this.onWorldEventTap({ currentTarget: { dataset: { id: eventId } } });
          
          // 如果有地理坐标，则移动地图
          if (event.latitude && event.longitude) {
            this.moveToEventLocation(event.latitude, event.longitude);
          }
        }
      }, 500);
    }, 1000);
  },

  // 高亮关键字
  highlightKeyword: function(text, keyword) {
    if (!text || !keyword) {
      return text;
    }
    
    // 构建一个安全的正则表达式
    const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 转义正则表达式中的特殊字符
    const regex = new RegExp(safeKeyword, 'gi'); // g-全局匹配, i-忽略大小写
    
    // 使用特殊标记替换关键字，以便在WXML中识别
    // 使用'{%%HIGHLIGHT%%}'和'{%%/HIGHLIGHT%%}'作为标记，避免与正常文本冲突
    return text.replace(regex, '{%%HIGHLIGHT%%}$&{%%/HIGHLIGHT%%}');
  },

  // --- 新增：处理世界事件详情显示，不调整地图视图 ---
  displayWorldEventDetail: function(worldEvent) {
    if (!worldEvent || worldEvent.id === undefined) {
      console.error("无效的世界历史事件数据");
      return;
    }
    
    console.log('显示世界历史事件详情:', worldEvent.title);
    
    // 使用原始年份进行格式化显示
    const originalStartYear = worldEvent.startYear;
    const originalEndYear = worldEvent.endYear || originalStartYear;
    
    const eventDetail = {
      ...worldEvent,
      startYearDisplay: formatYear(originalStartYear), // 使用原始年份
      endYearDisplay: originalStartYear === originalEndYear ? '' : formatYear(originalEndYear), // 使用原始年份
      mapLabel: worldEvent.mapLabel // 保留 mapLabel 属性
    };
    
    const isChineseCalloutVisible = !!this.data.selectedMarkerInfo;
    this.setData({
      selectedWorldEventDetail: eventDetail,
      showWorldHistoryPanel: false,
      worldPopupIsSecondary: false,
      chineseCalloutIsSecondary: isChineseCalloutVisible
    });
    
    // 在计算时间轴位置时使用调整后的年份
    const adjustedEvent = {
      ...worldEvent,
      startYear: Math.max(worldEvent.startYear, TIMELINE_DISPLAY_START),
      endYear: worldEvent.endYear ? Math.max(worldEvent.endYear, TIMELINE_DISPLAY_START) : Math.max(worldEvent.startYear, TIMELINE_DISPLAY_START)
    };
    
    this.calculateWorldEventTimelinePositions(adjustedEvent);
    this._checkAndUpdateSubTimelineOverlap();
  },

  // --- 新增：加载和显示疆域多边形 ---
  loadAndDisplayDynastyBorders: async function(period) {
    console.log(`[Borders] 开始加载 ${period} 时期的疆域数据`);
    
    try {
      // 清除旧的疆域多边形
      this.setData({ dynastyPolygons: [] });
      
      // 获取并解析疆域数据
      const geoJsonData = await this.fetchAndParseDynastyBorder(period);
      if (!geoJsonData) {
        console.log(`[Borders] ${period} 时期没有疆域数据`);
        return;
      }
      
      // 将GeoJSON数据转换为地图多边形格式
      const polygons = this.parseGeoJsonToPolygons(geoJsonData);
      if (!polygons || polygons.length === 0) {
        console.log(`[Borders] ${period} 时期疆域数据解析后无有效多边形`);
        return;
      }
      
      // 将多边形数据设置到地图上
      console.log(`[Borders] 设置 ${period} 时期的 ${polygons.length} 个疆域多边形`);
      this.setData({ dynastyPolygons: polygons });
      
    } catch (error) {
      console.error(`[Borders] 加载 ${period} 疆域数据时出错:`, error);
    }
  },

  // --- 新增：一键重置地图视角函数 ---
  resetMapView: function() {
    console.log("重置地图视角到初始状态");
    if (this.mapCtx) { // 修改：使用 this.mapCtx
      this.setData({
        longitude: this.INITIAL_MAP_CENTER.longitude,
        latitude: this.INITIAL_MAP_CENTER.latitude,
        scale: this.INITIAL_MAP_SCALE
        // 移除mapRotation: 0
      });
      // 移除对不存在的rotate方法的调用
    } else {
      console.warn("MapContext 未初始化，尝试重新初始化并重置视角");
      this.mapCtx = wx.createMapContext('map'); // 尝试重新初始化
      if (this.mapCtx) {
        this.setData({
          longitude: this.INITIAL_MAP_CENTER.longitude,
          latitude: this.INITIAL_MAP_CENTER.latitude,
          scale: this.INITIAL_MAP_SCALE
          // 移除mapRotation: 0
        });
        // 移除对不存在的rotate方法的调用
      } else {
        console.error("MapContext 重新初始化失败，无法重置视角");
        // 至少尝试通过setData重置视图，即使旋转可能失败
        this.setData({
          longitude: this.INITIAL_MAP_CENTER.longitude,
          latitude: this.INITIAL_MAP_CENTER.latitude,
          scale: this.INITIAL_MAP_SCALE
          // 移除mapRotation: 0
        });
      }
    }
    this.setData({
      selectedMarkerInfo: null,
      selectedEventStartYearPosition: null,
      selectedEventDurationWidth: null,
      selectedWorldEventDetail: null,
      worldEventOnMainTimelinePosition: null,
      worldEventOnSubTimelinePosition: null,
      worldEventOnSubTimelineDurationWidth: null,
      chineseCalloutIsSecondary: false,
      worldPopupIsSecondary: false,
      highlightedMarkerId: null, 
      onlyShowHighlightedMarker: false,
      circles: []
    });
  },

  // --- 新增：监听地图视野变化事件 ---
  onRegionChange: function(e) {
    // console.log('onRegionChange event:', JSON.stringify(e));
    if (e.type === 'end') {
      // 移除mapRotation相关处理
      // if (e.detail && e.detail.rotate !== undefined) {
      //   // console.log('Map rotated to:', e.detail.rotate);
      //   if (this.data.mapRotation !== e.detail.rotate) {
      //     this.setData({
      //       mapRotation: e.detail.rotate
      //     });
      //   }
      // }
      // 保留其他地图视图变化处理逻辑
      // 可以在这里获取中心点和缩放级别
      // if (e.detail && e.detail.centerLocation) {
      //   console.log('Map new center:', e.detail.centerLocation.longitude, e.detail.centerLocation.latitude);
      // }
      // if (e.detail && e.detail.scale) {
      //   console.log('Map new scale:', e.detail.scale);
      // }
    }
  },
  // --- 结束新增 ---

}); // 页面的结束括号

// --- 新增：辅助函数 --- 
function formatYear(year) {
  if (year === null || year === undefined) return '';
  
  // 处理极早年份（万年以上级别）
  if (year <= -10000) {
    const absYear = Math.abs(year);
    if (absYear >= 1000000) {
      return `约${(absYear/1000000).toFixed(2)}百万年前`; // 显示为"约1.70百万年前"
    } else if (absYear >= 10000) {
      return `约${(absYear/10000).toFixed(1)}万年前`; // 显示为"约3.0万年前"
    }
  }
  
  // 原有的年份格式处理
  if (year < 0) {
    return `公元前 ${Math.abs(year)}`;
  } else if (year === 0) {
    return '公元元年'; 
  } else {
    return `公元 ${year}`;
  }
}
// --- 结束新增 --- 

// --- 优化：自动调整重叠坐标的辅助函数 --- 
function adjustOverlappingCoordinates(items) {
    if (!items || items.length <= 1) {
        return items; // 无需调整
    }

    // 首先使用工具函数验证和修复所有输入数据的经纬度
    const validItems = util.validateCoordinates(items);
    
    const adjustedItems = [];
    const processedIndices = new Set(); 
    const COORD_THRESHOLD = 0.001; 
    const OFFSET_INCREMENT = 0.01; // 修改：从 0.005 增加到 0.01 (约1.1公里)
    const MAX_RADIUS = 0.04; // 修改：从 0.02 增加到 0.04 (约4.4公里)

    for (let i = 0; i < validItems.length; i++) {
        if (processedIndices.has(i)) continue; 

        const currentItem = { ...validItems[i] }; 
        const overlapGroup = [currentItem]; 
        processedIndices.add(i);

        for (let j = i + 1; j < validItems.length; j++) {
            if (processedIndices.has(j)) continue;
            const otherItem = validItems[j];
            // --- Remove startYear check --- 
            // if (currentItem.startYear === otherItem.startYear) { 
                const latDiff = Math.abs(currentItem.latitude - otherItem.latitude);
                const lonDiff = Math.abs(currentItem.longitude - otherItem.longitude);
                if (latDiff < COORD_THRESHOLD && lonDiff < COORD_THRESHOLD) {
                    console.log(`[Overlap Adjustment Triggered] Item ID ${otherItem.originalId || otherItem.id} (${otherItem.startYear}) overlaps with Item ID ${currentItem.originalId || currentItem.id} (${currentItem.startYear})`);
                    overlapGroup.push({ ...otherItem }); 
                    processedIndices.add(j);
                }
            // }
        }

        // 如果存在重叠标记，应用偏移
        if (overlapGroup.length > 1) {
            console.log(`[Overlap Adjustment] Found ${overlapGroup.length} items overlapping near (${currentItem.latitude.toFixed(4)}, ${currentItem.longitude.toFixed(4)})`);
            
            // 对于第一个点无需调整
            adjustedItems.push(currentItem);
            
            // 改进：使用圆形分布而不是简单线性偏移
            const centerLat = currentItem.latitude;
            const centerLon = currentItem.longitude;
            
            // 设置最大半径，避免标记分布过远
            const MAX_RADIUS_VALUE = 1.2; // 最大偏移限制，增大到1.2
            
            // 从第二个点开始应用偏移
            for (let k = 1; k < overlapGroup.length; k++) {
                // 使用多层圆环布局策略
                // 每层最多容纳8个点，这样可以避免点过于密集
                const pointsPerLayer = 8;
                const layer = Math.floor((k - 1) / pointsPerLayer) + 1;
                const indexInLayer = (k - 1) % pointsPerLayer;
                
                // 根据点在当前层的位置计算角度
                const angle = (2 * Math.PI * indexInLayer) / Math.min(pointsPerLayer, overlapGroup.length - 1 - (layer - 1) * pointsPerLayer);
                
                // 计算半径，随层数增加而增大
                let radius = OFFSET_INCREMENT * layer;
                if (radius > MAX_RADIUS_VALUE) {
                    radius = MAX_RADIUS_VALUE;
                }
                
                // 计算新坐标
                let newLat = parseFloat((centerLat + radius * Math.cos(angle)).toFixed(6));
                let newLng = parseFloat((centerLon + radius * Math.sin(angle)).toFixed(6));
                
                // 用工具函数验证并修复坐标，确保在有效范围内
                const validCoordinate = util.validateCoordinates({
                    latitude: newLat, 
                    longitude: newLng
                });
                
                overlapGroup[k].latitude = validCoordinate.latitude;
                overlapGroup[k].longitude = validCoordinate.longitude;
                
                adjustedItems.push(overlapGroup[k]);
            }
        } else {
            adjustedItems.push(currentItem);
        }
    }
    
    // 最终再次验证所有调整后的坐标
    return util.validateCoordinates(adjustedItems);
}
