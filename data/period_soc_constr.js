// data/period_soc_constr.js

const socConstrData = [
  // Unit 2: Establishment of the Socialist System and Exploration of Socialist Construction (Continued)
  {
    id: 241,
    title: '中共八大召开',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1956年召开。正确分析了国内主要矛盾，指出党和人民的主要任务是集中力量发展社会生产力。是探索中国社会主义建设道路的良好开端。',
    startYear: 1956 // Fits start of period [1957, 1966)
  },
  {
    id: 242,
    title: '"大跃进"和人民公社化运动',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '1958年，在"多快好省"总路线下发起，片面追求高指标、高速度，忽视客观经济规律，加上自然灾害等因素，导致国民经济严重困难（1959-1961）。',
    startYear: 1958
  },
  {
    id: 246,
    title: '建设成就 (工业与国防)',
    locationName: '武汉/包头/大庆/兰新铁路等',
    latitude: 50.0, // Approx Daqing oil field
    longitude: 125.0,
    details: '探索时期，建成武汉、包头钢铁基地，大庆、胜利、大港油田投产，实现原油自给。兰新、兰青、包兰等铁路建成。国防尖端技术（"两弹一星"）取得巨大进展。',
    startYear: 1965 // Example achievement within period
  },
  // Unit 5: National Defense Construction and Diplomatic Achievements (Partial)
   {
    id: 271,
    title: '战略导弹部队（火箭军）发展',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '1966年组建第二炮兵部队。装备东风系列弹道导弹和长剑巡航导弹等。2015年更名为火箭军。是中国战略威慑的核心力量。',
    startYear: 1966 // Establishment fits end of period
  },
  // Unit 6: Science, Technology, Culture, and Social Life (Partial)
   {
    id: 280,
    title: '"两弹一星"研制成功',
    locationName: '罗布泊 (新疆) / 酒泉卫星发射中心',
    latitude: 40.40, // Approx Lop Nur test site
    longitude: 90.60,
    details: '指原子弹（1964）、导弹核武器（1966）、氢弹（1967）和人造地球卫星（1970，东方红一号）。是国防尖端技术的重大突破，代表人物有钱学森、邓稼先等。',
    startYear: 1964 // First atomic bomb test fits within period
  },
  {
    id: 270, // Relocated based on J-5 production year
    title: '人民空军发展壮大',
    locationName: '中国领空',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '空军在抗美援朝中成长。1956年成功仿制歼-5。改革开放后引进和自研新型战机，如歼-20隐形战斗机等，空军现代化水平显著提升。',
    startYear: 1956 // J-5 production fits start of period
  },
];

module.exports = {
  socConstrData: socConstrData
} 