// data/period_spring_autumn.js

const springAutumnData = [
  {
    id: 140, // Changed from 14 (Conflict with xia)
    title: '平王东迁',
    locationName: '洛邑 (今洛阳)',
    latitude: 34.68,
    longitude: 112.45,
    details: '公元前770年，周平王为躲避犬戎侵扰，将都城从镐京迁至洛邑，史称东周。东周分为春秋和战国两个时期。',
    startYear: -770 // 公元前770年
  },
  {
    id: 150, // Changed from 15 (Conflict with shang)
    title: '春秋五霸 (齐桓公)',
    locationName: '齐国 (临淄)',
    latitude: 36.83,
    longitude: 118.34,
    details: '春秋时期，周王室衰微，诸侯崛起争霸。齐桓公任用管仲改革，最早称霸，提出"尊王攘夷"口号。',
    startYear: -685 // 齐桓公通过长勺之战确立霸权的大致年份
  },
  {
    id: 160, // Changed from 16 (Conflict with zhou)
    title: '晋楚争霸 (城濮之战)',
    locationName: '城濮 (山东鄄城西南)',
    latitude: 35.53,
    longitude: 115.48,
    details: '公元前632年，晋文公率军在城濮大败楚军，确立霸主地位，是春秋时期重要的争霸战役。',
    startYear: -632
  },
  // Appended from ancientChinaPart1Data
  {
    id: 407, // Changed from 303
    title: '春秋时期诸侯争霸',
    locationName: '中原及周边地区',
    latitude: 34.7, // Central Plains area
    longitude: 113.0,
    details: '周王室衰微，诸侯崛起争夺霸权。齐桓公、晋文公、秦穆公、楚庄王等先后称霸。战争频仍，"礼崩乐坏"。',
    startYear: -770 // Start of Spring & Autumn
  },
  {
    id: 408, // Changed from 304
    title: '铁器牛耕使用与经济发展',
    locationName: '春秋时期',
    latitude: 34.7, // Central Plains area
    longitude: 113.0,
    details: '春秋后期，铁制农具和牛耕出现并推广，促进农业深耕细作，提高生产力。手工业和商业也得到发展。',
    startYear: -500 // Approx. late Spring & Autumn
  }
];

module.exports = {
  springAutumnData: springAutumnData
}