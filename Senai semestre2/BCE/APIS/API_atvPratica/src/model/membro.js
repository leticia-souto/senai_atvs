import mongoose from "mongoose";

const membroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome_membro: {type: String, require: true},
    endereco: {type: String, required: true},
    telefone: {type: Number, required: true},
}, 
{versionKey: false}
)

const membro = mongoose.model ("membros", membroSchema) //'livros' é a collection do mongoDB
export default membro