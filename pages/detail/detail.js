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
    totalPrice: 0,
    list: [],
    visible2: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad(e) {
      var that = this
      wx.getStorage({
        key: 'orderlist',
        success: function(res) {
          // console.log(res.data, 'res.data')
           that.setData({
             list: res.data
           })
           let totalPrice = 0;
           that.data.list.forEach(function(value) {
                totalPrice += value.price * value.num
           })
           that.setData({
             totalPrice: totalPrice
           })
        }
      })
    },
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
    orderagain() {
       wx.navigateTo({
         url: '../../pages/order/order',
       })
    },
    delate() {
      this.setData({
        visible2: true
         });
    },
    itshow() {
      this.setData({
        visible2: true
         });
     },
     handleClose2 () {
      this.setData({
          visible2: false
      });
    }
  }
})
