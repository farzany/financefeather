import '../globals.css';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Image from 'next/image';
import AuthLayout from './authLayout';

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
