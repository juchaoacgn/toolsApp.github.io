/**
 * 本文件是操作websql的简单封装
 * 作者：次元动漫社-技术部-希晨
 */

//创建默认数据库相关数据
let dbName = "myDb";
let version = "1.0";
let desc = "默认数据库(default database)";
let size = 30 * 1024 * 1024;
//存储数据库对象
let database=null;

/**
 * 打开数据库 open Database
 * @param {String} dbname 数据库名称(可选)
 * @param {String} version 数据库版本(可选)
 * @param {String} desc	数据库描述(可选)
 * @param {Int32Array} size 数据库代销(可选)
 * @param {Function} function 回调函数(可选)
 */
function openDb(){
	let len  = arguments.length;
	switch (len){
		case 0:
			database = openDatabase(dbName, version, desc, size);
			break;
		case 1:
			database = openDatabase(arguments[0], version, desc, size);
			break;
		case 2:
			database = openDatabase(arguments[0], arguments[1], desc, size);
			break;
		case 3:
			database = openDatabase(arguments[0], arguments[1], arguments[2], size);
			break;
		case 4:
			database = openDatabase(arguments[0], arguments[1], arguments[2], arguments[3]);
			break;
		case 5:
			database = openDatabase(arguments[0], arguments[1], arguments[2], arguments[3],arguments[4]);
			break;
		default:
			throw "数据传递错误(Error Data)";
			break;
	}
	return database;	
}


/**
 * 创建表
 * @param {Object} db 数据库对象
 * @param {String} sql sql语句
 * @param {String} tbName 表名
 * @param {Array} arr 列名
 */
function createTable (db,sql,tbName,...arr) {
	let len  = arguments.length;
	switch (len){
		case 0:
			throw "没有数据(No Data)";
			break;
		case 2:
			db.transaction(function (tx) { tx.executeSql(sql);});
			break;
		case 4:
			let arrstr = "";
			arr.forEach(element => { 
				arrstr += (","+element);
			});
			db.transaction(function (tx) {  
			   tx.executeSql('CREATE TABLE IF NOT EXISTS '+tbName+' (id unique '+arrstr+')');
			});
			break;
		default:
			throw "数据传递错误(Error Data)";
			break;
	}
}

/**
 * 插入数据
 * @param {Object} db 数据库对象
 * @param {Object} sql 执行语句
 */
function insert(db,sql){
	db.transaction(function (tx) {  
		tx.executeSql(sql,[],function (tx, results) {
		   console.log(results);
		   return true;
	   }, function (tx, error) {
                console.log('插入失败: ' + error.message);
				return false;
            });
	  });
}


/**
 *删除数据 
 * @param {Object} db  数据库对象
 * @param {String} tbName  表名称
 * @param {String} sql  删除条件
 */
function del(db,tbName,sql){
	db.transaction(function(tx) {
		tx.executeSql('DELETE FROM '+tbName+' WHERE '+ sql);
	});
}

/**
 * 更新数据
 * @param {Object} db 数据库对象
 * @param {String} tbName  表名称
 * @param {String} sql 执行语句
 * @param {String} where 执行语句
 */
function update(db,tbName,sql,where){
	db.transaction(function (tx) {  
		tx.executeSql("UPDATE "+tbName+" SET "+sql+" WHERE "+where,[],
		function(tx,results){
			return true;
		},
		function (tx, error) {
		         console.log('查询失败: ' + error.message);
						return false;
		     });
	  });
}

/**
 * 查询数据
 * @param {Object} db 数据库对象
 * @param {String} sql 执行语句
 */
function select(db,sql,arr){
	let resArr = [];
	db.transaction(function (tx) {
	   tx.executeSql(sql, [], function (tx, results) {
		  for (var i = 0; i < results.rows.length; i++) {
			  let keys = Object.keys( results.rows.item(i));
			  let res = new Map;
			keys.forEach(e => {
				res.set(e,results.rows.item(i)[e]);
			});
			resArr.push(JSON.stringify(Object.fromEntries(res)));
		  }
	   }, function (tx, error) {
                console.log('查询失败: ' + error.message);
            });
	});
	console.log(resArr); 
	return resArr;
}





