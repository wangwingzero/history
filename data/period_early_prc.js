// data/period_early_prc.js

const earlyPrcData = [
   // Unit 1: Establishment and Consolidation of the People's Republic of China
  {
    id: 229, // Continuing from Book 3 last ID (228)
    title: '中国人民政治协商会议第一届全体会议召开',
    locationName: '北平 (北京)',
    latitude: 39.90,
    longitude: 116.41,
    details: '1949年9月召开，讨论成立新中国问题。通过《共同纲领》（起临时宪法作用），决定国都、代国歌、国旗等，选举产生中央人民政府委员会。',
    startYear: 1949 // September
  },
  {
    id: 230,
    title: '中华人民共和国成立 (开国大典)',
    locationName: '北京 (天安门广场)',
    latitude: 39.91,
    longitude: 116.40,
    details: '1949年10月1日下午3时，在北京天安门广场隆重举行。毛泽东宣告中华人民共和国中央人民政府成立。标志着中国历史新纪元的开始。',
    startYear: 1949 // October 1
  },
  {
    id: 231,
    title: '西藏和平解放',
    locationName: '西藏 / 北京 (协议签订)',
    latitude: 29.65, // Lhasa
    longitude: 91.12,
    details: '1951年，中央人民政府同西藏地方政府达成《关于和平解放西藏办法的协议》，西藏和平解放。标志着祖国大陆获得统一。',
    startYear: 1951
  },
  {
    id: 232,
    title: '抗美援朝战争开始',
    locationName: '朝鲜 / 鸭绿江',
    latitude: 40.12, // Approx Yalu River border
    longitude: 124.38,
    details: '1950年10月，应朝鲜请求，中国人民志愿军在彭德怀率领下，开赴朝鲜战场，抗美援朝，保家卫国。',
    startYear: 1950
  },
  {
    id: 233,
    title: '上甘岭战役',
    locationName: '上甘岭 (朝鲜)',
    latitude: 38.30, // Approx Sangkumryung area
    longitude: 127.45,
    details: '1952年10月爆发，志愿军坚守阵地40多天，击退敌人900多次冲锋，取得胜利。黄继光、邱少云是此次战役中的战斗英雄。',
    startYear: 1952
  },
  {
    id: 234,
    title: '朝鲜停战协定签署',
    locationName: '板门店 (朝鲜)',
    latitude: 37.96, // Approx Panmunjom
    longitude: 126.67,
    details: '1953年7月，美国被迫在朝鲜停战协定上签字，抗美援朝战争胜利结束。',
    startYear: 1953
  },
  {
    id: 235,
    title: '土地改革运动',
    locationName: '新解放区',
    latitude: 35.0, // Representative latitude for broader China
    longitude: 110.0, // Representative longitude
    details: '1950年中央颁布《中华人民共和国土地改革法》，废除封建土地所有制，实行农民土地所有制。到1952年底基本完成，彻底摧毁了封建土地制度。',
    startYear: 1950
  },
  // Unit 2: Establishment of the Socialist System and Exploration of Socialist Construction (Partial)
  {
    id: 236,
    title: '第一个五年计划开始执行',
    locationName: '中国',
    latitude: 39.90, // Beijing as capital
    longitude: 116.41,
    details: '1953年开始执行。基本任务是集中力量发展重工业，建立国家工业化和国防现代化的初步基础。期间涌现出鞍钢三大工程、长春一汽等成就。',
    startYear: 1953
  },
  {
    id: 237,
    title: '第一届全国人民代表大会召开',
    locationName: '北京',
    latitude: 39.90,
    longitude: 116.41,
    details: '1954年9月召开。大会制定了《中华人民共和国宪法》，这是我国第一部社会主义类型的宪法。标志着人民代表大会制度的确立。',
    startYear: 1954
  },
  {
    id: 238,
    title: '农业、手工业合作化',
    locationName: '中国农村',
    latitude: 35.0, // Representative
    longitude: 110.0,
    details: '土地改革后，国家引导个体农民参加农业生产合作社。经历了互助组、初级社到高级社三个阶段。手工业者也纷纷参加手工业生产合作社。',
    startYear: 1953 // Acceleration period
  },
  {
    id: 239,
    title: '资本主义工商业的社会主义改造 (公私合营)',
    locationName: '中国城市',
    latitude: 31.23, // Shanghai as representative
    longitude: 121.47,
    details: '国家对资本主义工商业采取公私合营方式进行改造。通过加工订货、统购包销、经销代销到全行业公私合营，并对资本家生产资料实行赎买政策。',
    startYear: 1954
  },
  {
    id: 240,
    title: '社会主义基本制度建立',
    locationName: '中国',
    latitude: 39.90, // Beijing
    longitude: 116.41,
    details: '到1956年底，国家基本完成了对农业、手工业和资本主义工商业的社会主义改造（三大改造）。标志着生产资料私有制转变为社会主义公有制，我国进入社会主义初级阶段。',
    startYear: 1956 // End of year, fits period end [1949, 1957)
  },
   // Unit 4: Ethnic Unity and National Reunification (Partial)
  {
    id: 261,
    title: '民族区域自治制度确立与发展',
    locationName: '内蒙古/新疆/广西/宁夏/西藏等',
    latitude: 40.82, // Hohhot, Inner Mongolia
    longitude: 111.66,
    details: '1947年内蒙古自治区成立。新中国成立后，在少数民族聚居地区普遍实行。1984年颁布《民族区域自治法》。这是我国解决民族问题的基本政策和一项基本政治制度。',
    startYear: 1947 // Est. Inner Mongolia, but policy implemented post-1949
  },
  // Unit 5: National Defense Construction and Diplomatic Achievements (Partial)
  {
    id: 272,
    title: '和平共处五项原则提出',
    locationName: '北京 / 新德里 / 仰光',
    latitude: 28.61, // New Delhi
    longitude: 77.21,
    details: '1953年底周恩来首次提出。1954年与印度、缅甸总理共同倡导，内容为互相尊重主权和领土完整、互不侵犯、互不干涉内政、平等互利、和平共处。成为处理国与国关系的基本准则。',
    startYear: 1954
  },
  {
    id: 273,
    title: '参加万隆会议 (亚非会议)',
    locationName: '万隆 (印度尼西亚)',
    latitude: -6.92,
    longitude: 107.61,
    details: '1955年召开。周恩来率团出席，提出"求同存异"方针，促进会议圆满成功，加强了中国同亚非各国的团结合作。',
    startYear: 1955
  },
];

module.exports = {
  earlyPrcData: earlyPrcData
} 