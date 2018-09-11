// pages/douban/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: 'top-hoverd-btn',
    film: '',
    book: '',
    telv: '',
    active: '',
    music: '',
    other: '',
    other1: ''
  },
  onLaunch: function () {
    console.log('douban Launching ...');
  },
  toHot: function () {
    console.log('hot');
    this.updateBtnStatus('hot');
  },
  toFilm: function () {
    console.log('film');
    this.updateBtnStatus('film');
  },
  toReadBook: function () {
    console.log('readbook');
    this.updateBtnStatus('book');
  },
  toTelv: function () {
    console.log('telv');
    this.updateBtnStatus('telv');
  },
  toActive: function () {
    console.log('active');
    this.updateBtnStatus('active');
  },
  toMusic: function () {
    console.log('music');
    this.updateBtnStatus('music');
  },
  toOther: function () {
    console.log('other');
    this.updateBtnStatus('other');
  },
  toOther1: function () {
    console.log('other1');
    this.updateBtnStatus('other1');
  },
  updateBtnStatus: function (k) {
    this.setData({
      hot: this.getHoverd('hot', k),
      film: this.getHoverd('film', k),
      book: this.getHoverd('book', k),
      telv: this.getHoverd('telv', k),
      active: this.getHoverd('active', k),
      music: this.getHoverd('music', k),
      other: this.getHoverd('other', k),
      other1: this.getHoverd('other1', k)
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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