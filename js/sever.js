let express = require("express")();
const { error } = require("console");
const { response } = require("express");
const { request } = require("http");
let mysql = require("mysql");
const port = 8080;

// Node解决跨域问题
express.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

// 规划mysql链接
let sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"biaoyi"
})

// 尝试链接
sql.connect();
// 登录
express.get("/denglu",(request,response)=>{
	let name = request.query.name;
	let mima = request.query.mima;

	sql.query(`SELECT * FROM denglu WHERE name="${name}" AND mima="${mima}"`,(error,data)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.end("error")
			}
			else{
				response.end("success")
			}
		}
	})
})
// 注册
express.get("/zhuce",(request,response)=>{
	let name = request.query.name;
	let mima = request.query.mima;
	sql.query(`INSERT INTO denglu (name,mima) VALUES ("${name}","${mima}")`,(error)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			response.send("success")
		}
	})

})
// 监听在哪一个8080端口上
express.listen(port)
console.log("server is running at " + port)