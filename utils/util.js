function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function requestBanner(callback){
  wx.request({
    url: 'http://wxzergpro.com/api/v1/banner/1',
    method: 'GET',
    success: function (data) {
       callback(data);
    },
  })
}

module.exports = {
  formatTime: formatTime,
  requestBanner: requestBanner
}
