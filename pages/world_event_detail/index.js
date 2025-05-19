// pages/world_event_detail/index.js

// --- 从主页复制必要的常量和函数 (建议后续提取到公共utils) ---
const comprehensiveTimePeriods = [
  '早期文明与起源',
  '夏', '商', '周', '春秋', '战国', '秦', '汉', '三国', '晋', '南北朝',
  '隋', '唐', '五代', '宋', '元', '明', '清',
  '晚清', '民国初年', '国民政府', '抗日战争', '解放战争',
  '建国初期', '探索建设', '文革时期', '改革开放', '市场经济', '新时代'
];

const dynastyStartYearsMap = {
    '夏': -2070, '商': -1600, '周': -1046, '春秋': -771, '战国': -475,
    '秦': -221, '汉': -202, '三国': 220, '晋': 265, '南北朝': 420,
    '隋': 581, '唐': 618, '五代': 907, '宋': 960, '元': 1271,
    '明': 1368, '清': 1644, '晚清': 1840, '民国初年': 1912,
    '国民政府': 1928, '抗日战争': 1937, '解放战争': 1946,
    '建国初期': 1949, '探索建设': 1957, '文革时期': 1966,
    '改革开放': 1978, '市场经济': 1992, '新时代': 2012
};

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
// --- 结束复制 ---

// 导入世界历史数据
const worldHistoryModule = require('../../data/world_history.js');
const allWorldHistoryData = worldHistoryModule.worldHistory;

Page({
  data: {
    event: null, // 存储当前世界历史事件的完整信息
    chinesePeriodName: '', // 对应的中国时期名称
    chinesePeriodStartLabel: '', // 中国时期开始年份标签
    chinesePeriodEndLabel: '',   // 中国时期结束年份标签
    eventPositionOnTimeline: null // 事件在时间轴上的百分比位置 (0-100)
  },

  onLoad(options) {
    const eventId = options.id;
    if (!eventId) {
      console.error('详情页缺少事件ID');
      // 可以显示错误提示或返回上一页
      wx.showToast({ title: '加载事件失败', icon: 'error' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    const selectedEvent = allWorldHistoryData.find(item => item.id === eventId);

    if (!selectedEvent) {
      console.error(`无法找到 ID 为 ${eventId} 的世界历史事件`);
      wx.showToast({ title: '事件数据不存在', icon: 'error' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    // 设置事件基础信息
    this.setData({
      event: {
        ...selectedEvent,
        startYearDisplay: formatYear(selectedEvent.startYear),
        endYearDisplay: selectedEvent.startYear === selectedEvent.endYear ? '' : formatYear(selectedEvent.endYear)
      }
    });

    // 查找对应的中国时期并计算时间轴位置
    this.findChinesePeriodAndPosition(selectedEvent.startYear);
  },

  findChinesePeriodAndPosition(eventYear) {
    let foundPeriod = null;
    let periodStartYear = null;
    let periodEndYear = null;
    const latestPossibleYear = 2050; // 设定一个最新的结束年份

    // 特殊处理：如果事件在夏朝之前
    if (eventYear < dynastyStartYearsMap['夏']) {
        foundPeriod = '早期文明与起源';
        // 对于早期，我们可能无法精确定义起止，可以暂时不显示时间轴或给一个示意性的？
        // 或者定义一个非常早的起点？这里暂时不计算位置
        console.log(`事件 ${eventYear} 属于 ${foundPeriod}，时间轴暂不精确定位。`);
        this.setData({
            chinesePeriodName: foundPeriod, 
            // chinesePeriodStartLabel: '远古', // 可选的示意标签
            // chinesePeriodEndLabel: formatYear(dynastyStartYearsMap['夏'] - 1),
            eventPositionOnTimeline: null // 早期不精确显示位置
        });
        return;
    }

    // 遍历查找包含事件年份的中国时期
    for (let i = 0; i < comprehensiveTimePeriods.length; i++) {
      const currentPeriodName = comprehensiveTimePeriods[i];
      if (currentPeriodName === '早期文明与起源') continue; // 跳过早期

      const currentStart = dynastyStartYearsMap[currentPeriodName];
      let nextStart = latestPossibleYear; // 默认下一个时期开始为最新年份
      if (i < comprehensiveTimePeriods.length - 1) {
        const nextPeriodName = comprehensiveTimePeriods[i + 1];
        nextStart = dynastyStartYearsMap[nextPeriodName] ? dynastyStartYearsMap[nextPeriodName] : latestPossibleYear;
      }

      if (currentStart !== undefined && eventYear >= currentStart && eventYear < nextStart) {
        foundPeriod = currentPeriodName;
        periodStartYear = currentStart;
        periodEndYear = nextStart - 1; // 时期结束年份为下一时期开始年份减1
        break;
      }
    }
    
    // 处理最后一个时期的情况（新时代）
    if (!foundPeriod && comprehensiveTimePeriods.length > 0) {
        const lastPeriodName = comprehensiveTimePeriods[comprehensiveTimePeriods.length - 1];
        const lastStart = dynastyStartYearsMap[lastPeriodName];
        if (lastStart !== undefined && eventYear >= lastStart) {
            foundPeriod = lastPeriodName;
            periodStartYear = lastStart;
            periodEndYear = latestPossibleYear; // 最后一个时期结束设为最新年份
        }
    }

    if (foundPeriod && periodStartYear !== null && periodEndYear !== null) {
      console.log(`事件 ${eventYear} 属于中国时期: ${foundPeriod} (${periodStartYear} - ${periodEndYear})`);
      const periodSpan = periodEndYear - periodStartYear;
      let position = null;
      if (periodSpan > 0) {
        position = ((eventYear - periodStartYear) / periodSpan) * 100;
        position = Math.max(0, Math.min(100, position)); // 限制在 0-100 之间
      } else if (periodSpan === 0 && eventYear === periodStartYear) {
        position = 50; // 单一年份时期，显示在中间
      }
       console.log(`计算出的时间轴位置: ${position}%`);

      this.setData({
        chinesePeriodName: foundPeriod,
        chinesePeriodStartLabel: formatYear(periodStartYear),
        chinesePeriodEndLabel: formatYear(periodEndYear),
        eventPositionOnTimeline: position
      });
    } else {
      console.warn(`无法为事件年份 ${eventYear} 找到对应的中国历史时期或计算位置。`);
      this.setData({
        chinesePeriodName: '未知时期',
        eventPositionOnTimeline: null
      });
    }
  }
}); 