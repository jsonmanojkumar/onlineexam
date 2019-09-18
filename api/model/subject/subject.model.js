import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let subjectSchema = new Schema({
    category: {
        type: String
    },
    subject: {
        type: String
    },
  
    is_deleted: {
        type: Boolean,
        default: false
    },
   

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const subject = mongoose.model('subject', subjectSchema);

module.exports = subject;