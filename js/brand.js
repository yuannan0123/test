$(function () {
  
  console.log(location.search) // 当前地址栏问号后面的数据
  console.log($.querystring(location.search))  //{brandTitleId: "2"}
  var aa = $.querystring(location.search)     //{brandTitleId: "2"}
  var bb = aa.brandTitleId     // 2
  console.log(bb)
  getbrandList()
  function getbrandList() {
    $.ajax({
      type: 'get',
      url: 'getbrand',
      data: { brandtitleid:bb},
      dataType: 'json',
      success: function (result) {
        console.log(result)
        var html = template('productTemp', result)
        $('.productList').html(html)

        // 修改动态生成结构的前三个span的背景色
        $('.product:nth-of-type(1) span').css("background-color", 'red')
        $('.product:nth-of-type(2) span').css("background-color", '#ff9314')
        $('.product:nth-of-type(3) span').css("background-color", '#8adf5b')
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