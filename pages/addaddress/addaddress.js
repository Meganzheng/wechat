const { $Toast } = require('../../dist/base/index');
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
    value1: '',
    value2: '',
    value3: '',
    value4: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    myInput(event) {
      this.setData({
         value1: event.detail.detail.value
      })
    },
    myPhone(event) {
      this.setData({
        value2: event.detail.detail.value
     })
    },
    address(event) {
      this.setData({
        value3: event.detail.detail.value
     })
    },
    door(event) {
      this.setData({
        value4: event.detail.detail.value
     })
    },
    reg(e) {
      // 表单提交的内容
      $Toast({
        content: '保存成功',
        type: 'success'
      });
       console.log(e.detail.value)
      wx.setStorageSync('address', e.detail.value)
      wx.navigateTo({
        url: '../../pages/address/address',
      })
    },
  }
})
