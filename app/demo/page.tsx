"use client";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import redditImg from "@/public/reddit-logo.png";
import hackerNewsImg from "@/public/hacker-news-logo.png";
import productHuntImg from "@/public/product-hunt-logo.png";
import linkedinImg from "@/public/Linkedin-logo.png";
import twitterImg from "@/public/x-logo.png";
import mailImg from "@/public/mail-icon.png";
import List from "@/components/List";
import DemoHeader from "@/components/DemoHeader";
import { jsPDF } from "jspdf";

const cards = [
  {
    name: "Product Descriptions",
    status: "",
    subtitle: "Short descriptions of products",
    logo: null,
    is_selected: false,
    response: [
      `Imagine you're a content creator, a small business owner, or a social media enthusiast. You have a brilliant idea for a video that could captivate your audience, boost your engagement, and elevate your brand. But there's a problem: creating high-quality videos is time-consuming, expensive, and often requires technical skills you might not have. Enter Typeframes, your ultimate solution to transforming ideas into stunning videos in minutes.

Typeframes is an AI-powered tool designed to make video creation as simple as writing text. Whether you're crafting content for YouTube, Instagram, or TikTok, Typeframes takes your text prompts and turns them into visually compelling videos effortlessly. Imagine the power of being able to generate professional-looking videos without the need for expensive software or a steep learning curve.

Here's how it works: Start with the text you want to bring to life. It could be a blog post, a social media caption, or any piece of text content. Break your text into concise segments with short, punctuated sentences. This makes it easier for the AI to process and transform your words into engaging video content. Next, select the audio that best complements your message. Typeframes offers a variety of options to suit different tones and styles.

Customization is key to making your video uniquely yours. With Typeframes, you can tweak colors, fonts, and layouts to match your brand or personal style. Easily upload your own photos or videos to incorporate them seamlessly into your project. Add visual impact with eye-catching animations or motion effects, and fine-tune the speech pace and volume of the AI-generated voice to ensure it aligns perfectly with your vision.

Typeframes is designed with a social-first approach, making it incredibly easy to create videos that grab attention and grow your business. You can create vertical videos from any content, ready to be published on your favorite social media platforms. Generate voiceovers, add animations, and create super engaging content that stands out in crowded feeds. Plus, with automation features, Typeframes can monitor your blog, Twitter, or LinkedIn account and create content automatically, saving you even more time and effort.

The results speak for themselves. Over 1,282 creators are already using Typeframes, experiencing a 600% increase in video engagement thanks to AI suggestions. With more than 15,679 videos made in an average of just 8 minutes, users are seeing a 200% average monthly growth in their businesses. Typeframes is not just a tool; it's a game-changer for anyone looking to elevate their video content without the hassle.

Ready to transform your ideas into stunning videos? Start creating now with Typeframes and see how easy it is to generate professional-looking videos with just a few clicks. Try our free demo and experience the magic for yourself. No signup needed. Explore our 10+ other tools to create the exact video you want. Your shortcut to effortless video storytelling is just a click away.

Create Videos Now and watch your engagement soar.`,
      `Transform your text into stunning videos in minutes with Typeframes. Our AI-powered tool lets you create engaging content for YouTube, Instagram, and TikTok effortlessly. Start with your text, customize with colors, fonts, and animations, and generate professional videos ready for social media. Join over 1,282 creators who have boosted their engagement by 600% and seen 200% business growth. Experience the magic of effortless video storytelling. Create Videos Now.`,
    ],
  },
  {
    name: "Reddit Posts",
    status: "",
    subtitle: "Trending posts on Reddit",
    logo: redditImg,
    is_selected: false,
    response: [
      `**Title: I made a site to create stunning videos in minutes with simple text prompts**

Hey Redditors,

I wanted to share something exciting that I've been working on. If you're like me, you know how time-consuming and expensive video creation can be, especially for platforms like YouTube, Instagram, and TikTok. That's why I created Typeframes, an AI-powered tool that transforms simple text prompts into stunning videos in just minutes.

**Why Typeframes Exists:**

The idea behind Typeframes is to make video creation accessible to everyone, regardless of their technical skills or budget. Whether you're a content creator, a small business owner, or just someone who wants to share engaging stories, Typeframes can help you boost engagement, save money, and save time.

**What's In It for You:**

- **Ease of Use:** Start with any text content—be it a blog post, social media caption, or even a random thought. Our tool breaks it down into concise segments and adds the perfect audio.
- **Customization:** Tweak colors, fonts, and layouts to match your brand or personal style. You can even upload your own photos or videos and add eye-catching animations.
- **Social-First Creation:** Create vertical videos ready for social media, complete with AI-generated voice and animations. You can even automate content creation by linking your blog, Twitter, or LinkedIn account.

**How I Built It:**

The journey started with a simple idea: to make video creation as easy as writing a text. After months of development and countless iterations, Typeframes was born. Our AI algorithms are designed to understand the nuances of your text and transform it into engaging video content. We've also focused on making the user interface intuitive, so you can create professional-looking videos with just a few clicks.

**Results So Far:**

- Over 1,282 creators are already using Typeframes.
- Users have seen a 600% increase in video engagement with our AI suggestions.
- More than 15,679 videos have been made in an average of just 8 minutes.
- Our users' businesses have experienced an average monthly growth of 200%.

If you're curious to see how it works, you can try our free demo. No signup needed. Just enter your video script and watch the magic happen.

**Create Videos Now**

Feel free to ask any questions or share your thoughts. I'd love to hear your feedback.

Cheers!`,
      `**Title: I turned my struggle with video creation into a tool that saves time and boosts engagement**

Hey Reddit,

I wanted to share a story that I think many of you might find relatable and hopefully inspiring. As an entrepreneur, I've always been on the lookout for ways to make my business stand out, especially on social media. But creating engaging videos for platforms like YouTube, Instagram, and TikTok was a constant struggle. It was time-consuming, expensive, and often required skills I didn't have.

That's when I decided to take matters into my own hands and create a solution that would make video creation accessible to everyone. After months of brainstorming, development, and testing, Typeframes was born.

**The Problem:**

Like many small business owners and content creators, I found myself spending hours trying to create videos that would capture my audience's attention. Hiring professionals was out of my budget, and DIY solutions were either too complicated or didn't deliver the quality I needed.

**The Solution:**

Typeframes is an AI-powered tool that transforms simple text prompts into stunning videos in just minutes. Whether it's a blog post, social media caption, or any text content, you can now turn it into a professional-looking video with ease.

**How It Works:**

1. **Start With Text Only:** Begin by writing the text you want to feature in your video. Break it into concise segments with short, punctuated sentences. Select your preferred audio.
2. **Customize & Personalize:** Tweak colors, fonts, and layouts to match your brand or personal style. Upload your own photos or videos and add eye-catching animations. Fine-tune the speech pace and volume of our AI-generated voice.
3. **Social-First Video Creation:** Create vertical videos ready for social media. Generate voice, add animations, and create super engaging content. You can even automate content creation by linking your blog, Twitter, or LinkedIn account.

**The Impact:**

Since launching Typeframes, we've seen incredible results:
- Over 1,282 creators are using our tool.
- Users have experienced a 600% increase in video engagement with our AI suggestions.
- More than 15,679 videos have been made in an average of just 8 minutes.
- Our users' businesses have seen an average monthly growth of 200%.

**Why It Matters:**

Typeframes isn't just a tool; it's a game-changer for anyone looking to create high-quality video content without the hassle. It saves time, reduces costs, and most importantly, helps you connect with your audience in a more engaging way.

If you're tired of the struggle and want to see how easy video creation can be, I invite you to try our free demo. No signup needed. Just enter your video script and watch the magic happen.

**Create Videos Now**

Feel free to ask any questions or share your thoughts. I'd love to hear your feedback and experiences.

Cheers!`,
      `**Title: I made a site to create stunning videos in minutes and I need your feedback**

Hey Reddit,

I’m excited to share something I’ve been working on and would love to get your valuable feedback. As someone who has struggled with creating engaging video content for social media, I decided to build a solution that could help others facing the same challenges. That’s how Typeframes was born.

**Why Typeframes Exists:**

Creating videos for platforms like YouTube, Instagram, and TikTok can be incredibly time-consuming and expensive. I wanted to make it easier for everyone—whether you're a content creator, a small business owner, or just someone who loves sharing stories. Typeframes is an AI-powered tool that transforms simple text prompts into stunning videos in just minutes.

**What’s In It for You:**

- **Ease of Use:** Start with any text content—be it a blog post, social media caption, or even a random thought. Our tool breaks it down into concise segments and adds the perfect audio.
- **Customization:** Tweak colors, fonts, and layouts to match your brand or personal style. You can even upload your own photos or videos and add eye-catching animations.
- **Social-First Creation:** Create vertical videos ready for social media, complete with AI-generated voice and animations. You can even automate content creation by linking your blog, Twitter, or LinkedIn account.

**How It Works:**

1. **Start With Text Only:** Begin by writing the text you want to feature in your video. Break it into concise segments with short, punctuated sentences. Select your preferred audio.
2. **Customize & Personalize:** Adjust colors, fonts, and layouts to match your brand or personal style. Upload your own photos or videos and add animations. Fine-tune the speech pace and volume of our AI-generated voice.
3. **Social-First Video Creation:** Create vertical videos ready for social media. Generate voice, add animations, and create super engaging content. Automate content creation by linking your blog, Twitter, or LinkedIn account.

**The Impact So Far:**

- Over 1,282 creators are using Typeframes.
- Users have experienced a 600% increase in video engagement with our AI suggestions.
- More than 15,679 videos have been made in an average of just 8 minutes.
- Our users' businesses have seen an average monthly growth of 200%.

**Why I Need Your Feedback:**

I believe that the best products are built with the input of their users. I’m eager to hear your thoughts on Typeframes. What do you like? What could be improved? Are there any features you think are missing? Your feedback will be invaluable in helping me make Typeframes even better.

If you’re curious to see how it works, you can try our free demo. No signup needed. Just enter your video script and watch the magic happen.

**Create Videos Now**

Looking forward to your feedback and suggestions. Thanks for your time!

Cheers!`,
    ],
  },
  {
    name: "Hacker-News Posts",
    status: "",
    subtitle: "Top news from Hacker News",
    logo: hackerNewsImg,
    is_selected: false,
    response: [
      `**Title: Revolutionize Your Video Content Creation with Typeframes: AI-Powered Text-to-Video Tool**

**Body:**

In the fast-paced world of digital content, creating engaging videos for platforms like YouTube, Instagram, and TikTok can be a daunting task. Enter Typeframes, an AI-powered tool designed to transform simple text prompts into stunning videos in minutes. This innovative solution is here to boost your engagement, save you time, and cut down on production costs.

**Why Typeframes Exists**

The idea behind Typeframes is simple yet powerful: to democratize video creation. We recognized that not everyone has the time, skills, or resources to produce high-quality videos. Traditional video production can be expensive and time-consuming, often requiring a team of professionals. Typeframes aims to level the playing field by providing an easy-to-use platform that allows anyone to create professional-looking videos effortlessly.

**What’s In It for You**

Typeframes is already making waves, with over 1,282 creators using the platform and experiencing a 600% increase in video engagement thanks to our AI suggestions. Our users have created more than 15,679 videos, each taking an average of just 8 minutes to produce. This efficiency translates to a 200% average monthly growth in our users' businesses.

**How We Built It**

The process of turning text into video with Typeframes is straightforward and user-friendly:

1. **Start With Text Only**: Begin by writing the text content you want to feature in your video. This could be a blog post, social media caption, or any other text. Break the text into concise segments with short, punctuated sentences and select your preferred audio.

2. **Customize & Personalize**: Typeframes offers a range of customization options to make your video uniquely yours. Tweak colors, fonts, and layouts to match your brand or personal style. You can easily upload your own photos or videos and incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects, and fine-tune the speech pace and volume of our AI-generated voice.

3. **Social-First Video Creation**: Create vertical videos ready to be published on social media. Generate voiceovers, add animations, and create super engaging content. You can even set up automations, allowing Typeframes to monitor your blog, Twitter, or LinkedIn account and create content automatically.

**Your Shortcut to Effortless Video Storytelling**

Typeframes is your go-to tool for creating professional videos without the hassle. Whether you're a content creator, marketer, or business owner, our platform is designed to help you tell your story in the most engaging way possible.

Ready to revolutionize your video content creation? Try our free demo and see how easy it is to generate professional-looking videos with just a few clicks. No signup needed. Start for free or explore our 10+ other tools to create the exact video you want.

**Create Videos Now**

Don't miss out on the opportunity to elevate your content game. Visit our website and start creating stunning videos today!`,
      `**Title: From Text to Triumph: How Typeframes is Empowering Entrepreneurs to Create Stunning Videos Effortlessly**

**Body:**

In the ever-evolving landscape of digital marketing, video content has emerged as a powerful tool for engagement and growth. However, the journey from concept to creation can be a formidable challenge, especially for entrepreneurs juggling multiple responsibilities. This is where Typeframes steps in, transforming the way entrepreneurs create video content with its AI-powered text-to-video tool.

**The Genesis of Typeframes**

The story of Typeframes began with a simple observation: many entrepreneurs struggle to produce high-quality video content due to time constraints, lack of technical skills, and limited budgets. Traditional video production often requires a significant investment in both time and money, resources that many startups and small businesses simply do not have. Recognizing this gap, we set out to develop a solution that would democratize video creation, making it accessible to everyone.

**Empowering Entrepreneurs**

Typeframes is designed to empower entrepreneurs by simplifying the video creation process. Our platform allows users to create stunning videos for YouTube, Instagram, and TikTok using simple text prompts. With Typeframes, you can boost engagement, save money, and save time, all while producing professional-quality videos.

**How It Works**

The process of creating videos with Typeframes is intuitive and efficient:

1. **Start With Text Only**: Begin by writing the text content you want to feature in your video. This could be a blog post, social media caption, or any other text. Break the text into concise segments with short, punctuated sentences and select your preferred audio.

2. **Customize & Personalize**: Typeframes offers a range of customization options to make your video uniquely yours. Tweak colors, fonts, and layouts to match your brand or personal style. You can easily upload your own photos or videos and incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects, and fine-tune the speech pace and volume of our AI-generated voice.

3. **Social-First Video Creation**: Create vertical videos ready to be published on social media. Generate voiceovers, add animations, and create super engaging content. You can even set up automations, allowing Typeframes to monitor your blog, Twitter, or LinkedIn account and create content automatically.

**Real-World Impact**

Since its launch, Typeframes has garnered a community of over 1,282 creators who have experienced a 600% increase in video engagement thanks to our AI suggestions. Our users have created more than 15,679 videos, each taking an average of just 8 minutes to produce. This efficiency has translated to a 200% average monthly growth in our users' businesses.

**A Success Story**

Consider the story of Sarah, an entrepreneur who runs a small online boutique. Before discovering Typeframes, Sarah struggled to create engaging video content for her social media channels. The process was time-consuming and often yielded mediocre results. With Typeframes, Sarah was able to transform her text-based content into stunning videos in minutes. The increased engagement from her video content led to a significant boost in her online sales, allowing her to expand her business and reach a wider audience.

**Your Shortcut to Effortless Video Storytelling**

Typeframes is more than just a tool; it's a game-changer for entrepreneurs looking to elevate their content game. Whether you're a startup founder, a small business owner, or a solo entrepreneur, our platform is designed to help you tell your story in the most engaging way possible.

Ready to revolutionize your video content creation? Try our free demo and see how easy it is to generate professional-looking videos with just a few clicks. No signup needed. Start for free or explore our 10+ other tools to create the exact video you want.

**Create Videos Now**

Don't miss out on the opportunity to elevate your content game. Visit our website and start creating stunning videos today!`,
      `**Title: How Typeframes Leveraged User Feedback to Revolutionize Text-to-Video Creation**

**Body:**

In the dynamic world of digital content creation, staying ahead of the curve requires more than just innovative technology; it demands a deep understanding of user needs and continuous improvement based on their feedback. This is the story of how Typeframes, an AI-powered text-to-video tool, harnessed the power of user feedback to transform the video creation landscape.

**The Birth of Typeframes**

Typeframes was conceived with a clear mission: to democratize video creation by making it accessible, efficient, and affordable for everyone. Our AI-powered tool allows users to create stunning videos for YouTube, Instagram, and TikTok using simple text prompts. But the journey from concept to a fully-fledged product was far from straightforward. It was the invaluable feedback from our early adopters that shaped Typeframes into the powerful tool it is today.

**Listening to Our Users**

From the outset, we prioritized user feedback. We engaged with our community of creators, entrepreneurs, and marketers to understand their pain points and aspirations. This feedback loop was instrumental in refining our product. Here’s how we did it:

1. **Beta Testing and Surveys**: We launched a beta version of Typeframes and invited a diverse group of users to test it. Through detailed surveys and direct conversations, we gathered insights into what worked and what didn’t.

2. **User Interviews**: We conducted in-depth interviews with users to delve deeper into their experiences. These conversations revealed nuanced challenges and opportunities that we hadn’t initially considered.

3. **Feedback Integration**: Armed with this feedback, our development team went to work. We iterated on the product, adding new features, improving existing ones, and fixing bugs. Each update was a direct response to user input.

**Transformative Features Born from Feedback**

Several key features of Typeframes were born directly from user feedback:

1. **Customization Options**: Users wanted more control over the look and feel of their videos. In response, we introduced extensive customization options, allowing users to tweak colors, fonts, and layouts to match their brand or personal style.

2. **Ease of Use**: Early feedback highlighted the need for a more intuitive interface. We streamlined the user experience, making it easier to break text into concise segments, select audio, and add visual effects.

3. **Automation Capabilities**: Many users expressed a desire for automation to save time. We developed features that allow Typeframes to monitor blogs, Twitter, or LinkedIn accounts and create content automatically.

**The Impact of Feedback-Driven Development**

The results speak for themselves. Today, over 1,282 creators use Typeframes, experiencing a 600% increase in video engagement thanks to our AI suggestions. Our users have created more than 15,679 videos, each taking an average of just 8 minutes to produce. This efficiency has led to a 200% average monthly growth in our users' businesses.

**A Case Study in Feedback**

Take the example of John, a digital marketer who was part of our beta testing group. John’s feedback was instrumental in shaping our customization features. He needed a tool that could produce videos aligned with his clients’ brand guidelines. By incorporating his suggestions, we were able to develop a feature set that met his needs and those of many other users. Today, John credits Typeframes with significantly boosting his clients’ social media engagement.

**Your Voice Matters**

At Typeframes, we believe that the best products are built in collaboration with their users. Your feedback is not just welcomed; it’s essential. We are committed to continuous improvement and innovation, driven by the insights and experiences of our community.

**Join the Conversation**

Ready to see how Typeframes can revolutionize your video content creation? Try our free demo and experience the power of feedback-driven development. No signup needed. Start for free or explore our 10+ other tools to create the exact video you want.

**Create Videos Now**

Your feedback has the power to shape the future of Typeframes. Visit our website, try our tool, and let us know how we can make it even better for you. Together, we can create something truly extraordinary.`,
    ],
  },
  {
    name: "Product-Hunt",
    status: "",
    subtitle: "Tagline, Description & Comment from Product Hunt",
    logo: productHuntImg,
    is_selected: false,
    response: [
      `**Tagline:**
Transform Text into Stunning Videos in Minutes

**Description:**
Introducing Typeframes, the AI-powered tool that turns your text into captivating videos for YouTube, Instagram, and TikTok in just a few clicks. Simply start with your text content, customize with your brand's colors, fonts, and layouts, and let our AI do the rest. With Typeframes, you can boost engagement, save time, and grow your business effortlessly. Join over 1,000 creators who have already made 15,679+ videos and seen a 600% increase in video engagement. Try our free demo and see how easy it is to create professional-looking videos.

**Comment:**
I created Typeframes because I saw a need for a simple yet powerful tool that could help creators and businesses turn their ideas into stunning videos without the hassle. Traditional video creation can be time-consuming and expensive, but with Typeframes, you can generate engaging content in minutes. Our AI-powered tool not only saves you time and money but also helps you boost your video engagement and grow your business. I would love to hear your thoughts and feedback on Typeframes. Give it a try and let me know how it transforms your content creation process. Create your first video now!`,
      `**Tagline:**
From Text to Viral Videos Instantly

**Description:**
Meet Typeframes, the revolutionary AI tool that converts your text into eye-catching videos for social media platforms like YouTube, Instagram, and TikTok. Start with any text content, customize it with your brand's unique style, and let our AI handle the rest. Typeframes makes video creation effortless, helping you save time, reduce costs, and significantly boost engagement. Join the growing community of over 1,000 creators who have already produced 15,679+ videos and experienced a 600% increase in engagement. Try our free demo today and see the magic for yourself.

**Comment:**
The idea for Typeframes came from my own struggles with creating engaging video content quickly and affordably. I wanted a solution that would allow anyone, regardless of their technical skills, to produce high-quality videos that capture attention and drive engagement. Typeframes does just that by transforming simple text into stunning videos in minutes. Our AI-powered tool is designed to save you time and money while helping you grow your business. I am excited to share Typeframes with you and would love to hear your feedback. Give it a try and let me know how it enhances your content creation journey. Start creating now!`,
    ],
  },
  {
    name: "LinkedIn Posts",
    status: "",
    subtitle: "Recent posts on LinkedIn",
    logo: linkedinImg,
    is_selected: false,
    response: [
      `Add a personal touch and don’t over-promote.

In today's fast-paced digital world, creating engaging video content can be a game-changer for your business. But let's face it, not everyone has the time or resources to produce high-quality videos consistently. That's where Typeframes comes in.

Imagine transforming your ideas into stunning videos in just minutes. With Typeframes, you can create videos for YouTube, Instagram, and TikTok using simple text prompts. Our AI-powered tool takes your text and turns it into visually captivating videos, saving you both time and money.

Here’s how it works:

1. **Start With Text Only**: Begin with any text content—be it a blog post, social media caption, or even a simple idea. Break it down into concise segments and select your preferred audio.

2. **Customise & Personalise**: Make your story uniquely yours by tweaking colors, fonts, and layouts to match your brand. Upload your own photos or videos, add eye-catching animations, and fine-tune the AI-generated voice to suit your style.

3. **Social-First Video Creation**: Create vertical videos ready for social media. Generate voiceovers, add animations, and automate content creation from your blog, Twitter, or LinkedIn account.

With over 1,282 creators already using Typeframes, the results speak for themselves. Users have seen a 600% increase in video engagement and a 200% average monthly growth in their businesses. Plus, with 15,679+ videos made in an average of just 8 minutes, it's clear that Typeframes is the shortcut to effortless video storytelling.

Ready to boost your engagement and grow your business? Try our free demo and see how easy it is to generate professional-looking videos with just a few clicks.

Create Videos Now and take your content to the next level.`,
      `Imagine having a brilliant idea for a video but feeling overwhelmed by the time and resources needed to bring it to life. This was a common challenge for many creators and businesses until Typeframes came along.

Picture this: You have a blog post or a social media caption that you know could be transformed into an engaging video. But where do you start? With Typeframes, the process is simpler than you might think. Our AI-powered tool takes your text and turns it into stunning videos in just minutes.

Here’s how it works:

1. **Start With Text Only**: Begin with any text content you want to feature in your video. Break it down into concise segments with short, punctuated sentences. Select your preferred audio to set the tone.

2. **Customise & Personalise**: This is where the magic happens. Typeframes gives you the tools to make your story uniquely yours. Tweak colors, fonts, and layouts to match your brand or personal style. Easily upload your own photos or videos to incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects. Fine-tune the speech pace, volume, and other aspects of our AI-generated voice to make it perfect.

3. **Social-First Video Creation**: Create vertical videos from any content, ready to be published on social media. Generate voiceovers, add animations, and create super engaging content. You can even automate content creation from your blog, Twitter, or LinkedIn account.

The results speak for themselves. Over 1,282 creators are already using Typeframes, experiencing a 600% increase in video engagement and a 200% average monthly growth in their businesses. With 15,679+ videos made in an average of just 8 minutes, it's clear that Typeframes is the shortcut to effortless video storytelling.

Are you ready to transform your ideas into stunning videos and take your content to the next level? Try our free demo and see how easy it is to generate professional-looking videos with just a few clicks.

Create Videos Now and watch your engagement soar.`,
      `Ever tried turning your brilliant ideas into videos and ended up feeling like a tech-challenged caveman? We've all been there, staring at complex editing software like it's an alien spaceship. But what if I told you there's a way to create stunning videos in minutes without needing a PhD in video editing?

Enter Typeframes, your new best friend in the world of video creation. Imagine this: you have a killer blog post or a witty social media caption, and you want to turn it into a video that grabs attention and boosts engagement. With Typeframes, it's as easy as typing a text message.

Here’s the lowdown:

1. **Start With Text Only**: Got a blog post, social media caption, or any text content? Great! Just write the words you want to bring to life. Break them into concise segments with short, punctuated sentences. Choose your favorite audio to set the mood.

2. **Customise & Personalise**: Now, let’s add some flair. Typeframes gives you the tools to make your story uniquely yours. Tweak colors, fonts, and layouts to match your brand or personal style. Upload your own photos or videos to incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects. Fine-tune the speech pace, volume, and other aspects of our AI-generated voice to make it just right.

3. **Social-First Video Creation**: Create vertical videos from any content, ready to be published on social media. Generate voiceovers, add animations, and create super engaging content. You can even automate content creation from your blog, Twitter, or LinkedIn account. Yes, you heard that right—automation!

The results are nothing short of spectacular. Over 1,282 creators are already using Typeframes, experiencing a 600% increase in video engagement and a 200% average monthly growth in their businesses. With 15,679+ videos made in an average of just 8 minutes, it's clear that Typeframes is the shortcut to effortless video storytelling.

Ready to ditch the caveman tools and step into the future of video creation? Try our free demo and see how easy it is to generate professional-looking videos with just a few clicks.

Create Videos Now and watch your engagement skyrocket.`,
    ],
  },
  {
    name: "Twitter Posts",
    status: "",
    subtitle: "Latest tweets",
    logo: twitterImg,
    is_selected: false,
    response: [
      `1/ Have you ever wished you could create stunning videos for YouTube, Instagram, or TikTok in just minutes? Imagine transforming simple text into engaging videos effortlessly. Let me introduce you to Typeframes, your new secret weapon for video creation. #VideoMarketing

2/ With Typeframes, you can boost engagement, save money, and save time. Our AI-powered tool turns your text into captivating videos in minutes. Over 1,282 creators are already using Typeframes, and they've seen a 600% increase in video engagement. #ContentCreation

3/ How does it work? It's simple! Start with your text—whether it's a blog post, social media caption, or any text content. Break it into concise segments, select your audio, and you're ready to go. #AI #VideoCreation

4/ Customization is key. With Typeframes, you can tweak colors, fonts, and layouts to match your brand. Upload your own photos or videos, add animations, and fine-tune the AI-generated voice to make your story uniquely yours. #Branding #Marketing

5/ Typeframes is designed for social-first video creation. Create vertical videos ready to be published on any platform. Generate voice, add animations, and create super engaging content. Automate your content creation from your blog, Twitter, or LinkedIn. #SocialMedia

6/ Imagine creating over 15,679 videos in an average of 8 minutes each. That's the power of Typeframes. Users have seen a 200% average monthly growth in their businesses. #BusinessGrowth #Efficiency

7/ Ready to see how easy it is? Try our free demo and generate professional-looking videos with just a few clicks. No signup needed. Start creating videos now and watch your engagement soar. #TryNow #VideoMarketing

8/ Don't miss out on the future of video storytelling. Explore our 10+ tools to create the exact video you want. Your shortcut to effortless video storytelling is here. #Explore #VideoCreation

Create stunning videos now with Typeframes: [Insert Link]`,
      `1/ Imagine turning your ideas into stunning videos in just minutes. Sounds impossible? Not with Typeframes. Our AI-powered tool transforms simple text into captivating videos effortlessly. Ready to revolutionize your content creation? #VideoMarketing #AI

2/ Picture this: You start with a blog post or social media caption. Typeframes takes your text, breaks it into concise segments, and adds your chosen audio. In just a few clicks, you have a professional-looking video. #ContentCreation #Efficiency

3/ Customization is where the magic happens. With Typeframes, you can tweak colors, fonts, and layouts to match your brand. Upload your own photos or videos, add eye-catching animations, and fine-tune the AI-generated voice. Make your story uniquely yours. #Branding

4/ Social media is all about grabbing attention. Typeframes helps you create vertical videos ready for any platform. Generate voice, add animations, and create super engaging content. Automate your content creation from your blog, Twitter, or LinkedIn. #SocialMedia #Automation

5/ Over 1,282 creators are already using Typeframes, and they've seen a 600% increase in video engagement. Imagine creating over 15,679 videos in an average of 8 minutes each. That's the power of Typeframes. #BusinessGrowth #Efficiency

6/ Users have experienced a 200% average monthly growth in their businesses. Typeframes is not just a tool; it's a game-changer. Ready to see how easy it is? Try our free demo and generate professional-looking videos with just a few clicks. #TryNow #VideoMarketing

7/ No signup needed. Start creating videos now and watch your engagement soar. Explore our 10+ tools to create the exact video you want. Your shortcut to effortless video storytelling is here. #Explore #VideoCreation

Create stunning videos now with Typeframes: [Insert Link]`,
      `Get ready to revolutionize your content creation! Typeframes is launching soon. Transform simple text into stunning videos for YouTube, Instagram, and TikTok in minutes. Boost engagement and save time with our AI-powered tool. Stay tuned! #VideoMarketing #AI

Sign up for updates: [Insert Link]`,
    ],
  },
  {
    name: "Blogs",
    status: "",
    subtitle: "Blog articles",
    logo: null,
    is_selected: false,
    response: [
      `**Transform Your Content Strategy with AI-Powered Video Creation**

In today's fast-paced digital landscape, capturing your audience's attention is more challenging than ever. With the rise of social media platforms like YouTube, Instagram, and TikTok, video content has become a crucial element in any successful marketing strategy. But creating engaging videos can be time-consuming and expensive. That's where Typeframes comes in.

**Why Video Content is Essential for Your Business**

Video content is no longer a luxury; it's a necessity. Studies show that video content can increase engagement by up to 600%. Whether you're a small business owner, a content creator, or a marketing professional, incorporating video into your content strategy can significantly boost your reach and impact.

**Introducing Typeframes: Your AI-Powered Video Creation Tool**

Typeframes is an innovative tool that transforms simple text prompts into stunning videos in minutes. Powered by advanced AI technology, Typeframes allows you to create professional-looking videos without the need for expensive equipment or extensive editing skills. Here's how it works:

**1. Start With Text Only**

Begin by writing the text content you want to feature in your video. This could be a blog post, a social media caption, or any other text-based content. Break your text into concise segments with short, punctuated sentences. Select your preferred audio to accompany your video.

**2. Customise & Personalise**

Typeframes offers a range of customization options to make your video uniquely yours. Tweak colors, fonts, and layouts to match your brand or personal style. Easily upload your own photos or videos to incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects. Fine-tune the speech pace, volume, and other aspects of the AI-generated voice to suit your needs.

**3. Social-First Video Creation**

Create perfect videos for social media that grab attention and grow your business. Typeframes allows you to create vertical videos from any content, ready to be published on platforms like Instagram and TikTok. Generate voiceovers, add animations, and create super engaging content effortlessly. You can even set up automations to have Typeframes monitor your blog, Twitter, or LinkedIn account and create content automatically.

**The Benefits of Using Typeframes**

- **Boost Engagement:** With AI suggestions, you can see up to a 600% increase in video engagement.
- **Save Time:** Create videos in an average of 8 minutes, freeing up your time for other important tasks.
- **Grow Your Business:** Users have reported an average monthly growth of 200% in their businesses.

**Try Typeframes Today**

Ready to revolutionize your content strategy? Try Typeframes for free and see how easy it is to generate professional-looking videos with just a few clicks. No signup is needed to start. Explore our 10+ other tools to create the exact video you want.

**Create Videos Now**

Don't miss out on the opportunity to elevate your content and grow your business. Start creating stunning videos with Typeframes today!

**Conclusion**

Incorporating video content into your marketing strategy is no longer optional; it's essential. With Typeframes, you can create engaging, professional videos quickly and easily, saving you time and money. Boost your engagement, grow your business, and captivate your audience with the power of AI-powered video creation.

**Call to Action**

Ready to take your content to the next level? Try Typeframes now and start creating stunning videos in minutes. Visit our website to get started and explore our range of tools designed to make video creation effortless.

**Create Videos Now**`,
      `**Unlock the Power of AI: Transform Text into Engaging Videos Instantly**

In the ever-evolving world of digital marketing, staying ahead of the curve is crucial. One of the most effective ways to capture your audience's attention is through video content. However, creating high-quality videos can be a daunting task, especially if you're short on time and resources. Enter Typeframes, the AI-powered tool that revolutionizes video creation by transforming simple text prompts into stunning videos in minutes.

**The Rise of Video Content in Digital Marketing**

Video content has become a cornerstone of digital marketing strategies. According to recent studies, video content can increase user engagement by up to 600%. Platforms like YouTube, Instagram, and TikTok have made video a dominant form of content consumption. But what if you could create captivating videos without the need for expensive equipment or extensive editing skills? That's where Typeframes comes in.

**How Typeframes Simplifies Video Creation**

Typeframes leverages advanced AI technology to make video creation accessible to everyone. Here's a step-by-step guide on how you can turn your text into engaging videos effortlessly:

**1. Start With Text Only**

Begin by writing the text content you want to feature in your video. This could be anything from a blog post to a social media caption. Break your text into concise segments with short, punctuated sentences. Select your preferred audio to enhance the video experience.

**2. Customise & Personalise**

Typeframes offers a plethora of customization options to make your video uniquely yours. Adjust colors, fonts, and layouts to align with your brand or personal style. Easily upload your own photos or videos to incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects. Fine-tune the speech pace, volume, and other aspects of the AI-generated voice to suit your needs.

**3. Social-First Video Creation**

Create videos optimized for social media platforms. Typeframes allows you to create vertical videos from any content, ready to be published on Instagram, TikTok, and more. Generate voiceovers, add animations, and create highly engaging content effortlessly. You can even automate content creation by having Typeframes monitor your blog, Twitter, or LinkedIn account.

**The Impact of AI on Video Engagement**

The integration of AI in video creation has proven to be a game-changer. Here are some compelling statistics that highlight the benefits of using Typeframes:

- **1,282+ Creators:** Over 1,000 creators are already using Typeframes to enhance their content.
- **600% Increase in Engagement:** Users have reported a significant boost in video engagement with AI suggestions.
- **15,679+ Videos Created:** An impressive number of videos have been made in an average of just 8 minutes.
- **200% Business Growth:** Users have experienced an average monthly growth of 200% in their businesses.

**Why Choose Typeframes?**

Typeframes is not just another video creation tool; it's a comprehensive solution designed to make video storytelling effortless. Whether you're a small business owner, a content creator, or a marketing professional, Typeframes can help you:

- **Save Time:** Create videos in minutes, freeing up your time for other important tasks.
- **Save Money:** No need for expensive equipment or professional editing services.
- **Boost Engagement:** Create captivating videos that resonate with your audience.

**Try Typeframes Today**

Ready to revolutionize your content strategy? Try Typeframes for free and see how easy it is to generate professional-looking videos with just a few clicks. No signup is needed to start. Explore our 10+ other tools to create the exact video you want.

**Create Videos Now**

Don't miss out on the opportunity to elevate your content and grow your business. Start creating stunning videos with Typeframes today!

**Conclusion**

Incorporating video content into your marketing strategy is essential for capturing your audience's attention and driving engagement. With Typeframes, you can create high-quality videos quickly and easily, saving you time and money. Unlock the power of AI and transform your text into engaging videos instantly.

**Call to Action**

Ready to take your content to the next level? Try Typeframes now and start creating stunning videos in minutes. Visit our website to get started and explore our range of tools designed to make video creation effortless.

**Create Videos Now**`,
      `**From Text to Triumph: How AI is Revolutionizing Video Marketing**

In the digital age, content is king, but video content reigns supreme. With platforms like YouTube, Instagram, and TikTok dominating the social media landscape, the demand for engaging video content has never been higher. However, creating high-quality videos can be a time-consuming and costly endeavor. Enter Typeframes, an AI-powered tool that transforms simple text prompts into stunning videos in minutes. Let's explore how this innovative tool is changing the game for content creators and marketers alike.

**The Evolution of Video Marketing**

Video marketing has evolved from a supplementary tactic to a core strategy for businesses of all sizes. According to recent statistics, video content can increase user engagement by up to 600%. This surge in popularity is driven by the ability of videos to convey complex messages quickly and effectively. But what if you could create captivating videos without the need for expensive equipment or extensive editing skills? That's where Typeframes comes in.

**How Typeframes Works: A Step-by-Step Guide**

Typeframes leverages advanced AI technology to make video creation accessible to everyone. Here's how you can turn your text into engaging videos effortlessly:

**1. Start With Text Only**

Begin by writing the text content you want to feature in your video. This could be anything from a blog post to a social media caption. Break your text into concise segments with short, punctuated sentences. Select your preferred audio to enhance the video experience.

**2. Customise & Personalise**

Typeframes offers a plethora of customization options to make your video uniquely yours. Adjust colors, fonts, and layouts to align with your brand or personal style. Easily upload your own photos or videos to incorporate them seamlessly. Add visual impact with eye-catching animations or motion effects. Fine-tune the speech pace, volume, and other aspects of the AI-generated voice to suit your needs.

**3. Social-First Video Creation**

Create videos optimized for social media platforms. Typeframes allows you to create vertical videos from any content, ready to be published on Instagram, TikTok, and more. Generate voiceovers, add animations, and create highly engaging content effortlessly. You can even automate content creation by having Typeframes monitor your blog, Twitter, or LinkedIn account.

**The Impact of AI on Video Engagement**

The integration of AI in video creation has proven to be a game-changer. Here are some compelling statistics that highlight the benefits of using Typeframes:

- **1,282+ Creators:** Over 1,000 creators are already using Typeframes to enhance their content.
- **600% Increase in Engagement:** Users have reported a significant boost in video engagement with AI suggestions.
- **15,679+ Videos Created:** An impressive number of videos have been made in an average of just 8 minutes.
- **200% Business Growth:** Users have experienced an average monthly growth of 200% in their businesses.

**Why Choose Typeframes?**

Typeframes is not just another video creation tool; it's a comprehensive solution designed to make video storytelling effortless. Whether you're a small business owner, a content creator, or a marketing professional, Typeframes can help you:

- **Save Time:** Create videos in minutes, freeing up your time for other important tasks.
- **Save Money:** No need for expensive equipment or professional editing services.
- **Boost Engagement:** Create captivating videos that resonate with your audience.

**Try Typeframes Today**

Ready to revolutionize your content strategy? Try Typeframes for free and see how easy it is to generate professional-looking videos with just a few clicks. No signup is needed to start. Explore our 10+ other tools to create the exact video you want.

**Create Videos Now**

Don't miss out on the opportunity to elevate your content and grow your business. Start creating stunning videos with Typeframes today!

**Conclusion**

Incorporating video content into your marketing strategy is essential for capturing your audience's attention and driving engagement. With Typeframes, you can create high-quality videos quickly and easily, saving you time and money. Unlock the power of AI and transform your text into engaging videos instantly.

**Call to Action**

Ready to take your content to the next level? Try Typeframes now and start creating stunning videos in minutes. Visit our website to get started and explore our range of tools designed to make video creation effortless.

**Create Videos Now**`,
    ],
  },
  {
    name: "Cold Emails",
    status: "",
    subtitle: "Templates for cold emails",
    logo: mailImg,
    is_selected: false,
    response: [
      `Subject: Transform Your Text into Stunning Videos in Minutes

Hi [Recipient's Name],

I hope this email finds you well. I wanted to share something that could significantly enhance your content creation process and boost your engagement on platforms like YouTube, Instagram, and TikTok.

Imagine turning your blog posts, social media captions, or any text content into captivating videos in just a few minutes. With Typeframes, our AI-powered tool, you can do exactly that. It's designed to save you time and money while increasing your video engagement by up to 600%.

Here's how it works:
1. **Start With Text Only**: Simply write the text you want to feature in your video. Break it into concise segments and select your preferred audio.
2. **Customize & Personalize**: Adjust colors, fonts, and layouts to match your brand. You can also upload your own photos or videos and add animations or motion effects.
3. **Social-First Video Creation**: Create vertical videos ready for social media, complete with generated voice and engaging animations. You can even automate content creation from your blog, Twitter, or LinkedIn.

Typeframes is already helping over 1,282 creators like you, with an average of 15,679 videos made in just 8 minutes. Our users have seen a 200% average monthly growth in their businesses.

I believe Typeframes could be a game-changer for your content strategy. Why not give it a try and see how easy it is to create professional-looking videos? You can start for free with no signup needed.

[Call to Action: Try Typeframes Now]

Looking forward to seeing the amazing videos you'll create.

Best regards,
[Your Name]  
[Your Position]  
Typeframes

P.S. If you have any questions or need assistance, feel free to reach out. I'm here to help!`,
      `Subject: Transform Your Text into Engaging Videos Effortlessly

Hi [Recipient's Name],

Imagine this: You’ve just finished writing a compelling blog post or a catchy social media caption. You know it has the potential to engage your audience, but you’re missing that visual spark to make it truly stand out. What if you could transform that text into a stunning video in just a few minutes?

This is where Typeframes comes in. Our AI-powered tool is designed to turn your written content into captivating videos effortlessly. Picture this: You start with your text, break it into concise segments, and select your preferred audio. Within minutes, you have a professional-looking video ready to share on YouTube, Instagram, or TikTok.

Typeframes offers you the ability to customize and personalize every aspect of your video. Adjust colors, fonts, and layouts to match your brand’s style. Upload your own photos or videos, add eye-catching animations, and fine-tune the AI-generated voice to make your story uniquely yours.

But it doesn’t stop there. Typeframes is built for social-first video creation. Create vertical videos that grab attention and drive engagement. Automate content creation from your blog, Twitter, or LinkedIn, and watch your business grow. Our users have seen a 600% increase in video engagement and a 200% average monthly growth in their businesses.

Over 1,282 creators are already using Typeframes, producing an average of 15,679 videos in just 8 minutes. It’s time to join them and see the difference for yourself.

Ready to transform your text into stunning videos? Start for free with no signup needed.

[Call to Action: Try Typeframes Now]

Looking forward to seeing the incredible videos you’ll create.

Best regards,
[Your Name]  
[Your Position]  
Typeframes

P.S. If you have any questions or need assistance, feel free to reach out. I'm here to help!`,
      `Subject: Turn Your Text into Videos Faster Than You Can Say "Lights, Camera, Action!"

Hi [Recipient's Name],

Ever feel like you need a magic wand to turn your brilliant text content into engaging videos? Well, we might not have a wand, but we do have something pretty close: Typeframes.

Picture this: You’ve just written a killer blog post or a witty social media caption. Now, instead of spending hours figuring out how to make it into a video, you can let Typeframes do the heavy lifting. Our AI-powered tool transforms your text into stunning videos faster than you can say "Lights, Camera, Action!"

Here’s how it works:
1. **Start With Text Only**: Write the text you want to feature in your video. Break it into concise segments and select your preferred audio.
2. **Customize & Personalize**: Adjust colors, fonts, and layouts to match your brand. Upload your own photos or videos, add animations, and fine-tune the AI-generated voice.
3. **Social-First Video Creation**: Create vertical videos ready for social media. Automate content creation from your blog, Twitter, or LinkedIn, and watch your engagement soar.

Typeframes is already a hit with over 1,282 creators, producing an average of 15,679 videos in just 8 minutes. Our users have seen a 600% increase in video engagement and a 200% average monthly growth in their businesses. 

So, why not give it a try? You can start for free with no signup needed. It’s time to turn your text into videos that captivate and convert.

[Call to Action: Try Typeframes Now]

Looking forward to seeing the amazing videos you’ll create.

Best regards,
[Your Name]  
[Your Position]  
Typeframes

P.S. If you have any questions or need assistance, feel free to reach out. I'm here to help!`,
    ],
  },
  {
    name: "Cold Messages",
    status: "",
    subtitle: "Templates for cold messages",
    logo: null,
    is_selected: false,
    response: [
      `Subject: Transform Your Text into Stunning Videos Effortlessly

Hi [Recipient's Name],

I hope this message finds you well. I wanted to share something that could significantly enhance your content creation process and boost your engagement on platforms like YouTube, Instagram, and TikTok.

Imagine turning your blog posts, social media captions, or any text content into captivating videos within minutes. With Typeframes, our AI-powered tool, you can do just that. It's designed to save you time and money while increasing your video engagement by up to 600%.

Here's how it works:
1. **Start With Text Only**: Simply write the text you want to feature in your video.
2. **Customize & Personalize**: Adjust colors, fonts, and layouts to match your brand. You can even upload your own photos or videos.
3. **Social-First Video Creation**: Create vertical videos ready for social media, complete with animations and AI-generated voiceovers.

Typeframes is already helping over 1,282 creators like you, with an average of 15,679 videos made in just 8 minutes. Our users have seen a 200% average monthly growth in their businesses.

I believe Typeframes could be a game-changer for your content strategy. Why not give it a try and see the difference for yourself?

Create your first video now and experience the ease of professional video storytelling.

Best regards,
[Your Name]

P.S. No signup needed to start. Try our free demo and explore our 10+ other tools to create the exact video you want.`,
      `Subject: Elevate Your Content Game with Effortless Video Creation

Hi [Recipient's Name],

Imagine this: You have a brilliant idea for a blog post or a social media update, but you know that text alone won't capture the attention it deserves. What if you could transform that text into a stunning video in just a few minutes?

That's exactly what happened to one of our users, Sarah. She was struggling to keep her audience engaged with just text posts. Then she discovered Typeframes, our AI-powered tool that turns simple text prompts into captivating videos. Within minutes, Sarah was able to create professional-looking videos that not only saved her time but also boosted her engagement by 600%.

Here's how it works:
1. **Start With Text Only**: Begin with any text content you want to bring to life.
2. **Customize & Personalize**: Adjust colors, fonts, and layouts to match your brand. You can even upload your own photos or videos.
3. **Social-First Video Creation**: Create vertical videos ready for social media, complete with animations and AI-generated voiceovers.

Sarah isn't alone. Over 1,282 creators are using Typeframes to make an average of 15,679 videos in just 8 minutes. They've seen a 200% average monthly growth in their businesses.

If you're looking to elevate your content game and make your storytelling effortless, Typeframes is your go-to tool. Why not give it a try and see the difference it can make?

Create your first video now and experience the magic of Typeframes.

Best regards,
[Your Name]

P.S. No signup needed to start. Try our free demo and explore our 10+ other tools to create the exact video you want.`,
      `Subject: Ready to Turn Your Text into Viral Videos?

Hi [Recipient's Name],

Ever feel like your text content is a bit like a wallflower at a party—full of potential but not quite getting the attention it deserves? What if you could turn that wallflower into the life of the party with just a few clicks?

Enter Typeframes, the AI-powered tool that transforms your text into stunning videos faster than you can say "viral content." Whether it's a blog post, social media caption, or any text content, Typeframes makes it easy to create videos that captivate and engage.

Here's the scoop:
1. **Start With Text Only**: Begin with any text you want to bring to life. Think of it as giving your words a makeover.
2. **Customize & Personalize**: Adjust colors, fonts, and layouts to match your brand. You can even upload your own photos or videos. It's like having a personal stylist for your content.
3. **Social-First Video Creation**: Create vertical videos ready for social media, complete with animations and AI-generated voiceovers. It's like having a megaphone for your message.

Over 1,282 creators are already using Typeframes, making an average of 15,679 videos in just 8 minutes. They've seen a 600% increase in video engagement and a 200% average monthly growth in their businesses. 

Ready to give your text content the spotlight it deserves? Try Typeframes and see how easy it is to create professional-looking videos that grab attention.

Create your first video now and watch your engagement soar.

Best regards,
[Your Name]

P.S. No signup needed to start. Try our free demo and explore our 10+ other tools to create the exact video you want.`,
    ],
  },
  {
    name: "Free-Tool Ideas",
    status: "",
    subtitle: "Ideas for free tools",
    logo: null,
    is_selected: false,
    response: [
      `1. **Text-to-Video Converter**: Offer a free tool that allows users to convert their text content into videos. This will give potential customers a taste of how easy it is to use Typeframes.

2. **Video Engagement Analyzer**: Provide a tool that analyzes video engagement metrics, helping users understand how their videos are performing and how they can improve.

3. **Social Media Video Scheduler**: Create a tool that schedules and posts videos to various social media platforms, ensuring consistent content delivery.

4. **Video Script Generator**: Develop a tool that helps users generate engaging video scripts based on their input, making the video creation process even simpler.

5. **Brand Style Guide Creator**: Offer a tool that helps users create a style guide for their videos, ensuring consistency in colors, fonts, and layouts.

6. **Voiceover Customizer**: Provide a tool that allows users to customize AI-generated voiceovers, adjusting pace, volume, and tone to match their brand voice.

7. **Animation and Motion Effect Library**: Create a free library of animations and motion effects that users can incorporate into their videos to enhance visual appeal.

8. **Content Automation Setup**: Offer a tool that helps users set up automations for their blog, Twitter, or LinkedIn accounts, automatically generating video content from their posts.

9. **Video Length Optimizer**: Develop a tool that suggests optimal video lengths for different social media platforms, helping users maximize engagement.

10. **Video Thumbnail Creator**: Provide a tool that helps users create eye-catching thumbnails for their videos, increasing click-through rates and engagement.`,
    ],
  },
];

export default function Demo() {
  const [cardDetail, setCardDetail] = useState<any>(cards);
  const [selectedCard, setSelectedCard] = useState(0);
  const [copyStatus, setCopyStatus] = useState<any>({});

  const handleCardClick = (index: number) => {
    let updatedArray = [...cardDetail];
    setSelectedCard(index);
    updatedArray.map((item, indexNum) => {
      if (index === indexNum) {
        item.is_selected = !cardDetail[index].is_selected;
      }
    });
    setCardDetail(updatedArray);
  };

  const handleCopy = (text: any, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus((prevState: any) => ({ ...prevState, [index]: true }));
      setTimeout(() => {
        setCopyStatus((prevState: any) => ({ ...prevState, [index]: false }));
      }, 3000);
    });
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    let yOffset = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    const maxLineWidth = pageWidth - 2 * margin;
    const lineHeight = 10;

    cardDetail.forEach((card: any) => {
      if (card.response.length > 0) {
        doc.setFontSize(16);
        doc.text(card.name, margin, yOffset);
        yOffset += lineHeight;

        card.response.forEach((item: any, index: number) => {
          doc.setFontSize(16);
          doc.text(`${index + 1})`, margin, yOffset);
          yOffset += lineHeight;
          const lines = doc.splitTextToSize(item, maxLineWidth);
          lines.forEach((line: any) => {
            if (yOffset + lineHeight > pageHeight - margin) {
              doc.addPage();
              yOffset = margin;
            }
            doc.setFontSize(12);
            doc.text(line, margin, yOffset);
            yOffset += lineHeight;
          });
          yOffset += lineHeight;
        });
      }
    });

    doc.save("StartupGrow-Demo-Response.pdf");
  };

  return (
    <div className="h-screen flex flex-col">
      <DemoHeader />
      <div className="flex flex-row justify-between gap-3 items-center mt-4 mb-2 mx-4">
        <div className="items-center">
          <p className="text-md font-medium underline text-black">
            Demo Responses : TypeFrames.com
          </p>
        </div>
        <div className="flex flex-row items-center">
          <button
            onClick={generatePdf}
            className="h-9 w-32 bg-[#FF033E] rounded-md"
          >
            <span className="text-white font-medium text-sm">Download Pdf</span>
          </button>
        </div>
      </div>
      <div className="md:flex flex-1 overflow-hidden mb-2">
        <div className="w-full md:w-1/2 py-2 px-4 no-scrollbar overflow-y-auto flex flex-col gap-2 h-[calc(100vh-125px)]">
          {cardDetail.map((card: any, index: number) => (
            <List
              key={index}
              name={card.name}
              status={card.status}
              subtitle={card.subtitle}
              response={card.response}
              logo={card.logo}
              isOpen={card.is_selected}
              handleCopy={handleCopy}
              copyStatus={copyStatus}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="hidden py-2 px-4 md:block w-full md:w-1/2 p-4 no-scrollbar overflow-y-auto h-[calc(100vh-125px)]">
          <div className="px-3 sm:px-4 py-2 sm:py-3 flex flex-col cursor-pointer bg-[#F4F4F5] rounded-md">
            <h2 className="text-xl font-bold">
              {cardDetail[selectedCard].name}
            </h2>
            <p className="mt-2">{cardDetail[selectedCard].subtitle}</p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {cardDetail[selectedCard].response.map(
              (item: any, index: number) => {
                const newArray = item.split("\n");
                return (
                  <div
                    key={index}
                    className="px-3 sm:px-4 py-2 sm:py-3 flex flex-row justify-between cursor-pointer bg-[#F4F4F5] rounded-md"
                  >
                    <div className="flex flex-col gap-2">
                      {newArray.map(
                        (text: any, textIndex: number) =>
                          text.trim() !== "" && (
                            <p className="text-md font-normal" key={textIndex}>
                              {text}
                            </p>
                          )
                      )}
                    </div>
                    <button
                      onClick={() => handleCopy(item, index)}
                      className="ml-2 h-fit"
                    >
                      {copyStatus[index] ? (
                        <FaCheck className="text-red-500" />
                      ) : (
                        <FaCopy />
                      )}
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
