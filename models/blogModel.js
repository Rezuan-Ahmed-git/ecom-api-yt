const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    numViews: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    disLikes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    image: {
      type: String,
      default:
        'https://lerablog.org/wp-content/uploads/2018/01/gtrgrtgfgfgs.jpg',
    },
    author: {
      type: String,
      default: 'Admin',
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

//Export the model
module.exports = mongoose.model('Blog', blogSchema);
