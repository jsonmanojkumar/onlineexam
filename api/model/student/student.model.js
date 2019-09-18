import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let StudentSchema = new Schema({
    first_name: {
        type: String,
        required: 'First name is required'
    },
    last_name: {
        type: String,
        required: 'Last name is required'
    },
    course: {
        type: String
    },
    DOB: {
        type: Date
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });



const students = mongoose.model('students', StudentSchema);

module.exports = students;