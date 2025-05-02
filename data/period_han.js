// data/period_han.js

const hanData = [
  // From period_western_han.js
  {
    id: 35, 
    title: '西汉建立',
    locationName: '长安 (陕西西安)',
    latitude: 34.26,
    longitude: 108.95,
    details: '公元前202年，刘邦战胜项羽，建立汉朝(史称西汉或前汉)，定都长安。',
    startYear: -202 
  },
  {
    id: 36,
    title: '文景之治',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '汉文帝、汉景帝吸取秦亡教训，推行休养生息政策，轻徭薄赋，注重农业，社会经济恢复发展，国力增强，史称"文景之治"。',
    startYear: -180 
  },
  {
    id: 37,
    title: '汉武帝巩固统一',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '汉武帝时期，政治上推行"推恩令"、建立察举制；思想上"罢黜百家，独尊儒术"；经济上统一铸币、盐铁官营；军事上反击匈奴，巩固了大一统局面。',
    startYear: -141 
  },
  // From period_silk_road.js
  {
    id: 41, 
    title: '张骞通西域',
    locationName: '长安 (起点)',
    latitude: 34.26,
    longitude: 108.95,
    details: '汉武帝时期，为联合大月氏夹击匈奴，派张骞两次出使西域，虽未达初衷，但了解了西域情况，加强了汉朝与西域各国的联系。',
    startYear: -138 
  },
  {
    id: 42,
    title: '丝绸之路开通',
    locationName: '长安 (起点) -> 西域 -> 中亚/西亚 -> 欧洲',
    latitude: 34.26, 
    longitude: 108.95,
    details: '张骞通西域后，连接东西方的商路逐渐形成。中国的丝绸、漆器等西传，西域的物产和文化也传入中原，促进了东西方文明交流。这条路被称为"丝绸之路"。',
    startYear: -138 
  },
  {
    id: 43,
    title: '西域都护府设立',
    locationName: '西域 (乌垒/轮台附近)',
    latitude: 41.75, 
    longitude: 84.25,
    details: '公元前60年，西汉设立西域都护府，总管西域事务，保护商旅往来。从此，西域地区正式归属中央政权。',
    startYear: -60 
  },
  // From period_eastern_han.js
  {
    id: 120,
    title: '刘秀建立东汉 (光武中兴)',
    latitude: 34.75,
    longitude: 114.33,
    locationName: '洛阳 (Luoyang)',
    details: '公元25年，刘秀在河北鄗城称帝，后定都洛阳，史称东汉。他采取休养生息政策，社会经济得到恢复和发展，史称"光武中兴"。',
    startYear: 25
  },
  {
    id: 121,
    title: '黄巾起义',
    latitude: 34.90, 
    longitude: 115.30,
    locationName: '巨鹿 (Julu) 等黄河流域',
    details: '公元184年，张角领导的黄巾起义爆发，这是中国历史上规模最大的一次宗教形式组织的民变，沉重打击了东汉统治。',
    startYear: 184
  },
  {
    id: 122,
    title: '党锢之祸',
    latitude: 34.75,
    longitude: 114.33,
    locationName: '洛阳 (Luoyang)',
    details: '东汉末年外戚、宦官专权，士大夫和太学生反对腐败政治而遭到两次大规模迫害事件，加剧了东汉的政治危机。',
    startYear: 166 
  },
  // Appended from ancientChinaPart1Data
  {
    id: 414,
    title: '楚汉之争',
    locationName: '关中 / 楚地等',
    latitude: 34.0, // Representative area between Chang'an and Chu
    longitude: 113.0,
    details: '秦亡后，项羽和刘邦为争夺统治权展开战争。最终刘邦在垓下之战中获胜。',
    startYear: -206 // After fall of Qin
  },
  {
    id: 415,
    title: '汉武帝巩固大一统',
    locationName: '长安 (西汉都城)',
    latitude: 34.26,
    longitude: 108.95,
    details: '政治上颁布"推恩令"，设刺史；思想上"罢黜百家，独尊儒术"；经济上统一铸币（五铢钱），盐铁官营；军事上反击匈奴。',
    startYear: -141 // Emperor Wu takes throne
  },
  {
    id: 416,
    title: '张骞通西域',
    locationName: '西域 / 长安',
    latitude: 34.26, // Chang'an start point
    longitude: 108.95,
    details: '公元前138年和公元前119年，汉武帝派张骞两次出使西域，旨在联络大月氏夹击匈奴。开辟了通往西域的道路，促进了东西方交流（丝绸之路）。',
    startYear: -138 // First mission starts
  },
  {
    id: 417,
    title: '丝绸之路开通',
    locationName: '长安至西域、中亚等地',
    latitude: 34.26, // Chang'an start point
    longitude: 108.95,
    details: '张骞通西域后形成的连接东西方的陆上交通要道。中国的丝绸等商品经此路运往西方，西域的物产等也传入中原。',
    startYear: -119 // Approx. after second mission solidifies routes
  },
  {
    id: 418,
    title: '西域都护府设立',
    locationName: '乌垒城 (新疆轮台附近)',
    latitude: 41.3, // Approx. Luntai area
    longitude: 84.2,
    details: '公元前60年，西汉设立西域都护府，作为管理西域的最高长官。标志着西域正式归属中央政权。',
    startYear: -60
  },
  {
    id: 419,
    title: '东汉建立与光武中兴',
    locationName: '洛阳 (东汉都城)',
    latitude: 34.68,
    longitude: 112.45,
    details: '公元25年，西汉宗室刘秀称帝（光武帝），定都洛阳，史称东汉。他采取一系列措施恢复经济，社会安定，史称"光武中兴"。',
    startYear: 25
  },
  {
    id: 420,
    title: '黄巾起义',
    locationName: '中国东部和中部',
    latitude: 34.0, // Wide area
    longitude: 115.0,
    details: '184年，因东汉后期政治黑暗、民不聊生，张角创立太平道，发动大规模农民起义，主力虽被镇压，但沉重打击了东汉统治。',
    startYear: 184
  },
  {
    id: 421,
    title: '造纸术改进',
    locationName: '洛阳',
    latitude: 34.68,
    longitude: 112.45,
    details: '西汉已有造纸术。105年，东汉宦官蔡伦改进造纸工艺，制造出质优价廉的"蔡侯纸"，对世界文明作出巨大贡献。',
    startYear: 105
  },
  {
    id: 422,
    title: '张仲景与《伤寒杂病论》',
    locationName: '南阳 (河南)',
    latitude: 33.01,
    longitude: 112.53,
    details: '东汉末年名医，撰写《伤寒杂病论》，发展了中医学理论和治疗方法，被后世尊为"医圣"。',
    startYear: 200 // Approx. period of writing
  },
  {
    id: 423,
    title: '华佗 (麻沸散 / 五禽戏)',
    locationName: '沛国谯县 (安徽亳州)',
    latitude: 33.87,
    longitude: 115.78,
    details: '东汉末年名医，擅长外科手术，发明麻醉药剂"麻沸散"和锻炼身体的"五禽戏"。',
    startYear: 180 // Approx. active period
  },
  {
    id: 424,
    title: '《九章算术》',
    locationName: '中国',
    latitude: 34.26, // Chang'an or Luoyang representative
    longitude: 108.95,
    details: '东汉时期成书的数学著作，是中国古代数学的代表作，注重实际应用，在世界数学史上占有重要地位。',
    startYear: 100 // Approx. final compilation period
  },
  {
    id: 425,
    title: '司马迁与《史记》',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '西汉史学家司马迁撰写，是中国古代第一部纪传体通史，记述了从黄帝到汉武帝的历史，文笔优美，影响深远。',
    startYear: -91 // Approx. completion year
  },
  {
    id: 426,
    title: '道教与佛教传入',
    locationName: '中国',
    latitude: 34.68, // Luoyang (Baima Temple)
    longitude: 112.45,
    details: '道教是本土宗教，东汉末年张角太平道和张陵五斗米道是早期形式。佛教于西汉末年传入，东汉明帝时在洛阳建白马寺。',
    startYear: 67 // Approx. traditionally cited year for White Horse Temple founding
  }
];

module.exports = {
  hanData: hanData
} 