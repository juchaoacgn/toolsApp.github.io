
//获取菜单列表，将本地菜单存入本地数据库中
let topMenu;
$.ajax({
	type: "GET",
	url:"./menuData.json",
	async: false,
	dataType: "json",
	success: function(data){
		ss = JSON.stringify(data);
	}
});

//循环遍历菜单目录
let menu = "";
let menuDate = JSON.parse(ss);
let cont  = 0;
let menuList = menuDate.menu;
// for (let index = 0; index < 20; index++) {
// 	if(menuList[index]!=null){cont+=1;}else{break}
// }
// for (let i = 0; i < cont; i++) {
// 	console.log("menuList", menu);
// 	if (menuList[i].levels == 1) {
// 	} else {
// 	}
// }
// console.log("最终的menu为：", menu);


function getMenuStr(menuList,cont){
	for (let i = 0; i < cont; i++) {
		console.log("menuList", menu);
		if (menuList[i].levels == 1) {
			console.log("最终的menu为：", menu);
		} else {
		}
		menu += "</li>";
	}
	console.log("最终的menu为：", menu);
	return menu;
}


//菜单下拉展开
function open_menu(ulclass){
	$(document).ready(function(){
		$(ulclass+' li').hover(function(){
			$(this).children("ul").show(); //mouseover
		},function(){
			$(this).children("ul").hide(); //mouseout
		});
	});
}
//文档加载完成，开始操作
$(document).ready(function(){
	$('ul li a').click(function(e){
			e.stopPropagation();
			$('iframe').attr("src",$(this).attr("data-url"));	
		});
});

