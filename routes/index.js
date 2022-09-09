var express = require("express");
var router = express.Router();
var cate = require("../controllers/youyu");

router.get("/", cate.getCate);
router.get("/getPostByCate", cate.getPostByCate);
router.post("/addCate", cate.addCate);

module.exports = router;
