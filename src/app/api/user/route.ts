import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        success: true,
        message: 'Get all users!',
        data: [
            {
                id: 1,
                name: "Taufan"
            },
            {
                id: 2,
                name: "Duwi"
            },{
                id: 3,
                name: "Ipul"
            },
        ]
    },
    {
        // status 200 di pakai ketika berhasil, kalo misal ga ada biasana pake 404
        status: 200,
    })
}

export async function POST() {
    return NextResponse.json({
        success: true,
        message: 'New user created!',
        data: [
            {
                id: 4,
                name: "Reza"
            },
        ]
    },
    {
        // status 200 di pakai ketika berhasil, kalo misal ga ada biasana pake 404
        status: 200,
    })
}