export const maxDuration = 60;
import SavedHistory from "@/models/SavedHistory";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    await connect();

    try {
        const { userEmail } = await req.json();

        // Find the existing user or create a new one
        let userHistory = await SavedHistory.findOne({ email: userEmail });

        let filteredArray: any = [];
        userHistory.allProductHistory.map((item: any, index: any) => {
            filteredArray.push({
                productId: item.productId,
                productName: item.productName,
                productUrl: item.productUrl,
                contentOption: item.contentOption
            })
        })

        return NextResponse.json({
            message: "Product saved successfully",
            allProductArray: filteredArray
        }, { status: 200 })

    } catch (err) {
        return NextResponse.json({
            message: "Error saving history"
        }, { status: 500 })
    }
}
