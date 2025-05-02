// data/period_north_south.js

const northSouthData = [
  // Appended from ancientChinaPart1Data
  {
    id: 437,
    title: '北魏统一北方',
    locationName: '平城 (山西大同) / 北方地区',
    latitude: 40.08,
    longitude: 113.29,
    details: '鲜卑族拓跋部建立的北魏逐渐强大。439年，北魏统一黄河流域，结束了北方十六国割据局面。',
    startYear: 439
  },
  {
    id: 438,
    title: '北魏孝文帝改革',
    locationName: '洛阳 (迁都后)',
    latitude: 34.68,
    longitude: 112.45,
    details: '为缓和民族矛盾、巩固统治，孝文帝推行一系列汉化改革：迁都洛阳（494年）、易汉服、讲汉语、改汉姓、通婚姻等，促进了北方民族大交融。',
    startYear: 494 // Capital move marks key phase
  },
  {
    id: 439,
    title: '江南地区的开发',
    locationName: '江南地区 (长江中下游)',
    latitude: 31.0, // Approx latitude
    longitude: 119.0, // Approx longitude
    details: '西晋末年以来，北方人口大量南迁，带来先进生产技术和劳动力。东晋南朝时期，江南地区得到显著开发，经济发展迅速。',
    startYear: 317 // Start of Eastern Jin marks acceleration
  },
  {
    id: 440,
    title: '祖冲之与圆周率',
    locationName: '南朝',
    latitude: 32.06, // Jiankang (Nanjing) representative
    longitude: 118.78,
    details: '南朝数学家祖冲之首次将圆周率精确到小数点后第七位（3.1415926-3.1415927之间），领先世界近千年。',
    startYear: 480 // Approx. period of calculation
  },
  {
    id: 441,
    title: '贾思勰与《齐民要术》',
    locationName: '北朝',
    latitude: 36.8, // Approx Shandong area
    longitude: 118.0,
    details: '北朝农学家贾思勰撰写的《齐民要术》是中国现存最早最完整的农书，总结了北方农业生产经验。',
    startYear: 540 // Approx. completion period
  },
  {
    id: 442,
    title: '石窟艺术 (云冈/龙门)',
    locationName: '山西大同 / 河南洛阳',
    latitude: 40.11, // Yungang Grottoes (Datong)
    longitude: 113.13,
    details: '受佛教影响，南北朝时期开凿了许多石窟。北魏开凿的云冈石窟和龙门石窟是其中的杰出代表，造像宏伟，技艺精湛。',
    startYear: 460 // Approx start of Yungang major construction
  }
];

module.exports = {
  northSouthData: northSouthData
} 