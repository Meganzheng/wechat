//logs.js
// const util = require('../../utils/util.js')
const { $Toast } = require('../../dist/base/index')
Page({
  data: {
    logs: [],
    visible1: false,
    current: 'tab1',
    tab1: true
  },
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
   },
   handleClose1 () {
    this.setData({
        visible1: false
    });
   },
   handleClose () {
    this.setData({
      visible1: false
     });
     $Toast({
      type: 'success',
      content: '已确认收货'
       });
   },
   direct: function() {
    wx.navigateTo({
      url: '../../pages/detail/detail'
    })
   },
   pick: function() {
    this.setData({
      visible1: true
     });
   },
  //  微信支付
  pay(id,totalPrice){
    // wx.request({
    //     url: 'https://xxxxxxxxx',
    //     data: {
    //       orderId: id,
    //       orderPrice:totalPrice
    //     },
    //     success:res => {
    //         wx.requestPayment({
    //             timeStamp: res.data.timeStamp,
    //             nonceStr: res.data.paySign,
    //             package: res.data.paySign,
    //             signType: 'MD5',
    //             paySign: res.data.paySign,
    //             success(res) {
    //                 console.log('支付成功')
    //             },
    //             fail(res) { 
    //                 console.log('支付失败')
    //             }
    //         })
            
    //     },
    //     fail:err => {
    //         console.log('接口请求出错')
    //     }
    // })
    wx.navigateTo({
      url: '../payment/payment',
    })
   },
  onLoad: function () {
  }
})
