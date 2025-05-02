// data/period_qin.js

const qinData = [
  // From period_qin_unification.js
  {
    id: 27, 
    title: '秦统一六国',
    locationName: '咸阳 (秦都)',
    latitude: 34.33,
    longitude: 108.70,
    details: '公元前221年，秦王嬴政灭六国，结束春秋战国以来的分裂割据局面，建立中国历史上第一个统一的多民族封建国家——秦朝，定都咸阳。',
    startYear: -221 
  },
  {
    id: 28,
    title: '建立中央集权制度',
    locationName: '咸阳',
    latitude: 34.33,
    longitude: 108.70,
    details: '确立皇帝制度，总揽全国一切军政大权；中央设丞相、太尉、御史大夫(三公)；地方推行郡县制，实现对地方政权直接有效的控制。',
    startYear: -221 
  },
  {
    id: 29,
    title: '统一措施',
    locationName: '全国范围 (以咸阳为中心)',
    latitude: 34.33, 
    longitude: 108.70,
    details: '统一文字(小篆为全国规范文字，后推广隶书)、统一货币(圆形方孔半两钱)、统一度量衡，促进了经济文化交流和国家认同。',
    startYear: -221 
  },
  {
    id: 30,
    title: '修筑长城与北击匈奴',
    locationName: '北方边境 (西起临洮，东至辽东)',
    latitude: 40.0, 
    longitude: 110.0, 
    details: '派蒙恬北击匈奴，夺取河套地区，并修筑长城，西起临洮，东至辽东，用于防御匈奴南下，巩固统一。',
    startYear: -215 
  },
  {
    id: 31,
    title: '开发南疆与灵渠',
    locationName: '广西兴安 (灵渠)',
    latitude: 25.62,
    longitude: 110.69,
    details: '统一岭南越族地区，设立桂林、南海、象郡；开凿灵渠，沟通湘水和离水，连接长江和珠江水系，便利了对岭南地区的统治。',
    startYear: -214 
  },
  // From period_qin_uprising.js
  {
    id: 100,
    title: '陈胜、吴广起义',
    latitude: 38.88,
    longitude: 116.98,
    locationName: '大泽乡 (Dazexiang, Anhui)',
    details: '公元前209年，陈胜、吴广在大泽乡发动起义，提出"王侯将相宁有种乎"，是中国历史上第一次大规模农民起义，加速了秦朝灭亡。',
    startYear: -209
  },
  {
    id: 101,
    title: '巨鹿之战',
    latitude: 37.23,
    longitude: 115.03,
    locationName: '巨鹿 (Julu, Hebei)',
    details: '公元前207年，项羽率领楚军在巨鹿大败秦军主力，奠定了反秦斗争胜利的基础。',
    startYear: -207
  },
  {
    id: 102,
    title: '刘邦入关中 (秦亡)',
    latitude: 34.33,
    longitude: 108.70,
    locationName: '咸阳 (Xianyang)',
    details: '公元前206年，刘邦率军进入关中，秦王子婴投降，秦朝灭亡。',
    startYear: -206
  },
  // Appended from ancientChinaPart1Data
  {
    id: 413,
    title: '秦末农民大起义 (陈胜吴广起义)',
    locationName: '大泽乡 (安徽宿州)',
    latitude: 33.64, // Approx. Suzhou, Anhui
    longitude: 116.97,
    details: '公元前209年，陈胜、吴广在大泽乡率先发动起义，建立张楚政权。这是中国历史上第一次大规模农民起义。',
    startYear: -209
  }
];

module.exports = {
  qinData: qinData
} 