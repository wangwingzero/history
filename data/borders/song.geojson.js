const songBorder = {
  "type": "Feature",
  "properties": {
    "NAME": "Northern Song Dynasty (Approx. 1000-1125 AD)",
    "ABBREVN": "Northern Song",
    "INFO_UR": "https://en.wikipedia.org/wiki/Northern_Song_Dynasty",
    "SUBJECTO": "Northern Song Dynasty",
    "BORDERPRECISION": 2, // 1 for original-like detail, 2 for generalized adjustment
    "PARTOF": "Song Empire",
    "NOTE": "This is a generalized representation of the Northern Song Dynasty's approximate territory before major Jin invasions. Borders with Liao, Western Xia, and Dali were complex and contested. This does NOT represent the later Southern Song."
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          // Eastern Coast (similar to your data, but starting slightly more south for N. Song's northern limit)
          [118.0, 38.0], // Bohai Sea coast, south of Liao territory (near modern Tianjin's southern parts/Hebei coast)
          [120.0, 35.0], // Shandong Peninsula
          [121.5, 31.0], // Hangzhou Bay
          [120.0, 28.0], // Wenzhou area
          [118.0, 24.0], // Fujian coast

          // Southern Border (Guangdong, Guangxi, towards Vietnam)
          [113.0, 22.0], // Guangdong coast
          [108.0, 21.0], // Gulf of Tonkin, approximate border with Dai Viet (Vietnam)
          [105.0, 22.0], // Inland Guangxi, border with Dali Kingdom influences

          // Southwestern Border (bordering Dali Kingdom and other local polities)
          [102.0, 24.0], // Yunnan-Guizhou plateau area, east of Dali core
          [101.0, 27.0], // Sichuan/Yunnan border, east of Dali
          [103.0, 30.0], // Sichuan basin western edge

          // Western Border (bordering Western Xia and Tibetan regions/Tubo remnants)
          [104.0, 34.0], // Gansu corridor, east of Xixia's main territory (e.g. east of Lanzhou)
          [105.0, 36.0], // Shaanxi-Gansu, border with Western Xia
          [106.0, 37.5], // Ordos region southern edge, border with Western Xia

          // Northern Border (bordering Liao Dynasty, south of the Sixteen Prefectures)
          [110.0, 38.0], // Shanxi, south of Liao's western part of Sixteen Prefectures
          [113.0, 38.5], // Hebei, along the Taihang Mountains, south of core Liao areas (e.g. south of Baoding/Juma River line)
          [116.0, 38.2], // Hebei plain, south of Beijing/Tianjin core Liao areas
          [118.0, 38.0]  // Closing loop at coast
        ]
      ]
    ]
  }
};

module.exports = {
  songBorder: songBorder,
  // You might want to rename your original if it's meant to be Southern Song or a general Song.
  // originalSongBorder: songBorder // This is your original data from the prompt
};

// console.log(JSON.stringify(northernSongBorderRevised, null, 2));