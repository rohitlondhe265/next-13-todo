import { NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function POST(req) {
  return NextResponse.json({ success: true }, {status: 200})
}