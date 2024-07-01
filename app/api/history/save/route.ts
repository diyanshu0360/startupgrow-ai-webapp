export const maxDuration = 60;
import SavedHistory from "@/models/SavedHistory";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    await connect();

    try {
        const { userEmail, productName, productUrl, contentOption } = await req.json();

        // Find the existing user or create a new one
        let userDetail = await User.findOne({ email: userEmail });
        let userHistory = await SavedHistory.findOne({ email: userEmail });


        if (!userHistory) {
            userHistory = new SavedHistory({
                email: userEmail,
                allProductHistory: []
            });
        }

        console.log(typeof String(userDetail), '.....')

        if (userDetail.productCredits <= 0) {
            userDetail.productCredits = 0
            return NextResponse.json({
                message: "You have 0 credits, please buy more!",
                productId: false
            }, { status: 200 })
        } else {
            userDetail.productCredits -= 1
        }

        // Generate a new product ID
        const productCount = userHistory.allProductHistory.length + 1;
        const productId = `${String(userDetail._id).slice(6)}${String(productCount).padStart(4, "0")}`;


        const responseScape = await fetch(`${process.env.SCRAPER_URL}?url=${encodeURIComponent(productUrl)}`);
        const initalContnet = await responseScape.text();

        // Add the new product to the user's history
        userHistory.allProductHistory.push({
            productId,
            productName,
            productUrl,
            contentOption,
            initalContnet,
            productDescriptionContent: { responseContent: [], cycleCompleted: false },
            redditContent: { responseContent: [], cycleCompleted: false },
            hackerNewsContent: { responseContent: [], cycleCompleted: false },
            productHuntContent: { responseContent: [], cycleCompleted: false },
            linkedInContent: { responseContent: [], cycleCompleted: false },
            twitterContent: { responseContent: [], cycleCompleted: false },
            blogContent: { responseContent: [], cycleCompleted: false },
            coldEmailContent: { responseContent: [], cycleCompleted: false },
            coldMessageContent: { responseContent: [], cycleCompleted: false },
            freeToolIdeaContent: { responseContent: [], cycleCompleted: false },
            createdAt: new Date(),
        });

        // Save the updated user history to the database
        await userHistory.save();
        await userDetail.save();

        return NextResponse.json({
            message: "Product saved successfully", productId: productId
        }, { status: 200 })

    } catch (err) {
        console.log("Error saving history", err);
        return NextResponse.json({
            message: "Error saving history"
        }, { status: 500 })
    }
}
