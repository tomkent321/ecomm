import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    medium: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    artist_comments: {
      type: String,
      required: false,
      default: 'No comments at this time.',
    },
    subject: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],

    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    location: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    framed: {
      type: String,
      required: false,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
