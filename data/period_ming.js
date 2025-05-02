// data/period_ming.js

const mingData = [
  {
    id: 95, // Continue ID sequence
    title: '明朝建立',
    locationName: '应天府 (南京)',
    latitude: 32.06,
    longitude: 118.78,
    details: '元末农民起义中，朱元璋力量壮大。1368年，朱元璋在应天府称帝，建立明朝，是为明太祖（洪武帝）。同年明军攻占大都，元朝结束。',
    startYear: 1368
  },
  {
    id: 96,
    title: '朱元璋强化皇权 (废丞相设三司)',
    locationName: '南京 (明初都城)',
    latitude: 32.06,
    longitude: 118.78,
    details: '明太祖为加强君主专制，废除丞相制度和中书省，分权于六部；地方废行省设三司（承宣布政使司、提刑按察使司、都指挥使司）；设锦衣卫特务机构。',
    startYear: 1380 // Year chancellorship abolished
  },
  {
    id: 97,
    title: '科举考试的变化 (八股取士)',
    locationName: '南京 / 北京',
    latitude: 39.90, // Later capital Beijing
    longitude: 116.41,
    details: '明朝科举考试内容限于“四书”“五经”，答卷须以朱熹《四书集注》为准，文体严格规定为八股文，严重束缚思想。',
    startYear: 1368 // General policy throughout Ming
  },
  {
    id: 98,
    title: '明代经济发展 (引进新作物)',
    locationName: '苏州 / 景德镇',
    latitude: 31.30, // Suzhou (silk)
    longitude: 120.62,
    details: '明代农业、手工业、商业继续发展。引进了玉米、甘薯、马铃薯等高产作物。苏州是丝织业中心，景德镇是瓷都。出现晋商、徽商等大商帮。',
    startYear: 1368 // General for Ming
  },
  {
    id: 99,
    title: '郑和下西洋',
    locationName: '南京 (出发地) / 印度洋沿岸 / 非洲东岸',
    latitude: 32.06, // Nanjing starting point
    longitude: 118.78,
    details: '1405年至1433年，明成祖派郑和率领庞大船队七次出使西洋，到达亚非三十多个国家和地区，是世界航海史上的壮举，促进了中外交流。',
    startYear: 1405
  },
  {
    id: 100,
    title: '戚继光抗倭',
    locationName: '台州 (浙江) / 福建 / 广东',
    latitude: 28.68, // Taizhou, Zhejiang
    longitude: 121.42,
    details: '明朝中后期，倭寇侵扰东南沿海。名将戚继光组建“戚家军”，在台州等地九战九捷，后转战闽粤，基本肃清倭患。',
    startYear: 1561 // Year of Taizhou victory
  },
  {
    id: 101,
    title: '葡萄牙攫取澳门居住权',
    locationName: '澳门',
    latitude: 22.19,
    longitude: 113.54,
    details: '16世纪中期（1553年），葡萄牙殖民者以晾晒货物为借口，通过贿赂广东官员，攫取了在澳门的居住权。',
    startYear: 1553
  },
  {
    id: 102,
    title: '李时珍与《本草纲目》',
    locationName: '蕲州 (湖北)',
    latitude: 30.00, // Approx Qizhou
    longitude: 115.50,
    details: '明代医药学家李时珍历时27年编成药物学巨著《本草纲目》，总结了中国古代药物学成就，被誉为“东方医药巨典”。',
    startYear: 1578 // Approx completion year
  },
  {
    id: 103,
    title: '宋应星与《天工开物》',
    locationName: '江西',
    latitude: 28.68, // Provincial representative
    longitude: 115.86,
    details: '明末科学家宋应星编著《天工开物》，系统总结了明代农业和手工业生产技术，是中国古代科技百科全书。',
    startYear: 1637 // Publication year
  },
  {
    id: 104,
    title: '修建明长城',
    locationName: '山海关 / 嘉峪关',
    latitude: 40.01, // Shanhai Pass
    longitude: 119.75,
    details: '明朝为防御北方蒙古势力南下，大规模修筑长城，东起鸭绿江，西至嘉峪关，主体多用砖石，工程浩大坚固。',
    startYear: 1368 // General for Ming construction period
  },
  {
    id: 105,
    title: '营建北京城 (紫禁城)',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '明成祖迁都北京后，从1406年起大规模营建北京城和宫殿（紫禁城），1420年基本建成，布局严谨，建筑宏伟。',
    startYear: 1406
  },
  {
    id: 106,
    title: '明代通俗小说',
    locationName: '中国',
    latitude: 39.90, // Representative: Beijing
    longitude: 116.41,
    details: '明代市民文化发展，长篇章回体小说创作繁荣，产生《三国演义》《水浒传》《西游记》等不朽名著。',
    startYear: 1368 // General for Ming
  },
  {
    id: 107,
    title: '明末政治腐败 (宦官专权)',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '明朝中后期，皇帝怠政，宦官权力膨胀，如刘瑾、魏忠贤等专权乱政，加之大臣结党营私，政治日益腐败。',
    startYear: 1500 // General period mid-late Ming
  },
  {
    id: 108,
    title: '李自成起义',
    locationName: '陕西 / 北京',
    latitude: 34.26, // Shaanxi origin
    longitude: 108.95,
    details: '明末阶级矛盾尖锐，农民起义爆发。李自成提出“均田免赋”口号，得到拥护，1644年在西安建大顺政权，同年攻占北京。',
    startYear: 1628 // Start of major uprisings
  },
  {
    id: 109,
    title: '满洲(后金/清)兴起',
    locationName: '赫图阿拉 / 盛京 (沈阳)',
    latitude: 41.80, // Shenyang
    longitude: 123.43,
    details: '1616年，女真首领努尔哈赤统一女真各部，建立后金政权。其子皇太极于1636年改国号为清。',
    startYear: 1616 // Later Jin established
  },
  {
    id: 110,
    title: '明朝灭亡',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1644年4月，李自成农民军攻入北京，崇祯帝自缢于煤山，统治中国276年的明朝灭亡。',
    startYear: 1644
  }
];

module.exports = {
  mingData: mingData
}