import React from 'react';
import SignInCard from '../../../components/SignInCard';

export default async function SignIn() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full rounded-lg p-6 max-w-[500px] mb-28">
        <SignInCard />
      </div>
    </div>
  );
}
