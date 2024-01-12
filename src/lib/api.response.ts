import { NextResponse } from "next/server";

interface IResponse {
    message?: string;
    data?: any;
    status?: ResponseInit["status"];
}

const Response = ({message = "Success", data, status = 200}: IResponse) => NextResponse.json(
    {
    success: true,
    message,
    data,
    },
    {
        // status 200 di pakai ketika berhasil, kalo misal ga ada biasana pake 404
        status: 200,
    }
);

export default Response;
