var express = require("express");
var router = express.Router();
var cate = require("../controllers/youyu");
/* GET users listing. */
router.get("/", cate.getCate);

module.exports = router;
