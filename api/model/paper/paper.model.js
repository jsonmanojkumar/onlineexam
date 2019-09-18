import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let paperSchema = new Schema({
    category: {
        type: String
    },

    subject: {
        type: String
    },

    question: {
        type: String
    },
  
    Option1: {
        type: String
    },
    Option2: {
        type: String
    },
    Option3: {
        type: String
    },
    Option4: {
        type: String
    },
    correct: {
        type: String
    },
    
    is_deleted: {
        type: Boolean,
        default: false
    },
   

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const paper = mongoose.model('paper', paperSchema);

module.exports = paper;