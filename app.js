// app.js
/**
 * 注意：关于控制台中可能出现的 SharedArrayBuffer 警告
 * 
 * [Deprecation] SharedArrayBuffer will require cross-origin isolation as of M92, around July 2021
 * 
 * 这是一个来自底层WebView的警告，与小程序功能无关，不会影响应用正常运行。
 * 此警告是由Chrome浏览器的安全策略变更导致的，在微信小程序环境中可以安全忽略。
 * 更多信息请参考: https://developer.chrome.com/blog/enabling-shared-array-buffer/
 */

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
