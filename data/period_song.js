// data/period_song.js

const songData = [
  // 北宋/南宋事件 (ID 59-72)
  {
    id: 59, 
    title: '北宋建立 (陈桥兵变)',
    locationName: '开封 (北宋都城)',
    latitude: 34.79,
    longitude: 114.31,
    details: '960年，后周大将赵匡胤在陈桥驿发动兵变，被部下"黄袍加身"拥立为帝，回师夺取政权，建立宋朝（北宋），定都开封。',
    startYear: 960
  },
  {
    id: 60,
    title: '宋太祖强化中央集权 (杯酒释兵权)',
    locationName: '开封',
    latitude: 34.79,
    longitude: 114.31,
    details: '宋太祖为防止武将专权，采取"杯酒释兵权"等措施解除高级将领兵权，并从军事、行政、财政等方面加强中央集权。',
    startYear: 961 
  },
  {
    id: 61,
    title: '重文轻武政策',
    locationName: '开封',
    latitude: 34.79,
    longitude: 114.31,
    details: '北宋为巩固统治，采取抑制武将、提升文官地位的国策，文官担任军政要职，但也导致军队战斗力下降和机构臃肿。',
    startYear: 960 
  },
  {
    id: 62,
    title: '王安石变法',
    locationName: '开封',
    latitude: 34.79,
    longitude: 114.31,
    details: '1069年，宋神宗任用王安石进行变法，推行青苗法、募役法、方田均税法、保甲法等措施，意图富国强兵，但因触犯大地主大官僚利益而失败。',
    startYear: 1069
  },
  {
    id: 63, // 辽、西夏、金 建立/事件，与宋相关
    title: '辽朝建立 (与宋并立)',
    locationName: '上京临潢府 (辽都)',
    latitude: 43.97, 
    longitude: 119.38,
    details: '10世纪初（916年），契丹族首领耶律阿保机统一各部，建立契丹国（后称辽）。与宋长期并立。',
    startYear: 916
  },
  {
    id: 64,
    title: '西夏建立 (与宋并立)',
    locationName: '兴庆府 (西夏都城)',
    latitude: 38.49, // Yinchuan
    longitude: 106.23,
    details: '11世纪前期（1038年），党项族首领元昊称帝，建立大夏国（史称西夏），定都兴庆府。与宋长期并立、战争与议和。',
    startYear: 1038
  },
   {
    id: 65,
    title: '澶渊之盟 (宋辽)',
    locationName: '澶州 (今河南濮阳附近)',
    latitude: 35.76,
    longitude: 115.04,
    details: '1005年，辽军南下威胁开封，宋真宗亲征。双方在澶州议和，宋朝向辽支付岁币，换取和平，此后宋辽长期保持和平局面。',
    startYear: 1005
  },
  {
    id: 66,
    title: '宋夏和议',
    locationName: '宋夏边境 (代表: 开封)',
    latitude: 34.79,
    longitude: 114.31,
    details: '经过多次战争后，1044年，宋夏达成和议。元昊向宋称臣，宋每年给西夏岁币，双方恢复边境贸易。',
    startYear: 1044
  },
  {
    id: 67,
    title: '金朝建立 (威胁宋)',
    locationName: '上京会宁府 (金早期都城)',
    latitude: 45.55, 
    longitude: 126.97,
    details: '1115年，女真族首领完颜阿骨打起兵反辽，建立政权，国号大金，是为金太祖。后灭辽、北宋。',
    startYear: 1115
  },
  {
    id: 68,
    title: '金灭辽 (宋参与)',
    locationName: '辽地 (代表: 金上京)',
    latitude: 45.55,
    longitude: 126.97,
    details: '金朝与北宋联合，南北夹击辽朝。1125年，金军俘获辽天祚帝，辽朝灭亡。',
    startYear: 1125
  },
  {
    id: 69,
    title: '靖康之变 (北宋灭亡)',
    locationName: '开封',
    latitude: 34.79,
    longitude: 114.31,
    details: '1127年，金军攻破北宋都城开封，掳走徽、钦二帝及大量宗室、财物，北宋灭亡。',
    startYear: 1127
  },
  {
    id: 70,
    title: '南宋建立',
    locationName: '临安 (南宋都城)',
    latitude: 30.27, // Hangzhou
    longitude: 120.15,
    details: '1127年，北宋宗室赵构（宋高宗）在应天府（今河南商丘）即位，后定都临安（今杭州），建立南宋政权，与金朝对峙。',
    startYear: 1127
  },
  {
    id: 71,
    title: '岳飞抗金',
    locationName: '郾城 (河南)',
    latitude: 33.80,
    longitude: 114.02,
    details: '南宋初年，名将岳飞率领"岳家军"奋勇抗金，取得郾城大捷等胜利，后被宋高宗和秦桧以"莫须有"罪名杀害。',
    startYear: 1140 
  },
  {
    id: 72,
    title: '宋金对峙形成 (绍兴和议)',
    locationName: '淮水-大散关一线',
    latitude: 33.5, 
    longitude: 110.0, 
    details: '1141年宋金达成"绍兴和议"，南宋向金称臣纳贡，双方以淮水至大散关一线为界，形成长期对峙局面。',
    startYear: 1141
  },
  // 两宋经济文化科技 (ID 73-77, 88, 90, 91, 92, 93, 87, 94 部分)
  {
    id: 73,
    title: '宋代农业发展 (占城稻推广)',
    locationName: '江南地区',
    latitude: 30.5, 
    longitude: 119.0,
    details: '两宋时期，南方农业迅速发展，从越南引进的占城稻推广，水稻产量大增，"苏湖熟，天下足"。',
    startYear: 960 
  },
  {
    id: 74,
    title: '宋代手工业兴盛 (景德镇)',
    locationName: '景德镇 (江西)',
    latitude: 29.29,
    longitude: 117.21,
    details: '宋代手工业水平高超，丝织业、造船业发达。江西景德镇成为著名瓷都，所产瓷器享誉中外。',
    startYear: 960 
  },
  {
    id: 75,
    title: '宋代商业繁荣 (交子)',
    locationName: '开封 / 临安 / 成都 (交子)',
    latitude: 30.66, // Chengdu, origin of Jiaozi
    longitude: 104.06,
    details: '两宋城市商业繁荣，出现早市、夜市，娱乐场所"瓦子"兴起。北宋四川地区出现世界上最早的纸币"交子"。',
    startYear: 1000 
  },
  {
    id: 76,
    title: '宋代海外贸易发达',
    locationName: '泉州 / 广州 (主要港口)',
    latitude: 24.91, // Quanzhou
    longitude: 118.58,
    details: '宋代造船和航海技术先进，指南针用于航海。海外贸易兴盛，设立市舶司管理，泉州、广州是著名港口。',
    startYear: 960 
  },
  {
    id: 77,
    title: '经济重心南移完成',
    locationName: '南方地区 (代表: 临安)',
    latitude: 30.27,
    longitude: 120.15,
    details: '从唐中晚期开始，经五代十国至两宋，南方经济持续发展，最终超越北方，中国经济重心南移完成。',
    startYear: 1127 
  },
  {
    id: 88,
    title: '宋词',
    locationName: '开封 / 临安',
    latitude: 30.27, // Using Lin'an as representative
    longitude: 120.15,
    details: '词是宋代主要的文学形式，句子长短不一，便于歌唱。著名词人有苏轼、李清照、辛弃疾等，风格多样。',
    startYear: 960 
  },
  {
    id: 90,
    title: '司马光与《资治通鉴》',
    locationName: '开封',
    latitude: 34.79,
    longitude: 114.31,
    details: '北宋史学家司马光主持编纂《资治通鉴》，是中国第一部编年体通史巨著，记述了从战国到五代共1300多年的历史。',
    startYear: 1084 
  },
  {
    id: 91,
    title: '活字印刷术发明',
    locationName: '开封 (北宋)',
    latitude: 34.79,
    longitude: 114.31,
    details: '北宋匠人毕昇发明了胶泥活字印刷术，是印刷史上的重大革新。后又发展出木活字、金属活字。',
    startYear: 1041 
  },
  {
    id: 92,
    title: '指南针应用于航海',
    locationName: '中国沿海',
    latitude: 24.91, // Using Quanzhou port as representative
    longitude: 118.58,
    details: '北宋末年，指南针开始应用于航海，极大地促进了远洋航行和海外贸易的发展。',
    startYear: 1100 
  },
  {
    id: 93, // 火药归属宋
    title: '火药的军事应用 (宋)',
    locationName: '宋金战场',
    latitude: 34.79, // Using Kaifeng as representative
    longitude: 114.31,
    details: '火药在唐末开始用于军事。宋代广泛用于制造武器，如火枪、火炮、火箭等，用于对辽、金、西夏的战争。',
    startYear: 1100 
  },
   {
    id: 87, // 都市生活归属宋
    title: '宋代都市生活与娱乐',
    locationName: '开封 / 临安',
    latitude: 30.27, // Using Lin'an as representative
    longitude: 120.15,
    details: '宋代城市繁华，市民阶层壮大，文化生活丰富。出现"瓦子""勾栏"等娱乐场所，杂剧雏形、说唱等流行。',
    startYear: 960 
  },
  {
    id: 94, // 交通归属宋
    title: '发达的宋代交通',
    locationName: '开封 / 临安',
    latitude: 30.27,
    longitude: 120.15,
    details: '宋代陆路、水路交通发达，促进了商业和文化交流。南方水运尤其便利。',
    startYear: 960 
  }
  // 蒙古/元朝事件 (ID 78-86, 89, 93/87/94部分) 移至 period_yuan.js
];

module.exports = {
  songData: songData
} 