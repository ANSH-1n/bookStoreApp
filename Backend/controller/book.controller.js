import Book from "../model/book.model.js";


export const getBook = async(req,res) => {
    try{
        const book = await Book.find();
        res.status(200).json(book)
    }catch(error){
      console.log("Error while fild the book model:",error);
      res.status(500).json(error)
    }
}