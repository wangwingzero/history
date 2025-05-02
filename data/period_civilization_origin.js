// data/period_civilization_origin.js

const civilizationOriginData = [
  {
    id: 9,
    title: '河姆渡遗址',
    locationName: '浙江余姚',
    latitude: 30.0575,
    longitude: 121.3481,
    details: '长江流域原始农耕的代表。距今约7000年，发现大量人工栽培水稻的遗迹，会建造干栏式房屋，制作黑陶。',
    startYear: -7000 // 距今约7000年
  },
  {
    id: 10,
    title: '半坡遗址',
    locationName: '陕西西安',
    latitude: 34.2950,
    longitude: 109.0350,
    details: '黄河流域原始农耕的代表。距今约6000年，种植粟（小米），居住半地穴式圆形房屋，制作彩陶。',
    startYear: -6000 // 距今约6000年
  },
  {
    id: 11,
    title: '良渚遗址',
    locationName: '浙江杭州',
    latitude: 30.3919,
    longitude: 119.9833,
    details: '世界文化遗产，距今约5300-4300年，展现了中国早期国家形态和发达的稻作农业、玉器文化。',
    startYear: -5300
  },
  {
    id: 12,
    title: '炎黄联盟',
    locationName: '黄河流域中原地区 (阪泉/涿鹿)', // General location
    latitude: 40.38, // Adjusted closer to Zhuolu area
    longitude: 115.02, // Adjusted closer to Zhuolu area
    details: '约五六千年前，黄帝联合炎帝，在阪泉之战和涿鹿之战后形成部落联盟，被尊为华夏族的人文初祖。',
    startYear: -4000 // 约五六千年前，取早值距今6000年估算
  },
   {
    id: 13,
    title: '尧舜禹禅让',
    locationName: '黄河流域中原地区', // General location
    latitude: 35.5, // Approximate center for Central Plains
    longitude: 113.0,
    details: '传说中黄帝后，尧、舜、禹相继成为部落联盟首领，通过禅让制传递权力。禹因治水有功，威望大增。',
    startYear: -2200 // 传说时期，夏朝建立(约-2070)前，非常粗略的估计
  },
  // Appended from ancientChinaPart1Data
  {
    id: 294,
    title: '炎黄传说与华夏形成',
    locationName: '阪泉 / 涿鹿 (传说地点)',
    latitude: 40.3, // Approx Hebei battle area
    longitude: 115.0,
    details: '约五六千年前，黄帝联合炎帝在阪泉打败蚩尤，后又在涿鹿击败蚩尤。炎黄联盟逐渐形成为华夏族，被后人尊为中华民族的人文初祖。',
    startYear: -4000 // Highly approximate legendary period
  },
  {
    id: 295,
    title: '禅让制传说 (尧舜禹)',
    locationName: '中原地区 (传说)',
    latitude: 34.7, // Central Plains area
    longitude: 113.0,
    details: '相传黄帝之后，尧、舜、禹依次成为部落联盟首领，通过推举贤德之人的"禅让"制产生。尧生活简朴，舜制定刑法，禹治水有功。',
    startYear: -2500 // Highly approximate legendary period
  },
  {
    id: 296,
    title: '良渚古城',
    locationName: '浙江余杭 (杭州)',
    latitude: 30.39,
    longitude: 120.02,
    details: '距今约5300-4300年。规模宏大，有宫殿区、内城、外城和复杂水利系统。出土大量精美玉器（琮、璧、钺），显示出阶级分化和早期国家形态。证实长江流域是中华文明重要起源地。',
    startYear: -5300 // Approx. start of culture
  },
  {
    id: 297,
    title: '陶寺古城',
    locationName: '山西襄汾陶寺',
    latitude: 35.87,
    longitude: 111.50,
    details: '距今约4300-4000年。面积巨大，有宫城、高等级建筑、大型墓葬、观象台遗迹和青铜器等。表明黄河中游地区已出现早期国家。',
    startYear: -4300 // Approx. start of site's main period
  }
];

module.exports = {
  civilizationOriginData: civilizationOriginData
}