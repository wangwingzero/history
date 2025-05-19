const jinBorderRevised = {
  "type": "Feature",
  "properties": {
    "NAME": "Southern Dynasties (Jin, Liu Song, etc.)",
    "ABBREVN": "Southern Dynasties",
    "SUBJECTO": "Southern Dynasties",
    "TYPE": null, // Added TYPE property as per your Sui example
    "BORDERPRECISION": 1,
    "PARTOF": "Southern Dynasties"
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          // Starting in the Southwest (Yunnan/Vietnam border area)
          [102.0, 22.5], // Approx. Yunnan/Vietnam border area
          [104.0, 21.0], // Northern Vietnam (Jiaozhou)
          [106.0, 20.5], // Coast of Northern Vietnam
          [108.0, 21.0], // Leizhou Peninsula West
          [109.5, 19.0], // Hainan South
          [111.0, 20.5], // Hainan East / Mainland coast
          [112.0, 22.0], // Guangdong coast
          [115.0, 23.0], // Fujian/Guangdong coast
          [118.0, 24.5], // Fujian coast
          [121.0, 25.0], // Taiwan West Coast (general influence)
          [122.0, 23.0], // Taiwan South
          [122.5, 24.5], // Taiwan East Coast
          [120.5, 26.0], // Back to mainland - Zhejiang coast
          [121.5, 28.0], // Zhejiang coast
          [122.0, 30.0], // Hangzhou Bay area
          [121.0, 31.5], // North of Hangzhou Bay, along Yangtze
          [119.5, 32.5], // Huai River region (Jiangsu/Anhui)
          [117.0, 33.5], // Huai River (Anhui/Henan border area)
          [115.0, 33.0], // Southern Henan
          [112.0, 33.5], // Qinling foothills (Henan/Hubei)
          [110.0, 33.0], // Southern Shaanxi (Qinling area)
          [107.0, 32.0], // Sichuan Basin North-East
          [105.0, 31.0], // Sichuan Basin Central
          [104.0, 29.0], // Sichuan Basin South
          [103.0, 27.0], // Yunnan/Guizhou North
          [102.0, 25.0], // Yunnan
          [102.0, 22.5]  // Closing loop
        ]
      ]
    ]
  }
};

const tobaWeiBorderRevised = {
  "type": "Feature",
  "properties": {
    "NAME": "Northern Dynasties (Northern Wei, etc.)",
    "ABBREVN": "Northern Dynasties",
    "SUBJECTO": "Northern Dynasties",
    "TYPE": null, // Added TYPE property
    "BORDERPRECISION": 1,
    "PARTOF": "Northern Dynasties"
  },
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          // Starting in the West (Dunhuang area)
          [94.0, 39.5],  // Dunhuang West
          [96.0, 40.0],  // Dunhuang East / Gansu Corridor
          [98.0, 41.5],  // Gansu Corridor / Inner Mongolia West
          [102.0, 42.0], // Inner Mongolia (Hexi Corridor North)
          [106.0, 42.5], // Ordos Loop North
          [110.0, 42.0], // North of Shanxi
          [115.0, 41.5], // North of Hebei
          [118.0, 41.0], // Approaching Liaoning border
          [122.0, 41.5], // Liaoning West / Liao River
          [124.0, 40.5], // Liaodong Peninsula North
          [123.5, 39.0], // Liaodong Peninsula South / Korea Bay
          [121.5, 38.0], // Shandong Peninsula North Coast
          [122.0, 37.0], // Tip of Shandong Peninsula
          [120.0, 36.0], // Shandong South Coast / Yellow Sea
          [118.0, 34.5], // Jiangsu North / Huai River mouth area
          [117.0, 33.8], // Huai River (Anhui/Henan border area) - aligning with Southern border
          [115.0, 33.3], // Southern Henan (North of Southern Dynasties line)
          [112.0, 33.8], // Qinling foothills (North of Southern Dynasties line)
          [110.0, 33.3], // Southern Shaanxi (Qinling area - North)
          [107.0, 34.0], // Wei River Valley / Xian area
          [104.0, 35.0], // Eastern Gansu
          [100.0, 38.0], // Central Gansu
          [96.0, 39.0],  // Western Gansu
          [94.0, 39.5]   // Closing loop
        ]
      ]
    ]
  }
};

const northSouthBorder = [
  {
    id: 1,
    title: '南朝 (晋、宋、齐、梁、陈)', // Updated title to be more encompassing
    geojson: {
      type: 'Feature',
      properties: jinBorderRevised.properties, // Use properties from revised object
      geometry: jinBorderRevised.geometry    // Use geometry from revised object
    }
  },
  {
    id: 2,
    title: '北朝 (北魏等)', // Updated title
    geojson: {
      type: 'Feature',
      properties: tobaWeiBorderRevised.properties, // Use properties from revised object
      geometry: tobaWeiBorderRevised.geometry    // Use geometry from revised object
    }
  }
];

module.exports = {
// Exporting the main structured object, and individual borders if needed
northSouthBorder: northSouthBorder,
jinBorder: jinBorderRevised, // Exporting the revised individual border
tobaWeiBorder: tobaWeiBorderRevised // Exporting the revised individual border
};