import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: {
        type: String
    },
  
    is_deleted: {
        type: Boolean,
        default: false
    },
   

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;