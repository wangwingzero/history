// data/period_ancient.js

const ancientData = [
  {
    id: 1,
    title: '蓝田人遗址',
    latitude: 34.1281, 
    longitude: 109.592,
    locationName: '陕西蓝田县',
    details: '发现于1963-1964年，是中国早期人类（直立人）的重要遗址之一，距今约163万年。',
    startYear: -1630000
  },
  {
    id: 2,
    title: '元谋人遗址',
    latitude: 25.6944, 
    longitude: 101.867,
    locationName: '云南元谋县',
    details: '发现于1965年，是中国发现的最早的人类化石之一，距今约170万年。',
    startYear: -1700000
  },
  {
    id: 3,
    title: '北京人遗址（周口店）',
    latitude: 39.7111, 
    longitude: 115.915,
    locationName: '北京房山周口店',
    details: '世界文化遗产，发现了距今约70-20万年的"北京人"化石和丰富的旧石器时代文化遗存。',
    startYear: -700000 // 取较早年份
  },
  {
    id: 7,
    title: '山顶洞人',
    locationName: '北京周口店龙骨山顶部洞穴',
    latitude: 39.7119,
    longitude: 115.9143,
    details: '距今约3万年，模样和现代人基本相同。掌握磨光和钻孔技术，会人工取火、缝制衣服，有爱美意识。',
    startYear: -30000 // 距今约3万年
  },
  {
    id: 4, // 示例：假设还有其他数据
    title: '其他远古遗址',
    latitude: 35.0000, 
    longitude: 110.0000,
    locationName: '某地',
    details: '示例数据。',
    startYear: -1000000
  }
];

module.exports = {
  ancientData: ancientData
}