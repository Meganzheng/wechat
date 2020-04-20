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
    title: "新用户首次立减15元",
    marqueePace: 2,   //滚动速度
    marqueeDistance: 15,   //初始滚动距离
    size: 28,
    marqueeWidth: 660,
    marqueeMargin: 40,
    visible2: false,
    activeKey: 0,
    list: [
      {
        "id": "01", 
        "text": "热销",
        "data": [
            {
                "id": "1",
                "price": "22",
                "title": "脆皮手枪腿",
                "sales": "265",
                "img": "01.jpg",
                "num": "0"
            },
            {
                "id": "2",
                "price": "43",
                "title": "照烧鸡腿饭套餐",
                "sales": "236",
                "img": "02.jpg",
                "num": "0"
            },
            {
                "id": "3",
                "price": "41",
                "title": "至尊脆皮鸡腿堡套餐",
                "sales": "236",
                "img": "03.jpg",
                "num": "0"
            },
            {
                "id": "4",
                "price": "35",
                "title": "脆皮鸡腿堡套餐",
                "sales": "236",
                "img": "04.jpg",
                "num": "0"
            },
            {
                "id": "5",
                "price": "26",
                "title": "香辣鱿鱼饭",
                "sales": "236",
                "img": "05.jpg",
                "num": "0"
            },
            {
                "id": "6",
                "price": "18",
                "title": "鸡排大亨",
                "sales": "236",
                "img": "06.jpg",
                "num": "0"
            },
            {
                "id": "7",
                "price": "9",
                "title": "美年达",
                "sales": "236",
                "img": "07.jpg",
                "num": "0"
            },
            {
                "id": "8",
                "price": "9",
                "title": "七喜",
                "sales": "236",
                "img": "08.jpg",
                "num": "0"
            },
            {
                "id": "9",
                "price": "18",
                "title": "肥牛米汉堡",
                "sales": "236",
                "img": "09.jpg",
                "num": "0"
            },
            {
                "id": "10",
                "price": "37",
                "title": "塔塔酱鲜虾米汉堡套餐",
                "sales": "32",
                "img": "10.jpg",
                "num": "0"
            },
            {
                "id": "11",
                "price": "18",
                "title": "菠萝鸡腿堡",
                "sales": "50",
                "img": "11.jpg",
                "num": "0"
            },
            {
                "id": "12",
                "price": "43",
                "title": "咖喱脆皮鸡腿饭套餐",
                "sales": "40",
                "img": "12.jpg",
                "num": "0"
            },
            {
                "id": "13",
                "price": "22",
                "title": "南洋鸡肉卷套餐",
                "sales": "36",
                "img": "13.jpg",
                "num": "0"
            },
            {
                "id": "14",
                "price": "23",
                "title": "菠萝鸡腿堡套餐",
                "sales": "38",
                "img": "14.jpg",
                "num": "0"
            },
            {
                "id": "15",
                "price": "29",
                "title": "双鸡堡套餐",
                "sales": "33",
                "img": "15.jpg",
                "num": "0"
            },
            {
                "id": "16",
                "price": "16",
                "title": "南洋鸡肉卷",
                "sales": "144",
                "img": "16.jpg",
                "num": "0"
            },
            {
                "id": "17",
                "price": "13",
                "title": "双鸡堡",
                "sales": "126",
                "img": "17.jpg",
                "num": "0"
            },
            {
                "id": "18",
                "price": "17",
                "title": "塔塔酱鲜虾米汉堡",
                "sales": "54",
                "img": "18.jpg",
                "num": "0"
            },
            {
                "id": "19",
                "price": "23",
                "title": "咖喱脆皮鸡腿饭",
                "sales": "109",
                "img": "19.jpg",
                "num": "0"
            },
            {
                "id": "20",
                "price": "20",
                "title": "至尊脆皮鸡腿堡",
                "sales": "53",
                "img": "20.jpg",
                "num": "0"
            },
            {
                "id": "21",
                "price": "21",
                "title": "照烧鸡腿饭",
                "sales": "59",
                "img": "21.jpg",
                "num": "0"
            },
            {
                "id": "22",
                "price": "16",
                "title": "脆皮鸡腿堡",
                "sales": "81",
                "img": "22.jpg",
                "num": "0"
            },
            {
                "id": "23",
                "price": "23",
                "title": "酱烧肥牛饭",
                "sales": "75",
                "img": "23.jpg",
                "num": "0"
            },
            {
                "id": "24",
                "price": "10",
                "title": "香辣鸡翅（2块）",
                "sales": "198",
                "img": "24.jpg",
                "num": "0"
            },
            {
                "id": "25",
                "price": "11",
                "title": "土耳其风味烤翅",
                "sales": "95",
                "img": "25.jpg",
                "num": "0"
            },
            {
                "id": "26",
                "price": "12",
                "title": "魔法鸡块",
                "sales": "247",
                "img": "26.jpg",
                "num": "0"
            },
            {
                "id": "27",
                "price": "11",
                "title": "德克士鸡块（6块）",
                "sales": "162",
                "img": "27.jpg",
                "num": "0"
            },
            {
                "id": "28",
                "price": "10",
                "title": "孜然鸡柳",
                "sales": "170",
                "img": "28.jpg",
                "num": "0"
            },
            {
                "id": "29",
                "price": "12",
                "title": "咔滋薯霸",
                "sales": "236",
                "img": "29.jpg",
                "num": "0"
            },
            {
                "id": "30",
                "price": "11",
                "title": "脆皮炸鸡",
                "sales": "307",
                "img": "30.jpg",
                "num": "0"
            },
            {
                "id": "31",
                "price": "9",
                "title": "幸福热奶茶",
                "sales": "20",
                "img": "31.jpg",
                "num": "0"
            },
            {
                "id": "32",
                "price": "7",
                "title": "热咖啡",
                "sales": "8",
                "img": "32.jpg",
                "num": "0"
            },
            {
                "id": "33",
                "price": "7",
                "title": "热果珍",
                "sales": "9",
                "img": "33.jpg",
                "num": "0"
            },
            {
                "id": "34",
                "price": "9",
                "title": "热牛奶",
                "sales": "17",
                "img": "34.jpg",
                "num": "0"
            },
            {
                "id": "35",
                "price": "9",
                "title": "幸福冰奶茶",
                "sales": "12",
                "img": "35.jpg",
                "num": "0"
            },
            {
                "id": "36",
                "price": "9",
                "title": "鲜橙汁",
                "sales": "0",
                "img": "36.jpg",
                "num": "0"
            },
            {
                "id": "37",
                "price": "9",
                "title": "菠菜芙蓉汤",
                "sales": "6",
                "img": "37.jpg",
                "num": "0"
            }
        ]
      },
      {
        "id": "02", 
        "text": "香辣鱿鱼饭",
        "data": [
            {
                "id": "10",
                "price": "37",
                "title": "塔塔酱鲜虾米汉堡套餐",
                "sales": "32",
                "img": "10.jpg",
                "num": "0"
            },
            {
                "id": "11",
                "price": "18",
                "title": "菠萝鸡腿堡",
                "sales": "50",
                "img": "11.jpg",
                "num": "0"
            },
            {
                "id": "12",
                "price": "43",
                "title": "咖喱脆皮鸡腿饭套餐",
                "sales": "40",
                "img": "12.jpg",
                "num": "0"
            }
        ]
      },
      {
        "id": "03", 
        "text": "新品专区",
        "data": [
            {
                "id": "13",
                "price": "22",
                "title": "南洋鸡肉卷套餐",
                "sales": "36",
                "img": "13.jpg",
                "num": "0"
            },
            {
                "id": "14",
                "price": "23",
                "title": "菠萝鸡腿堡套餐",
                "sales": "38",
                "img": "14.jpg",
                "num": "0"
            },
            {
                "id": "15",
                "price": "29",
                "title": "双鸡堡套餐",
                "sales": "33",
                "img": "15.jpg",
                "num": "0"
            }
        ]
      },
      {
        "id": "04", 
        "text": "德意餐",
        "data": [
            {
                "id": "16",
                "price": "16",
                "title": "南洋鸡肉卷",
                "sales": "144",
                "img": "16.jpg",
                "num": "0"
            },
            {
                "id": "17",
                "price": "13",
                "title": "双鸡堡",
                "sales": "126",
                "img": "17.jpg",
                "num": "0"
            },
            {
                "id": "18",
                "price": "17",
                "title": "塔塔酱鲜虾米汉堡",
                "sales": "54",
                "img": "18.jpg",
                "num": "0"
            }
        ]
      },
    ],
    amount: 0,
    orderListArr: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLoad(e) {
      console.log(e.title)
      this.setData({
      msgList: [
      { url: "url", title: "满足180减30元,满90减10元" , id: '1'},
      { url: "u", title: "新用户首单立减15元" , id: '2'},]
      });
      let height = wx.getSystemInfoSync().windowHeight -50 - 70;
      this.setData({
         height: height
      })
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
    },
    // 选择侧边栏
    chooseCategory(e) {
      console.log(e.currentTarget)
      this.setData ({
        target: e.currentTarget.dataset.target
      })
    },
    // 菜单+ 号
    plus(e) {
      let orderListArr = this.data.orderListArr;
      let obj = e.currentTarget.dataset;
      let categorid = obj.category;
      let productid = obj.productid;
      let createObj = this.data.list.find(function(value, index){
           return value.id === categorid;
       })
       let productObj = createObj.data.find((value, index) => (
            value.id === productid
       ))
       let hasOrder = orderListArr.some((value) => (
           value.id === productid
       ))
       if(hasOrder) {
           let result = orderListArr.find((value) => (
               value.id === productid
           )).num += 1;
       } else {
            productObj.num ++;
            orderListArr.push(productObj)
       }
       let amount = 0;
       orderListArr.forEach((value,index) => (
           amount += value.price * value.num
       ))
       this.setData({
        list: this.data.list,
        amount : amount
       })
    },
    // 减菜单
    minus(e) {
        let orderListArr = this.data.orderListArr;
        let obj = e.currentTarget.dataset;
        let categorid = obj.category;
        let productid = obj.productid;
        let createObj = this.data.list.find(function(value, index){
             return value.id === categorid;
         })
         let productObj = createObj.data.find((value, index) => (
              value.id === productid
         ))
         orderListArr.find((value) => (
             value.id === productid
         )).num -= 1;
         let amount = 0;
         orderListArr.forEach((value, index) => (
             amount += value.price * value.num
         ))
         this.setData({
            list: this.data.list,
            amount: amount
          })
    },
    // 挑选好了
    ok() {
      if(this.data.amount === 0) {
            return;
       }
      wx.setStorage({
        data:  this.data.orderListArr.filter(
            function(value) {
            return value.num != 0
        }),
        key: 'orderlist',
        success: function() {
            wx.navigateTo({
              url: '/pages/confirm/confirm',
            })
        }
      })
    }
  }
})
