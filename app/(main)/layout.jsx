import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import React from 'react';
import '../globals.css';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AuthProvider from '../AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Finance Feather',
  description: '', // TODO
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

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
