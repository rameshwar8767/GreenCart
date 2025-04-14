import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: Array,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    }
}, {
    timestamps: true,
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
