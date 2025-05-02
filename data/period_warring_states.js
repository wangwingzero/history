// data/period_warring_states.js

const warringStatesData = [
  {
    id: 17, // Continue ID sequence
    title: '战国七雄',
    locationName: '中国北方及中部地区', // General area
    latitude: 36.0, // Center of area
    longitude: 114.0,
    details: '战国时期，经过长期兼并战争，剩下齐、楚、燕、韩、赵、魏、秦七个主要诸侯国，史称"战国七雄"。各国纷纷变法图强。',
    startYear: -475 // 战国时期开始年份
  },
  {
    id: 18,
    title: '商鞅变法 (在秦国)',
    locationName: '秦国 (咸阳)',
    latitude: 34.33,
    longitude: 108.70,
    details: '秦孝公任用商鞅进行变法，是战国时期最彻底的变法。废除井田，奖励耕战，建立县制，统一度量衡。使秦国成为最强大的国家。',
    startYear: -356 // 变法开始
  },
  {
    id: 19,
    title: '都江堰',
    locationName: '四川成都都江堰市',
    latitude: 31.00,
    longitude: 103.62,
    details: '战国时期秦国蜀郡太守李冰主持修建的大型水利工程，至今仍在发挥作用，使成都平原成为"天府之国"。',
    startYear: -256 // 大致修建完成年份
  },
  // Appended from ancientChinaPart1Data
  {
    id: 409,
    title: '战国七雄',
    locationName: '中国东部和中部',
    latitude: 36.0, // Approx central point of the 7 states
    longitude: 115.0,
    details: '战国时期（公元前475-前221年），主要诸侯国有齐、楚、燕、韩、赵、魏、秦七国，相互兼并战争更加激烈。',
    startYear: -475 // Start of Warring States
  },
  {
    id: 410,
    title: '商鞅变法',
    locationName: '秦国 (咸阳)',
    latitude: 34.33,
    longitude: 108.70,
    details: '公元前356年起，秦孝公任用商鞅进行变法。主要内容：确立县制、废除贵族世袭特权、改革户籍、奖励耕战、统一度量衡等。使秦国富强，为统一奠定基础。',
    startYear: -356
  },
  {
    id: 411,
    title: '都江堰',
    locationName: '蜀郡 (四川成都附近)',
    latitude: 31.00,
    longitude: 103.62,
    details: '约公元前256年，秦国蜀郡郡守李冰主持修建的大型水利工程，使成都平原成为"天府之国"。',
    startYear: -256 // Approx. construction start
  }
];

module.exports = {
  warringStatesData: warringStatesData
}