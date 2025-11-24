import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    isbn: {type: String, require: true},
    titulo_livro: {type: String, required: true},
    editora: {type: String, required: true},
    ano_publicacao:{type: String, required: true}
}, 
{versionKey: false}
)

const livro = mongoose.model ("livros", livroSchema) //'livros' é a collection do mongoDB
export default livro