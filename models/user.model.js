import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User',
  },
}, {
    timestamps: true,
  }
);

UserSchema.pre('save', (next) => {
  // hash password
  this.password = this.encryptPassword(this.password);
  next();
});

UserSchema.methods = {
  encryptPassword(password) {
    if (!password) {
      throw new Error('Please input a password');
    }
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
};

export default mongoose.model('User', UserSchema);
