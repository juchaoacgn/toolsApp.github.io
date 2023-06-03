const month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
const month_mormal = [31,28,31,30,31,30,31,31,30,31,30,31];
const month_name = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];

//获取布局使用的变量
let hodler = document.getElementById("days");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let ctitle = document.getElementById("calender-title");
let cyear = document.getElementById("calender-year");
let li = document.getElementsByTagName("li");
let today = $("#today");

//获取当前时间信息
let date_now = new Date();
let year_now = date_now.getFullYear();
let month_now = date_now.getMonth();
let day_now = date_now.getDate();

//存储当前时间


//获取某年某月第一天是周几
function day_start(month,year){
	let tmpDate = new Date(year,month,1);
	return (tmpDate.getDay());
}

//计算是否闰年，生成月份
function days_Month(month,year){
	if((year%4==0&&year%100)||(year%400==0)){
		return (month_olympic[month]);
	}else{
		return (month_mormal[month]);
	}
}


//使用该函数刷新月份
function refreshDate(){
	let str="";
	let totalDay = days_Month(month_now,year_now);//获取该月总天数
	let firstDay = day_start(month_now,year_now);
	let myclass;
	for (var i = 1; i < firstDay; i++) {
		str +="<li></li>"; 
	}
	for (var i = 1; i < totalDay; i++) {
		if((i<day_now&&year_now==date_now.getFullYear()
			&&month_now == date_now.getMonth()) ||
			year_now<date_now.getFullYear()||
			(year_now == date_now.getFullYear()&&
			month_now < date_now.getMonth())){
				myclass = "class='lihtgrey'";
			}else if(i==day_now&&year_now==date_now.getFullYear()
			&&month_now == date_now.getMonth()){
				myclass ="class = 'green greenbox'";
			}else{
				myclass ="class = 'darkgrey'";
			}
			str += "<li "+myclass+" onclick='liClick(this)'>"+i+"</li>"
	}
	hodler.innerHTML = str;
	ctitle.innerHTML = month_name[month_now];
	cyear.innerHTML = year_now;
}

refreshDate();

 //点击变色，今天变回原色，其他的变成红色
 function  liClick(e){
	 let day = e.innerText;
	 let month = document.getElementById("calender-title").innerText;
	 let year = document.getElementById("calender-year").innerText;
	 // console.log("日："+day+"月:"+month+"年："+year);
	 let ul =$("#days").children();
	 //去除所有样式
	 for (var i = 0; i < ul.length; i++) {
		 let d = ul[i].innerText;
		 // console.log(d);
		 if((d<day_now&&year_now==date_now.getFullYear()
			&&month_now == date_now.getMonth()) ||
			year_now<date_now.getFullYear()||
			(year_now == date_now.getFullYear()&&
			month_now < date_now.getMonth())){
			 ul[i].className = "lihtgrey";
		 }else{
			 ul[i].className = "darkgrey";
		 }
	 } 
	 //添加样式
	if(e.innerText==date_now.getDate()&&year_now==date_now.getFullYear()
			&&month_now == date_now.getMonth()){
		e.className = "green greenbox";
	}else{
		e.className = "red redbox";
	}
}


//前一个月
prev.onclick = function(e){
	e.preventDefault();
	month_now--;
	if(month_now<0){
		year_now--;
		month_now = 11;
	}
	refreshDate();
}


//后一个月
next.onclick = function(e){
	e.preventDefault();
	month_now++;
	if(month_now>11){
		year_now++;
		month_now = 0;
	}
	refreshDate();
}

//点击月份跳转
ctitle.onclick = function(e){
	e.preventDefault();
	//打开弹窗
	dialog(e,1);
	//获取点击的
	// month_now = 0;
	refreshDate();
}

//点击年份跳转
cyear.onclick = function(e){
	e.preventDefault();
	year_now = 2022;
	refreshDate();
}


//今天按钮
today.click(function(e){
	e.preventDefault();
	// console.log("执行了");
	year_now = date_now.getFullYear();
	month_now = date_now.getMonth();
	day_now = date_now.getDate();
	refreshDate();
});  

//弹窗函数
function dialog(e,type){
	let head="";
	let context="";
	if(type==1){
		head = "月 份";
		context = "<table border='0' cellspacing='0' cellpadding='0'><tr>";
		for (var i = 1; i <= 12; i++) {	context +=("<td>"+i+"</td>");	}
		context +="</tr></table>";
	}else if(type==2){
		head = "年 份";
		context = ""
	}
	let h2  = document.getElementById("head");
	let table = document.getElementsByClassName("div_02")[0];
	h2.innerText = head;
	table.innerHTML = context;
	
	let kuang = $(".kuang");
	let x = e.pageX;
	let y = e.pageY;
	kuang.show();
	let rw = $(window).width()/4;
	let tp = $(window).height()/4;
	kuang.animate({
		left:x,
		top:y,
		opacity:'show',
		width:rw,
		height:tp,	
	},500);
		// $('#zhezhao').addClass('zhezhao');
}
//关闭弹窗
function close(type,data){
		$('.close').parents('.kuang').hide(500);
		if(data!=null&type!=null){
			console.log(type,data);
		}
}

//关闭按钮
$('.close').click(function(){
	close();
});

//获取点击弹窗中的数据
$('#div_02_tb li').click(function(e){
	console.log(e);
});



