let ip="192.168.1.105";
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
        $(".top-n .top-xin .xin .denglu").html("<a href=http://"+ip+"/%E9%A1%B9%E7%9B%AE%E5%91%A8/denglu.html>"+"登录"+"</a>")
    $(".top-n .top-xin .xin .zhuce").html("<a href=http://"+ip+"/%E9%A1%B9%E7%9B%AE%E5%91%A8/zhuce.html>"+"注册"+"</a>")
    location.href="http://"+ip+"/%E9%A1%B9%E7%9B%AE%E5%91%A8/shouye.html"
    })
}
$(".ti-n .box2 img").each(item=> {
    $(".ti-n .box2 img")[item].onclick=function(){
        sessionStorage.setItem("img",$(this).attr("src"))
        sessionStorage.setItem("wupin",$(this).closest("li").find("span").html().replace(/[\[\]]/g,""))
        sessionStorage.setItem("wujia",$(this).closest("li").find("nav").html().replace(/[￥元]/g,""))
        location.href="http://"+ip+"/%E9%A1%B9%E7%9B%AE%E5%91%A8/xinagqing.html" 
    }
    
})
// 获取购物车里面物品的数量
$.ajax({
    url:"http://"+ip+":8080/gouwuche",
    data:{
        name:sessionStorage.getItem("name")
    },
    success(data){
        $(".bo-n .go .gouwuche .chewu").html(data.length)
    }
})