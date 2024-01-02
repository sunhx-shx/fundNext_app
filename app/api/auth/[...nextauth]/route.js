import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import User from '@models/user';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../utils/dbClient";
import { connectToDB } from '@utils/database';


const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ user, account, email }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: user.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
            image: '',
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
