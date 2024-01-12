import Response from "@/lib/api.response";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, params: Params) {

    const id = params.params.id;
    return Response({
        message: `Get detail user by id ${id}`,
        data: [
            {
                id,
                name: "Budi Anduk"
            },
        ],
        // status 200 di pakai ketika berhasil, kalo misal ga ada biasana pake 404
        status: 200,
    });
}
