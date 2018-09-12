// pages/douban/more.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: app.data.films,
    chinese: 'top-hoverd-btn',
    actioner: '',
    children: '',
    anime: '',
    science: '',
    comedy: '',
    suspense: ''
  },
  onLaunch: function() {
    console.log('douban Launching ...');
  },
  toChinese: function() {
    this.updateBtnStatus('chinese');
  },
  toActioner: function() {
    this.updateBtnStatus('actioner');
  },
  toChildren: function() {
    this.updateBtnStatus('children');
  },
  toAnime: function() {
    this.updateBtnStatus('anime');
  },
  toScience: function() {
    this.updateBtnStatus('science');
  },
  toComedy: function() {
    this.updateBtnStatus('comedy');
  },
  toSuspense: function() {
    this.updateBtnStatus('suspense');
  },
  updateBtnStatus: function(k) {
    this.setData({
      chinese: this.getHoverd('chinese', k),
      actioner: this.getHoverd('actioner', k),
      children: this.getHoverd('children', k),
      anime: this.getHoverd('anime', k),
      science: this.getHoverd('science', k),
      comedy: this.getHoverd('comedy', k),
      suspense: this.getHoverd('suspense', k)
    });
  },
  getHoverd: function(src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },
  toDetail: function() {
    wx.navigateTo({
      url: 'detail',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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