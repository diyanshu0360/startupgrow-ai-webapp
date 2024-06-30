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

        userHistory.allProductHistory.map((item: any) => {
            if (item.productId === productId) {
                productSelected = item;
            }
        });

        if (userData.productCredits <= 0 && productSelected == null) {
            return NextResponse.json({
                message: "Please Buy More Credits",
                notAllowed: true
            }, { status: 200 });
        }


        let promptSelected = null;
        const linkedInPrompt = [
            `Consider yourself as experienced LinkedIn content writer. I want you to write me LinkedIn Post for a product marketing. I'll give you landing page content, you need to write me LinkedIn Post. The LinkedIn Post write up should be relevant to Product. It should start with storytelling and first tweet to grab people’s attention. All posts should end with a CTA. LinkedIn Post should be human written. Content url: ${productSelected.productUrl}`,
        ];

        const twitterPrompt = [
            "Consider yourself as experienced Twitter content writer. I want you to write me Twitter Thread for a product marketing. I'll give you landing page content, you need to write me Twitter Thread. The Twitter Thread write up should be relevant to Product. It should start with storytelling and first tweet to grab people’s attention. All posts should end with a CTA. Thread should be human written.",
        ];

        switch (productType) {
            case "LinkedIn Posts":
                if (productSelected.linkedInContent.cycleCompleted) {
                    return NextResponse.json({
                        message: "Product saved successfully",
                        allProductArray: [...productSelected.linkedInContent.responseContent]
                    }, { status: 200 });
                } else {
                    promptSelected = [...linkedInPrompt];
                }
                break;
            case "Twitter Posts":
                if (productSelected.twitterContent.cycleCompleted) {
                    return NextResponse.json({
                        message: "Product saved successfully",
                        allProductArray: [...productSelected.twitterContent.responseContent]
                    }, { status: 200 });
                } else {
                    promptSelected = [...twitterPrompt];
                }
                break;
        }

        // Fetch content from external scraper API
        const sessionId = productSelected.productId;
        const response = await fetch(`http://localhost:5002/fetch?url=${encodeURIComponent(productSelected.productUrl)}`);
        const initialContent = await response.text();

        console.log(initialContent, '//////////////');

        // Call handleUserInteraction with fetched initialContent
        // const response = await handleUserInteraction(sessionId, initialContent, promptSelected);

        // console.log(response, ' ////////////////// ' + productType);

        return NextResponse.json({
            message: "Product saved successfully",
            allProductArray: []
        }, { status: 200 });

    } catch (err) {
        console.error('Error in POST:', err);
        return NextResponse.json({
            message: "Error saving history"
        }, { status: 500 });
    }
}
