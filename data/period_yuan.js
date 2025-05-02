// data/period_yuan.js

const yuanData = [
  // 蒙古统一与征服 (ID 78-80)
  {
    id: 78,
    title: '成吉思汗统一蒙古',
    locationName: '斡难河源 (蒙古)',
    latitude: 49.0, 
    longitude: 111.5,
    details: '1206年，铁木真在斡难河源召开大会，统一蒙古各部，建立蒙古政权，被推举为大汗，尊称成吉思汗。',
    startYear: 1206
  },
  {
    id: 79,
    title: '蒙古灭西夏',
    locationName: '兴庆府 (西夏都城)',
    latitude: 38.49,
    longitude: 106.23,
    details: '成吉思汗多次进攻西夏。1227年，西夏末帝投降，西夏灭亡。成吉思汗亦在征讨西夏途中病逝。',
    startYear: 1227
  },
  {
    id: 80,
    title: '蒙古灭金',
    locationName: '蔡州 (金末帝所在地)',
    latitude: 33.20, // Approx Runan, Henan
    longitude: 114.36,
    details: '蒙古与南宋联合攻金。1234年，蒙宋联军攻破蔡州，金哀宗自缢，金朝灭亡。',
    startYear: 1234
  },
  // 元朝建立与统治 (ID 81-86)
  {
    id: 81,
    title: '元朝建立',
    locationName: '大都 (元都)',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '1271年，成吉思汗之孙忽必烈改国号为大元。1272年定都于大都（今北京）。',
    startYear: 1271
  },
  {
    id: 82,
    title: '元灭南宋',
    locationName: '崖山 (广东)',
    latitude: 22.18, // Approx Yamen, Jiangmen
    longitude: 113.08,
    details: '1276年元军攻占临安。1279年，元军在崖山海战中消灭南宋最后抵抗力量，陆秀夫背负幼帝投海殉国，南宋灭亡，元朝统一全国。',
    startYear: 1279
  },
  {
    id: 83,
    title: '元朝辽阔疆域',
    locationName: '大都 (代表)',
    latitude: 39.90,
    longitude: 116.41,
    details: '元朝建立了空前统一的多民族国家，疆域"北逾阴山，西极流沙，东尽辽左，南越海表"，远超汉唐。',
    startYear: 1279 
  },
  {
    id: 84,
    title: '行省制度',
    locationName: '大都 (中央)',
    latitude: 39.90,
    longitude: 116.41,
    details: '元朝在中央设中书省，地方设行中书省（简称行省或省），是中国省制的开端，加强了中央对地方的管理。',
    startYear: 1271 
  },
  {
    id: 85,
    title: '元朝对西藏的管辖 (宣政院)',
    locationName: '大都 / 拉萨',
    latitude: 39.90, // Central govt location
    longitude: 116.41,
    details: '元朝在中央设立宣政院，负责管理全国佛教事务及西藏地区军政事务，西藏正式成为元朝中央直接管辖的行政区域。',
    startYear: 1288 
  },
  {
    id: 86,
    title: '元朝设澎湖巡检司管辖台湾',
    locationName: '澎湖',
    latitude: 23.57,
    longitude: 119.57,
    details: '元朝在澎湖设置巡检司，隶属福建行省，负责管辖澎湖和琉球（今台湾），加强了对台湾的管理。',
    startYear: 1310 
  },
  // 元代文化科技 (ID 89, 93/87/94 部分)
  {
    id: 89,
    title: '元曲',
    locationName: '大都',
    latitude: 39.90,
    longitude: 116.41,
    details: '元曲包括散曲和杂剧，元杂剧是成熟的戏剧形式，融合歌舞、动作、念白。代表作家有关汉卿（《窦娥冤》）、马致远等。',
    startYear: 1271 
  },
   {
    id: 930, // 用新ID避免重复，但内容相关
    title: '火药的广泛应用与传播 (元)',
    locationName: '元朝 / 欧亚大陆',
    latitude: 39.90, // Using Dadu as representative
    longitude: 116.41,
    details: '元朝在战争中继续广泛使用火药武器，并通过蒙古西征等途径将火药技术传播至西亚和欧洲。',
    startYear: 1271 
  },
  {
    id: 870, // 用新ID避免重复，但内容相关
    title: '元代都市生活与娱乐',
    locationName: '大都',
    latitude: 39.90,
    longitude: 116.41,
    details: '元大都是国际化大都市，商业繁荣，多种文化交融。杂剧在勾栏瓦舍中盛行。',
    startYear: 1271 
  },
  {
    id: 940, // 用新ID避免重复，但内容相关
    title: '发达的元代交通 (驿站)',
    locationName: '大都 (元朝交通枢纽)',
    latitude: 39.90,
    longitude: 116.41,
    details: '元朝为加强统治，修建了覆盖全国的驿站系统（站赤），极大地便利了公文传递、物资运输和商旅往来。',
    startYear: 1271 
  }
];

module.exports = {
  yuanData: yuanData
} 