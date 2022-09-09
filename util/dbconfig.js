const mysql = require("mysql");
module.exports = {
  //数据库配置
  config: {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "exapp",
  },
  //链接数据库 mysql连接池
  //连接池对象
  sqlConnent: function (sql, sqlArr, callback) {
    var pool = mysql.createPool(this.config);
    pool.getConnection((err, conn) => {
      console.log("getConnection", "1234");
      if (err) {
        console.log("数据库链接失败", err);
        return;
      }
      //回调
      conn.query(sql, sqlArr, callback);
      //释放链接
      conn.release();
    });
  },
};
