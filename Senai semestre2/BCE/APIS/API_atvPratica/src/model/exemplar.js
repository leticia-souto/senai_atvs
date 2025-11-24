import mongoose from "mongoose";

const exemplarSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    id_exemplar: {type: Int32Array, require: true},
    status_exemplar: {type: String, required: true},
    isbn: {type: Int32Array, required: true}
}, 
{versionKey: false}
)

const exemplar = mongoose.model ("exemplar", exemplarSchema) 
export default exemplar