//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sort:[
      {
        sort_img:"../../icons/收款.png",
        name:"代收款"
      },
      {
        sort_img:"../../icons/待收货.png",
        name:"待收货"
      },
      {
        sort_img:"../../icons/退款.png",
        name:"退货/退款"
      },
      {
        sort_img:"../../icons/全部订单.png",
        name:"全部订单"
      }
    ],
    message:[
      {
        msg_img:"../../icons/客服.png",
        name:"联系客服",
        value:"400-600-4080"
      },
      {
        msg_img:"../../icons/意见反馈.png",
        name:"意见反馈"
      },
      {
        msg_img:"../../icons/当前版本.png",
        name:"当前版本",
        value:"v4.1.1"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})