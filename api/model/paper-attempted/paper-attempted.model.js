import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let paperattemptedSchema = new Schema({
   
    user_id: {
        type: String
    },
    papercode_id: {
        type: Date
    },
    paper:{
        tags: ['blank', 'red'],
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });



const paperattempted = mongoose.model('paperattempted', paperattemptedSchema);

module.exports = paperattempted;