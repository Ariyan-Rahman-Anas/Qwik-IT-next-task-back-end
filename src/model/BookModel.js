const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
        publishedDate: {
            type: String, 
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        availabilityStatus: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        discountPrice: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const bookModel = mongoose.model("books", bookSchema);
module.exports = bookModel; 