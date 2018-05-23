import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoItemSchema = new Schema({
  content: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  todoId: {
    type: Schema.Types.ObjectId,
    ref: 'Todo',
    required: true,
  },
}, {
    timestamps: true,
  }
);

export default mongoose.model('TodoItem', todoItemSchema);
