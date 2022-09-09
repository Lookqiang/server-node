var dbConfig = require("../util/dbconfig");
//获取分类
const getCate = (req, res) => {
  var sql = "select id,category from youyu";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log("链接失败", err);
    } else {
      res.send({
        list: data,
      });
    }
  };
  dbConfig.sqlConnent(sql, sqlArr, callBack);
};
const getPostByCate = (req, res) => {
  let { id } = req.query;
  let sql = `select * from post where cate_id=?`;
  let sqlArr = [id];
  var callBack = (err, data) => {
    if (err) {
      console.log("链接失败", err);
    } else {
      res.send({
        list: data,
      });
    }
  };
  dbConfig.sqlConnent(sql, sqlArr, callBack);
};
//新增类型
const addCate = (req, res) => {
  let { category } = req.body;
  let sql = `INSERT INTO youyu(category,status,create_time) values(?,?,?)`;
  let sqlArr = [category, 0, new Date()];
  var callBack = (err, result) => {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }
    res.send(JSON.stringify(result));
  };
  dbConfig.sqlConnent(sql, sqlArr, callBack);
};
//删除类型
//修改类型
module.exports = {
  getCate,
  getPostByCate,
  addCate,
};
