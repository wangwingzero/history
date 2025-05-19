const tangBorderAdjusted = {
  "type": "Feature",
  "properties": {
    "NAME": "Tang Empire (Adjusted Peak Extent)",
    "ABBREVN": "Tang Empire",
    "wikipedia": "https://en.wikipedia.org/wiki/Tang_dynasty#Territory",
    "SUBJECTO": "Tang Empire",
    "BORDERPRECISION": 2, // 1 for original, 2 for generalized adjustment
    "PARTOF": "Tang Empire",
    "NOTE": "This is a generalized representation of the Tang Dynasty at its approximate peak territorial extent (circa 660s-750s CE). Historical borders were often fluid and not precisely demarcated as modern borders."
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [ // Main Polygon representing the core and extended territories
        [
          // Starting from the East (Korean Peninsula/Manchuria influence)
          [128.0, 44.0], // Northeast reach, near former Goguryeo/Balhae areas
          [124.0, 40.0], // Liaodong Peninsula area
          [121.0, 38.0], // Bohai Sea coast

          // Southeast Coast
          [122.0, 31.0], // Hangzhou Bay area
          [120.0, 28.0], // Wenzhou area
          [118.0, 24.0], // Taiwan Strait, Fujian coast
          [113.0, 22.0], // Guangdong coast

          // Southern border (Annam Protectorate - Northern/Central Vietnam)
          [108.0, 21.0], // Gulf of Tonkin, Northern Vietnam
          [106.0, 17.0], // Approximate southern extent of Annam Protectorate (around modern Da Nang)
          [104.0, 15.0], // Further inland towards west

          // Southwestern border (interaction with Nanzhao, Tubo/Tibetan Empire)
          [100.0, 22.0], // Yunnan area, border with Nanzhao
          [98.0, 28.0],  // Sichuan/Tibet frontier
          [92.0, 33.0],  // Qinghai/Tibet frontier, avoiding deep intrusion into Tibetan plateau
          [88.0, 35.0],  // Further west along Kunlun Mountains

          // Western border (Tarim Basin, Anxi Protectorate, parts of Central Asia)
          [75.0, 38.0],  // Pamir Mountains region (approximate westernmost extent of strong influence)
          [70.0, 42.0],  // Near Lake Balkhash region (Suyab/Talas area influence)
          [78.0, 45.0],  // North of Tian Shan Mountains

          // Northern border (Gobi Desert, Mongolian Plateau, influence over Turkic Khaganates)
          [90.0, 48.0],  // Altai Mountains region
          [103.0, 49.0], // Orkhon Valley region (influence)
          [110.0, 47.0], // Inner Mongolia region
          [117.0, 45.0], // Northern Hebei/Liaoning border area
          [122.0, 46.0], // Back towards Manchurian influence area
          [128.0, 44.0]  // Closing the loop
        ]
      ]
      // Potentially other MultiPolygon arrays for islands or discontinuous territories if needed,
      // but for a general overview, one main polygon is usually sufficient.
    ]
  }
};

// To make it usable in a JS environment as requested:
module.exports = {
  tangBorder: tangBorderAdjusted
};

// You can also just use the object directly:
// console.log(JSON.stringify(tangBorderAdjusted, null, 2));