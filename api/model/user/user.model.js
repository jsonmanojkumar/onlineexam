import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let userSchema = new Schema({
    
    name: {
        type: String
    },
    mobile: {
        type: Date
    },
    age:{
    type:String
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });



const user = mongoose.model('user', userSchema);

module.exports = user;