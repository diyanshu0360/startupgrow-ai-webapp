import { handleUserInteraction } from '@/server/ai.service'

import SavedHistory from "@/models/SavedHistory";
import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import User from '@/models/User';

export async function POST(req: NextRequest, res: NextResponse) {
    await connect();

    try {
        const { userEmail, productId, productType } = await req.json();
        let userHistory = await SavedHistory.findOne({ email: userEmail });
        let userData = await User.findOne({ email: userEmail });

        let productSelected: any = null;
        let selectedArray: any = null;

        userHistory.allProductHistory.map((item: any, index: number) => {
            if (item.productId === productId) {
                productSelected = item;
            }
        })

        if (userData.productCredits <= 0 && productSelected == null) {
            return NextResponse.json({
                message: "Product saved successfully",
                notAllowed: true
            }, { status: 200 })
        }

        if (productSelected) {
            switch (productType) {
                case "LinkedIn Posts":
                    selectedArray = productSelected.linkedInContent
                    break;
                case "Twitter Posts":
                    selectedArray = productSelected.twitterContent
                    break;
            }

            return NextResponse.json({
                message: "Product saved successfully",
                textResponse: selectedArray
            }, { status: 200 })
        }

        const initialContent = productSelected.productUrl;
        const sessionId = productSelected.productId;

        // LinkedIn Post
        const twitterPrompt = [
            "Consider yourself as experienced Twitter content writer. I want you to write me Twitter Thread for a product marketing. I'll give you landing page content, you need to write me Twitter Thread. The Twitter Thread write up should be relevant to Product. It should start with storytelling and first tweet to grab people’s attention. All posts should end with a CTA. Thread should be human written.",
            "Consider yourself as experienced Twitter content writer. I want you to write me Tweet for a product marketing. I'll give you landing page content, you need to write me Tweet. The Tweet write up should be relevant to Product. Tweet should be before the launch. Tweet should end with a CTA. Thread should be human written and under 280 characters.",
        ];

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
