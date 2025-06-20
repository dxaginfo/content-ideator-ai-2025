const mongoose = require('mongoose');

const CalendarItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ideaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idea',
    required: true,
  },
  scheduledDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['draft', 'scheduled', 'published'],
    default: 'draft',
  },
  notes: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('CalendarItem', CalendarItemSchema);
