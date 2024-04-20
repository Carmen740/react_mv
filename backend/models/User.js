import mongoose from 'mongoose';
const UserModel = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    }

})
export default mongoose.model('User', UserModel);