import mongoose from "mongoose";

const autor_livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    id_autor_livro: {type: Int32Array, require: true},
    isbn: {type: String, require: true},
    id_autor: {type: String, required: true}
    
}, 
{versionKey: false}
)

const autor_livro = mongoose.model ("autor_livro", autor_livroSchema) 
export default autor_livro