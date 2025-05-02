// data/period_zhou.js 
// 注意：此文件目前仅包含西周建立事件。东周（春秋、战国）在其他文件中。

const zhouData = [
  {
    id: 404,
    title: '西周建立',
    locationName: '镐京 (陕西西安附近)',
    latitude: 34.20,
    longitude: 108.75,
    details: '公元前1046年，周武王在牧野之战中击败商纣王，建立周朝，定都镐京，史称西周。实行分封制。',
    startYear: -1046
  },
  {
    id: 405,
    title: '分封制',
    locationName: '西周各地',
    latitude: 34.70, // 大幅度调整纬度 (原 34.20 / 34.22)
    longitude: 109.25, // 大幅度调整经度 (原 108.75 / 108.76 / 108.78)
    details: '周王根据血缘远近和功劳大小，将宗亲和功臣分封到各地建立诸侯国。诸侯需对周天子尽义务。确立了周朝严格的等级秩序。',
    startYear: -1046 // Starts with W. Zhou establishment
  },
  {
    id: 406,
    title: '西周灭亡与东周开始',
    locationName: '镐京 / 洛邑 (洛阳)',
    latitude: 34.68, // Luoyi (Luoyang)
    longitude: 112.45,
    details: '公元前771年，犬戎攻破镐京，西周灭亡。公元前770年，周平王迁都洛邑，史称东周，分为春秋和战国两个时期。',
    startYear: -771 // W. Zhou ends
  }
];

module.exports = {
  zhouData: zhouData
} 