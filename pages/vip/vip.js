// pages/vip/vip.js
Page({

    /**
     * 页面的初始数据
    */
    data: {
        list: [],
        redbag: [],
        products: []
        
    },
    showword: function() {
        wx.showModal({
            title: '订阅成功',
            content: '该商品到货之后，会通过微信消息第一时间告诉您',
            showCancel: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
    */
    toDetailpage: function() {
        wx.navigateTo({
            url: '/pages/detail/detail',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    totips: function(){
        wx.showModal({
            title: '温馨提示',
            content: '该红包仅限会员领取，快去开通会员吧',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#999',
            confirmText: '立即开卡',
            confirmColor: '#FF6CB3',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    onLoad: function (options) {
        // var height = wx.getSystemInfoSync().windowHeight - 80 - 50;
        wx.request({
            url: 'https://localhost:3001/data/vip.json',
            success: function (res) {
              // console.log(res)

                this.setData({
                    list : res.data.data[0].data,
                    redbag: res.data.data[1].data,
                    products: res.data.data[2].data
                })
                console.log(this.data.list)
                console.log(this.data.products)
                console.log(this.data.redbag.length)
            }.bind(this)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function () {

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