$(function(){
    //解决mui不响应a的click时间。
    $('body').on('tap', 'a', function (e) {
        e.preventDefault()
        window.top.location.href = this.href;
    });

	const baseURL = 'http://193.112.55.79:9090/api/'
    // 添加zepto拦截器：它的作用是可以让每个ajax请求都经过这个函数进行处理
    $.ajaxSettings.beforeSend = function(xhr,obj){
        // $('body').addClass('loadding')
        obj.url = baseURL + obj.url
        // if(obj.url.indexOf('/my/') != -1){
        //     xhr.setRequestHeader('Authorization',sessionStorage.getItem('pyg_token'))
        // }
    }
    // complete：请求完成时触发
    // $.ajaxSettings.complete = function(){
    //     // 在这边我们想拼接url
    //     $('body').removeClass('loadding')
    // }
	$.extend($,{
        querystring:function(url){
            var obj = {}
            // location.search:url中?及?后面的内容
            url = url.substring(1) //cid=5&name=jack
            // 先按&拆分
            var arr = url.split('&') //['cid=5','name=jack']
            // 遍历进行第二次拆分
            for (var i = 0; i < arr.length; i++) {
                var temp = arr[i].split('=') //['cid',5]
                obj[temp[0]] = temp[1] // obj['cid'] = 5
            }
            return obj
        }
    })
})