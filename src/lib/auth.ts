import NextAuth, { type DefaultSession, type Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authenticateUser } from '@/src/server/userAuth';

declare module 'next-auth' {
  interface User {
    role?: string;
    username?: string;
    description?: string;
    status?: string;
    hasSetPassword?: boolean;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
      username?: string;
      description?: string;
      status?: string;
      hasSetPassword?: boolean;
    } & DefaultSession['user'];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: { signIn: '/' },
  providers: [
    Credentials({
      credentials: {
        identifier: { label: 'Username or email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (typeof credentials?.identifier !== 'string' || typeof credentials.password !== 'string') return null;
        const user = await authenticateUser(credentials.identifier, credentials.password);
        if (!user) return null;
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          username: user.username,
          description: user.description,
          status: user.status,
          hasSetPassword: user.hasSetPassword,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
        token.description = user.description;
        token.status = user.status;
        token.hasSetPassword = user.hasSetPassword;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? '';
        session.user.role = token.role as string | undefined;
        session.user.username = token.username as string | undefined;
        session.user.description = token.description as string | undefined;
        session.user.status = token.status as string | undefined;
        session.user.hasSetPassword = token.hasSetPassword as boolean | undefined;
      }
      return session;
    },
  },
  session: { strategy: 'jwt' },
});

export const getSession = async (): Promise<Session | null> => auth();
