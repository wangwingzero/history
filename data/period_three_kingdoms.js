// data/period_three_kingdoms.js

const threeKingdomsData = [
  // Appended from ancientChinaPart1Data
  {
    id: 427,
    title: '官渡之战',
    locationName: '官渡 (河南中牟附近)',
    latitude: 34.90,
    longitude: 114.10,
    details: '200年，曹操以少胜多击败袁绍主力，奠定统一北方的基础。',
    startYear: 200
  },
  {
    id: 428,
    title: '赤壁之战',
    locationName: '赤壁 (湖北)',
    latitude: 29.88,
    longitude: 113.60,
    details: '208年，孙权、刘备联军以少胜多，在长江赤壁大败曹操军队，奠定了三国鼎立的基础。',
    startYear: 208
  },
  {
    id: 429,
    title: '三国鼎立局面形成',
    locationName: '魏 (洛阳)/蜀 (成都)/吴 (建业)',
    latitude: 30.66, // Chengdu as one capital
    longitude: 104.06,
    details: '220年曹丕称帝建魏；221年刘备称帝建蜀汉；229年孙权称帝建吴。形成三国分立对峙局面。',
    startYear: 229 // Wu established, completing the triad
  }
];

module.exports = {
  threeKingdomsData: threeKingdomsData
} 