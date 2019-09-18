import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let resultSchema = new Schema({
    user_id: {
        type: String,
    },
    paper_id: {
        type: String,
    },
    total_question: {
        type: String,
    },
    total_attempt: {
        type: Date,
    },
    total_correct:{
        type:String,
    },
    total_wrong:{
        type:String,
    },
    total_marks:{
        type:String,
    },
    obtain_marks:{
        type:String,
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });



const result = mongoose.model('result', resultSchema);

module.exports = result;