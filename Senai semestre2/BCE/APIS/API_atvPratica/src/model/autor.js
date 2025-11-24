import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    id_autor: {type: Int32Array, require: true},
    nome_autor: {type: String, require: true},
    nacionalidade: {type: String, required: true}
   
}, 
{versionKey: false}
)

const autor = mongoose.model ("autor", autorSchema) 
export default autor