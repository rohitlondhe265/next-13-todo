import { NextResponse } from "next/server"
import { cookies, headers } from 'next/headers'
import { redirect } from "next/navigation";

export async function GET(request) {

  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  const headersList = headers();
  const host = headersList.get("host");

  return NextResponse.json({ msg: "ok", token: token.value, host: host }, {
    status: 201,
    headers: { "Set-Cookie": `token=token-1234` }, // set new response cookies
  })
}

export async function POST(request) {
  const body = await request.json(); // access the body of the request
  return NextResponse.json(body)
}

export async function DELETE(request) {
  redirect("https://next-mysql-crud.vercel.app/")
}
