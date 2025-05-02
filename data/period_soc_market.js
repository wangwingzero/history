// data/period_soc_market.js

const socMarketData = [
  // Unit 3: Path of Socialism with Chinese Characteristics (Socialist Market Economy Establishment & Dev)
  {
    id: 250,
    title: '社会主义市场经济体制建立',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '1992年，中共十四大明确提出建立社会主义市场经济体制的目标。1993年十四届三中全会通过决定，勾画出体制框架。',
    startYear: 1992
  },
  {
    id: 254,
    title: '加入世界贸易组织 (WTO)',
    locationName: '多哈 (卡塔尔) / 中国',
    latitude: 25.29,
    longitude: 51.53,
    details: '经过长期谈判，2001年12月，中国正式加入世界贸易组织。标志着中国对外开放进入新阶段，促进了中国经济与世界经济的接轨。',
    startYear: 2001
  },
  {
    id: 255,
    title: '邓小平理论形成与确立',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '以邓小平南方谈话（1992）和中共十四大（1992）为标志，建设有中国特色社会主义理论形成。1997年中共十五大将邓小平理论确立为党的指导思想。',
    startYear: 1997
  },
  {
    id: 256,
    title: '"三个代表"重要思想提出与确立',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '2000年，江泽民首次提出。核心内容是中国共产党始终代表中国先进生产力的发展要求、先进文化的前进方向、最广大人民的根本利益。2002年中共十六大将其确立为党的指导思想。',
    startYear: 2002
  },
  {
    id: 257,
    title: '科学发展观提出与确立',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '2003年，胡锦涛首次提出。核心是以人为本，要求全面、协调、可持续发展。2012年中共十八大将其确立为党的指导思想。',
    startYear: 2003 // Initial proposal fits period, establishment at end leads to next
  },
  // Unit 4: Ethnic Unity and National Reunification (Partial)
  {
    id: 263,
    title: '香港回归祖国',
    locationName: '香港',
    latitude: 22.32,
    longitude: 114.17,
    details: '1997年7月1日，中英两国政府举行香港政权交接仪式，中国正式对香港恢复行使主权，香港特别行政区成立。洗雪了百年国耻。',
    startYear: 1997
  },
  {
    id: 264,
    title: '澳门回归祖国',
    locationName: '澳门',
    latitude: 22.19,
    longitude: 113.54,
    details: '1999年12月20日，中葡两国政府举行澳门政权交接仪式，中国正式对澳门恢复行使主权，澳门特别行政区成立。',
    startYear: 1999
  },
  {
    id: 265,
    title: '"九二共识"达成',
    locationName: '香港 (会谈地)',
    latitude: 22.32,
    longitude: 114.17,
    details: '1992年11月，海协会与台湾海基会就如何表述坚持一个中国原则的问题达成共识，核心是"海峡两岸同属一个中国，共同努力谋求国家统一"。',
    startYear: 1992
  },
  {
    id: 266,
    title: '汪辜会谈',
    locationName: '新加坡',
    latitude: 1.35,
    longitude: 103.82,
    details: '1993年，海协会会长汪道涵与海基会董事长辜振甫在新加坡举行首次会谈，推动了两岸关系发展。',
    startYear: 1993
  },
  {
    id: 267,
    title: '两岸实现"三通"',
    locationName: '海峡两岸',
    latitude: 23.5, // Representative latitude for Taiwan Strait
    longitude: 119.0,
    details: '2008年，海峡两岸达成空运直航、海运直航、直接通邮等协议，"三通"（通邮、通航、通商）基本实现。',
    startYear: 2008
  },
  // Unit 6: Science, Technology, Culture, and Social Life (Partial)
  {
    id: 281,
    title: '载人航天工程（神舟飞船）',
    locationName: '酒泉卫星发射中心 / 太空',
    latitude: 40.96, // Jiuquan Satellite Launch Center
    longitude: 100.29,
    details: '1999年神舟一号发射成功。2003年杨利伟乘神舟五号进入太空，是中国首次载人航天飞行。后续任务实现多人多天飞行、太空行走、空间交会对接等。',
    startYear: 2003 // Shenzhou 5 fits period
  },
];

module.exports = {
  socMarketData: socMarketData
} 