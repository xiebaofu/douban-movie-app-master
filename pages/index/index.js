Page({
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
  onLaunch: function() {
    console.log('douban Launching ...');
  },
  toHot: function() {
    console.log('hot');
    this.updateBtnStatus('hot');
  },
  toFilm: function() {
    console.log('film');
    this.updateBtnStatus('film');
  },
  updateBtnStatus: function(k) {
    this.setData({
      hot: this.getHoverd('hot', k),
      film: this.getHoverd('film', k)
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
  toMore: function() {
    wx.navigateTo({
      url: 'more',
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
      url: 'line',
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