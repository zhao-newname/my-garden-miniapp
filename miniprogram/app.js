App({
  // App launch lifecycle function
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('Please use WeChat Developer Tools 2.2.3 or later')
    } else {
      wx.cloud.init({
        env: 'your-env-id', // Cloud development environment ID
        traceUser: true,
      })
    }
    
    // Global data storage
    this.globalData = {
      userInfo: null,
      plants: []
    }
  }
})
