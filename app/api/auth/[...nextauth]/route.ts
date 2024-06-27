import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connect from "@/utils/db";

const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {

      if (account?.provider == "google") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              userId: user.id,
              email: user.email,
              userName: user.name,
              avtarUrl: user.image,
              isLifeTime: false,
              productCredits: 0,
              playType: 'free',
              provider: account.provider,
              providerId: account.providerAccountId,
              accessToken: account.access_token,
              idToken: account.id_token
            });
            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }

    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };