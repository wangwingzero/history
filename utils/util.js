const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 验证和修复地图经纬度坐标
 * @param {Object|Array} data - 单个坐标对象或坐标对象数组
 * @param {boolean} fix - 是否自动修复无效值，默认为true
 * @returns {Object|Array} - 验证/修复后的坐标对象或数组
 */
const validateCoordinates = (data, fix = true) => {
  // 处理数组情况
  if (Array.isArray(data)) {
    return data.filter(item => {
      // 过滤掉null和undefined对象
      if (item === null || item === undefined) {
        console.warn('[坐标验证] 发现null或undefined标记点，已过滤');
        return false;
      }
      return true;
    }).map(item => validateSingleCoordinate(item, fix));
  }
  
  // 处理单个对象情况
  if (data === null || data === undefined) {
    console.warn('[坐标验证] 收到null或undefined对象，返回空对象');
    return {};
  }
  
  return validateSingleCoordinate(data, fix);
}

/**
 * 验证和修复单个坐标对象的经纬度
 * @param {Object} item - 包含latitude和longitude属性的对象
 * @param {boolean} fix - 是否自动修复无效值
 * @returns {Object} - 验证/修复后的对象
 */
const validateSingleCoordinate = (item, fix = true) => {
  let isValid = true;
  const result = { ...item }; // 创建副本，避免修改原对象
  
  // 检查对象是否有经纬度属性
  if (!result || typeof result !== 'object') {
    console.error('[坐标错误] 无效的标记点对象');
    return fix ? { latitude: 0, longitude: 0 } : null;
  }
  
  // 初始化经纬度属性（如果不存在）
  if (result.latitude === undefined || result.latitude === null) {
    if (fix) {
      console.warn(`[坐标修正] 缺少latitude属性，已设置为0`);
      result.latitude = 0;
    } else {
      console.error(`[坐标错误] 缺少latitude属性`);
      isValid = false;
    }
  }
  
  if (result.longitude === undefined || result.longitude === null) {
    if (fix) {
      console.warn(`[坐标修正] 缺少longitude属性，已设置为0`);
      result.longitude = 0;
    } else {
      console.error(`[坐标错误] 缺少longitude属性`);
      isValid = false;
    }
  }
  
  // 检查纬度
  if (result.latitude !== undefined && result.latitude !== null) {
    // 确保为数字类型
    if (typeof result.latitude !== 'number') {
      const parsed = parseFloat(result.latitude);
      if (!isNaN(parsed)) {
        if (fix) {
          console.warn(`[坐标修正] latitude不是数字类型: ${result.latitude}，已自动转换为数字: ${parsed}`);
          result.latitude = parsed;
        } else {
          console.error(`[坐标错误] latitude不是数字类型: ${result.latitude}`);
          isValid = false;
        }
      } else {
        if (fix) {
          console.warn(`[坐标修正] latitude无效值: ${result.latitude}，已重置为0`);
          result.latitude = 0;
        } else {
          console.error(`[坐标错误] latitude无效值: ${result.latitude}`);
          isValid = false;
        }
      }
    }
    
    // 检查范围
    if (typeof result.latitude === 'number') {
      if (isNaN(result.latitude)) {
        if (fix) {
          console.warn(`[坐标修正] latitude是NaN，已重置为0`);
          result.latitude = 0;
        } else {
          console.error(`[坐标错误] latitude是NaN`);
          isValid = false;
        }
      } else if (result.latitude < -90 || result.latitude > 90) {
        if (fix) {
          const fixedValue = Math.max(-90, Math.min(90, result.latitude));
          console.warn(`[坐标修正] latitude超出范围 ${result.latitude}，已修正为 ${fixedValue}`);
          result.latitude = fixedValue;
        } else {
          console.error(`[坐标错误] latitude超出范围: ${result.latitude}`);
          isValid = false;
        }
      }
    }
  }
  
  // 检查经度
  if (result.longitude !== undefined && result.longitude !== null) {
    // 确保为数字类型
    if (typeof result.longitude !== 'number') {
      const parsed = parseFloat(result.longitude);
      if (!isNaN(parsed)) {
        if (fix) {
          console.warn(`[坐标修正] longitude不是数字类型: ${result.longitude}，已自动转换为数字: ${parsed}`);
          result.longitude = parsed;
        } else {
          console.error(`[坐标错误] longitude不是数字类型: ${result.longitude}`);
          isValid = false;
        }
      } else {
        if (fix) {
          console.warn(`[坐标修正] longitude无效值: ${result.longitude}，已重置为0`);
          result.longitude = 0;
        } else {
          console.error(`[坐标错误] longitude无效值: ${result.longitude}`);
          isValid = false;
        }
      }
    }
    
    // 检查范围
    if (typeof result.longitude === 'number') {
      if (isNaN(result.longitude)) {
        if (fix) {
          console.warn(`[坐标修正] longitude是NaN，已重置为0`);
          result.longitude = 0;
        } else {
          console.error(`[坐标错误] longitude是NaN`);
          isValid = false;
        }
      } else if (result.longitude < -180 || result.longitude > 180) {
        if (fix) {
          // 特殊处理经度，使其在[-180, 180]范围内循环
          let fixedLng = result.longitude;
          
          // 循环减去360，直到小于等于180
          while (fixedLng > 180) {
            fixedLng -= 360;
          }
          
          // 循环加上360，直到大于等于-180
          while (fixedLng < -180) {
            fixedLng += 360;
          }
          
          console.warn(`[坐标修正] longitude超出范围 ${result.longitude}，已修正为 ${fixedLng}`);
          result.longitude = fixedLng;
        } else {
          console.error(`[坐标错误] longitude超出范围: ${result.longitude}`);
          isValid = false;
        }
      }
    }
  }
  
  return isValid || fix ? result : null;
}

/**
 * 验证坐标数组中是否有无效的经纬度值
 * @param {Array} markers - 标记点数组
 * @returns {Boolean} - 是否存在无效坐标
 */
const hasInvalidCoordinates = (markers) => {
  if (!Array.isArray(markers)) return false;
  
  return markers.some(marker => {
    if (!marker) return true;
    
    // 检查纬度
    if (marker.latitude === undefined || marker.latitude === null ||
        typeof marker.latitude !== 'number' || isNaN(marker.latitude) ||
        marker.latitude < -90 || marker.latitude > 90) {
      return true;
    }
    
    // 检查经度
    if (marker.longitude === undefined || marker.longitude === null ||
        typeof marker.longitude !== 'number' || isNaN(marker.longitude) ||
        marker.longitude < -180 || marker.longitude > 180) {
      return true;
    }
    
    return false;
  });
}

module.exports = {
  formatTime,
  validateCoordinates,
  hasInvalidCoordinates
}
