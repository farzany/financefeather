'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { ClosedEye, OpenEye } from './icons/EyeIcons';
import Spinner from './Spinner';

export default function SignInCard() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value.trim());
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    if (!email || !password) {
      return;
    }

    setLoading(true);

    event.preventDefault();
    const status = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    });

    if (!status?.error) {
      router.refresh();
    } else {
      setLoading(false);
      setPassword('');
      setErrorMessage('Incorrect email or password. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" action="#">
      <h1 className="text-left text-3xl font-semibold text-white">
        Sign into Finance Feather
      </h1>
      {errorMessage ? (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700" role="alert">
          <span className="font-medium">{errorMessage}</span>
        </div>
      ) : (
        <div className="mb-4 p-4 text-sm text-[#2E2E48]">
          .
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-2 block font-medium text-violet-200">
          Email
        </label>
        <input
          className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500"
          id="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="name@company.com"
          required
          type="email"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block font-medium text-violet-200">
          Password
        </label>
        <div className="relative">
          <input
            className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 pr-12 text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder={showPassword ? 'password' : '••••••••'}
            required
            type={showPassword ? 'text' : 'password'}
          />
          <button
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 my-auto ml-2 mr-2.5 flex h-fit items-center p-1"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? (
              <OpenEye />
            ) : (
              <ClosedEye />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              className="h-4 w-4 rounded border border-slate-300 bg-slate-50 checked:text-violet-500 focus:bg-none focus:ring-violet-300"
              id="remember"
              type="checkbox"
              value=""
            />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-violet-200">
            Remember me
          </label>
        </div>
        <span className="ml-auto text-sm text-violet-200 hover:cursor-pointer hover:underline">
          Forgot Password?
        </span>
      </div>
      <button disabled={loading} type="submit" className="w-full rounded-lg bg-violet-500 px-5 py-2.5 text-center font-medium text-white hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-300 disabled:cursor-not-allowed">
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner />
            Signing in...
          </div>
        ) : (
          'Sign in to your account'
        )}
      </button>
    </form>
  );
}
