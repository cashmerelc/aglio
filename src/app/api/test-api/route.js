// app/api/test-db/route.js
import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/dbConnect'
import User from '@/models/User'

export async function GET() {
  try {
    await dbConnect()

    // Just a test: create a dummy user, or find an existing user
    const testUser = new User({
      email: `test${Date.now()}@example.com`,
      password: 'password123',
      name: 'Test User 1',
    })

    await testUser.save()

    return NextResponse.json({
      success: true,
      message: 'MongoDB connection & user creation worked!',
      user: testUser,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
