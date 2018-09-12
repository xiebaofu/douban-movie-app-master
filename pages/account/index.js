var app = getApp();
Page({
  data: {
    films: app.data.films,
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
  toReadBook: function() {
    console.log('readbook');
    this.updateBtnStatus('book');
  },
  toTelv: function() {
    console.log('telv');
    this.updateBtnStatus('telv');
  },
  toActive: function() {
    console.log('active');
    this.updateBtnStatus('active');
  },
  toMusic: function() {
    console.log('music');
    this.updateBtnStatus('music');
  },
  toOther: function() {
    console.log('other');
    this.updateBtnStatus('other');
  },
  toOther1: function() {
    console.log('other1');
    this.updateBtnStatus('other1');
  },
  updateBtnStatus: function(k) {
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
  }
});