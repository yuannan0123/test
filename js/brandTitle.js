$(function () {
  $.ajax({
    type:'get',
    url:'getbrandtitle',
    dataType:'json',
    success: function (result) {
      console.log(result)
      var html = template('brandTemp',result)
      $('.brandList').html(html)
    }
  })
})