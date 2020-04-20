// pages/we.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      list: {
        account: 100
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function() {
       wx.switchTab({
         url: '../index/index',
       })
    },
    check: function() {
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
  }
})
