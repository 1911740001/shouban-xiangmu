if(sessionStorage.getItem("name")===null){
}
else{
   $(".top-n .top-xin .xin .denglu").html("欢迎用户"+sessionStorage.getItem("name"))
    $(".top-n .top-xin .xin .zhuce").html("退出").click(function(){
        sessionStorage.clear()
        $(".top-n .top-xin .xin .denglu").html("<a href=http://192.168.0.105/%E9%A1%B9%E7%9B%AE%E5%91%A8/denglu.html>"+"登录"+"</a>")
    $(".top-n .top-xin .xin .zhuce").html("<a href=http://192.168.0.105/%E9%A1%B9%E7%9B%AE%E5%91%A8/zhuce.html>"+"注册"+"</a>")
    })
}
$(".ti-n .box2 img").click(function(){
    location.href="http://192.168.0.105/%E9%A1%B9%E7%9B%AE%E5%91%A8/xinagqing.html"
})