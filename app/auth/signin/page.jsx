import React from 'react';
import SignInCard from '../../../components/SignInCard';

export default async function SignIn() {
  return (
    <div className="flex h-screen justify-center items-center bg-[#2E2E48]">
      <div className="rounded-lg p-12 w-[800px] h-[600px] bg-[#3A3958] flex justify-end">
        <div className="w-full rounded-lg p-10 max-w-[500px] h-full bg-[#2E2E48]">
          <SignInCard />
        </div>
      </div>
    </div>
  );
}
