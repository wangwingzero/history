// data/period_liberation_war.js

const liberationWarData = [
  // Unit 7: People's War of Liberation
  {
    id: 214,
    title: '重庆谈判',
    locationName: '重庆',
    latitude: 29.56,
    longitude: 106.55,
    details: '1945年8月至10月，毛泽东应蒋介石邀请赴重庆谈判。国共双方签署《双十协定》，同意和平建国。',
    startYear: 1945 // Although negotiations happened in 1945, this leads into the war period
  },
  {
    id: 215,
    title: '全面内战爆发',
    locationName: '中原解放区',
    latitude: 31.0,
    longitude: 113.0,
    details: '1946年6月，国民党军队全力围攻中原解放区，标志着全面内战爆发。',
    startYear: 1946
  },
  {
    id: 216,
    title: '粉碎国民党全面进攻与重点进攻',
    locationName: '各解放区 / 陕北 / 山东',
    latitude: 35.55, // Menglianggu, Shandong
    longitude: 118.10,
    details: '解放区军民自卫反击，粉碎国民党全面进攻。1947年国民党转为重点进攻陕北和山东，亦被粉碎（如孟良崮战役）。',
    startYear: 1947
  },
  {
    id: 217,
    title: '解放区土地改革',
    locationName: '各解放区',
    latitude: 36.58, // Yan'an as representative
    longitude: 109.49,
    details: '1947年，中共召开全国土地会议，颁布《中国土地法大纲》，实行耕者有其田，激发了农民革命和生产积极性。',
    startYear: 1947
  },
  {
    id: 218,
    title: '刘邓大军千里跃进大别山',
    locationName: '大别山地区',
    latitude: 31.5,
    longitude: 116.0,
    details: '1947年夏，刘伯承、邓小平率军挺进大别山，揭开解放军战略进攻的序幕。',
    startYear: 1947
  },
  {
    id: 219,
    title: '辽沈战役',
    locationName: '东北地区 (锦州/长春/沈阳)',
    latitude: 41.12, // Approx Jinzhou
    longitude: 121.13,
    details: '1948年9月至11月进行，解放东北全境，是三大战役的首战。',
    startYear: 1948
  },
  {
    id: 220,
    title: '淮海战役',
    locationName: '以徐州为中心的广大地区',
    latitude: 34.27, // Approx Xuzhou
    longitude: 117.18,
    details: '1948年11月至1949年1月进行，是三大战役中解放军牺牲最重、歼敌数量最多、影响最深远的战役。解放了长江中下游以北地区。',
    startYear: 1948
  },
  {
    id: 221,
    title: '平津战役',
    locationName: '华北地区 (北平/天津/张家口)',
    latitude: 39.90, // Approx Beiping (Beijing)
    longitude: 116.41,
    details: '1948年11月至1949年1月进行，解放华北全境。北平和平解放。',
    startYear: 1948
  },
  {
    id: 222,
    title: '渡江战役与南京解放',
    locationName: '长江 / 南京',
    latitude: 32.06,
    longitude: 118.78,
    details: '1949年4月，人民解放军百万雄师横渡长江。4月23日，解放南京，宣告国民党反动统治覆灭。',
    startYear: 1949 // Pre-Oct 1st
  },
];

module.exports = {
  liberationWarData: liberationWarData
} 