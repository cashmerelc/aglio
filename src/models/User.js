// models/User.js
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
},
{ timestamps: true })

// Avoid model recompilation errors in dev
// (Next.js hot reloading can cause repeated model compilation)
export default mongoose.models.User || mongoose.model('User', UserSchema)
