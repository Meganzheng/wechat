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
    value4: '',
    visible2: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
