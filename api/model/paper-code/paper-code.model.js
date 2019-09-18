import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PapercodeSchema = new Schema({
    category_id: {
        type: String, 
    },
   
    name: {
        type: String,
    },
    code: {
        type: Date,
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
 

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });



const Papercode = mongoose.model('Papercode', PapercodeSchema);

module.exports = Papercode;