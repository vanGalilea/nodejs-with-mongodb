import mongoose from 'mongoose';
const {Schema} = mongoose;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

mongoose.model('Product', ProductSchema);

export default mongoose;