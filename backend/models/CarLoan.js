import mongoose from 'mongoose';
const CarLoan = new mongoose.Schema({
    name: {
        type: String,
    },
    rate: {
        type: Number,
    },
});
export default mongoose.model('CarLoan', CarLoan);