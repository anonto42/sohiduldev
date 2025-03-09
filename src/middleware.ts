import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest){

    const section = await auth();
    if (section?.user?.email === "anonto1080@gmail.com") {
        return NextResponse.redirect(
            new URL("/auth", request.url)
        )
    };

    return NextResponse.next()
}

export const config = {
    matcher:[
        "/dashboard"
    ]
}