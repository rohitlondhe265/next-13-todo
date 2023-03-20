import { setUserCookie } from "@/lib/auth";
import { jsonResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export const config = {
    runtime: 'edge',
}

export async function POST(req) { 
    try {
        return await setUserCookie(jsonResponse(200, { success: true }));
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: { message: 'Authentication failed.' } }, { status: 500 });
    }
}