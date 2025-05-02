// data/index.js
// 统一导出所有时期数据

const { ancientData } = require('./period_ancient.js');
const { prehistoricData } = require('./period_prehistoric.js');
const { civilizationOriginData } = require('./period_civilization_origin.js');
const { xiaData } = require('./period_xia.js');
const { shangData } = require('./period_shang.js');
const { zhouData } = require('./period_zhou.js');
const { springAutumnData } = require('./period_spring_autumn.js');
const { warringStatesData } = require('./period_warring_states.js');
const { hundredSchoolsData } = require('./period_hundred_schools.js').hundredSchoolsData;
const { qinData } = require('./period_qin.js');
const { hanData } = require('./period_han.js');
const { threeKingdomsData } = require('./period_three_kingdoms.js');
const { jinData } = require('./period_jin.js');
const { northSouthData } = require('./period_north_south.js');
const { suiData } = require('./period_sui.js');
const { tangData } = require('./period_tang.js');
const { fiveDynastiesData } = require('./period_five_dynasties.js');
const { songData } = require('./period_song.js');
const { yuanData } = require('./period_yuan.js');
const { mingData } = require('./period_ming.js');
const { qingData } = require('./period_qing.js');

// --- 新增：导入细分的现代史时期数据 ---
const { lateQingData } = require('./period_late_qing.js');
const { earlyRepublicData } = require('./period_early_republic.js');
const { nanjingGovData } = require('./period_nanjing_gov.js');
const { resistanceWarData } = require('./period_resistance_war.js');
const { liberationWarData } = require('./period_liberation_war.js');
const { earlyPrcData } = require('./period_early_prc.js');
const { socConstrData } = require('./period_soc_constr.js');
const { culturalRevolutionData } = require('./period_cultural_revolution.js');
const { reformOpeningData } = require('./period_reform_opening.js');
const { socMarketData } = require('./period_soc_market.js');
const { newEraData } = require('./period_new_era.js');
// --- 结束新增 ---

module.exports = {
  ancientData,
  prehistoricData,
  civilizationOriginData,
  xiaData,
  shangData,
  zhouData,
  springAutumnData,
  warringStatesData,
  hundredSchoolsData,
  qinData,
  hanData,
  threeKingdomsData,
  jinData,
  northSouthData,
  suiData,
  tangData,
  fiveDynastiesData,
  songData,
  yuanData,
  mingData,
  qingData,
  // modernData, // 删除旧的
  // --- 新增：导出细分的现代史时期数据 ---
  lateQingData,
  earlyRepublicData,
  nanjingGovData,
  resistanceWarData,
  liberationWarData,
  earlyPrcData,
  socConstrData,
  culturalRevolutionData,
  reformOpeningData,
  socMarketData,
  newEraData
  // --- 结束新增 ---
}; 