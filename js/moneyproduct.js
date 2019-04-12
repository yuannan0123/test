$(function(){
	//获取数据
	 var productid=$.querystring(location.search).productid||30
	 console.log(productid);
	$.ajax({
		type:'get',
		url:'getmoneyctrlproduct',
		data:{
			productid:parseInt(productid)
		},
		success:function(res){
			console.log(res.result[0]);
			var str =template('infobox',res.result[0])
			$('main').html(str)
		}
	})
})