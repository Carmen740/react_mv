import mongoose from 'mongoose';
const Consumer = new mongoose.Schema({
    name: {
        type: String,
    },
    rate: Number,
});
export default mongoose.model('Consumer', Consumer);