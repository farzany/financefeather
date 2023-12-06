'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { ClosedEye, OpenEye } from './icons/EyeIcons';
import Spinner from './Spinner';

export default function SignUpCard() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value.trim());
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setErrorMessage(null);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
    setErrorMessage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    setLoading(true);

    // TODO: Register account

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
      setErrorMessage('An error occured. Please try signing in.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" action="#">
      <h1 className="text-3xl text-left font-semibold text-white">
        Register for an Account
      </h1>
      {errorMessage ? (
        <div className="p-4 mb-4 text-sm text-red-700 rounded-lg bg-red-100" role="alert">
          <span className="font-medium">{errorMessage}</span>
        </div>
      ) : (
        <div className="p-4 mb-4 text-sm text-[#2E2E48]">
          .
        </div>
      )}
      <div>
        <label htmlFor="email" className="mb-2 block text-violet-200 font-medium">
          Email
        </label>
        <input
          className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 placeholder:text-[#AAAACF] text-[#AAAACF] focus:outline-none focus:border-violet-500 focus:ring-violet-500"
          id="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="name@company.com"
          required
          type="email"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-violet-200 font-medium">
          Password
        </label>
        <div className="relative">
          <input
            className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 pr-12 placeholder:text-[#AAAACF] text-[#AAAACF] focus:outline-none focus:border-violet-500 focus:ring-violet-500"
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
      <div>
        <label htmlFor="confirmPassword" className="mb-2 block text-violet-200 font-medium">
          Confirm Password
        </label>
        <div className="relative mb-4">
          <input
            className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 pr-12 placeholder:text-[#AAAACF] text-[#AAAACF] focus:outline-none focus:border-violet-500 focus:ring-violet-500"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder={showConfirmPassword ? 'password' : '••••••••'}
            required
            type={showConfirmPassword ? 'text' : 'password'}
          />
          <button
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 my-auto ml-2 mr-2.5 flex h-fit items-center p-1"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            type="button"
          >
            {showConfirmPassword ? (
              <OpenEye />
            ) : (
              <ClosedEye />
            )}
          </button>
        </div>
      </div>
      <button disabled={loading} type="submit" className="w-full rounded-lg bg-violet-500 px-5 py-2.5 text-center font-medium text-white hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-300 disabled:cursor-not-allowed">
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner />
            Registering...
          </div>
        ) : (
          'Register for Finance Feather'
        )}
      </button>
    </form>
  );
}
