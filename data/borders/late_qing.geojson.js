const lateQingBorder = {
  "type": "Feature",
  "properties": {
    "NAME": "Qing Empire (Peak Extent - circa 1759-1840s)",
    "SUBJECTO": "Qing Empire",
    "BORDERPRECISION": 3,
    "PARTOF": "Qing Empire",
    "ABBREVN": "Qing (Peak)",
    "NOTE": "This geometry is a visual representation based on historical maps of the Qing Empire at its greatest extent (circa 1759 after the conquest of Xinjiang, until major territorial cessions in the mid-19th century). It includes areas like Outer Manchuria, Outer Mongolia, Tannu Uriankhai, parts of Central Asia, Taiwan, and Sakhalin Island. It aims for visual fidelity but is NOT a GIS-derived precise dataset. The Taiwan Strait is handled for a continuous outer boundary. Northwest frontier adjusted to fix self-intersection issues."
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [ // Polygon for Hainan Island (remains the same as your example)
        [
          [108.5, 18.2], [108.4, 19.1], [108.7, 19.9], [109.5, 20.05],
          [110.3, 19.9], [110.9, 19.5], [110.6, 18.7], [110.0, 18.3],
          [109.2, 18.1], [108.5, 18.2]
        ]
      ],
      [ // Main Polygon: Mainland, Taiwan, Sakhalin, Outer Mongolia, Xinjiang, Outer Manchuria, etc.
        [
          // Start: Northern Fujian coast (Point A), crossing to North Taiwan
          [119.3, 26.0],
          [120.0, 25.8],
          [121.0, 25.5],
          [121.2, 25.3],

          // Taiwan's Coasts
          [121.7, 25.0], [122.1, 24.0], [121.9, 23.0], [121.5, 22.3],
          [120.8, 22.0], [120.0, 22.2], [119.7, 22.8],

          // Cross from SW Taiwan back to Southern Fujian/Guangdong coast (Point B)
          [118.8, 23.0],
          [118.2, 23.3],

          // Mainland SE/South coast
          [117.0, 23.0], [116.0, 22.5], [114.0, 22.2], [113.0, 21.7],
          [111.0, 21.0], [110.0, 20.5], [108.0, 21.2], [106.0, 21.0],

          // SW Frontier (Yunnan, Tibet)
          [104.0, 21.5], [102.0, 22.0], [100.0, 21.5], [98.0, 22.0],
          [97.5, 24.0], [97.0, 26.0], [96.0, 27.5], [94.0, 28.0],
          [92.0, 27.5], [90.0, 27.0], [88.0, 27.0], [85.0, 28.0],
          [82.0, 29.5], [80.0, 30.5], // Western Tibet

          // Western Frontier (Ladakh, Pamirs, East of Lake Balkhash) - ADJUSTED TO PREVENT OVERLAP
          [78.5, 33.0], // Aksai Chin area
          [77.0, 35.5], // Karakoram area
          [75.5, 37.8], // Pamir mountains (southeast)
          [74.0, 39.8], // Pamir mountains (Sarikol Range)
          [73.5, 41.5], // Tian Shan foothills (east of Fergana)
          [75.0, 43.5], // East of Lake Issyk-Kul
          [77.5, 44.8], // South-east of Lake Balkhash
          [80.0, 46.0], // Tarbagatai Mountains foothills
          [82.5, 47.8], // Altai region southern border

          // Northern Frontier (Outer Mongolia, Tannu Uriankhai, Altai, Sayan)
          [85.0, 49.0],
          [88.0, 50.0],
          [92.0, 51.5],
          [96.0, 52.0],
          [100.0, 52.5],
          [104.0, 52.0],
          [108.0, 51.0],
          [112.0, 50.0],
          [116.0, 49.5],
          [118.0, 50.0],
          [120.0, 51.0],

          // Northeastern Frontier (Outer Manchuria, Amur River, Sakhalin Island, Ussuri region)
          [122.0, 52.5], [125.0, 53.0], [128.0, 53.5], [130.0, 54.0],
          [132.0, 55.0], [135.0, 56.0], [138.0, 55.5], [141.0, 54.0],
          [142.0, 53.5],
          // Crossing to Sakhalin Island
          [142.2, 53.8], [142.0, 54.2], [141.8, 54.5], [142.5, 54.8],
          [143.5, 54.0], [144.0, 52.0], [144.5, 50.0], [144.0, 48.0],
          [143.5, 46.0], [142.5, 45.8], [141.8, 46.5], [141.5, 48.0],
          [141.8, 50.0], [141.5, 52.0], [141.7, 53.0],
          // Crossing back to mainland
          [141.5, 52.8], [141.0, 52.5], [140.0, 51.5], [138.0, 49.0],
          [136.0, 47.0], [134.0, 45.0], [132.0, 43.5], [131.0, 42.5],

          // Eastern Coast (mainland, from Korea Bay south to Point A)
          [128.5, 40.5], [127.0, 40.0], [124.8, 39.8], [124.0, 39.0],
          [123.0, 38.5], [122.0, 38.0], [121.0, 37.5], [122.0, 37.0],
          [121.5, 36.0], [120.5, 34.5], [121.0, 32.5], [121.5, 31.0],
          [121.0, 29.5], [120.5, 28.0], [119.8, 27.0],
          [119.3, 26.0]  // Closing loop at Point A
        ]
      ]
    ]
  }
};

module.exports = {
  lateQingBorder: lateQingBorder
};