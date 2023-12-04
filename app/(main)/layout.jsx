import React from 'react';
import { Inter } from 'next/font/google';
import '../globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AuthProvider from '../AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Finance Feather',
  description: '', // TODO
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
