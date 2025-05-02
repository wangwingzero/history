// data/period_hundred_schools.js

const hundredSchoolsData = [
  {
    id: 50, // Continue ID sequence
    title: '道家 (老子)',
    locationName: '河南鹿邑 (相传出生地) / 函谷关 (著道德经处)',
    latitude: 34.48, // Hangu Pass approx.
    longitude: 111.17,
    details: '创始人老子，春秋末期思想家，主张"无为而治"，认为事物都有对立面且可以相互转化。代表作《道德经》。',
    startYear: -571 // 老子大致生卒年份 (取早期)
  },
  {
    id: 51,
    title: '儒家 (孔子)',
    locationName: '山东曲阜 (出生地、讲学地)',
    latitude: 35.59,
    longitude: 116.98,
    details: '创始人孔子，春秋末期思想家、教育家。核心思想是"仁"和"礼"，主张"为政以德"。言行由弟子整理成《论语》。',
    startYear: -551 // 孔子生年
  },
  {
    id: 52,
    title: '墨家 (墨子)',
    locationName: '山东滕州 (可能出生地)',
    latitude: 35.08, 
    longitude: 117.16,
    details: '创始人墨子，战国时期思想家。主张"兼爱"、"非攻"、"尚贤"。提倡节俭。',
    startYear: -476 // 墨子大致生卒年份 (取早期)
  },
  {
    id: 53,
    title: '孟子 (儒家)',
    locationName: '邹国 (山东邹城附近)', // Mencius's origin
    latitude: 35.40,
    longitude: 116.97,
    details: '战国时期儒家代表人物。发展孔子学说，提出"仁政"思想，主张"民贵君轻"。',
    startYear: -372 // 孟子大致出生年份
  },
   {
    id: 54,
    title: '荀子 (儒家)',
    locationName: '赵国/齐国/楚国 (游历多国)', // Xunzi traveled
    latitude: 36.5, // General latitude for northern states
    longitude: 116.0,
    details: '战国末期儒家代表人物。主张"礼治"，提出"性恶论"，思想对法家有影响。',
    startYear: -313 // 荀子大致出生年份
  },
  {
    id: 55,
    title: '庄子 (道家)',
    locationName: '宋国蒙邑 (河南商丘附近)', // Zhuangzi's origin
    latitude: 34.41,
    longitude: 115.65,
    details: '战国时期道家代表人物。强调顺应自然，追求精神自由与人格独立。著作《庄子》。',
    startYear: -369 // 庄子大致出生年份
  },
  {
    id: 56,
    title: '韩非 (法家)',
    locationName: '韩国 (后入秦)', // Han Fei's origin
    latitude: 34.5, // Approximate latitude for Han state area
    longitude: 113.0,
    details: '战国末期法家集大成者。主张君主应运用法、术、势治国，强调以法治国，树立君主权威。著作《韩非子》。',
    startYear: -280 // 韩非大致出生年份
  },
  {
    id: 570, // ID 57 already used in qin_unification, should be unique. Let's assume this was meant to be e.g. 57.1 or adjust sequence later. Keeping 57 for now per original file.
    title: '孙武与兵家',
    locationName: '齐国/吴国', // Sun Wu served Wu but was from Qi
    latitude: 31.5, // Approximate latitude for Wu region (Suzhou)
    longitude: 120.6,
    details: '春秋末期军事家，兵家创始人。著有《孙子兵法》，奠定中国古代军事理论基础。',
    startYear: -544 // 孙武大致出生年份
  },
  // Appended from ancientChinaPart1Data
  {
    id: 412,
    title: '百家争鸣',
    locationName: '春秋战国时期各地',
    latitude: 34.7, // Central Plains area
    longitude: 113.0,
    details: '思想文化空前繁荣的局面。代表学派有儒家（孔子、孟子、荀子）、道家（老子、庄子）、墨家（墨子）、法家（韩非）等，对后世影响深远。',
    startYear: -551 // Approx. birth of Confucius, marking start of major philosophical activity
  }
];

module.exports = {
  hundredSchoolsData: hundredSchoolsData
}