// data/period_sui.js

const suiData = [
  {
    id: 38, // Continue ID sequence from westernHanData
    title: '隋朝建立与统一',
    locationName: '长安 (隋都)',
    latitude: 34.26,
    longitude: 108.95,
    details: '581年，杨坚（隋文帝）取代北周建立隋朝，定都长安。589年，隋军灭南方的陈朝，结束了长期的分裂局面，重新统一中国。',
    startYear: 581 // Year Sui was established
  },
  {
    id: 39,
    title: '开通大运河',
    locationName: '洛阳 (运河中心)',
    latitude: 34.68,
    longitude: 112.45,
    details: '从605年起，隋炀帝为加强南北交通和巩固统治，征发数百万人开凿大运河。运河以洛阳为中心，连接五大水系，全长2700多公里。',
    startYear: 605 // Year canal construction began
  },
  {
    id: 40,
    title: '科举制度创立',
    locationName: '长安 / 洛阳',
    latitude: 34.68, // Using Luoyang as a central point
    longitude: 112.45,
    details: '隋文帝开始通过分科考试选拔官员。隋炀帝设进士科，标志科举制正式确立，成为后世选官的主要制度。',
    startYear: 605 // Year Jinshi科 was established
  },
  {
    id: 41,
    title: '隋朝灭亡',
    locationName: '江都 (扬州)',
    latitude: 32.39,
    longitude: 119.42,
    details: '隋炀帝的暴政，如营建东都、开凿运河、三征高句丽等，引发大规模农民起义。618年，隋炀帝在江都被部将杀死，隋朝灭亡。',
    startYear: 618 // Year Sui ended
  }
];

module.exports = {
  suiData: suiData
} 