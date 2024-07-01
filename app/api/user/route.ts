export const maxDuration = 60;
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";    
import connect from "@/utils/db";

export async function POST(req: NextRequest, res: NextResponse) {
    await connect();
    try {
        const { userEmail } = await req.json();

        let existingUser = await User.findOne({ email: userEmail });

        return NextResponse.json({
            message: "UserData Get Success", userData: { email: existingUser.email, userName: existingUser.userName, isLifeTime: existingUser.isLifeTime, productCredits: existingUser.productCredits }
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            message: "Error saving history"
        }, { status: 500 })
    }
}