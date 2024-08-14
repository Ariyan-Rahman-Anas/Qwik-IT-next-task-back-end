const express = require("express");
const { postingABook, getBooks, getSingleBook, deleteABook } = require("../controller/bookController");
const router = express.Router();

router.post("/", postingABook);
router.get("/", getBooks);
router.get("/:id", getSingleBook);
router.delete("/:id", deleteABook);

module.exports = router; 
