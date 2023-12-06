import React from 'react';
import SignInCard from '../../../components/SignInCard';
import Image from 'next/image';

export default async function SignIn() {
  return (
    <div className="flex h-screen justify-center items-center bg-[#2E2E48]">
      <div className="rounded-lg w-full max-w-[1000px] h-[700px] bg-[#3A3958] flex justify-end">
        <div className="w-1/2 flex-shrink-0 flex justify-start flex-col items-center">
          <div className="mt-24">
            <Image src={"/logo.png"} width={300} height={500} />
          </div>
          <div className="text-4xl text-violet-200 w-full text-center mt-4 py-8 font-semibold">
            Welcome to <br /> Finance Feather
          </div>
          <hr className="border-2 w-64 rounded border-[#2E2E48]" />
          <div className="px-12 text-2xl text-center text-violet-200 mt-8">
            Your lightweight finance management solution
          </div>
        </div>
        <div className="rounded-lg my-8 mr-8 p-10 w-1/2 max-h-full bg-[#2E2E48]">
          <SignInCard />
        </div>
      </div>
    </div>
  );
}
