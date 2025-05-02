// data/period_cultural_revolution.js

const culturalRevolutionData = [
  // Unit 2: Establishment of the Socialist System and Exploration of Socialist Construction (Cultural Revolution Period)
  {
    id: 243,
    title: '"文化大革命"开始',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '1966年夏全面发动。以"阶级斗争为纲"，给党、国家和各族人民带来严重灾难，造成巨大损失。刘少奇被迫害致死是期间最大的冤案。',
    startYear: 1966
  },
  {
    id: 244,
    title: '粉碎林彪反革命集团 (九一三事件)',
    locationName: '温都尔汗 (蒙古)',
    latitude: 47.72,
    longitude: 110.58,
    details: '1971年9月13日，林彪等人阴谋败露后乘飞机外逃，在蒙古温都尔汗机毁人亡。',
    startYear: 1971
  },
   // Unit 5: National Defense Construction and Diplomatic Achievements (Partial)
  {
    id: 274,
    title: '恢复在联合国合法席位',
    locationName: '纽约 (联合国总部)',
    latitude: 40.75,
    longitude: -73.97,
    details: '1971年10月，第26届联合国大会通过决议，恢复中华人民共和国在联合国的一切合法权利。是中国外交重大胜利。',
    startYear: 1971
  },
  {
    id: 275,
    title: '中美关系正常化与建交',
    locationName: '北京 / 华盛顿',
    latitude: 38.90, // Washington DC
    longitude: -77.04,
    details: '1971年基辛格访华，1972年尼克松访华并发表《联合公报》，两国关系开始正常化。1979年1月1日，中美正式建立外交关系。',
    startYear: 1971 // Kissinger visit marks start of normalization within this period
  },
  {
    id: 276,
    title: '中日邦交正常化',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1972年，日本首相田中角荣访华，两国签署联合声明，实现邦交正常化。',
    startYear: 1972
  },
  // Unit 6: Science, Technology, Culture, and Social Life (Partial)
  {
    id: 282,
    title: '籼型杂交水稻培育成功',
    locationName: '湖南等地',
    latitude: 28.20, // Changsha, Hunan (Yuan Longping's base)
    longitude: 112.98,
    details: '20世纪70年代，袁隆平成功培育出籼型杂交水稻，大幅提高水稻产量，为解决中国乃至世界粮食问题作出巨大贡献。',
    startYear: 1973
  },
  {
    id: 283,
    title: '青蒿素发现',
    locationName: '中国',
    latitude: 39.90, // Beijing (Research coordination)
    longitude: 116.41,
    details: '20世纪70年代初，屠呦呦及其团队从中医药典籍获得灵感，成功提取出有效抗疟成分青蒿素，挽救了全球数百万人的生命。屠呦呦因此获诺贝尔奖。',
    startYear: 1971 // Successful extraction/trials fit period
  },
  {
    id: 269, // Relocated - Missile destroyers (1971) fit here better than New Era
    title: '人民海军发展壮大',
    locationName: '中国沿海 / 亚丁湾',
    latitude: 12.0, // Approx Gulf of Aden (later deployment)
    longitude: 48.0,
    details: '新中国海军从无到有，逐步发展。1971年导弹驱逐舰服役，后装备核潜艇。进入21世纪，装备更新换代加速，2012年第一艘航母"辽宁舰"入列。',
    startYear: 1971 // Missile destroyer service begins
  },
  // --- Merged from transitionPostCrData ---
  {
    id: 245,
    title: '粉碎江青反革命集团 ("文化大革命"结束)',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1976年10月，华国锋、叶剑英等代表中央采取措施，将"四人帮"（江青、王洪文、张春桥、姚文元）隔离审查，结束了长达十年的"文化大革命"。',
    startYear: 1976
  },
  // --- End Merged ---
];

module.exports = {
  culturalRevolutionData: culturalRevolutionData
} 