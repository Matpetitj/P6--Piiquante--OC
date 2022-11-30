const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config-middleware");
const auth = require("../middleware/auth-middleware");
const checkSauceInput = require("../middleware/sauce-input-middleware");

const sauceCtrl = require("../controllers/sauce-controller");

router.get("/", sauceCtrl.getAllSauces);
router.get('/:id', sauceCtrl.getOneSauce);
router.post("/", auth, multer, checkSauceInput, sauceCtrl.createSauce);
router.put("/:id", auth, multer, checkSauceInput, sauceCtrl.updateSauce)
router.delete("/:id", auth, sauceCtrl.deleteSauce)
router.post("/:id/like", auth, sauceCtrl.likeAndDislikeSauce)

module.exports = router;

//bloquer les like/dislike multiples
//islogged pour liker ou =/