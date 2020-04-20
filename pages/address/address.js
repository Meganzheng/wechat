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
    contact: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change: function() {
      wx.navigateTo({
        url: '../edit/edit'
      })
    },
    warn: function() {
      wx.navigateTo({
        url: '../addaddress/addaddress'
      })
    },
    onLoad(e) {
     this.setData({
       contact: wx.getStorageSync('address')
     })
    }
  }
})
