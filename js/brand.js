$(function () {
  
  
  getbrandList()
  function getbrandList(brandtitleid) {
    $.ajax({
      type: 'get',
      url: 'getbrand',
      data: { "brandtitleid": Number },
      dataType: 'json',
      success: function (result) {
        console.log(result)
        var html = template('productTemp', result)
        $('.productList').html(html)
      }
    })
  }
  

  // 品牌标题对应的十大品牌的销量排行商品列表
  // $.ajax({
  //   type:'get',
  //   url:'getbrandproductlist',
  //   data: { brandtitleid:Number},
  //   dataType:'json',
  //   success:function(result) {
  //     console.log(result)
  //   }
  // })
})