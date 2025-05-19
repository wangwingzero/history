const shuHanBorder = {
    "type": "Feature",
    "properties": {
        "NAME": "Shu Han",
        "ABBREVN": "Shu",
        "SUBJECTO": "Shu Han",
        "BORDERPRECISION": 2, // Approximate border
        "PARTOF": "Three Kingdoms",
        "TYPE": "Kingdom"
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    // Approximate Shu-Han territory (Sichuan Basin, Hanzhong, parts of Yunnan/Guizhou)
                    [101.0, 22.5], // Southern Yunnan border
                    [103.5, 25.0], // Central Yunnan
                    [105.0, 27.0], // Guizhou influence
                    [106.0, 29.0], // Chongqing area / Eastern Sichuan
                    [107.5, 31.5], // Hanzhong region north extent
                    [106.0, 33.0], // Southern Gansu influence / Qinling Mountains
                    [103.0, 32.5], // Western Qinling / Min Mountains
                    [102.0, 30.0], // Western Sichuan mountains
                    [100.5, 28.0], // Border with Tibetan plateau tribes
                    [100.0, 25.0], // Southwestern Yunnan
                    [101.0, 22.5]  // Closing loop
                ]
            ]
        ]
    }
};

const caoWeiBorder = {
    "type": "Feature",
    "properties": {
        "NAME": "Cao Wei",
        "ABBREVN": "Wei",
        "SUBJECTO": "Cao Wei",
        "BORDERPRECISION": 2, // Approximate border
        "PARTOF": "Three Kingdoms",
        "TYPE": "Kingdom"
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    // Approximate Cao Wei territory (North China, Central Plain, parts of Gansu, North of Huai River)
                    [96.0, 39.0],   // Western Gansu (Dunhuang area, similar to later Northern Wei)
                    [100.0, 38.0],  // Central Gansu
                    [104.0, 35.0],  // Eastern Gansu, south of Ordos
                    [106.0, 33.0],  // Border with Shu-Han in Qinling
                    [107.5, 31.5],  // Southern Hanzhong border (from Shu's perspective, Wei is north)
                    [112.0, 33.8],  // Qinling foothills / Henan border with Shu/Wu
                    [115.0, 33.3],  // Southern Henan (North of Huai River, common border with Wu)
                    [117.0, 33.8],  // Huai River line (Anhui/Jiangsu)
                    [118.0, 34.5],  // North Jiangsu / Shandong south coast
                    [122.0, 37.0],  // Shandong Peninsula tip
                    [121.5, 38.0],  // Shandong North Coast / Bohai Sea
                    [123.5, 39.0],  // Liaodong Peninsula South
                    [124.0, 40.5],  // Liaodong Peninsula North (influence up to Korea)
                    [122.0, 41.5],  // Liaoning West / Liao River
                    [118.0, 41.0],  // Approaching Hebei northern border
                    [115.0, 41.5],  // North of Hebei (Great Wall line)
                    [110.0, 42.0],  // North of Shanxi / Inner Mongolia south
                    [106.0, 42.5],  // Ordos Loop North
                    [102.0, 42.0],  // Inner Mongolia (Hexi Corridor North)
                    [96.0, 39.0]    // Closing loop
                ]
            ]
        ]
    }
};

const easternWuBorder = {
    "type": "Feature",
    "properties": {
        "NAME": "Eastern Wu",
        "ABBREVN": "Wu",
        "SUBJECTO": "Eastern Wu",
        "BORDERPRECISION": 2, // Approximate border
        "PARTOF": "Three Kingdoms",
        "TYPE": "Kingdom"
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    // Approximate Eastern Wu territory (South of Yangtze, Southeast China, parts of Northern Vietnam)
                    [105.0, 21.0], // Northern Vietnam (Jiaozhou)
                    [107.0, 20.0], // Coast of Northern Vietnam
                    [109.0, 20.5], // Leizhou Peninsula West
                    [110.0, 18.5], // Hainan South (influence)
                    [111.5, 20.0], // Hainan East / Mainland coast
                    [113.0, 22.0], // Guangdong coast (Panyu)
                    [116.0, 23.5], // Fujian/Guangdong coast
                    [119.0, 25.0], // Fujian coast (coastal control)
                    [121.5, 26.5], // Zhejiang coast (Wenzhou, Taizhou)
                    [122.0, 30.0], // Hangzhou Bay area (Kuaiji, Jianye/Nanjing north of this)
                    [121.0, 31.8], // North of Hangzhou Bay, along Yangtze south bank
                    [119.0, 32.8], // Huai River region south bank (Jiangsu/Anhui) - border with Wei
                    [117.0, 33.5],  // Huai River (Anhui/Henan border area) - south of Wei's line
                    [115.0, 33.0],  // Southern Henan/Northern Hubei (south of Wei)
                    [112.0, 33.5],  // Hubei (Jingzhou region, contested, showing Wu's general claim south of Wei)
                    [111.0, 30.0],  // Yangtze River, around Yiling/Three Gorges (border with Shu)
                    [108.0, 29.0],  // Eastern Guizhou/Western Hunan influence
                    [106.0, 27.0],  // Border with Shu in Guizhou
                    [105.0, 25.0],  // Southern Guizhou/Northern Guangxi
                    [105.0, 21.0]   // Closing loop towards Jiaozhou
                ]
            ]
        ]
    }
};

const threeKingdomsBorder = [
    {
        id: 1,
        title: '蜀汉',
        geojson: {
            type: 'Feature',
            properties: shuHanBorder.properties,
            geometry: shuHanBorder.geometry
        }
    },
    {
        id: 2,
        title: '曹魏',
        geojson: {
            type: 'Feature',
            properties: caoWeiBorder.properties,
            geometry: caoWeiBorder.geometry
        }
    },
    {
        id: 3,
        title: '东吴',
        geojson: {
            type: 'Feature',
            properties: easternWuBorder.properties,
            geometry: easternWuBorder.geometry
        }
    }
];

module.exports = {
    threeKingdomsBorder: threeKingdomsBorder,
    shuHanBorder: shuHanBorder,
    caoWeiBorder: caoWeiBorder,
    easternWuBorder: easternWuBorder
};