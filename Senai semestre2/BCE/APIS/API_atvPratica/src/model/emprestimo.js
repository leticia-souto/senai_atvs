import mongoose from "mongoose";

const emprestimoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    id_emprestimo: {type: Int32Array, require: true},
    data_emprestimo: {type: Date, required: true},
    data_devolucao: {type: Date, required: true},
    data_devolucao_efetiva:{type: Date, required: true},
    id_exemplar: {type: Int32Array, require: true},
    id_membro: {type: Int32Array, require: true}
}, 
{versionKey: false}
)

const emprestimo = mongoose.model ("emprestimo", emprestimoSchema) //'livros' é a collection do mongoDB
export default emprestimo