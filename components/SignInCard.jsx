'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { ClosedEye, OpenEye } from './icons/EyeIcons';
import Spinner from './Spinner';
import Logo from './icons/Logo';

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
      <h1 className="text-3xl text-left font-semibold text-white">
        Log into Finance Feather
      </h1>
      {errorMessage && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-2 block text-[#AAAACF] font-medium">
          Email
        </label>
        <input
          className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 placeholder:text-[#AAAACF] text-[#AAAACF] focus:border-blue-500 focus:ring-blue-500"
          id="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="name@company.com"
          required
          type="email"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-[#AAAACF] font-medium">
          Password
        </label>
        <div className="relative">
          <input
            className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 pr-12 placeholder:text-[#AAAACF] text-[#AAAACF] focus:border-blue-500 focus:ring-blue-500"
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
              className="h-4 w-4 rounded border border-slate-300 bg-slate-50 checked:bg-blue-500 focus:ring-blue-300"
              id="remember"
              type="checkbox"
              value=""
            />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm text-[#AAAACF] font-medium">
            Remember me
          </label>
        </div>
        <span className="ml-auto text-sm text-[#AAAACF] hover:underline hover:cursor-pointer">
          Forgot Password?
        </span>
      </div>
      <button disabled={loading} type="submit" className="w-full rounded-lg bg-[#615f92] px-5 py-2.5 text-center font-medium text-white hover:bg-[#3A3958] focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed">
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
