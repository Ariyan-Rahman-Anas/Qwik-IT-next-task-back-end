const BookModel = require("./../model/BookModel");

// Posting a book
 const postingABook = async (req, res) => {
    const { name, author, category, language, publisher, publishedDate, description, availabilityStatus, price, discountPrice } = req.body;

    try {
        const newBook = await BookModel.create({
            name,
            author,
            category,
            language,
            publisher,
            publishedDate,
            description,
            availabilityStatus,
            price,
            discountPrice,
        });
        console.log("New book created: ", newBook);
        return res.status(201).json({ message: "Book created successfully", newBook });
    } catch (error) {
        console.error("An error occurred while posting the book:", error);
        return res.status(500).json({ message: "An error occurred while posting the book" });
    }
};

// Get all books
const getBooks = async (req, res) => {
    try {
        const books = await BookModel.find();
        return res.status(200).json({
            totalItems: books.length,
            data: books,
        });
    } catch (error) {
        console.error("An error occurred while fetching books:", error);
        return res.status(500).json({ message: "An error occurred while fetching books" });
    }
};


// Get a books
const getSingleBook = async (req, res) => {
    const { id } = req.params
    try {
        const aBook = await BookModel.findById(id)
        if (!aBook) {
            return res.status(404).json({error: "Item not found"})
        }
        res.status(200).json({aBook})
    } catch (error) {
        console.error(`Error fetching ordered item with ID ${id}:`, error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// delete all books
const deleteABook = async (req, res) => {
    const { id } = req.params
    try {
        const deleting = await BookModel.findByIdAndDelete(id)
        if (!deleting) {
            return res.status(404).json({ error: "Can't Delete, Item not found" })
        }
        res.status(200).json({ message: "Book Deleted Successfully!" })
    } catch (error) {
        console.log(`Error deleting item with ID ${id}:`, error);
        res.status(404).json({ error: "Internal server error" })
    }
}

module.exports = { postingABook, getBooks, getSingleBook, deleteABook }