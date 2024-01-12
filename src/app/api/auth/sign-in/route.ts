import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {

        // const payload = await req.json();
        // const data =  payload;
        // return Response({
        //     message: "Sign in successfully",
        //     data,
        // });

        // cara validasi dan ambil data dari prisma
        const payload = await req.json();

        const user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            }
        });
        const data =  user;

        return Response({
            message: "Sign in successfully",
            data,
        });
    } catch (error: any) {
        return Response({
            message: "Sign in unsuccessfully",
            data: error,
            status: 500,
        });
    }
}