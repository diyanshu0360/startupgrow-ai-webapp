import { NextRequest } from "next/server";
import { decode } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/dashboard/create")) {
        const sessionToken = request.cookies.get("next-auth.session-token")?.value || "";

        if (sessionToken) {
            const { email }: any = await decode({
                token: sessionToken,
                secret: process.env.NEXTAUTH_SECRET as string,
            });

        }
    }
}