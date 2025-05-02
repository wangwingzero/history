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

// 使用 index.js 一次性导入所有数据 (现在包含细分的现代数据)
const allPeriodData = require('../../data/index.js');

// 1. 更新时期列表，包含细分的现代时期
const comprehensiveTimePeriods = [
  '早期文明与起源',
  '夏',
  '商',
  '周',
  '春秋',
  '战国',
  '秦',
  '汉',
  '三国',
  '晋',
  '南北朝',
  '隋',
  '唐',
  '五代',
  '宋',
  '元',
  '明',
  '清',
  '晚清',
  '民国初年',
  '国民政府',
  '抗日战争',
  '解放战争',
  '建国初期',
  '探索建设',
  '文革时期',
  '改革开放',
  '市场经济',
  '新时代'
];

// 2. 更新按钮标签映射
const buttonLabelMap = {
  '早期文明与起源': '早期',
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
  '五代': '五代',
  '宋': '宋',
  '元': '元',
  '明': '明',
  '清': '清',
  '晚清': '晚清',
  '民国初年': '民国初',
  '国民政府': '国府',
  '抗日战争': '抗战',
  '解放战争': '解放',
  '建国初期': '建国初',
  '探索建设': '探索',
  '文革时期': '文革',
  '改革开放': '改革',
  '市场经济': '市场',
  '新时代': '新时代'
};

// 3. 更新时期对应的指示器位置 (为新增时期估算)
// 注意：这个映射现在仅用于旧的指示器逻辑，新的基于年份的计算更精确
// 但为了兼容旧代码可能保留，或将其移除/注释掉
const periodRulerPositions = { 
  // ... (保留旧时期或注释掉整个对象) ...
  '晚清': 190,
  '民国初年': 192,
  '国民政府': 193,
  '抗日战争': 194,
  '解放战争': 195,
  '建国初期': 196,
  '探索建设': 197,
  '文革时期': 198.5,
  '改革开放': 199,
  '市场经济': 199.5,
  '新时代': 200
};

// 4. 更新标准朝代/时期起始年份映射 (加入细分现代时期)
const dynastyStartYearsMap = {
    '夏': -2070,
    '商': -1600,
    '周': -1046,
    '春秋': -771,
    '战国': -475,
    '秦': -221,
    '汉': -202,
    '三国': 220,
    '晋': 265,
    '南北朝': 420,
    '隋': 581,
    '唐': 618,
    '五代': 907,
    '宋': 960,
    '元': 1271,
    '明': 1368,
    '清': 1644,
    '晚清': 1840,
    '民国初年': 1912,
    '国民政府': 1928,
    '抗日战争': 1937,
    '解放战争': 1946,
    '建国初期': 1949,
    '探索建设': 1957,
    '文革时期': 1966,
    '改革开放': 1978,
    '市场经济': 1992,
    '新时代': 2012
};

// 标记点图标路径
const NORMAL_ICON_PATH = '/images/marker.png'; // 普通标记图标路径 (请确保文件存在)

// --- 新增：生成数字刻度标签的函数 ---
function generateNumericalLabels(startYear, endYear, step = 500) {
  if (startYear === null || endYear === null) {
    return [];
  }
  const labels = [];
  // 使用 Math.ceil确保第一个标签 >= startYear
  let currentYear = Math.ceil(startYear / step) * step; 
  
  // 简单的年份到百分比的辅助函数 (复用 calculateAndSetPosition 的核心逻辑)
  // 注意：这里简化了，没有直接调用 calculateAndSetPosition 以避免依赖 this.data
  // 实际项目中，应该将核心计算逻辑提取到一个独立的辅助函数中
  const calculatePosition = (year) => {
      const breakpoint = -2070; // 硬编码 breakpointYear
      const prehistoricRatio = 0; // 硬编码 prehistoricRatio
      let positionPercent = 0;
      const historicSpan = endYear - breakpoint;
      const historicRatio = 100 - prehistoricRatio;
      if (historicSpan > 0) {
          positionPercent = prehistoricRatio + ((year - breakpoint) / historicSpan) * historicRatio;
      } else {
            positionPercent = prehistoricRatio + historicRatio / 2;
      }
      return Math.max(0, Math.min(100, positionPercent));
  };

  while (currentYear <= endYear) {
    // --- 修改：直接使用年份数字作为标签 --- 
    const displayLabel = `${currentYear}`;
    // --- 结束修改 ---

    labels.push({
      year: currentYear,
      label: displayLabel,
      position: calculatePosition(currentYear) // 计算位置
    });
    currentYear += step;
  }
  console.log('Generated numerical labels:', labels);
  return labels;
}

// 5. 更新时期到数据文件的映射 (使用新的数据文件)
const dataPeriodMap = {
  '早期文明与起源': [...allPeriodData.ancientData, ...allPeriodData.prehistoricData, ...allPeriodData.civilizationOriginData],
  '夏': allPeriodData.xiaData,
  '商': allPeriodData.shangData,
  '周': allPeriodData.zhouData,
  '春秋': allPeriodData.springAutumnData,
  '战国': allPeriodData.warringStatesData,
  '秦': allPeriodData.qinData,
  '汉': allPeriodData.hanData,
  '三国': allPeriodData.threeKingdomsData,
  '晋': allPeriodData.jinData,
  '南北朝': allPeriodData.northSouthData,
  '隋': allPeriodData.suiData,
  '唐': allPeriodData.tangData,
  '五代': allPeriodData.fiveDynastiesData,
  '宋': allPeriodData.songData,
  '元': allPeriodData.yuanData,
  '明': allPeriodData.mingData,
  '清': allPeriodData.qingData,
  '晚清': allPeriodData.lateQingData,
  '民国初年': allPeriodData.earlyRepublicData,
  '国民政府': allPeriodData.nanjingGovData,
  '抗日战争': allPeriodData.resistanceWarData,
  '解放战争': allPeriodData.liberationWarData,
  '建国初期': allPeriodData.earlyPrcData,
  '探索建设': allPeriodData.socConstrData,
  '文革时期': allPeriodData.culturalRevolutionData,
  '改革开放': allPeriodData.reformOpeningData,
  '市场经济': allPeriodData.socMarketData,
  '新时代': allPeriodData.newEraData
};

// --- Helper function to generate prefixes from period names ---
function getPrefixForPeriod(periodKey) {
    // Special cases for clarity or consistency
    if (periodKey === '早期文明与起源') return 'early';
    if (periodKey === '春秋') return 'springautumn';
    if (periodKey === '战国') return 'warringstates';
    if (periodKey === '三国') return 'threekingdoms';
    if (periodKey === '南北朝') return 'northsouth';
    if (periodKey === '五代') return 'fivedynasties';
    // if (periodKey === '近现代') return 'modern'; // Remove old modern

    // --- 新增细分现代时期前缀 ---
    if (periodKey === '晚清') return 'lateqing';
    if (periodKey === '民国初年') return 'earlyrepublic';
    if (periodKey === '国民政府') return 'nanjinggov';
    if (periodKey === '抗日战争') return 'resistancewar';
    if (periodKey === '解放战争') return 'liberationwar';
    if (periodKey === '建国初期') return 'earlyprc';
    if (periodKey === '探索建设') return 'socconstr';
    if (periodKey === '文革时期') return 'cultrev';
    if (periodKey === '改革开放') return 'reformopening';
    if (periodKey === '市场经济') return 'socmarket';
    if (periodKey === '新时代') return 'newera';
    // --- 结束新增 ---

    // Fallback for simple dynasty names
    const prefixMap = {
        '夏': 'xia', '商': 'shang', '周': 'zhou', '秦': 'qin', '汉': 'han',
        '晋': 'jin', '隋': 'sui', '唐': 'tang', '宋': 'song', '元': 'yuan',
        '明': 'ming', '清': 'qing'
    };
    return prefixMap[periodKey] || periodKey.toLowerCase().replace(/\s+/g, ''); // Basic fallback
}
// --- End Helper ---

Page({
  data: {
    longitude: 116.39742, // 初始中心点：北京
    latitude: 39.90923,
    currentInfo: '请点击下方时间轴选择时期',
    timePeriods: comprehensiveTimePeriods,
    buttonLabelMap: buttonLabelMap,
    selectedPeriod: comprehensiveTimePeriods[0],
    markers: [],
    allHistoryData: [], // Will store data with prefixed IDs
    selectedMarkerInfo: null, // Restore selected marker info
    currentRulerPosition: null, // 初始设为 null
    width: 25, 
    height: 25, 
    // --- 新增：存储时间轴范围 ---
    timelineStartYear: null,
    timelineEndYear: null,
    totalTimeSpan: null,
    // --- 修改：分段点和比例 ---
    breakpointYear: -2070, // 夏朝开始作为分界点 (保持)
    prehistoricRatio: 0, // 史前部分占据时间轴的 0% (从 30 调整为 0)
    numericalLabels: [], // --- 新增：存储数字刻度标签 ---
    
    // --- 新增：追踪当前地图上标记点的数字 ID ---
    currentNumericMarkerIds: [],
    mapCtx: null, // --- 新增：存储 MapContext ---
    scrollLeftValue: 0, // Keep scrollLeftValue

    // --- 新增：子时间轴 Data --- 
    showSubTimeline: false, // 控制子时间轴显隐
    subTimelineStartYear: null,
    subTimelineEndYear: null,
    subTimelineStartLabel: '',
    subTimelineEndLabel: '',
    selectedEventYear: null, // 当前选中事件的年份
    selectedEventYearPosition: null // 事件在子时间轴上的百分比位置
    // --- 结束新增 --- 
  },

  onLoad: function () {
     // --- 获取 MapContext ---
     this.setData({ mapCtx: wx.createMapContext('map') });
     // --- 结束获取 ---

     // --- Modified Data Loading with Prefixing ---
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
     this.setData({ selectedPeriod: this.data.timePeriods[0] });
     console.log('初始时期', this.data.selectedPeriod, '，指示器隐藏，开始加载标记点');
     // --- 修改：首次加载调用新的 updateMarkers ---
     this.updateMarkersForPeriod(this.data.selectedPeriod, true); // Pass initial = true
     // --- 结束修改 ---
     this.setData({ currentRulerPosition: null });
     // --- 确保初始状态下子时间轴也不显示 ---
     this.setData({ showSubTimeline: false, selectedEventYearPosition: null }); 
  },

  // --- 重构：更新标记点的函数 (使用 addMarkers/removeMarkers) ---
  updateMarkersForPeriod: function(period, initial = false) {
    if (!this.data.mapCtx) {
        // 尝试重新获取 MapContext
        const mapCtx = wx.createMapContext('map');
        if (!mapCtx) {
          console.error("MapContext 无法初始化!");
          return;
        }
        this.setData({ mapCtx: mapCtx });
        console.warn("MapContext 重新初始化成功");
    }
    console.log(`开始更新 ${period} 时期的标记点 (使用 MapContext API)`);
    
    // --- 1. 计算当前时期的时间范围 ---
    let startYear = null;
    let endYear = null;
    const currentPeriodData = comprehensiveTimePeriods.find(p => p.periodKey === period); // Find based on key if available, else use name

    // Adjust logic to find period details consistently
    let periodDetails = comprehensiveTimePeriods.find(p => p === period); // Fallback to direct name match
    let periodKeyForData = period; 

    // If your comprehensiveTimePeriods is an array of objects like { periodKey: 'xia', name: '夏', startYear: -2070, endYear: -1600 }
    // You need to adjust how you get start/end years. Assuming it's still the array of names:
    
    if (period === '早期文明与起源') {
      startYear = -Infinity;
      endYear = dynastyStartYearsMap['夏']; // Use the map for start year of next period
    } else {
      startYear = dynastyStartYearsMap[period]; // Get start year from map
      const periodIndex = comprehensiveTimePeriods.indexOf(period);
      if (startYear === undefined) {
          console.error(`无法在 dynastyStartYearsMap 中找到时期 '${period}' 的起始年份`);
          return; // Exit if start year is missing
      }
      if (periodIndex < comprehensiveTimePeriods.length - 1) {
        const nextPeriod = comprehensiveTimePeriods[periodIndex + 1];
        endYear = dynastyStartYearsMap[nextPeriod]; // Get end year using next period's start year
         if (endYear === undefined) {
             console.error(`无法在 dynastyStartYearsMap 中找到下一个时期 '${nextPeriod}' 的起始年份来确定 '${period}' 的结束年份`);
             // Decide how to handle the last period if next is undefined
             endYear = this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : new Date().getFullYear() + 50; // Use calculated end or fallback
             console.warn(`时期 '${period}' 的结束年份设置为: ${endYear}`);
         }
      } else {
        // Last period
        endYear = this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : new Date().getFullYear() + 50; // Use +1 to make range inclusive of end year if needed, adjust as per logic
      }
    }
    // Ensure endYear is valid if calculated
     if (endYear === undefined || endYear === null) {
        console.error(`时期 '${period}' 的结束年份计算失败`);
        return;
     }

    console.log(`筛选年份范围: [${startYear ?? '-Infinity'}, ${endYear ?? '+Infinity'})`);

    // --- 2. 筛选出新时期应该显示的 marker 数据 ---
    const newMarkersData = this.data.allHistoryData
      .filter(item => {
        const year = item.startYear; 
        // Ensure startYear and endYear are numbers for comparison
        const sYear = typeof startYear === 'number' ? startYear : -Infinity;
        const eYear = typeof endYear === 'number' ? endYear : Infinity;
        return year !== undefined && year >= sYear && year < eYear;
      })
      .map(item => { 
          const lat = item.latitude;
          const lng = item.longitude;
          if (typeof lat !== 'number' || isNaN(lat) || lat < -90 || lat > 90 ||
              typeof lng !== 'number' || isNaN(lng) || lng < -180 || lng > 180) {
                console.warn(`[updateMarkersForPeriod] 无效坐标，跳过标记点: ${item.title} (ID: ${item.prefixedId}), Lat: ${lat}, Lng: ${lng}`);
                return null; 
          }
          return {
            id: item.originalId, 
            latitude: lat,
            longitude: lng,
            title: item.title, 
            width: this.data.width, // Use data property
            height: this.data.height, // Use data property
          };
      })
      .filter(marker => marker !== null); 

    const newNumericMarkerIds = newMarkersData.map(marker => marker.id);
    // --- DEBUG: Log IDs before potential duplicates removal ---
    // console.log(`新时期 (${period}) 筛选出的原始数字 ID (可能有重复):`, newNumericMarkerIds);
    
    // --- Handle potential duplicate numeric IDs within the same period filter ---
    // If multiple events have the same numeric ID AND fall into the same period range,
    // addMarkers might behave unexpectedly. Let's add only unique IDs for now.
    const uniqueNewMarkersData = [];
    const uniqueNewNumericMarkerIds = [];
    const seenIds = new Set();
    newMarkersData.forEach(marker => {
        if (!seenIds.has(marker.id)) {
            uniqueNewMarkersData.push(marker);
            uniqueNewNumericMarkerIds.push(marker.id);
            seenIds.add(marker.id);
        } else {
            console.warn(`[updateMarkersForPeriod] 时期 '${period}' 内发现重复的数字 ID ${marker.id}，只添加第一个。`);
        }
    });
    // --- End duplicate handling ---

    console.log(`新时期 (${period}) 应包含的唯一数字 ID:`, uniqueNewNumericMarkerIds);


    // --- 3. 获取旧的 marker ID ---
    const oldNumericMarkerIds = this.data.currentNumericMarkerIds;
    console.log(`旧时期遗留的数字 ID:`, oldNumericMarkerIds);

    // --- 4. 计算需要移除和添加的 markers ---
    const numericIdsToRemove = oldNumericMarkerIds.filter(id => !uniqueNewNumericMarkerIds.includes(id));
    // Add markers whose IDs are new (weren't in old list)
    const markersToAdd = uniqueNewMarkersData.filter(marker => !oldNumericMarkerIds.includes(marker.id));

    console.log('需要移除的 ID:', numericIdsToRemove);
    console.log('需要添加的 Marker 对象:', markersToAdd);

    // --- 5. 调用 MapContext API ---
    const mapCtx = this.data.mapCtx;
    
    // Remove markers first
    if (numericIdsToRemove.length > 0) {
      mapCtx.removeMarkers({
        markerIds: numericIdsToRemove,
        success: () => console.log('成功移除 markers:', numericIdsToRemove),
        fail: (err) => console.error('移除 markers 失败:', err)
      });
    } else {
        console.log('没有需要移除的 markers');
    }

    // Add new markers after a slight delay to ensure removal completes
    if (markersToAdd.length > 0) {
        // Add a small delay to potentially help with race conditions
        setTimeout(() => {
            mapCtx.addMarkers({
                markers: markersToAdd,
                clear: false, 
                success: () => console.log('成功添加 markers:', markersToAdd.map(m=>m.id)),
                fail: (err) => console.error('添加 markers 失败:', err)
            });
        }, 50); // 50ms delay
    } else {
        console.log('没有需要添加的新 markers');
    }

    // --- 6. 更新当前状态 ---
    this.setData({
      currentNumericMarkerIds: uniqueNewNumericMarkerIds,
    });
    console.log(`更新 currentNumericMarkerIds 为:`, uniqueNewNumericMarkerIds);

  },

  // --- 修改：处理标记点点击事件 (根据 ID 和当前时期反查) ---
  onMarkerTap: function(e) {
    console.log('[onMarkerTap] 事件触发:', e);
    const markerId = e.markerId; 
    console.log('点击的 Marker 数字 ID:', markerId);

    if (markerId === undefined || markerId === null) { 
        console.error("无法获取 markerId");
        this.setData({ 
            selectedMarkerInfo: null, 
            selectedEventYear: null, // 清除子时间轴
            selectedEventYearPosition: null 
        });
        return; 
    }

    const currentPeriod = this.data.selectedPeriod;
    let startYear = null;
    let endYear = null;
    if (currentPeriod === '早期文明与起源') {
      startYear = -Infinity;
      endYear = dynastyStartYearsMap['夏']; 
    } else {
      startYear = dynastyStartYearsMap[currentPeriod];
      const periodIndex = comprehensiveTimePeriods.indexOf(currentPeriod);
       if (startYear === undefined) { /* ... error ... */ this.setData({ selectedMarkerInfo: null, selectedEventYearPosition: null }); return;}
      if (periodIndex < comprehensiveTimePeriods.length - 1) {
        const nextPeriod = comprehensiveTimePeriods[periodIndex + 1];
        endYear = dynastyStartYearsMap[nextPeriod];
         if (endYear === undefined) { /* ... warning ... */ endYear = this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : Infinity; }
      } else {
        endYear = this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : Infinity; 
      }
    }
    if (endYear === undefined || endYear === null) { /* ... error ... */ this.setData({ selectedMarkerInfo: null, selectedEventYearPosition: null }); return;}

    console.log(`[onMarkerTap] 当前时期 ${currentPeriod} 的年份范围: [${startYear ?? '-Infinity'}, ${endYear ?? '+Infinity'})`);

    const selectedData = this.data.allHistoryData.find(item => {
        const sYear = typeof startYear === 'number' ? startYear : -Infinity;
        const eYear = typeof endYear === 'number' ? endYear : Infinity;
        return item.originalId === markerId && 
               item.startYear !== undefined &&
               item.startYear >= sYear && 
               item.startYear < eYear;
    });

    if (selectedData) {
        console.log('根据 ID 和当前时期范围找到的完整数据:', selectedData);
        this.setData({
          selectedMarkerInfo: {
            title: selectedData.title,
            details: selectedData.details,
            location: selectedData.locationName,
            year: selectedData.startYear 
          }
        });

        // --- 新增：更新子时间轴指示器 --- 
        if (this.data.showSubTimeline && this.data.subTimelineStartYear !== null && this.data.subTimelineEndYear !== null) {
            const eventYear = selectedData.startYear;
            const subStart = this.data.subTimelineStartYear;
            const subEnd = this.data.subTimelineEndYear;
            // Ensure subEnd is strictly greater than subStart for span calculation
            // Use periodEnd calculated earlier (which might be next period's start - 1)
            const periodEndDate = this.data.subTimelineEndYear; 
            const subSpan = periodEndDate - subStart; // Use the actual end year of the period

            if (eventYear !== undefined && subSpan > 0) { 
                const position = ((eventYear - subStart) / subSpan) * 100;
                const clampedPosition = Math.max(0, Math.min(100, position)); 
                console.log(`计算子时间轴位置: 事件=${eventYear}, 区间=[${subStart}, ${periodEndDate}], 位置=${clampedPosition}%`);
                this.setData({
                    selectedEventYear: eventYear,
                    selectedEventYearPosition: clampedPosition
                });
            } else if (subSpan === 0 && eventYear === subStart) { 
                 this.setData({
                    selectedEventYear: eventYear,
                    selectedEventYearPosition: 50 
                });
            } else if (subSpan < 0) { // Handle case where end year is before start year (should not happen with correct logic)
                 console.error(`子时间轴起止年份错误: start=${subStart}, end=${periodEndDate}`);
                 this.setData({ selectedEventYear: eventYear, selectedEventYearPosition: null });
            } else { // subSpan is 0, eventYear != subStart OR eventYear undefined
                 console.warn(`无法计算子时间轴位置 (subSpan=${subSpan}, eventYear=${eventYear})`);
                this.setData({
                    selectedEventYear: eventYear, 
                    selectedEventYearPosition: null 
                });
            }
        } else {
            this.setData({
                selectedEventYear: null,
                selectedEventYearPosition: null
            });
        }
        // --- 结束新增 --- 

    } else {
        console.error(`无法在 allHistoryData 中找到 ID 为 ${markerId} 且年份在 ${currentPeriod} (${startYear}-${endYear}) 范围内的数据`);
        if (this.data.currentNumericMarkerIds.includes(markerId)) { /* ... */ }
        this.setData({ 
            selectedMarkerInfo: null,
            selectedEventYear: null, // 清除子时间轴
            selectedEventYearPosition: null 
        });
    }
  },

  // --- onMapTap: 修改以清除子时间轴指示器 ---
  onMapTap: function(e) {
    console.log('地图点击，尝试隐藏自定义气泡');
    if (this.data.selectedMarkerInfo) {
        this.setData({ 
            selectedMarkerInfo: null,
            selectedEventYear: null, // 同时清除子时间轴事件标记
            selectedEventYearPosition: null 
        });
    }
  },

  // includePoints 函数 (保持不变)
  includePoints: function(points) { 
      if (!points || points.length < 1) return; // Need at least one point
      const mapCtx = this.data.mapCtx || wx.createMapContext('map'); 
       if (!mapCtx) return;

      if (points.length === 1) { // Move center if only one point
          mapCtx.moveToLocation({
              latitude: points[0].latitude,
              longitude: points[0].longitude,
              success: () => console.log('Moved to single point location'),
              fail: (err) => console.error('moveToLocation fail:', err)
          });
      } else { // Include multiple points
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
      const standardStartYear = dynastyStartYearsMap[period]; 
      if (standardStartYear === undefined) { /* ... error handling ... */ return; }
      const { timelineStartYear, timelineEndYear, breakpointYear, prehistoricRatio } = this.data;
      let positionPercent = 0;
      if (timelineStartYear === null || timelineEndYear === null || breakpointYear === null || prehistoricRatio === null) { /* ... error handling ... */ return; }
      // ... (rest of calculation logic) ...
       if (standardStartYear < breakpointYear) {
          const prehistoricSpan = breakpointYear - timelineStartYear;
          if (prehistoricSpan > 0) { positionPercent = ((standardStartYear - timelineStartYear) / prehistoricSpan) * prehistoricRatio; } 
          else { positionPercent = prehistoricRatio / 2; }
      } else {
          const historicSpan = timelineEndYear - breakpointYear;
          const historicRatio = 100 - prehistoricRatio;
          if (historicSpan > 0) { positionPercent = prehistoricRatio + ((standardStartYear - breakpointYear) / historicSpan) * historicRatio; } 
          else { positionPercent = prehistoricRatio + historicRatio / 2; }
           console.log(`Calculating historic pos for ${period}: StdYear=${standardStartYear}, Position=${positionPercent}% (within ${prehistoricRatio}%-100%)`);
      }
      const clampedPosition = Math.max(0, Math.min(100, positionPercent));
      this.setData({ currentRulerPosition: clampedPosition });
  },

  // --- onPeriodTap: 修改以更新子时间轴状态 ---
  onPeriodTap: function (e) {
    const period = e.currentTarget.dataset.period; 
    console.log('时间轴按钮点击:', period);
    if (period && period !== this.data.selectedPeriod) {
      this.setData({ selectedPeriod: period }, () => {
          // const earlyPeriod = '早期文明与起源'; // No longer needed for special handling
          let periodStart = null;
          let periodEndForLabel = null; 
          let periodEndForRange = null; 
          let showSub = false;

          // Calculate start and end years for the selected period
          if (period === '早期文明与起源') {
              periodStart = this.data.timelineStartYear; // Use the earliest year found
              const nextPeriodStart = dynastyStartYearsMap['夏'];
              if (nextPeriodStart !== undefined) {
                  periodEndForRange = nextPeriodStart; // Range is [start, nextStart)
                  periodEndForLabel = nextPeriodStart - 1;
                  showSub = periodStart !== null; // Show if start year is valid
              } else {
                  console.error("夏朝起始年份未定义，无法确定早期结束年份！");
                  showSub = false;
              }
              // For main timeline indicator, keep it hidden for 早期
              this.setData({ currentRulerPosition: null }); 
              console.log(`时期 ${period}: Start=${periodStart}, EndLabel=${periodEndForLabel}, EndRange=${periodEndForRange}`);
          } else {
              // Logic for other periods (Xia onwards)
              this.calculateAndSetPosition(period); // Calculate main indicator position
              periodStart = dynastyStartYearsMap[period];
              const periodIndex = comprehensiveTimePeriods.indexOf(period);
              if (periodStart !== undefined) {
                  if (periodIndex < comprehensiveTimePeriods.length - 1) {
                      const nextPeriod = comprehensiveTimePeriods[periodIndex + 1];
                      const nextPeriodStart = dynastyStartYearsMap[nextPeriod];
                      if (nextPeriodStart !== undefined) {
                          periodEndForRange = nextPeriodStart;
                          periodEndForLabel = nextPeriodStart - 1;
                      } else {
                          periodEndForRange = (this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : Infinity); 
                          periodEndForLabel = this.data.timelineEndYear;
                          console.warn(`无法找到时期 ${nextPeriod} 的开始年份...`);
                      }
                  } else {
                      periodEndForRange = (this.data.timelineEndYear !== null ? this.data.timelineEndYear + 1 : Infinity);
                      periodEndForLabel = this.data.timelineEndYear; 
                  }
                  if (periodEndForLabel === null || periodEndForLabel < periodStart) { 
                      console.warn(`计算出的结束标签年份 (${periodEndForLabel}) 无效...`);
                      periodEndForLabel = periodStart;
                      if (periodEndForRange === null || periodEndForRange <= periodStart) {
                           periodEndForRange = periodStart + 1;
                      }
                  }
                  showSub = true; 
              } else {
                  console.error(`时期 ${period} 的起始年份未定义！`);
                  showSub = false; 
              }
          }

          // 更新子时间轴相关状态 (现在对所有时期都可能更新)
          this.setData({
              showSubTimeline: showSub,
              subTimelineStartYear: periodStart, 
              subTimelineEndYear: periodEndForLabel, // Use label year 
              subTimelineStartLabel: showSub ? formatYear(periodStart) : '',
              subTimelineEndLabel: showSub ? formatYear(periodEndForLabel) : '',
              selectedEventYear: null, // Clear event marker on period change
              selectedEventYearPosition: null
          });

          // 更新地图标记点 (使用新的带范围的函数)
          if (periodStart !== null && periodEndForRange !== null) { // Check if range is valid
             this.updateMarkersForPeriodWithRange(period, periodStart, periodEndForRange);
          } else if (period === '早期文明与起源' && periodStart !== null && periodEndForRange !== null) {
             // Explicitly handle early period if needed, range should be valid from above
             this.updateMarkersForPeriodWithRange(period, periodStart, periodEndForRange);
          } else {
             console.error(`无法更新标记点，时期 ${period} 的年份范围无效: [${periodStart}, ${periodEndForRange})`);
             // Optionally clear markers if range is invalid
             // this.updateMarkersForPeriodWithRange(period, null, null); // Or call remove directly
          }
          
          // 清除气泡
           if (this.data.selectedMarkerInfo) {
               this.setData({ selectedMarkerInfo: null });
           }
      }); 
    }
  },

  // --- 新增：带明确范围的 updateMarkers 调用 ---
  // This function is needed because onPeriodTap calculates the range, 
  // but the original updateMarkers recalculates it internally. 
  // It's better to pass the calculated range.
  updateMarkersForPeriodWithRange: function(period, startYear, endYear) {
      if (!this.data.mapCtx) { /* ... get mapCtx ... */ }
      console.log(`开始更新 ${period} 时期的标记点 (使用 MapContext API and Range: [${startYear ?? '-Inf'}, ${endYear ?? '+Inf'}))`);
      
      // --- 2. Filter using the provided range --- 
      const newMarkersData = this.data.allHistoryData
        .filter(item => {
          const year = item.startYear; 
          const sYear = typeof startYear === 'number' ? startYear : -Infinity;
          const eYear = typeof endYear === 'number' ? endYear : Infinity;
          return year !== undefined && year >= sYear && year < eYear;
        })
        .map(item => { /* ... map to marker format, same as before ... */
            const lat = item.latitude; const lng = item.longitude;
            if (typeof lat !== 'number' || isNaN(lat) || lat < -90 || lat > 90 || typeof lng !== 'number' || isNaN(lng) || lng < -180 || lng > 180) { return null; }
            return { id: item.originalId, latitude: lat, longitude: lng, title: item.title, width: this.data.width, height: this.data.height };
         })
        .filter(marker => marker !== null); 

      // --- (Rest of the logic: duplicate handling, diffing, add/remove remains the same as in original updateMarkersForPeriod) --- 
      const uniqueNewMarkersData = []; const uniqueNewNumericMarkerIds = []; const seenIds = new Set();
      newMarkersData.forEach(marker => { if (!seenIds.has(marker.id)) { uniqueNewMarkersData.push(marker); uniqueNewNumericMarkerIds.push(marker.id); seenIds.add(marker.id); } else { /* warn */ } });
      console.log(`新时期 (${period}) 应包含的唯一数字 ID:`, uniqueNewNumericMarkerIds);
      const oldNumericMarkerIds = this.data.currentNumericMarkerIds;
      const numericIdsToRemove = oldNumericMarkerIds.filter(id => !uniqueNewNumericMarkerIds.includes(id));
      const markersToAdd = uniqueNewMarkersData.filter(marker => !oldNumericMarkerIds.includes(marker.id));
      console.log('需要移除的 ID:', numericIdsToRemove); console.log('需要添加的 Marker 对象:', markersToAdd);
      const mapCtx = this.data.mapCtx;
      if (numericIdsToRemove.length > 0) { mapCtx.removeMarkers({ markerIds: numericIdsToRemove, success: () => {}, fail: () => {} }); }
      if (markersToAdd.length > 0) { setTimeout(() => { mapCtx.addMarkers({ markers: markersToAdd, clear: false, success: () => {}, fail: () => {} }); }, 50); }
      this.setData({ currentNumericMarkerIds: uniqueNewNumericMarkerIds });
      console.log(`更新 currentNumericMarkerIds 为:`, uniqueNewNumericMarkerIds);
  },

}); // 页面的结束括号

// --- 新增：辅助函数 --- 
function formatYear(year) {
  if (year === null || year === undefined) return '';
  if (year < 0) {
    return `公元前 ${Math.abs(year)}`;
  } else if (year === 0) {
    return '公元元年'; 
  } else {
    return `公元 ${year}`;
  }
}
// --- 结束新增 --- 