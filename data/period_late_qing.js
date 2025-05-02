// data/period_late_qing.js

const lateQingData = [
  // Unit 1: China Begins to Descend into a Semi-colonial and Semi-feudal Society
  {
    id: 128, // Continuing from Book 2 last ID (127)
    title: '虎门销烟',
    locationName: '虎门 (广东东莞)',
    latitude: 22.81, // Approx Humen Town
    longitude: 113.66,
    details: '1839年6月，钦差大臣林则徐在虎门海滩将收缴的鸦片当众销毁，显示了中华民族反抗外来侵略的坚强意志。',
    startYear: 1839 // Technically just before 1840, but fits context
  },
  {
    id: 129,
    title: '第一次鸦片战争爆发',
    locationName: '广州 (英军封锁珠江口)',
    latitude: 23.13, // Approx Guangzhou
    longitude: 113.26,
    details: '1840年6月，英国以禁烟为借口，发动侵华战争，企图打开中国市场。',
    startYear: 1840
  },
  {
    id: 130,
    title: '三元里抗英',
    locationName: '三元里 (广州)',
    latitude: 23.16, // Approx Sanyuanli area
    longitude: 113.26,
    details: '1841年5月，广州三元里附近数千乡民包围并痛击英军，是中国近代史上人民自发反抗外来侵略的斗争。',
    startYear: 1841
  },
  {
    id: 131,
    title: '《南京条约》签订',
    locationName: '南京 (江面英舰上)',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1842年8月，清政府战败，被迫签订中国近代史上第一个不平等条约。主要内容：开放五口通商、割香港岛、赔款、协定关税等。中国开始沦为半殖民地半封建社会。',
    startYear: 1842
  },
  {
    id: 132,
    title: '第二次鸦片战争爆发',
    locationName: '广州',
    latitude: 23.13, // Approx Guangzhou
    longitude: 113.26,
    details: '1856年10月，英法联军以"亚罗号事件"和"马神甫事件"为借口发动侵华战争，企图进一步打开中国市场，扩大侵略权益。',
    startYear: 1856
  },
  {
    id: 133,
    title: '《天津条约》签订',
    locationName: '天津',
    latitude: 39.13, // Approx Tianjin
    longitude: 117.20,
    details: '1858年，英法联军攻占大沽炮台，逼近天津。清政府被迫与俄、美、英、法签订，规定允许外国公使进驻北京、增开通商口岸等。',
    startYear: 1858
  },
  {
    id: 134,
    title: '火烧圆明园',
    locationName: '圆明园 (北京西北郊)',
    latitude: 40.01, // Approx Yuanmingyuan Ruins Park
    longitude: 116.30,
    details: '1860年10月，英法联军进逼北京，咸丰帝逃往承德。联军进入北京后，对皇家园林圆明园大肆抢劫并纵火焚烧。',
    startYear: 1860
  },
  {
    id: 135,
    title: '《北京条约》签订',
    locationName: '北京',
    latitude: 39.90, // Approx Beijing
    longitude: 116.41,
    details: '1860年，清政府被迫与英、法、俄分别签订。除承认《天津条约》有效外，还增开天津为商埠，割九龙司地方一区给英国，增加赔款。',
    startYear: 1860
  },
  {
    id: 136,
    title: '俄国侵占中国北方大片领土',
    locationName: '中国东北、西北边疆',
    latitude: 48.0, // Representative latitude for Northeast
    longitude: 128.0, // Representative longitude for Northeast
    details: '第二次鸦片战争前后，俄国通过《瑷珲条约》《北京条约》等一系列不平等条约，割占中国东北和西北150多万平方公里领土。',
    startYear: 1858 // Starting with Treaty of Aigun
  },
  {
    id: 137,
    title: '金田起义',
    locationName: '金田村 (广西桂平)',
    latitude: 23.50, // Approx Guiping area
    longitude: 110.08,
    details: '1851年1月11日，洪秀全在广西桂平县金田村发动武装起义，建号太平天国，起义军称"太平军"。',
    startYear: 1851
  },
  {
    id: 138,
    title: '太平天国定都天京',
    locationName: '天京 (南京)',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1853年3月，太平军攻占南京，将南京改名为天京，定为都城。',
    startYear: 1853
  },
  {
    id: 139,
    title: '《天朝田亩制度》颁布',
    locationName: '天京 (南京)',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1853年，太平天国颁布革命纲领，规定不分男女，按人口和年龄平均分配土地，建立"有田同耕，有饭同食"的理想社会。虽未完全实现，但反映了农民对土地的渴望。',
    startYear: 1853
  },
  {
    id: 140,
    title: '天京事变',
    locationName: '天京 (南京)',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1856年秋，太平天国领导集团发生内讧，杨秀清、韦昌辉被杀，石达开率部出走，太平天国元气大伤，由盛转衰。',
    startYear: 1856
  },
  {
    id: 141,
    title: '《资政新篇》提出',
    locationName: '天京 (南京)',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1859年，洪仁玕提出具有资本主义色彩的改革方案，主张向西方学习、改革内政等，但因环境限制未能实施。',
    startYear: 1859
  },
  {
    id: 142,
    title: '天京陷落',
    locationName: '天京 (南京)',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1864年夏，湘军攻破天京，标志着轰轰烈烈的太平天国农民运动失败。',
    startYear: 1864
  },
  // Unit 2: Early Exploration of Modernization and Intensification of National Crisis
  {
    id: 143,
    title: '洋务运动开始',
    locationName: '北京 / 地方省份',
    latitude: 39.90, // Approx Beijing as center
    longitude: 116.41,
    details: '19世纪60年代至90年代中期，洋务派以"自强""求富"为目标，引进西方先进技术，创办近代工业，掀起了一场旨在"师夷长技以自强"的洋务运动。',
    startYear: 1861
  },
  {
    id: 144,
    title: '洋务派创办近代军事工业',
    locationName: '安庆/上海/福州',
    latitude: 31.23, // Shanghai (Jiangnan Arsenal)
    longitude: 121.47,
    details: '以"自强"为口号，先后创办安庆内军械所、江南机器制造总局、福州船政局等一批近代军事工业。',
    startYear: 1861
  },
  {
    id: 145,
    title: '洋务派创办近代民用企业',
    locationName: '上海/唐山/汉阳',
    latitude: 31.23, // Shanghai (CMSN)
    longitude: 121.47,
    details: '以"求富"为口号，开办轮船招商局、开平煤矿、汉阳铁厂、湖北织布局等近代民用企业。',
    startYear: 1872
  },
  {
    id: 146,
    title: '建立新式海防',
    locationName: '旅顺 / 威海卫 (北洋舰队基地)',
    latitude: 37.52, // Approx Weihai
    longitude: 121.40,
    details: '从19世纪70年代中期起，筹建南洋、北洋、福建三支海军。1885年成立海军衙门统一协调，初步建成北洋舰队。',
    startYear: 1885
  },
  {
    id: 147,
    title: '左宗棠收复新疆',
    locationName: '新疆',
    latitude: 43.83, // Approx Urumqi
    longitude: 87.62,
    details: '1875年，左宗棠被任命为钦差大臣督办新疆军务。1878年，成功收复除伊犁外的新疆领土。1884年清政府在新疆建立行省。',
    startYear: 1875
  },
  {
    id: 148,
    title: '中法战争与镇南关大捷',
    locationName: '镇南关 (广西)',
    latitude: 22.16, // Approx Friendship Pass
    longitude: 106.73,
    details: '1883年中法战争爆发。1885年初，法军进攻镇南关，老将冯子材率军取得镇南关大捷，扭转战局。但清政府却签订了承认法国对越南保护权的条约。',
    startYear: 1885
  },
  {
    id: 149,
    title: '甲午中日战争爆发',
    locationName: '丰岛海面 / 朝鲜',
    latitude: 38.0, // Approx Yellow Sea
    longitude: 124.0,
    details: '1894年7月，日本舰队在朝鲜丰岛海面袭击清军运兵船，挑起战争。因发生在农历甲午年，史称"甲午中日战争"。',
    startYear: 1894
  },
  {
    id: 150,
    title: '黄海海战 (甲午海战)',
    locationName: '黄海大东沟海域',
    latitude: 39.8, // Approx near Yalu River mouth
    longitude: 124.0,
    details: '1894年9月，北洋舰队与日本联合舰队在黄海展开激战。致远舰管带邓世昌壮烈殉国。北洋舰队损失较大，但主力尚存，之后李鸿章命令避战保船。',
    startYear: 1894
  },
  {
    id: 151,
    title: '威海卫战役与北洋舰队覆灭',
    locationName: '威海卫 (山东)',
    latitude: 37.52, // Approx Weihai
    longitude: 121.40,
    details: '1895年初，日军进攻威海卫，北洋水师提督丁汝昌自杀殉国，北洋舰队全军覆没。',
    startYear: 1895
  },
  {
    id: 152,
    title: '《马关条约》签订',
    locationName: '马关 (日本下关)',
    latitude: 33.96, // Approx Shimonoseki
    longitude: 130.94,
    details: '1895年春，清政府派李鸿章与日本签订丧权辱国的条约。内容：割辽东半岛、台湾全岛及附属岛屿、澎湖列岛给日本；赔款白银2亿两；开放沙市、重庆、苏州、杭州为商埠；允许日本在通商口岸开设工厂等。大大加深了中国半殖民地化程度。',
    startYear: 1895
  },
  {
    id: 153,
    title: '列强瓜分中国狂潮',
    locationName: '中国沿海、内地',
    latitude: 39.90, // Representative Beijing
    longitude: 116.41,
    details: '《马关条约》后，俄、法、德三国干涉还辽。以此为契机，列强在中国掀起抢夺利权、强租租借地、划分"势力范围"的瓜分中国狂潮。',
    startYear: 1895
  },
  {
    id: 154,
    title: '美国提出"门户开放"政策',
    locationName: '中国',
    latitude: 39.90, // Representative Beijing
    longitude: 116.41,
    details: '1899年，美国向列强提出"门户开放"照会，承认各国在中国的"势力范围"和既得特权，同时要求各国在租借地和势力范围内享有均等贸易机会。',
    startYear: 1899
  },
  {
    id: 155,
    title: '公车上书',
    locationName: '北京',
    latitude: 39.90, // Approx Beijing
    longitude: 116.41,
    details: '1895年春，《马关条约》签订消息传到北京，康有为、梁启超等联合1300多名举人上书光绪帝，请求拒和、迁都、变法。拉开了维新变法运动的序幕。',
    startYear: 1895
  },
  {
    id: 156,
    title: '维新派组织学会、创办报刊',
    locationName: '北京/上海/天津/长沙',
    latitude: 39.90, // Beijing (Qiangxuehui)
    longitude: 116.41,
    details: '公车上书后，维新人士在各地组织强学会、南学会等，创办《时务报》《国闻报》等报刊，宣传变法思想，推动维新变法运动。',
    startYear: 1895
  },
  {
    id: 157,
    title: '百日维新 (戊戌变法)',
    locationName: '北京',
    latitude: 39.90, // Approx Beijing
    longitude: 116.41,
    details: '1898年6月11日，光绪帝颁布"明定国是"诏书，宣布实行变法。在此后的103天中，发布了一系列变法诏令，内容涉及政治、经济、文化、军事等方面。',
    startYear: 1898
  },
  {
    id: 158,
    title: '戊戌政变',
    locationName: '北京',
    latitude: 39.90, // Approx Beijing
    longitude: 116.41,
    details: '1898年9月21日，慈禧太后等发动政变，囚禁光绪帝，搜捕维新人士。谭嗣同、刘光第、林旭、杨锐、杨深秀、康广仁六人被杀害，史称"戊戌六君子"。变法失败。',
    startYear: 1898
  },
  {
    id: 159,
    title: '义和团运动兴起',
    locationName: '山东 / 直隶 (京津地区)',
    latitude: 37.0, // Approx Shandong origin
    longitude: 117.0,
    details: '19世纪末，随着帝国主义侵略加剧和外国传教士活动猖獗，以"扶清灭洋"为口号的义和团运动在山东、直隶等地兴起并迅速发展。',
    startYear: 1898
  },
  {
    id: 160,
    title: '八国联军侵华',
    locationName: '天津 / 北京',
    latitude: 39.13, // Approx Tianjin
    longitude: 117.20,
    details: '1900年6月，为镇压义和团运动，英、美、俄、日、法、德、意、奥八国组成联军，由英国海军司令西摩尔率领，从天津向北京进犯。',
    startYear: 1900
  },
  {
    id: 161,
    title: '义和团与清军抗击八国联军',
    locationName: '廊坊 / 天津 / 北京',
    latitude: 39.53, // Approx Langfang
    longitude: 116.70,
    details: '义和团在廊坊等地阻击西摩尔联军。在天津保卫战中，义和团与清军同侵略军激战，清军将领聂士成殉国。联军攻陷北京后，义和团仍在各地坚持抵抗。',
    startYear: 1900
  },
  {
    id: 162,
    title: '《辛丑条约》签订',
    locationName: '北京',
    latitude: 39.90, // Approx Beijing
    longitude: 116.41,
    details: '1901年9月，清政府被迫同11国签订丧权辱国的条约。主要内容：赔款白银4.5亿两；保证严禁反帝活动；拆毁大沽炮台，允许外国驻兵；划定使馆界；改总理衙门为外务部等。标志着中国完全陷入半殖民地半封建社会的深渊。',
    startYear: 1901
  },
   // Unit 3: Bourgeois Democratic Revolution and Establishment of the Republic of China (Partial)
  {
    id: 163,
    title: '兴中会成立',
    locationName: '檀香山 (火奴鲁鲁)',
    latitude: 21.31,
    longitude: -157.86,
    details: '1894年11月，孙中山在檀香山联合华侨成立中国第一个资产阶级革命团体，提出"振兴中华"宗旨。',
    startYear: 1894
  },
  {
    id: 164,
    title: '中国同盟会成立',
    locationName: '东京 (日本)',
    latitude: 35.69,
    longitude: 139.69,
    details: '1905年8月，孙中山联合兴中会、华兴会、光复会等成员，在日本东京成立第一个全国规模的、统一的资产阶级革命政党。选举孙中山为总理，创办机关报《民报》。',
    startYear: 1905
  },
  {
    id: 165,
    title: '三民主义提出',
    locationName: '东京 (日本)',
    latitude: 35.69,
    longitude: 139.69,
    details: '1905年，孙中山在《民报》发刊词中，首次提出民族、民权、民生三大主义（三民主义），成为辛亥革命的指导思想。',
    startYear: 1905
  },
  {
    id: 166,
    title: '黄花岗起义',
    locationName: '广州',
    latitude: 23.14, // Approx Huanghuagang area
    longitude: 113.27,
    details: '1911年4月，孙中山、黄兴等策划在广州发动起义，革命党人英勇奋战，最终失败，牺牲烈士遗骸72具葬于黄花岗，极大鼓舞了革命斗志。',
    startYear: 1911
  },
  {
    id: 167,
    title: '武昌起义',
    locationName: '武昌 (湖北武汉)',
    latitude: 30.54, // Approx Wuchang
    longitude: 114.31,
    details: '1911年10月10日晚，湖北新军工程营革命党人发动起义，一夜之间占领武昌，成立湖北军政府。史称"辛亥革命"。',
    startYear: 1911
  },
   // Unit 8: Modern Economy, Social Life, and Education/Culture (Partial)
  {
    id: 223,
    title: '民族资本主义的曲折发展',
    locationName: '上海/南通/天津等地',
    latitude: 31.23, // Shanghai
    longitude: 121.47,
    details: '19世纪六七十年代产生，甲午战后初步发展，一战期间出现"短暂春天"。之后在帝国主义、封建主义、官僚资本主义压迫下艰难发展。代表人物有张謇、荣氏兄弟等。',
    startYear: 1895 // Fits period context
  },
  {
    id: 224,
    title: '近代交通通讯发展',
    locationName: '中国各地',
    latitude: 31.23, // Shanghai as representative
    longitude: 121.47,
    details: '近代以来，火车、轮船、电报、电话、近代邮政等传入并发展，改变了人们的生产生活方式。',
    startYear: 1872 // Fits period context
  },
  {
    id: 226,
    title: '废除科举与兴办新学',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '1905年清政府宣布废除科举制。此前已开始创办新式学堂（如同文馆、京师大学堂等），废科举后新式教育逐渐发展。',
    startYear: 1905
  },
  {
    id: 227,
    title: '近代新闻出版业发展',
    locationName: '上海/天津等地',
    latitude: 31.23, // Shanghai
    longitude: 121.47,
    details: '《申报》（1872年创刊于上海）是近代中国存在时间最长的中文报纸。《大公报》《新闻报》等也影响广泛。商务印书馆（1897年创办于上海）是中国近代规模最大的文化出版机构。',
    startYear: 1872 // Fits period context
  },
];

module.exports = {
  lateQingData: lateQingData
} 