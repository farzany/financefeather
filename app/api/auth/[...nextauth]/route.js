import { PrismaAdapter } from '@next-auth/prisma-adapter';
import sha256 from 'crypto-js/sha256';
import { omit } from 'lodash';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../lib/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            password: true,
          },
        });
        if (user && user.password === sha256(credentials.password).toString()) {
          return omit(user, 'password');
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token, user }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: user?.email ?? token?.email },
      });

      if (dbUser && session.user) {
        session.user.id = dbUser.id;
      }

      return session;
    },
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }

      const userExists = await prisma?.user.findUnique({
        where: {
          email: user?.email,
        },
      }) !== null;

      return userExists;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
