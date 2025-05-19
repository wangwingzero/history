const nanjingNationalGovernment1930Border = {
  "type":"Feature",
  "properties":{
    "NAME":"Chinese Warlords", // 注意：原始数据中此区域标记为“Chinese Warlords”
    "ABBREVN":"Chinese Warlords", // 代表了南京国民政府试图统一的中国核心区域
    "SUBJECTO":"Chinese Warlords",
    "BORDERPRECISION":1, // 调整为1，表示为非常粗略的边界
    "PARTOF":"Chinese Warlords"
  },
  "geometry":{
    "type":"MultiPolygon",
    "coordinates":[ // 这是一个包含单个多边形的MultiPolygon
      [ // 第一个（也是唯一一个）多边形的环列表
        [ // 多边形的外环坐标点 (经度, 纬度)
          // 这是一个非常粗略和简化的1930年中华民国宣称疆域轮廓
          // 请勿用于任何精确的地理分析或历史研究
          [135.0, 53.0], // 东北角点 (大致黑龙江与乌苏里江交汇区)
          [125.0, 53.0], // 向西沿北满边界
          [110.0, 52.5], // 外蒙古北部
          [95.0, 50.0],  // 外蒙古西北部
          [85.0, 47.0],  // 阿尔泰山区域大致边界
          [75.0, 45.0],  // 新疆西北部边界
          [73.5, 39.0],  // 帕米尔高原区域
          [78.0, 35.0],  // 西藏西部/阿克赛钦区域大致边界
          [80.0, 30.0],  // 西藏西南部
          [90.0, 28.0],  // 喜马拉雅山脉南麓/西藏南部
          [98.0, 22.0],  // 云南与缅甸边界大致点
          [106.0, 21.5], // 广西南部海岸/北部湾区域
          [110.0, 20.0], // 雷州半岛/海南岛北部大致区域
          [115.0, 22.5], // 珠江三角洲区域
          [120.0, 25.0], // 福建海岸/台湾海峡西岸
          [122.0, 31.0], // 长江口/杭州湾区域
          [121.5, 37.0], // 山东半岛尖端
          [118.0, 39.0], // 渤海湾西岸
          [123.0, 41.0], // 辽东半岛
          [128.0, 42.5], // 中朝边境区域
          [131.0, 43.5], // 图们江口/近海参崴区域
          [135.0, 53.0]  //闭合点，回到东北角
        ]
      ]
    ]
  }
};

module.exports = {
nanjingNationalGovernment1930Border: nanjingNationalGovernment1930Border
};

// 你可以在这里继续你的代码，例如：
// console.log(JSON.stringify(nanjingNationalGovernment1930Border, null, 2));