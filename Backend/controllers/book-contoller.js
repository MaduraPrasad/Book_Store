const Book = require("../model/Book");

const getAllBooks = async (rwq, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ Message: "No products found" });
    }
    return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({ Pmessage: 'Unable to Add' })
    }
    return res.status(201).json({ book });
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No Products found" });
    }
    return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, { name, description, author, price, available, image });
        book = await book.save()

    } catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update this ID" });
    }
    return res.status(200).json({ book });

};

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to delete this book" });
    }
    return res.status(200).json({ message: "Product successfully deleted" });
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;