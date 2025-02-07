// lib/dbConnect.js
import mongoose from 'mongoose'

let isConnected = false // Track the connection status

export async function dbConnect() {
  if (isConnected) {
    // If already connected, no need to reconnect
    return
  }

  try {
    // The connection string is stored in .env.local
    await mongoose.connect(process.env.MONGODB_URI, {
      // additional options, if any
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log('MongoDB connected!')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Failed to connect to MongoDB')
  }
}
