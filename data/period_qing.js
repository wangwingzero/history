// data/period_qing.js

const qingData = [
  {
    id: 111, // Continue ID sequence
    title: '清朝建立全国统治',
    locationName: '北京 (清都)',
    latitude: 39.90,
    longitude: 116.41,
    details: '1644年，清军在明将吴三桂引导下入关，打败李自成农民军，定都北京。随后逐步消灭南明等抗清力量，确立对全国的统治。',
    startYear: 1644 // Year Qing entered Beijing
  },
  {
    id: 112,
    title: '郑成功收复台湾',
    locationName: '台湾 (热兰遮城/赤崁楼)',
    latitude: 22.99, // Tainan area
    longitude: 120.19,
    details: '1661年，南明将领郑成功率军横渡台湾海峡，围攻荷兰殖民者据点。1662年初，迫使荷兰总督投降，收复被侵占38年的台湾。',
    startYear: 1662
  },
  {
    id: 113,
    title: '清朝设置台湾府',
    locationName: '台湾',
    latitude: 23.70, // Approx center of Taiwan island
    longitude: 120.95,
    details: '1683年，清军进攻台湾，郑氏政权投降。1684年，清朝设置台湾府，隶属福建省，加强了对台湾的管辖。1885年台湾正式建省。',
    startYear: 1684 // Year Taiwan Prefecture established
  },
  {
    id: 114,
    title: '清朝对西藏的有效管辖 (册封与驻藏大臣)',
    locationName: '拉萨',
    latitude: 29.65,
    longitude: 91.12,
    details: '清初顺治帝册封五世达赖，康熙帝册封五世班禅。1727年设驻藏大臣监督西藏政务。1793年颁布《钦定藏内善后章程》，确立金瓶掣签制度。',
    startYear: 1727 // Year Amban post established
  },
  {
    id: 115,
    title: '平定大小和卓叛乱巩固新疆',
    locationName: '新疆 (伊犁)',
    latitude: 43.92, // Yili (Ghulja)
    longitude: 81.32,
    details: '康熙、雍正、乾隆时期，清朝多次用兵，平定准噶尔部及大小和卓叛乱，巩固了西北边疆。乾隆时期设伊犁将军，管辖整个新疆地区。',
    startYear: 1759 // Year rebellion finally quelled
  },
  {
    id: 116,
    title: '雅克萨自卫反击战',
    locationName: '雅克萨 (今俄罗斯阿尔巴津)',
    latitude: 53.97,
    longitude: 123.68,
    details: '17世纪中期，沙俄侵入黑龙江流域。1685、1686年，康熙帝派清军两次进攻沙俄据点雅克萨，迫使其同意谈判。',
    startYear: 1685 // First attack
  },
  {
    id: 117,
    title: '《尼布楚条约》签订',
    locationName: '尼布楚 (今俄罗斯涅尔琴斯克)',
    latitude: 51.98,
    longitude: 119.59,
    details: '1689年，中俄双方经平等协商签订《尼布楚条约》，从法律上确定了中俄东段边界，肯定了黑龙江和乌苏里江流域广大地区为中国领土。',
    startYear: 1689
  },
  {
    id: 118,
    title: '清朝奠定现代中国版图',
    locationName: '北京 (代表)',
    latitude: 39.90,
    longitude: 116.41,
    details: '经过康雍乾时期的巩固，清朝疆域西跨葱岭，西北达巴尔喀什湖，北接西伯利亚，东北至外兴安岭和库页岛，东临太平洋，东南至台湾及其附属岛屿，南至南海诸岛。',
    startYear: 1760 // Approx. after consolidation of Xinjiang
  },
  {
    id: 119,
    title: '清前期经济恢复与发展 ("康乾盛世")',
    locationName: '中国',
    latitude: 39.90, // Representative: Beijing
    longitude: 116.41,
    details: '清初统治者重视恢复经济，推行垦荒、轻徭薄赋政策，农业、手工业、商业得到发展，国力增强，出现所谓“康乾盛世”局面。',
    startYear: 1662 // Start of Kangxi reign approx. beginning of recovery
  },
  {
    id: 120,
    title: '清朝人口快速增长',
    locationName: '中国',
    latitude: 39.90, // Representative: Beijing
    longitude: 116.41,
    details: '清朝前期社会相对安定，经济发展，加之高产作物推广，人口迅速增长，到乾隆末年已突破3亿，但也带来巨大的人地压力。',
    startYear: 1700 // Approx period of rapid growth starts
  },
  {
    id: 121,
    title: '军机处设立',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '雍正年间，为处理西北军务设立军机房，后改为军机处。军机大臣由皇帝钦定，跪受笔录，传达旨意，使君主专制达到顶峰。',
    startYear: 1729 // Approx establishment year
  },
  {
    id: 122,
    title: '文字狱与文化专制',
    locationName: '北京 (中枢)',
    latitude: 39.90,
    longitude: 116.41,
    details: '康雍乾三朝大兴文字狱，从知识分子诗文中摘取字句，罗织罪名，残酷迫害，造成社会恐怖，禁锢思想。',
    startYear: 1662 // Starts under Kangxi, intensifies later
  },
  {
    id: 123,
    title: '清中后期社会矛盾加剧 (贪腐)',
    locationName: '中国',
    latitude: 39.90, // Representative: Beijing
    longitude: 116.41,
    details: '乾隆后期，官场贪污腐败之风盛行（如和珅案），加之土地兼并严重，贫富分化加剧，社会矛盾日益尖锐。',
    startYear: 1775 // Approx later Qianlong period
  },
  {
    id: 124,
    title: '闭关锁国政策',
    locationName: '广州 (主要口岸)',
    latitude: 23.13,
    longitude: 113.26,
    details: '清朝统治者实行严格限制对外贸易的政策，防范“外夷”和沿海人民。乾隆时仅留广州一口通商，由“广州十三行”垄断贸易，使中国逐渐落后于世界潮流。',
    startYear: 1757 // Year Canton system fully enforced
  },
  {
    id: 125,
    title: '《红楼梦》问世',
    locationName: '北京 (作者活动地)',
    latitude: 39.90,
    longitude: 116.41,
    details: '清代小说创作达到高峰，曹雪芹创作的《红楼梦》（初名《石头记》）是中国古典小说的巅峰之作，具有极高的思想和艺术价值。',
    startYear: 1784 // Approx year of first printed editions
  },
  {
    id: 126,
    title: '昆曲与京剧艺术',
    locationName: '苏州 / 北京',
    latitude: 39.90, // Beijing for Jingju development
    longitude: 116.41,
    details: '清代戏曲繁荣。昆曲在清前期达鼎盛。乾隆末年四大徽班进京，吸收昆曲、秦腔等精华，融合发展，于道光年间形成京剧。',
    startYear: 1790 // Year Hui troupes entered Beijing, start of Jingju formation
  },
  {
    id: 127,
    title: '编纂大型典籍 (《四库全书》)',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '清朝统治者为显示文治，组织编纂大型丛书。乾隆时期编纂的《四库全书》是中国历史上规模最大的丛书，但也借机查禁、销毁了大量不利于统治的书籍。',
    startYear: 1773 // Start year of compilation
  }
];

module.exports = {
  qingData: qingData
}