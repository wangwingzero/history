const fiveDynastiesTenKingdomsGeneralBorder = {
  "type": "Feature",
  "properties": {
    "NAME": "Five Dynasties and Ten Kingdoms (General Extent)",
    "ABBREVN": "5D10K",
    "INFO_UR": "https://zh.wikipedia.org/wiki/%E4%BA%94%E4%BB%A3%E5%8D%81%E5%9B%BD",
    "SUBJECTO": "Five Dynasties and Ten Kingdoms Period",
    "TYPE": "Historical Period General Extent",
    "BORDERPRECISION": 2, // 2 for generalized representation
    "PARTOF": "China",
    "NOTE": "This is a highly generalized representation of the overall geographic area encompassed by the various states of the Five Dynasties and Ten Kingdoms period (approx. 907-979 CE). It does not show individual state borders, which were numerous and frequently changed."
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          // Starting from the Northeast (Liaodong area was largely under Liao/Khitan)
          // The northern border is complex due to Liao. This will be south of Tang's peak.
          [122.0, 41.0], // Approximate northern reach near Liaodong, south of Liao core
          [118.0, 40.0], // Hebei region, including Yanshan mountains (燕山) area (Yanyun sixteen prefectures often contested/lost)
          [114.0, 38.0], // Shanxi / Hebei border
          [110.0, 35.0], // Central Plains - Yellow River bend area
          [105.0, 34.0], // Wei River Valley, Shaanxi
          [103.0, 32.0], // Southern Gansu / Sichuan border area (influence of Former/Later Shu)
          [100.0, 28.0], // Yunnan border (Dali Kingdom was separate)
          [104.0, 22.0], // Guangxi / Southern Han area
          [110.0, 21.0], // Leizhou Peninsula / Southern Han
          [114.0, 22.5], // Guangdong coast / Southern Han
          [117.0, 24.0], // Fujian coast / Min Kingdom & Southern Tang influence
          [119.5, 26.5], // Zhejiang coast / Wuyue Kingdom
          [121.5, 30.0], // Hangzhou Bay / Wuyue Kingdom
          [121.0, 34.0], // Jiangsu coast / Wu & Southern Tang
          [119.0, 37.0], // Shandong Peninsula
          [122.0, 41.0]  // Closing the loop
        ]
      ]
    ]
  }
};

// Your existing xixiaBorder (no changes made here, but for context)
const xixiaBorder = {
  "type": "Feature",
  "properties": {
    "NAME": "Xixia",
    "ABBREVN": "Xixia",
    "INFO_UR": "https://zh.wikipedia.org/wiki/%E8%A5%BF%E5%A4%8F",
    "SUBJECTO": "Xixia",
    "TYPE": "Historical State",
    "BORDERPRECISION": 1,
    "PARTOF": "China (contemporary with Song, Liao, Jin)"
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [102.04374844726028, 37.738080025488514],
          [99.80230909509034, 37.83996363240533],
          [97.45898613600362, 38.55314888082302],
          [96.23638285300184, 38.756916094656646],
          [92.56857300399652, 38.756916094656646],
          [88.28946151349034, 38.960683308490275],
          [85.84425494748679, 39.57198494999116],
          [85.1310696990691, 40.18328659149205],
          [85.23295330598593, 40.998355446826565],
          [85.94613855440362, 41.40588987449382],
          [88.18757790657351, 41.40588987449382],
          [91.3459697209948, 42.11907512291151],
          [92.26292218324609, 42.11907512291151],
          [96.23638285300184, 41.507773481410624],
          [98.98724023975582, 41.81342430216107],
          [101.43244680575937, 41.202122660660194],
          // [101.45964182098994, 41.202122660660194], // Minor duplicate/very close point
          [103.0625845164284, 41.202122660660194],
          [108.36053207610276, 41.507773481410624],
          [109.37936814527087, 41.202122660660194],
          [110.50008782135582, 39.877635770741605],
          [109.8887861798549, 37.94184723932214],
          [108.97183371760362, 37.738080025488514],
          [102.04374844726028, 37.738080025488514]
        ]
      ]
    ]
  }
};

module.exports = {
  fiveDynastiesTenKingdomsGeneralBorder: fiveDynastiesTenKingdomsGeneralBorder,
  // 为了兼容旧的导入方式，也导出相同的边界为 fiveDynastiesBorder
  fiveDynastiesBorder: fiveDynastiesTenKingdomsGeneralBorder,
  // 西夏边界数据
  xixiaBorder: xixiaBorder
};

// To use the new border:
// console.log(JSON.stringify(fiveDynastiesTenKingdomsGeneralBorder, null, 2));