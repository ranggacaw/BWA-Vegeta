import Response from "@/lib/api.response";

export async function POST(req: Request) {
    try {
        const payload = await req.json();

        return Response ({
            message: 'User registered successfully',
            data: payload,
        });
    } catch (error:any) {
        return Response ({
            message: 'User registered failed',
            data: error,
            status: 500, 
        });
    }
}