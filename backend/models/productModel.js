import mongoose from 'mongoose'

// const imageSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     }
// }, { timestamp: true })

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    //images: [imageSchema],
    images: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    is_in_stock: {
        type: Number,
        require: true,
        default: 0
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, { timestamp: true })


const Product = mongoose.model('Product', productSchema)

export default Product