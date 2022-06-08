// import { Schema, model } from "mongoose";
import pkg from 'mongoose';
const { Schema, model } = pkg;
const ImageSchema = new Schema({
   
upload: [{
    type: String,
    default: ""
}]

},{
    timestamps:true
});

const Images = model('Images', ImageSchema);

export default Images;
