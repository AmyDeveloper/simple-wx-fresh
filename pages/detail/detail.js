// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: [],
        name: '',
        subtitle: '',
        sales_volume: 0,
        price: 0,
        vip_price: 0,
        country: '',
        delivery_style: '',
        promotion: [],
        securityTitle: '',
        securityText: '',
        weight: 0,
        pack: '',
        storage_time: '',
        storage_method: '',
        instruction: [],
        priceStr: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        // 发送数据请求
        wx.request({
            url: 'https://localhost:3001/data/detail.json',
            // 监听返回
            success: function(res) {
                console.log(res)
                this.setData({
                    images: res.data.images,
                    name: res.data.name,
                    sales_volume: res.data.sales_volume,
                    subtitle: res.data.subtitle,
                    price: res.data.price,
                    vip_price: res.data.vip_price,
                    country: res.data.country,
                    delivery_style: res.data.delivery_style,
                    promotion: res.data.promotion,
                    securityTitle: res.data.securityTitle,
                    securityText: res.data.securityText,
                    weight: res.data.weight,
                    pack: res.data.pack,
                    storage_time: res.data.storage_time,
                    storage_method: res.data.storage_method,
                    instruction: res.data.instruction
                })
                //   console.log(res.data.images)
            }.bind(this)
        })
    },

    // 跳转到购物车页面 
    // intoMemberPage:function(){
    // 	wx.switchTab({
    // 		url: '',
    // 	})
    // },

	intoShoppingCar:function() {

	},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})