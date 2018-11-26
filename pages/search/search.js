// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      data: {},
      products: {},
      search: '',
      history: [],
      historyArr: [],
      dis: false
      
  },
  //点击热门搜索，添加到搜索框
  hotSearch(e) {
    //   console.log(e)
      this.setData({
          search: e.target.dataset.id
      })
  },
    //点击搜索，保存搜索结果到本地
    goSearch() {
       
        console.log(this.data.history)
        var arr = this.data.historyArr
        arr.push(this.data.search)
        
       this.setData({
           historyArr: arr
       });
        
        wx.setStorage({
            key: 'history',
            data: this.data.historyArr,
            success: function(res) {
                // console.log(res)
            },
        })
    },
    clear() {
        wx.removeStorage({
            key: 'history',
        })
        wx.setStorage({
            key: 'history',
            data: [],
            success: function(res) {
               this.setData({
                history: [],
                dis: false
               })
               console.log(this.data.dis)
            }.bind(this)
        })
        this.onLoad();
       
    },  
    addCar() {

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      wx.request({
          url: 'https://localhost:3001/data/searchMsg.json',
          success: function(res) {
              if (res.errMsg == "request:ok") {
                //   console.log(res.data.like_result.product_list)
                  this.setData({
                      data: res.data.data,
                      products: res.data.like_result.product_list,
                  })
              }
            //   console.log(this.data.products)
             
          }.bind(this)
      });
   
        var his = wx.getStorageSync('history');
        // console.log(his)
        this.setData({
            history: his
        })
        // wx.getStorage({
        //     key: 'history',
        //     success: function(res) {
        //         // this.data.history = res
        //         var s = res.data
        //         this.setData({
        //             history: s
        //         })
        //         console.log(this.data.history)
        //     },
        // })
    
       
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log(this.products)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})