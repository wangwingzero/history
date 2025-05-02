// data/period_tang.js

const tangData = [
  {
    id: 42,
    title: '唐朝建立',
    locationName: '长安 (唐都)',
    latitude: 34.26,
    longitude: 108.95,
    details: '618年，李渊在长安称帝，建立唐朝，是为唐高祖。随后逐步消灭各地割据势力，统一全国。',
    startYear: 618
  },
  {
    id: 43,
    title: '贞观之治',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐太宗李世民统治时期（年号贞观），吸取隋亡教训，励精图治，虚心纳谏，任用贤才（如房玄龄、杜如晦、魏征），完善制度，使社会安定，国力增强。',
    startYear: 627 // Start of Zhenguan era
  },
  {
    id: 44,
    title: '女皇帝武则天',
    locationName: '洛阳 / 长安',
    latitude: 34.68, // Luoyang was often her base
    longitude: 112.45,
    details: '武则天是中国历史上唯一的女皇帝，唐高宗后执掌朝政，后改国号为周。她继续推行前代有效政策，发展科举，打击旧贵族，推动社会经济发展。',
    startYear: 690 // Year she proclaimed the Zhou dynasty
  },
  {
    id: 45,
    title: '开元盛世',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐玄宗统治前期（年号开元），任用贤相（如姚崇、宋璟），整顿吏治，发展经济，改革税制，使唐朝国力达到顶峰，史称"开元盛世"。',
    startYear: 713 // Start of Kaiyuan era
  },
  {
    id: 46,
    title: '盛唐经济繁荣',
    locationName: '长安 (代表)',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐前期农业发展，工具改进（曲辕犁、筒车），手工业发达（丝织、陶瓷、唐三彩），商业繁荣，长安成为国际大都市。',
    startYear: 713 // Representative start (Kaiyuan)
  },
  {
    id: 47,
    title: '开明的民族政策 (天可汗)',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐太宗击败东突厥后，被各族尊为"天可汗"。唐朝实行开明的民族政策，加强了对西域的统治，促进了民族交融。',
    startYear: 630 // Approx. year title was used after defeating E. Turks
  },
  {
    id: 48,
    title: '文成公主入藏',
    locationName: '逻些 (拉萨)',
    latitude: 29.65,
    longitude: 91.12,
    details: '641年，唐太宗将文成公主嫁给吐蕃赞普松赞干布，带去了大量书籍、工匠和技术，促进了汉藏文化交流和吐蕃发展。',
    startYear: 641
  },
  {
    id: 49,
    title: '开放的社会风气',
    locationName: '长安 (代表)',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐朝社会风气开放包容，妇女社会活动相对自由，长安云集各国商人、使者、留学生，文化多元，尚武精神与文学艺术并存。',
    startYear: 618 // General for Tang
  },
  {
    id: 50,
    title: '唐诗的繁荣',
    locationName: '中国 (代表: 长安)',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐朝是中国诗歌的黄金时代，诗人辈出，题材广泛，风格多样，著名诗人有李白、杜甫、白居易等。',
    startYear: 618 // General for Tang
  },
  {
    id: 51,
    title: '遣唐使来华',
    locationName: '长安',
    latitude: 34.26,
    longitude: 108.95,
    details: '日本多次派遣"遣唐使"及留学生、僧人等到中国学习先进文化、制度、技术等，对日本社会发展产生深远影响。',
    startYear: 630 // Approx start year of missions
  },
  {
    id: 52,
    title: '鉴真东渡',
    locationName: '奈良 (日本)',
    latitude: 34.68,
    longitude: 135.80,
    details: '应日本僧人邀请，扬州大明寺高僧鉴真历经磨难，于754年第六次东渡成功，在日本传播佛教戒律、医药、建筑、书法等。',
    startYear: 754 // Year arrived in Japan
  },
  {
    id: 53,
    title: '唐与新罗的关系',
    locationName: '长安 / 庆州 (新罗)',
    latitude: 34.26, // Using Chang'an
    longitude: 108.95,
    details: '唐朝与朝鲜半岛的新罗往来密切，新罗派遣使节和留学生学习中国文化，模仿唐制建立政治制度，引入科技。',
    startYear: 618 // General for Tang
  },
  {
    id: 54,
    title: '玄奘西行',
    locationName: '那烂陀寺 (天竺/印度)',
    latitude: 25.13, // Approx Nalanda
    longitude: 85.44,
    details: '高僧玄奘于贞观初年西行前往天竺（印度）求法，历时多年，带回大量佛经，其口述由弟子记成《大唐西域记》。',
    startYear: 627 // Approx start year
  },
  {
    id: 55,
    title: '安史之乱',
    locationName: '范阳 (起兵点)',
    latitude: 39.90, // Approx Beijing area
    longitude: 116.41,
    details: '755年，节度使安禄山、史思明发动叛乱，历时八年，对社会经济造成巨大破坏，成为唐朝由盛转衰的转折点。',
    startYear: 755
  },
  {
    id: 56,
    title: '藩镇割据',
    locationName: '各地藩镇 (代表: 长安)',
    latitude: 34.26,
    longitude: 108.95,
    details: '安史之乱后，地方节度使权力膨胀，形成藩镇割据局面，中央权力衰微，相互征伐，加剧了唐朝的衰落。',
    startYear: 763 // After the rebellion ended
  },
  {
    id: 57,
    title: '黄巢起义',
    locationName: '长安 (曾攻占)',
    latitude: 34.26,
    longitude: 108.95,
    details: '唐末爆发大规模农民起义，黄巢率军转战南北，一度攻占长安建立政权，沉重打击了唐朝统治。',
    startYear: 875 // Start of uprising
  },
  {
    id: 58,
    title: '唐朝灭亡与五代十国',
    locationName: '长安 / 洛阳',
    latitude: 34.26, // Using Chang'an
    longitude: 108.95,
    details: '907年，藩镇将领朱温废唐哀帝，建立后梁，唐朝灭亡。此后中国进入五代十国的分裂时期。',
    startYear: 907
  }
];

module.exports = {
  tangData: tangData
} 