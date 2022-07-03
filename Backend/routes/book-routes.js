const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const booksContoller = require("../controllers/book-contoller");

router.get("/",booksContoller.getAllBooks);
router.post("/", booksContoller.addBook);
router.get("/:id",booksContoller.getById);
router.put("/:id",booksContoller.updateBook);
router.delete("/:id",booksContoller.deleteBook);

module.exports = router;