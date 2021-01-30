let ip="192.168.1.105";
let gowuchetu=$(".key-n table .moban td img")[0]
let goshangcheng=$(".key-n table .moban .mingcheng")[0]
let godanjia=$(".key-n table .moban .danjia")[0]
let goshuliang=$(".key-n table .moban .shuliang input")[0] 
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
// 获取购物车数据
$.ajax({
    url:"http://"+ip+":8080/gouwuche",
    data:{
        name:sessionStorage.getItem("name")
    },
    success(data){
        data.forEach(item=>{
            let xintr=$(".key-n table .moban").clone(true).removeClass()
            xintr.find(".idming").html(item.id);
            xintr.find("img").attr("src", item.img);
            xintr.find(".mingcheng").html(item.wupin);
            xintr.find(".mingcheng").html(item.wupin);
            xintr.find(".danjia").html(item.wujia);
            xintr.find(".xiaoji").html(parseFloat(item.wujia)*$(".key-n table .shuliang input").val());
            $(".key-n table .moban").before(xintr)
            
        })
        heji()       
    }
})
// 删除
        $(".key-n table .caozuo").click(function(){
            _this=$(this)
            $.ajax({
                url:"http://"+ip+":8080/shanchu",
                data:{
                    id: _this.closest("tr").find(".idming").html()
                },
                success(data){
                    if(data=="11"){
                        _this.closest("tr").fadeOut()   
                    }
                   else{
                       alert("删除失败")
                   }
                }
            })
        })
function heji(){
    let a=0
    $(".key-n table .xiaoji").each((item,index)=>{
        a=a+parseFloat(index.innerHTML)
    })
    $(".key-n table td .zongjia").html(a)
}