let ip="192.168.1.105";
function add(){
    var arr=("0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")
    c=""
      for(i=0;i<4;i++){
          var b=parseInt(Math.random()*62)
          c=c+arr[b]
      }return c
  } 
  $("#enrollshen .box .u2 .l6 .enrollma").html(add())  
  $("#enrollshen .box .u2 .l6 .enrollkanbu").click(function(){
     $("#enrollshen .box .u2 .l6 .enrollma").html(add())  
  });
$("#enrollshen .box .u2 .l3 .enrollDdeng").click(function(){
    if($(".enrollyonghu").val()!==""&&$(".enrollmima").val()!==""&&$(".enrollmimaqr").val()!==""&&$(".enrollyanzheng").val()!==""){
        if($(".enrollmima").val()===$(".enrollmimaqr").val()){
            if($(".enrollyanzheng").val()===$(".enrollma").html()){
            if($(".enrolljizhu")[0].checked){
                let http=new XMLHttpRequest()
                http.open("get",`http://`+ip+`:8080/zhuce?name=${$(".enrollyonghu").val()}&mima=${$(".enrollmima").val()}`);
                http.send()
                http.onreadystatechange=function(){
                    if(http.readyState===4){
                        if(http.responseText==="success"){
                            alert("注册成功,点击去登录")
                            location.href="http://"+ip+"/%E9%A1%B9%E7%9B%AE%E5%91%A8/denglu.html"
                        }
                        else{
                            alert("注册失败")
                        }
                    }
                }
            }
            else{
                alert("请同意用户协议")
            }
        }else{
            alert("验证码不一致")
        }
        }
        else{
            alert("密码不一致")
        }
    }
    else{
        alert("请重新输入")
    }
})
$(".enrollZhu").click(function(){
    $(".enrollyonghu").val("")
    $(".enrollmima").val("")
    $(".enrollmimaqr").val("")
    $(".enrollyanzheng").val("")
    $(".enrolljizhu")[0].checked=false
})