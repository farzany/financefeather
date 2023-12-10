import '../globals.css';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import React from 'react';
import AuthLayout from './AuthLayout';
import { authOptions } from '../api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Finance Feather',
  description: 'An exciting new chess variant.',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthLayout>
          {children}
        </AuthLayout>
      </body>
    </html>
  );
}
