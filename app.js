const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();

// Middleware
app.use(express.json());
app.use("/books", router);


mongoose.connect(
    "mongodb+srv://admin:y7hws8C24xphB24Z@cluster0.14ify.mongodb.net/Book_Store?retryWrites=true&w=majority"
)
    .then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
//y7hws8C24xphB24Z