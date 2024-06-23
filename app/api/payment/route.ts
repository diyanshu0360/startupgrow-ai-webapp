import Subscription from "@/models/Subscription";

export async function POST() {

    try {
        // const existingUser = await Subscription.findOne({ email: user.email });
        // if (!existingUser) {
        //     const newUser = new Subscription({
        //         email: '',
        //         userName: '',
        //         currency: '',
        //         planPrice: '',
        //         created_at: '',
        //         updated_at: '',
        //     });
        //     await newUser.save();
        // }

        // Update Existing Subscription
    } catch (err) {
        console.log("Error saving subscription", err);
    }
}
