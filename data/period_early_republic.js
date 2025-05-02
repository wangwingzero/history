// data/period_early_republic.js

const earlyRepublicData = [
  // Unit 3: Bourgeois Democratic Revolution and Establishment of the Republic of China (Continued)
  {
    id: 168,
    title: '中华民国成立',
    locationName: '南京',
    latitude: 32.06,
    longitude: 118.78,
    details: '1912年1月1日，中华民国临时政府在南京成立，孙中山宣誓就任临时大总统，定1912年为民国元年。',
    startYear: 1912
  },
  {
    id: 169,
    title: '清帝退位',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1912年2月12日，清朝末代皇帝溥仪（宣统帝）被迫下诏退位，结束了中国两千多年的君主专制制度。',
    startYear: 1912
  },
  {
    id: 170,
    title: '袁世凯窃取革命果实',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1912年3月，袁世凯在北京就任中华民国临时大总统。4月，临时政府迁往北京。辛亥革命的胜利果实被袁世凯窃取。',
    startYear: 1912
  },
  {
    id: 171,
    title: '《中华民国临时约法》颁布',
    locationName: '南京',
    latitude: 32.06,
    longitude: 118.78,
    details: '1912年3月11日，孙中山颁布。规定主权在民、国民权利自由平等、三权分立、责任内阁制等。是中国历史上第一部资产阶级共和国宪法性质的重要文件。',
    startYear: 1912
  },
  {
    id: 172,
    title: '二次革命',
    locationName: '江西 / 南京等地',
    latitude: 28.68, // Nanchang, Jiangxi
    longitude: 115.86,
    details: '1913年，"宋教仁案"后，孙中山、黄兴等号召武力反袁，发动"二次革命"，但很快被袁世凯镇压。',
    startYear: 1913
  },
  {
    id: 173,
    title: '袁世凯复辟帝制',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1915年末，袁世凯宣布接受帝位，改国号为"中华帝国"，定1916年为"洪宪元年"，准备登基。',
    startYear: 1915
  },
  {
    id: 174,
    title: '护国战争',
    locationName: '云南 / 四川 / 贵州等地',
    latitude: 25.04, // Approx Kunming, Yunnan
    longitude: 102.71,
    details: '1915年底，蔡锷、李烈钧、唐继尧在云南宣告独立，组织护国军讨伐袁世凯。北洋军队节节败退，袁世凯被迫取消帝制，不久在绝望中死去。',
    startYear: 1915
  },
  {
    id: 175,
    title: '军阀割据',
    locationName: '中国各地',
    latitude: 39.90, // Beijing central govt weak
    longitude: 116.41,
    details: '袁世凯死后，北洋军阀分裂。中国陷入军阀割据纷争的动乱之中。主要有直系（冯国璋、曹锟）、皖系（段祺瑞）、奉系（张作霖）等。',
    startYear: 1916
  },
  // Unit 4: The Beginning of the New Democratic Revolution
  {
    id: 176,
    title: '新文化运动兴起',
    locationName: '上海 / 北京',
    latitude: 31.23, // Shanghai (La Jeunesse创刊)
    longitude: 121.47,
    details: '1915年，陈独秀在上海创办《青年杂志》（后改名《新青年》），标志着新文化运动兴起。主要阵地是《新青年》和北京大学。代表人物有陈独秀、李大钊、胡适、鲁迅等。',
    startYear: 1915
  },
  {
    id: 177,
    title: '新文化运动内容 (提倡民主科学、新道德、新文学)',
    locationName: '北京 / 上海',
    latitude: 39.90, // Beijing (Peking University)
    longitude: 116.41,
    details: '高举"民主"（德先生）和"科学"（赛先生）两面旗帜，抨击旧道德、旧文化，提倡新道德、新文学（文学革命）。动摇了封建道德礼教的统治地位。',
    startYear: 1915 // General period
  },
  {
    id: 178,
    title: '五四运动爆发',
    locationName: '北京 (天安门)',
    latitude: 39.91, // Approx Tiananmen Square
    longitude: 116.40,
    details: '1919年5月4日，因巴黎和会中国外交失败，北京三千多名学生集会游行，要求"外争主权，内除国贼"，遭北洋政府镇压。',
    startYear: 1919
  },
  {
    id: 179,
    title: '五四运动扩大与胜利',
    locationName: '上海 / 全国',
    latitude: 31.23, // Approx Shanghai
    longitude: 121.47,
    details: '6月5日起，上海工人罢工、商人罢市，运动中心转移到上海，工人阶级成为主力。北洋政府被迫释放学生、罢免卖国贼职务、拒签和约。五四运动是中国新民主主义革命的开端。',
    startYear: 1919
  },
  {
    id: 180,
    title: '马克思主义在中国传播',
    locationName: '北京 / 上海等地',
    latitude: 39.90, // Approx Beijing
    longitude: 116.41,
    details: '五四运动后，李大钊等先进知识分子开始系统宣传马克思主义。1919年《新青年》出版"马克思研究专号"。',
    startYear: 1919
  },
  {
    id: 181,
    title: '共产党早期组织建立',
    locationName: '上海 / 北京 / 长沙等地',
    latitude: 31.23, // Shanghai (first group)
    longitude: 121.47,
    details: '1920年夏，陈独秀在上海建立中国第一个共产党早期组织。随后各地相继建立，为中共成立奠定基础。',
    startYear: 1920
  },
  {
    id: 182,
    title: '中共一大召开 (中国共产党诞生)',
    locationName: '上海 / 嘉兴南湖',
    latitude: 31.23, // Shanghai start
    longitude: 121.47,
    details: '1921年7月23日，在上海秘密召开（后转移到嘉兴南湖）。大会确定党的名称为"中国共产党"，奋斗目标是推翻资产阶级政权，建立无产阶级专政，实现共产主义。选举产生中央局。中共的诞生是开天辟地的大事变。',
    startYear: 1921
  },
  {
    id: 183,
    title: '中共二大召开',
    locationName: '上海',
    latitude: 31.23, // Approx Shanghai
    longitude: 121.47,
    details: '1922年7月，制定了党的最低纲领：打倒军阀，推翻帝国主义压迫，统一中国为真正的民主共和国。这是首次提出明确的反帝反封建民主革命纲领。',
    startYear: 1922
  },
  {
    id: 184,
    title: '第一次工人运动高潮 (京汉铁路工人大罢工)',
    locationName: '京汉铁路沿线',
    latitude: 34.76, // Approx Zhengzhou
    longitude: 113.65,
    details: '1922年初至1923年春，中共领导了第一次工人运动高潮。1923年2月京汉铁路工人大罢工遭军阀吴佩孚血腥镇压（二七惨案），运动转入低潮。',
    startYear: 1923
  },
  // Unit 5: From KMT-CPC Cooperation to Confrontation (Partial)
  {
    id: 185,
    title: '第一次国共合作实现',
    locationName: '广州',
    latitude: 23.13,
    longitude: 113.26,
    details: '1924年1月，国民党一大在广州召开。大会通过宣言，重新解释三民主义（后称新三民主义），确立"联俄、联共、扶助农工"三大政策，标志着第一次国共合作正式建立。',
    startYear: 1924
  },
  {
    id: 186,
    title: '黄埔军校创办',
    locationName: '黄埔 (广州)',
    latitude: 23.11,
    longitude: 113.44,
    details: '1924年5月，在苏联和中共帮助下创办，孙中山任总理，蒋介石任校长，周恩来任政治部主任。培养了大批军事政治人才。',
    startYear: 1924
  },
  {
    id: 187,
    title: '北伐战争开始',
    locationName: '广州',
    latitude: 23.13,
    longitude: 113.26,
    details: '1926年7月，国民革命军10万人誓师北伐，蒋介石任总司令。目标是推翻吴佩孚、孙传芳、张作霖等北洋军阀统治，统一全国。',
    startYear: 1926
  },
  {
    id: 188,
    title: '北伐胜利进军',
    locationName: '汀泗桥/贺胜桥/武昌',
    latitude: 30.54, // Wuchang
    longitude: 114.31,
    details: '北伐军在工农群众支持下，以叶挺独立团等为先锋，连克汀泗桥、贺胜桥，攻占武昌，基本消灭吴佩孚主力。随后又歼灭孙传芳主力。',
    startYear: 1926 // Late 1926 - Early 1927, fits period
  },
   {
    id: 189,
    title: '国民党右派叛变革命 (四一二 / 七一五政变)',
    locationName: '上海 / 武汉',
    latitude: 31.23, // Shanghai
    longitude: 121.47,
    details: '1927年4月12日，蒋介石在上海发动反革命政变。7月15日，汪精卫在武汉召开"分共会议"。国民党右派大肆屠杀共产党人和革命群众，第一次国共合作破裂，国民革命失败。',
    startYear: 1927 // Fits end of period
  },
  {
    id: 190,
    title: '南京国民政府成立',
    locationName: '南京',
    latitude: 32.06, // Approx Nanjing
    longitude: 118.78,
    details: '1927年4月，蒋介石在南京建立代表大地主大资产阶级利益的"国民政府"。',
    startYear: 1927 // Fits end of period
  },
  // Unit 8: Modern Economy, Social Life, and Education/Culture (Partial)
   {
    id: 225,
    title: '社会生活与习俗变迁',
    locationName: '中国 (尤其城市)',
    latitude: 31.23, // Shanghai as representative
    longitude: 121.47,
    details: '辛亥革命后，剪辫易服、废跪拜、改称谓、禁缠足等成为风尚。西餐、西式婚礼、新式娱乐方式传入，社会生活呈现新旧交织、多元发展景象。',
    startYear: 1912 // Fits period context
  },
  {
    id: 228,
    title: '近代文学艺术成就',
    locationName: '中国',
    latitude: 31.23, // Shanghai/Beijing centers
    longitude: 121.47,
    details: '20世纪初以后，文学艺术空前繁荣。鲁迅的《狂人日记》《阿Q正传》，郭沫若、茅盾、巴金、老舍、曹禺等的作品影响深远。聂耳《义勇军进行曲》、冼星海《黄河大合唱》成为时代强音。徐悲鸿、齐白石等为绘画大师。电影事业起步。',
    startYear: 1918 // Fits period context
  },
];

module.exports = {
  earlyRepublicData: earlyRepublicData
} 