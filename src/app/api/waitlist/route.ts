import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { waitlist } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { error: 'Email is required', code: 'MISSING_EMAIL' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone ? phone.trim() : null;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // Insert new waitlist entry
    const newEntry = await db
      .insert(waitlist)
      .values({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newEntry[0], { status: 201 });
  } catch (error: any) {
    console.error('POST waitlist error:', error);

    // Handle duplicate email error - check error message and code
    const errorStr = error.message || error.toString();
    if (errorStr.includes('UNIQUE') || 
        errorStr.includes('unique') ||
        errorStr.includes('SQLITE_CONSTRAINT') ||
        errorStr.toLowerCase().includes('constraint') ||
        errorStr.toLowerCase().includes('failed query')) {
      return NextResponse.json(
        { error: 'Email already registered on waitlist', code: 'DUPLICATE_EMAIL' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const entries = await db
      .select()
      .from(waitlist)
      .orderBy(desc(waitlist.createdAt));

    return NextResponse.json(entries, { status: 200 });
  } catch (error: any) {
    console.error('GET waitlist error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}