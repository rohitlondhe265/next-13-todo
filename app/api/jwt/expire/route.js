import { expireUserCookie } from '@/lib/auth';
import { jsonResponse } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
}

export async function POST(req) {
    return expireUserCookie(jsonResponse(200, { success: true }));
}