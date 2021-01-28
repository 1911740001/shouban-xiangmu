let lunbo=$(".shen-n .box1 .box2 img")
let index=0
lunbo.each(item => {
    let dot = $("<li></li>");
    $(".shen-n .box1 .huakuai").append(dot)
    dot.mouseenter(function(){
        index=$(this).index()
        changeImg()
    })
});
let lies=$(".shen-n .box1 .huakuai li");
lies.eq(0).addClass("yanse")
function changeImg(){
    lunbo.hide().eq(index).fadeIn(16);
    lies.removeClass("yanse").eq(index).addClass("yanse")
}
let suo=false
 lunbotu=setInterval(function(){
    suo=true
    if(suo){
        suo=false
    if(index<lunbo.length-1){
        index++
    }
    else{
        index=0
    }
    changeImg()
    }
},2000)
$(".shen-n .box1 .box2").mouseenter(function(){
    clearInterval(lunbotu)
})
$(".shen-n .box1 .box2").mouseleave(function(){
     lunbotu=setInterval(function(){
        suo=true
        if(suo){
            suo=false
        if(index<lunbo.length-1){
            index++
        }
        else{
            index=0
        }
        changeImg()
        }
    },2000)
})
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
