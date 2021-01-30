let ip="192.168.1.105";
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

// 获取点击的商品名称和价格
if(sessionStorage.getItem("wupin")===null){
}
else{
    $(".wupin").html(sessionStorage.getItem("wupin"))
    $(".wujia").html(sessionStorage.getItem("wujia"))
}
$(".ti-n .xiaoxiangtu").mouseenter().mousemove(function(event){   
    $(".ti-n .daxiangtu").css({
        "display":"block"
    })
    $(".ti-n .daxiangtu img").css({
        "margin-left":parseFloat($(".ti-n .daxiangtu img")[0].offsetWidth)*(-event.offsetX/$(".ti-n .xiaoxiangtu img")[0].offsetWidth)+parseFloat($(".ti-n .daxiangtu")[0].offsetWidth)/2,
        "margin-top":-event.offsetY/$(".ti-n .xiaoxiangtu img")[0].offsetHeight*parseFloat($(".ti-n .daxiangtu img")[0].offsetHeight)+parseFloat($(".ti-n .daxiangtu")[0].offsetHeight)/2,
    })
})
$(".ti-n .xiaoxiangtu").mouseleave(function(){
    $(".ti-n .daxiangtu").css({
        "display":"none"
    })
})
// 加入购物车
$(".ti-n .box1 .jiarugouwuche").click(function(){
    if(sessionStorage.getItem("name")!==null){
        $.ajax({
            url:"http://"+ip+":8080/xiangqing",
            data:{
                name:sessionStorage.getItem("name"),
                img:sessionStorage.getItem("img"),wupin:sessionStorage.getItem("wupin"),wujia:sessionStorage.getItem("wujia")
            },
            success(data){
                if(data==12){
                    alert("已加入购物车")
                }
                else{
                    alert("加入失败")
                }
            }
        })
    }
    else{
        alert("请先登录")
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