// data/period_nanjing_gov.js

const nanjingGovData = [
  // Unit 5: From KMT-CPC Cooperation to Confrontation (Continued)
  // Note: Nanjing Govt officially established April 1927, but this period often refers to the time after nominal unification in 1928 until the full-scale war with Japan in 1937.
  {
    id: 191, // Start from here for the [1928, 1937) range typically associated with Nanjing Decade
    title: '南昌起义', // Occurred Aug 1927, just after split, leading to CCP's own path
    locationName: '南昌 (江西)',
    latitude: 28.68,
    longitude: 115.86,
    details: '1927年8月1日，周恩来、贺龙、叶挺、朱德、刘伯承等领导革命军发动起义，打响武装反抗国民党反动派的第一枪，是中国共产党创建军队、独立领导武装斗争的开始。',
    startYear: 1927 // Although 1927, it marks the start of the CCP-KMT conflict phase
  },
  {
    id: 192,
    title: '八七会议',
    locationName: '汉口 (武汉)',
    latitude: 30.59,
    longitude: 114.31,
    details: '1927年8月7日，中共中央在汉口召开紧急会议，确定实行土地革命和武装起义方针。毛泽东提出"政权是由枪杆子中取得的"著名论断。',
    startYear: 1927 // Following the split
  },
  {
    id: 193,
    title: '秋收起义',
    locationName: '湘赣边界',
    latitude: 27.5,
    longitude: 114.0,
    details: '1927年9月，毛泽东领导湘赣边界军民发动起义，首次打出"工农革命军"旗帜。起义受挫后，毛泽东决定放弃攻打长沙，向山区进军。',
    startYear: 1927 // CCP independent action
  },
  {
    id: 194,
    title: '井冈山革命根据地创建',
    locationName: '井冈山 (湘赣边界)',
    latitude: 26.57,
    longitude: 114.17,
    details: '1927年10月，毛泽东率秋收起义部队到达井冈山地区，创建中国第一个农村革命根据地，点燃了"工农武装割据"的星星之火。',
    startYear: 1927 // CCP base area
  },
  {
    id: 195,
    title: '井冈山会师',
    locationName: '井冈山',
    latitude: 26.57,
    longitude: 114.17,
    details: '1928年4月，朱德、陈毅率领南昌起义保存下来的部队和湘南农军，与毛泽东领导的工农革命军在井冈山会师，合编为中国工农革命军第四军。',
    startYear: 1928
  },
  {
    id: 196,
    title: '古田会议',
    locationName: '古田 (福建上杭)',
    latitude: 25.23,
    longitude: 116.82,
    details: '1929年12月，红四军党的第九次代表大会在古田召开。会议确立了思想建党、政治建军的原则，强调党对红军的绝对领导。',
    startYear: 1929
  },
  {
    id: 197,
    title: '长征开始',
    locationName: '中央苏区 (江西瑞金等地)',
    latitude: 25.89,
    longitude: 116.03,
    details: '因第五次反"围剿"失败，1934年10月，中共中央机关和中央红军8万多人被迫撤离中央革命根据地，开始长征。',
    startYear: 1934
  },
  {
    id: 198,
    title: '遵义会议',
    locationName: '遵义 (贵州)',
    latitude: 27.71,
    longitude: 106.91,
    details: '1935年1月，中共中央政治局在遵义召开扩大会议。会议纠正了军事上和组织上的"左"倾错误，肯定了毛泽东的正确军事主张，确立了以毛泽东为主要代表的马克思主义正确路线在党中央的领导地位。是党的历史上生死攸关的转折点。',
    startYear: 1935
  },
  {
    id: 199,
    title: '红军三大主力会宁会师',
    locationName: '会宁 / 将台堡 (甘肃)',
    latitude: 35.69,
    longitude: 105.05,
    details: '1936年10月，红一、二、四方面军在甘肃会宁、静宁将台堡地区胜利会师，宣告长征结束。',
    startYear: 1936
  },
  // Unit 6: The Chinese Nation's War of Resistance Against Japan (Prelude)
  {
    id: 200,
    title: '九一八事变',
    locationName: '沈阳 (柳条湖)',
    latitude: 41.84,
    longitude: 123.45,
    details: '1931年9月18日夜，日本关东军制造柳条湖事件，炮轰北大营，攻占沈阳。成为中国人民抗日战争的起点，揭开了世界反法西斯战争的序幕。',
    startYear: 1931 // Fits within Nanjing decade context
  },
  {
    id: 201,
    title: '一二·九运动',
    locationName: '北平 (北京)',
    latitude: 39.90,
    longitude: 116.41,
    details: '1935年12月9日，在中共领导下，北平数千学生举行抗日救亡示威游行，反对"华北自治"，要求停止内战、一致对外。掀起全国抗日救亡运动新高潮。',
    startYear: 1935 // Fits within Nanjing decade context
  },
  {
    id: 202,
    title: '西安事变与和平解决',
    locationName: '西安 (陕西)',
    latitude: 34.26,
    longitude: 108.95,
    details: '1936年12月12日，张学良、杨虎城发动"兵谏"，扣押蒋介石。经中共努力斡旋，最终和平解决，蒋介石接受停止内战、联共抗日主张。标志着十年内战基本结束，抗日民族统一战线初步形成。',
    startYear: 1936 // End of this period, leading to next
  },
];

module.exports = {
  nanjingGovData: nanjingGovData
} 