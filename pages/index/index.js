var app = getApp();
Page({
  data: {
    films: app.data.films,
    hot: 'top-hoverd-btn',
    upcoming: ''
  },
  onLaunch: function() {
    console.log('douban Launching ...');
  },
  toHot: function() {
    this.updateBtnStatus('hot');
  },
  toUpcoming: function() {
    this.updateBtnStatus('upcoming');
  },
  updateBtnStatus: function(k) {
    this.setData({
      hot: this.getHoverd('hot', k),
      upcoming: this.getHoverd('upcoming', k)
    });
  },
  getHoverd: function(src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },
  toDetail: function() {
    wx.navigateTo({
      url: '../discovery/detail',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  toMore: function() {
    wx.navigateTo({
      url: '../discovery/more',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  toLine: function() {
    wx.navigateTo({
      url: '../discovery/line',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  toSearch: function() {
    wx.navigateTo({
      url: '../search/index',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  }
});