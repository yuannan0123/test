$(function(){
	//获取数据渲染
	var pageid=$.querystring(location.search).pageid||1
	 
	console.log(pageid);
	$.ajax({
		type:'get',
		url:'getmoneyctrl',
		data:{
			pageid
		},
		success:function(res){
			console.log(res);
			var str =template('prolist',res)
			$('.prolist').html(str)
			var num = Math.ceil(res.totalCount / res.pagesize)||1;
			console.log('num:'+num);
			var arr=[]
			arr.length=num;
			var str1 = template('pagelist',{arr,pageid:parseInt(pageid),num})
			console.log(str1);
			$('.page').html(str1)
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				indicators: false //是否显示滚动条，默认为True
			});
		}
	})
	// 点击出现分页
	$('.page').on('tap','.selpage',function(){
		$('.pagelist').toggle()
	})

})