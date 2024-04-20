import mongoose from 'mongoose';
import mongooseDouble from 'mongoose-double'
mongooseDouble(mongoose)
const Double = mongoose.Schema.Types;
const Mortgage = new mongoose.Schema({
    name: {
        type: String,
    },
    rate: {
        type:Double.Number
    },
});
export default mongoose.model('Mortgage', Mortgage);