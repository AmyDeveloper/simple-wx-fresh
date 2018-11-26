
const app = getApp()

Page({
  data: {
    banner: [],
    lanternArea: [],
    tileArea: [],
    products: [],
    height: '',
    list: ['热卖', '会员专享', '水果', '蔬菜', '乳品', '零食'],
    isShow: true,
    cur: ''
  },
  onLoad: function () {
    //获取页面高度
    var height = wx.getSystemInfoSync().windowHeight - 30;
    //发送ajax请求数据
    wx.request({
      url: "https://localhost:3001/data/data.json",
      success: function(res) {
        console.log(res.data)
        this.setData({
          banner: res.data.banner,
          lanternArea: res.data.categoryAreaV2.lanternArea,
          tileArea: res.data.categoryAreaV2.tileArea,
          products: res.data.products.slice(1),
          height: height
        })
      }.bind(this)
    })
  },
  goDetail: function() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  goSearch: function(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  cartProduct: function() {
    this.setDate({
      isShow: false
    })
  }
})
