const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    enum: ['blog', 'video', 'social'],
    required: true,
  },
  keywords: [{
    type: String,
    trim: true,
  }],
  trendScore: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Idea', IdeaSchema);
