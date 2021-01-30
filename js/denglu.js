let ip="192.168.1.105";
$("#entershen .box .u2 .l3 .enterDdeng").click(function(){
    let http=new XMLHttpRequest();
    http.open("get",`http://`+ip+`:8080/denglu?name=${$("#entershen .box .u2 .l1 .enteryonghu").val()}&mima=${$("#entershen .box .u2 .l2 .entermima").val()}`);
    http.send()
    http.onreadystatechange=function(){
        if(http.readyState===4){
            if(http.responseText==="success"){
                alert("登陆成功")
                sessionStorage.setItem("name",$("#entershen .box .u2 .l1 .enteryonghu").val())
                if($("#entershen .box .u2 .l4 .enterjizhu")[0].checked){
                    let d=new Date();
                    d.setDate(d.getDate()+30);
                    document.cookie="name="+$("#entershen .box .u2 .l1 .enteryonghu").val()+";expires="+d;
                    document.cookie="password="+$("#entershen .box .u2 .l2 .entermima").val()+";expires="+d;
                }
                location.href="http://"+ip+"/项目周/shouye.html"
            }
            else{
                alert("用户名或密码错误")
            }
        }
    }
})
var gather={}
        let arr=document.cookie.split("; ")
        for(let i=0;i<arr.length;i++){            
            gather[arr[i].split("=")[0]]=arr[i].split("=")[1];
        }
        if(document.cookie===""){
            gather={}
        }
        else{      
            $("#entershen .box .u2 .l1 .enteryonghu").val(gather.name)
            $("#entershen .box .u2 .l2 .entermima").val(gather.password)
        }
        