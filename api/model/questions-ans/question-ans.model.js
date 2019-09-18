import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let QuestionAnsSchema = new Schema({
    paper_id: {
        type: String,
        required: 'First name is required'
    },
   
    questions: {
        type: String
    },
    option: {
       tags: ['red', 'blank'],
    },
    Ans: {
        type: String
    },
    is_multi: {
        type: Boolean
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });



const QuestionAns = mongoose.model('QuestionAns', QuestionAnsSchema);

module.exports = QuestionAns;