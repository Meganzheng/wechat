const { $Message } = require('../../dist/base/index');
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
    visible1: false,
     list: [],
     totalPrice: 0,
     currentDate: '12:00',
     minHour: 10,
     maxHour: 20,
     status: false,
     time: '12:00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 微信刚加载
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
    warn: function() {
      wx.navigateTo({
        url: '../addaddress/addaddress'
      })
    },
    handleCancel1: function() {
      this.setData({
        visible1: false
     });
    },
    handleClickItem1: function({ detail }) {
      this.setData({
        visible1: false
      });
    },
    chooseaddress: function() {
      this.setData({
        visible1: true
       });
    },
    onInput(event) {
      this.setData({
        currentDate: event.detail
      });
    },
    confirmTime(value) {
      console.log(value.detail, 222)
       this.setData({
         status: false,
         time: value.detail
       })
    },
    cancel() {
      this.setData({
        status: false,
      })
    },
    payit() {
      wx.navigateTo({
        url: '../../pages/payment/payment',
      })
    },
    rightnow() {
      this.setData({
        status: true
      })
    }
  }
})
