//获取body
let body = document.getElementsByTagName('body');
// 获取弹窗
let modal = document.getElementById('myModal');
// 打开弹窗的按钮对象
let btn = document.getElementById("myBtn");
// 获取 <span> 元素，用于关闭弹窗 that closes the modal
let span = document.getElementsByClassName("close")[0];
let db = openDb();

document.getElementById("iframe").height=(document.documentElement.clientHeight)*0.09;	
document.getElementById("main_body_iframe").height=(document.documentElement.clientHeight)*0.925;



// 弹窗弹出函数
function modalOpen(){
	 modal.style.display = "block";
}
function modalClose(){
	 modal.style.display = "none";
}

//iframe自适应
function adjustIframe(){
        var ifm= document.getElementById("bi_iframe");
        ifm.height=document.documentElement.clientHeight;
        ifm.width=document.documentElement.clientWidth;
}


// 点击 <span> (x), 关闭弹窗
span.onclick = modalClose;
// 在用户点击其他地方时，关闭弹窗 此功能暂时关闭
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


//根据数据库查询返回的进行弹窗
function modelAction(data){
	// 当打开界面校验是否打开
	// console.log("当前的数据为：",data);
	if(data==1){
		// console.log("当前状态为打开状态");
		modalOpen();
		// setTimeout(modalOpen,1000);	
	}
}

//点击不同链接跳转不同界面
function step(e){
	let url = $(e).attr("url");
	if("#"!=url){
		$("#main_body_iframe").attr("src",url);
	}
}


//根据查询的配置进行弹窗操作
/* try{
	let sql = "select showStatus from config where id= 1";
	let resArr = [];
	db.transaction(function (tx) {
		   tx.executeSql(sql, [], function (tx, results) {
				sql = "insert into config (id,showStatus,showType,showUrl) values (1,1,1,'')"
				if(results.rows.length<=0){
					try {
						insert(db,sql);
					} catch (error) {
						console.log('插入失败: ' + error.message);
						
					}
					
				}else{
					let showStatus =  results.rows.item(0).showStatus;
					if(null!=showStatus){
						modelAction(showStatus);
					}else{
						insert(db,sql);
					}
				}
		   }, function (tx, error) {
	                console.log('查询失败: ' + error.message);
					sql = "insert into config (id,showStatus,showType,showUrl) values (1,1,1,'')";
					insert(db,sql);
	        });
		});
}catch(e){
	console.log(e);
} */










