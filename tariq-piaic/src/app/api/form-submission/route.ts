import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const req = await request.json();
// console.log(req);
    // if (req.email && req.password) {
    //     console.log("You're now logged in.")
    //     return NextResponse.json({ message: "user logged in" });
    // }
    // else {
    //     return NextResponse.json({ message: "invalid email or password" });
    // }
}1