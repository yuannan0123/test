$(function () {
  $.ajax({
    type:'get',
    url:'getindexmenu',
    dataType:'json',
    success:function(result) {
      console.log(result)
    }
  })
})