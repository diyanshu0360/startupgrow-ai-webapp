import { handleUserInteraction } from '@/server/ai.service'

import SavedHistory from "@/models/SavedHistory";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    await connect();

    try {
        const { userEmail, productId, productType } = await req.json();

        // Find the existing user or create a new one
        let userHistory = await SavedHistory.findOne({ email: userEmail });

        let productSelected: any = {};
        userHistory.allProductHistory.map((item: any, index: number) => {
            if (item.productId === productId) {
                productSelected = item;
            }
        })

        console.log(productSelected);

        const initialContent = productSelected.productUrl;
        const sessionId = productSelected.productId;

        // // LinkedIn Post
        // const twitterPrompt = [
        //     "Consider yourself as experienced Twitter content writer. I want you to write me Twitter Thread for a product marketing. I'll give you landing page content, you need to write me Twitter Thread. The Twitter Thread write up should be relevant to Product. It should start with storytelling and first tweet to grab people’s attention. All posts should end with a CTA. Thread should be human written.",
        //     "Consider yourself as experienced Twitter content writer. I want you to write me Tweet for a product marketing. I'll give you landing page content, you need to write me Tweet. The Tweet write up should be relevant to Product. Tweet should be before the launch. Tweet should end with a CTA. Thread should be human written and under 280 characters.",
        // ];

        // const response = await handleUserInteraction(sessionId, initialContent, twitterPrompt)
        // const data = response

        return NextResponse.json({
            message: "Product saved successfully",
            allProductArray: []
        }, { status: 200 })

    } catch (err) {
        return NextResponse.json({
            message: "Error saving history"
        }, { status: 500 })
    }
}
