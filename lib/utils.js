import { NextResponse } from "next/server";


export function jsonResponse(status, data, init) {
    return new NextResponse(JSON.stringify(data), {
      ...init,
      status,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
    })
  }