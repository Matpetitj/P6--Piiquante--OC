const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config-middleware");
const auth = require("../middleware/auth-middleware");
const sauceInput = require("../middleware/sauce-input-middleware");

const sauceCtrl = require("../controllers/sauce-controller");

router.get("/", sauceCtrl.getAllSauces);
router.get('/:id', sauceCtrl.getOneSauce);
router.post("/", auth, multer, sauceInput, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceInput, sauceCtrl.updateSauce)
router.delete("/:id", auth, sauceCtrl.deleteSauce)
router.post("/:id/like", auth, sauceCtrl.likeAndDislikeSauce)

module.exports = router;

//bloquer les like/dislike multiples