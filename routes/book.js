const express = require("express");
const auth = require("../middleware/auth");
const { upload, processImage } = require("../middleware/multer-config");
const router = express.Router();

const bookCtrl = require("../controllers/book");

router.post("/", auth, upload, processImage, bookCtrl.createBook);
router.put("/:id", auth, upload, processImage, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.get("/bestrating", bookCtrl.getBestRatingBooks);
router.get("/:id", bookCtrl.getOneBook);
router.get("/", bookCtrl.getAllBooks);
router.post("/:id/rating", auth, bookCtrl.addRating);

module.exports = router;
