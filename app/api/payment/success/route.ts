export const maxDuration = 60;
import Subscription from "@/models/Subscription";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    await connect();
    try {

        const response = await req.json();
        const newResponse = response.data.attributes
        // console.log(response)

        const userEmail = newResponse.user_email;

        let userSubscription = await Subscription.findOne({ email: userEmail });
        let userData = await User.findOne({ email: userEmail });

        if (!userSubscription) {
            const newSubscription = new Subscription({
                email: userEmail,
                currency: newResponse.currency,
                status: newResponse.status,
                planPrice: newResponse.subtotal,
                created_at: newResponse.created_at,
                updated_at: newResponse.updated_at,
            });
            await newSubscription.save();
        }

        userSubscription.email = userEmail,
            userSubscription.currency = newResponse.currency,
            userSubscription.status = newResponse.status,
            userSubscription.planPrice = newResponse.subtotal,
            userSubscription.created_at = newResponse.created_at,
            userSubscription.updated_at = newResponse.updated_at


        await userSubscription.save();

        console.log("---------------------------")
        if (newResponse.subtotal == 699) {
            userData.productCredits = 3;
        } else if (newResponse.subtotal == 1699) {
            userData.productCredits = 10;
        }

        await userData.save()

        return NextResponse.json({
            message: "Subscription successfully",
        }, { status: 200 })
    } catch (err) {
        console.log("Error saving subscription", err);

        return NextResponse.json({
            message: "Error saving subscription",
        }, { status: 500 })
    }
}
