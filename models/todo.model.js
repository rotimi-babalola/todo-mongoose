import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
    timestamps: true,
  }
);

export default mongoose.model('Todo', todoSchema);
