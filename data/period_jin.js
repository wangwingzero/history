// data/period_jin.js

const jinData = [
  // Appended from ancientChinaPart1Data
  {
    id: 430,
    title: '西晋建立与统一',
    locationName: '洛阳 (西晋都城)',
    latitude: 34.68,
    longitude: 112.45,
    details: '266年，司马炎代魏称帝，建立晋朝（西晋）。280年，西晋灭吴，短暂统一全国。',
    startYear: 280 // Unification completed
  },
  {
    id: 431,
    title: '八王之乱与西晋灭亡',
    locationName: '洛阳 / 长安等地',
    latitude: 34.68, // Luoyang
    longitude: 112.45,
    details: '西晋后期，宗室诸王争夺中央权力引发内乱，历时十余年，社会破坏严重。316年，内迁匈奴攻陷长安，西晋灭亡。',
    startYear: 291 // Approx start of major conflicts
  },
  {
    id: 432, // Note: Spans across dynasties, placing here as it leads to E. Jin
    title: '北方各族的内迁',
    locationName: '中国北方',
    latitude: 38.0, // North China Plain approx
    longitude: 112.0,
    details: '东汉魏晋时期，匈奴、鲜卑、羯、氐、羌等北方民族大量迁入中原地区，与汉族杂居，促进了民族交融，也加剧了社会矛盾。',
    startYear: 100 // Approximate start of significant migration waves
  },
  {
    id: 433,
    title: '东晋建立',
    locationName: '建康 (南京)',
    latitude: 32.06,
    longitude: 118.78,
    details: '317年，西晋皇族司马睿在南方重建晋朝，定都建康，史称东晋。北方则陷入"十六国"纷争。',
    startYear: 317
  },
  {
    id: 434,
    title: '淝水之战',
    locationName: '淝水 (安徽寿县附近)',
    latitude: 32.5,
    longitude: 117.0,
    details: '383年，前秦苻坚率大军南下攻打东晋，东晋军队在淝水以少胜多大败前秦军。前秦瓦解，北方再度分裂。',
    startYear: 383
  },
  {
    id: 435,
    title: '王羲之与书法',
    locationName: '东晋',
    latitude: 30.27, // Hangzhou area (later life)
    longitude: 120.15,
    details: '东晋书法家，擅长各种书体，尤精行、楷。代表作《兰亭集序》被誉为"天下第一行书"，被尊为"书圣"。',
    startYear: 353 // Year of Orchid Pavilion Gathering
  },
  {
    id: 436,
    title: '顾恺之与绘画',
    locationName: '东晋',
    latitude: 32.06, // Jiankang (Nanjing)
    longitude: 118.78,
    details: '东晋著名画家，擅长人物画，注重传神。代表作有《女史箴图》《洛神赋图》等。',
    startYear: 380 // Approx. active period
  }
];

module.exports = {
  jinData: jinData
} 