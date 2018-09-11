Page({
  data: {
    film: 'top-hoverd-btn',
    telv: ''
  },
  onLaunch: function() {
    console.log('douban Launching ...');
  },
  toFilm: function() {
    console.log('film');
    this.updateBtnStatus('film');
  },
  toTelv: function() {
    console.log('telv');
    this.updateBtnStatus('telv');
  },
  updateBtnStatus: function(k) {
    this.setData({
      film: this.getHoverd('film', k),
      telv: this.getHoverd('telv', k)
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