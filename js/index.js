$(function () {

  nav()
  // 导航
 function nav() {
   $.ajax({
     type: 'get',
     url: 'getindexmenu',
     dataType: 'json',
     success: function (result) {
       console.log(result)
       var html = template('navTemp', result)
       $('.nav').html(html)
      // 第8个icon的跳转为空
       $('.nav>a:nth-of-type(8)').attr('href','#')
       // 点击第8个icon 隐藏显示切换最后四个icon
       $('.nav>a:nth-of-type(8)').on('tap',function() {
        //  event.preventDefault()
        //  $(this).attr('href', '#')
         $('.nav>a:nth-last-child(-n+4)').toggle(200)
       })
     }
   })
 }

  // 超级折扣推荐
  discount()
  function discount() {
    $.ajax({
      type:'get',
      url:'getmoneyctrl',
      dataType:'json',
      success: function (result) {
        console.log(result)
        var html = template('discountTemp',result)
        $('.productList').html(html)
      }
    })
  }
})