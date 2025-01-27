export const maxDuration = 60;
import SavedHistory from "@/models/SavedHistory";
import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import User from '@/models/User';
import { handleUserInteraction } from '@/server/ai.service'

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

        if (userData.productCredits <= 0) {
            return NextResponse.json({
                message: "Please Buy More Credits",
                notAllowed: true
            }, { status: 200 });
        }

        if (productSelected == null) {
            return NextResponse.json({
                message: "Page Not Found",
                pageNotFound: true
            }, { status: 200 });
        }


        let promptSelected = null;
        const linkedInPrompt = [
            `Consider yourself as experienced Linkedin content writer. I want you to write me Linkedin post for a product marketing. I'll give you landing page content, you need to write me Linkedin post. The Linkedin post write up should be relevant to Product. It should start with Add a personal touch and don’t over-promote. All posts should end with a CTA. Post should be in 1,300 to 1,500 characters. Strictly no use of emoji.`,
            `Consider yourself as experienced Linkedin content writer. I want you to write me Linkedin post for a product marketing. I'll give you landing page content, you need to write me Linkedin post. The Linkedin post write up should be relevant to Product. It should start with storytelling and drop hints. All posts should end with a CTA. Post should be in 1,200 to 1,700 characters. Strictly no use of emoji.`,
            `Consider yourself as experienced Linkedin content writer. I want you to write me Linkedin post for a product marketing. I'll give you landing page content, you need to write me Linkedin post. The Linkedin post write up should be relevant to Product. It should start with humour and be informative. All posts should end with a CTA. Post should be in 1,300 to 2,000 characters. Strictly no use of emoji.`
        ];

        const twitterPrompt = [
            "Consider yourself as experienced Twitter content writer. I want you to write me Twitter Thread for a product marketing. I'll give you landing page content, you need to write me Twitter Thread. The Twitter Thread write up should be relevant to Product. It should start with storytelling and first tweet to grab people’s attention. All posts should end with a CTA. Thread should be human written. Strictly no use of emoji.",
            "Consider yourself as experienced Twitter content writer. I want you to write me Twitter Thread for a product marketing. I'll give you landing page content, you need to write me Twitter Thread. The Twitter Thread write up should be relevant to Product. Thread should experiment with new techniques and formats. All posts should end with a CTA. Thread should be human written. Strictly no use of emoji.",
            "Consider yourself as experienced Twitter content writer. I want you to write me Tweet for a product marketing. I'll give you landing page content, you need to write me Tweet. The Tweet write up should be relevant to Product. Tweet should be before the launch. Tweet should end with a CTA. Thread should be human written and under 280 characters. Strictly no use of emoji."
        ];

        const productDescriptionPrompt = [
            "Consider yourself as experienced content writer. I want you to write me long description for a product marketing. I'll give you landing page content, you need to write me description. The description write up should be relevant to Product. description should be start with storytelling. Description should end with a CTA. Description should be under 3000 characters. Strictly no use of emoji.",
            "Consider yourself as experienced content writer. I want you to write me short description for a product marketing. I'll give you landing page content, you need to write me description. The description write up should be relevant to Product. Description should end with a CTA. Description should be under 500 characters. Strictly no use of emoji."
        ];

        const freeToolIdeaPrompt = [
            "Consider yourself as experienced marketing strategist. I want you to suggest me free tool ideas for a product. I'll give you landing page content, you need to suggest me 10 free tool ideas . The suggested ideas should be relevant to Product. Goal is to market product using this free tools. Strictly no use of emoji."
        ]

        const blogPrompt = [
            "Consider yourself as experienced SEO content writer. I want you to write me Blog Post for a product. I'll give you landing page content, you need to write Blog Post. The Blog Post topic should be relevant to Product Category. Blog Post should experiment with new techniques and formats. All Blog Post should end with a CTA. Blog Post should be SEO Friendly. Strictly no use of emoji.",
            "Consider yourself as experienced SEO content writer. I want you to write me Blog Post for a product. I'll give you landing page content, you need to write Blog Post. The Blog Post topic should be relevant to Product Category and should be different with above generated. Blog Post should experiment with new techniques and formats. All Blog Post should end with a CTA. Blog Post should be SEO Friendly. Strictly no use of emoji.",
            "Consider yourself as experienced SEO content writer. I want you to write me Blog Post for a product. I'll give you landing page content, you need to write Blog Post. The Blog Post topic should be relevant to Product Category and should be different with above generated. Blog Post should experiment with new techniques and formats. All Blog Post should end with a CTA. Blog Post should be SEO Friendly. Strictly no use of emoji."
        ]

        const coldMessagePrompt = [
            "Consider yourself as experienced Marketing content writer. I want you to write me Cold Message for sending on socials for a product. I'll give you landing page content, you need to write Cold Message. The Cold Message Email should end with a CTA. Explain why it exists, Add a personal touch and don’t over-promote. Strictly no use of emoji.",
            "Consider yourself as experienced Marketing content writer. I want you to write me Cold Message for sending on socials for a product. I'll give you landing page content, you need to write Cold Message. The Cold Message should end with a CTA. It should start with storytelling and drop hints. Strictly no use of emoji.",
            "Consider yourself as experienced Marketing content writer. I want you to write me Cold Message for sending on socials for a product. I'll give you landing page content, you need to write Cold Message. The Cold Message should end with a CTA. It should start with humour and be informative. Strictly no use of emoji."
        ]

        const coldEmailPrompt = [
            "Consider yourself as experienced Marketing content writer. I want you to write me Cold Email for a product. I'll give you landing page content, you need to write Cold Email. The Cold Email should end with a CTA. Explain why it exists, Add a personal touch and don’t over-promote. Strictly no use of emoji.",
            "Consider yourself as experienced Marketing content writer. I want you to write me Cold Email for a product. I'll give you landing page content, you need to write Cold Email. The Cold Email should end with a CTA. It should start with storytelling and drop hints. Strictly no use of emoji.",
            "Consider yourself as experienced Marketing content writer. I want you to write me Cold Email for a product. I'll give you landing page content, you need to write Cold Email. The Cold Email should end with a CTA. It should start with humour and be informative. Strictly no use of emoji."
        ]

        const productHuntPrompt = [
            "Consider yourself as experienced Product Hunt content writer. I want you to write me tagline, description & comment for a product launch. I'll give you landing page content, you need to write above content. Tagline should be short, straight to the point, and possibly trigger an emotional reaction. Description should be about explain product. Comment should be journey about why your created this product, explain advantages and ask for feedback Consider yourself as 'I' (you are the founder). Should end with a CTA. Strictly no use of emoji.",
            "Consider yourself as experienced Product Hunt content writer. I want you to write another set of content for tagline, description & comment for a product launch. Consider all content different from previous. I'll give you landing page content, you need to write above content. Tagline should be short, straight to the point, and possibly trigger an emotional reaction. Description should be about explain product. Comment should be journey about why your created this product, explain advantages and ask for feedback Consider yourself as 'I' (you are the founder). Should end with a CTA. Strictly no use of emoji."
        ]

        const hackerNewPrompt = [
            "Consider yourself as experienced Hacker New Post content writer. I want you to write me Hacker New Post for a product including Title & Body. I'll give you landing page content, you need to write Hacker New Post. The Hacker New Post topic should be relevant to Product. Hacker New Post should experiment with new techniques and formats. All Hacker New Post should end with a CTA. Explain why it exists, what’s in it for the customers, and how you built it. Strictly no use of emoji.",
            "Consider yourself as experienced Hacker New Post content writer. I want you to write me Hacker New Post for a product including Title & Body. I'll give you landing page content, you need to write Hacker New Post. The Hacker New Post topic should be relevant to Product. Hacker New Post should experiment with new techniques and formats. All Hacker New Post should end with a CTA. Write about an interesting and valuable entrepreneurship story. Strictly no use of emoji.",
            "Consider yourself as experienced Hacker New Post content writer. I want you to write me Hacker New Post for a product including Title & Body. I'll give you landing page content, you need to write Hacker New Post. The Hacker New Post topic should be relevant to Product. Hacker New Post should experiment with new techniques and formats. All Hacker New Post should end with a CTA. Write about getting valuable feedback. Strictly no use of emoji."
        ]

        const redditPrompt = [
            "Consider yourself as experienced Reddit content writer. I want you to write me Reddit Post for a product. I'll give you landing page content, you need to write Reddit Post. The Redit Post topic should be relevant to Product. Blog Post should experiment with new techniques and formats. All Reddit Post should end with a CTA. Refer this for Title “I made a site to [benefit for user]”. Explain why it exists, what’s in it for the customers, and how you built it. Strictly no use of emoji.",
            "Consider yourself as experienced Reddit content writer. I want you to write me Reddit Post for a product. I'll give you landing page content, you need to write Reddit Post. The Redit Post topic should be relevant to Product. Blog Post should experiment with new techniques and formats. All Reddit Post should end with a CTA. Refer this for Title “I”. write about an interesting and valuable entrepreneurship story. Strictly no use of emoji.",
            "Consider yourself as experienced Reddit content writer. I want you to write me Reddit Post for a product. I'll give you landing page content, you need to write Reddit Post. The Redit Post topic should be relevant to Product. Blog Post should experiment with new techniques and formats. All Reddit Post should end with a CTA. Refer this for Title “I made a site to [benefit for user]”. Write about getting valuable feedback. Strictly no use of emoji."
        ]

        let flagAPICall = true;
        let textResponse: any;
        switch (productType) {
            case "Product Descriptions":
                if (productSelected.productDescriptionContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.productDescriptionContent.responseContent]
                } else {
                    promptSelected = [...productDescriptionPrompt];
                }
                break;
            case "Reddit Posts":
                if (productSelected.redditContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.redditContent.responseContent]
                } else {
                    promptSelected = [...redditPrompt];
                }
                break;
            case "Hacker-News Posts":
                if (productSelected.hackerNewsContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.hackerNewsContent.responseContent]
                } else {
                    promptSelected = [...hackerNewPrompt];
                }
                break;
            case "Product-Hunt":
                if (productSelected.productHuntContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.productHuntContent.responseContent]
                } else {
                    promptSelected = [...productHuntPrompt];
                }
                break;
            case "LinkedIn Posts":
                if (productSelected.linkedInContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.linkedInContent.responseContent]
                } else {
                    promptSelected = [...linkedInPrompt];
                }
                break;
            case "Twitter Posts":
                if (productSelected.twitterContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.twitterContent.responseContent]
                } else {
                    promptSelected = [...twitterPrompt];
                }
                break;
            case "Blogs":
                if (productSelected.blogContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.blogContent.responseContent]
                } else {
                    promptSelected = [...blogPrompt];
                }
                break;
            case "Cold Emails":
                if (productSelected.coldEmailContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.coldEmailContent.responseContent]
                } else {
                    promptSelected = [...coldEmailPrompt];
                }
                break;
            case "Cold Messages":
                if (productSelected.coldMessageContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.coldMessageContent.responseContent]
                } else {
                    promptSelected = [...coldMessagePrompt];
                }
                break;
            case "Free-Tool Ideas":
                if (productSelected.freeToolIdeaContent.cycleCompleted) {
                    flagAPICall = false
                    textResponse = [...productSelected.freeToolIdeaContent.responseContent]
                } else {
                    promptSelected = [...freeToolIdeaPrompt];
                }
                break;
        }

        if (flagAPICall) {
            console.log("//////////// API Call Started /////////////", flagAPICall)
            const sessionId = productSelected.productId;
            let response = await handleUserInteraction(sessionId, productSelected.initalContnet, promptSelected);

            let responseArray: any = [];
            switch (productType) {
                case "Product Descriptions":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.productDescriptionContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.productDescriptionContent.cycleCompleted = true;
                    break;
                case "Reddit Posts":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.redditContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.redditContent.cycleCompleted = true;
                    break;
                case "Hacker-News Posts":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.hackerNewsContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.hackerNewsContent.cycleCompleted = true;
                    break;
                case "Product-Hunt":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.productHuntContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.productHuntContent.cycleCompleted = true;
                    break;
                case "LinkedIn Posts":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.linkedInContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.linkedInContent.cycleCompleted = true;
                    break;
                case "Twitter Posts":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.twitterContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.twitterContent.cycleCompleted = true;
                    break;
                case "Blogs":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.blogContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.blogContent.cycleCompleted = true;
                    break;
                case "Cold Emails":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.coldEmailContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.coldEmailContent.cycleCompleted = true;
                    break;
                case "Cold Messages":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.coldMessageContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.coldMessageContent.cycleCompleted = true;
                    break;
                case "Free-Tool Ideas":
                    responseArray = [...response.map((item: any) => item.lc_kwargs.content)]
                    productSelected.freeToolIdeaContent.responseContent = response.map((item: any) => item.lc_kwargs.content);
                    productSelected.freeToolIdeaContent.cycleCompleted = true;
                    break;
            }

            await SavedHistory.findOneAndUpdate(
                { email: userEmail, "allProductHistory.productId": productId },
                { $set: { "allProductHistory.$": productSelected } }
            );

            return NextResponse.json({
                message: "Product saved successfully",
                textResponse: [...responseArray]
            }, { status: 200 });
        } else {
            return NextResponse.json({
                message: "Product saved successfully",
                textResponse: [...textResponse]
            }, { status: 200 });
        }


    } catch (err) {
        console.error('Error in POST:', err);
        return NextResponse.json({
            message: "Error saving history"
        }, { status: 500 });
    }
}
