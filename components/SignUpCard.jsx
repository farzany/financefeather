'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { ClosedEye, OpenEye } from './icons/EyeIcons';
import Spinner from './Spinner';

export default function SignUpCard() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => setName(event.target.value.trim());
  const handleEmailChange = (event) => setEmail(event.target.value.trim());
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors({});
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({...prev, ...{ confirmPassword: 'Passwords do not match.' }}));
      return;
    }

    setLoading(true);

    const response = await fetch('https://financefeather-farzany.vercel.app/auth/user/create', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();

    if (data.account) {
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
      }
    } else {
      setLoading(false);
      setErrors((prev) => ({...prev, ...{ email: 'This email is already in use, try another.' }}));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" action="#">
      <h1 className="mb-12 text-left text-3xl font-semibold text-white">
        Register for an Account
      </h1>
      <div>
        <label htmlFor="name" className="mb-2 block font-medium text-violet-200">
          Full Name
        </label>
        <input
          className="block w-full rounded-lg border border-[#3A3958] bg-[#3A3958] p-2.5 text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500"
          id="name"
          name="name"
          onChange={handleNameChange}
          placeholder="John Doe"
          required
          type="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-medium text-violet-200">
          Email
        </label>
        <input
          className={`block w-full rounded-lg border ${errors?.email ? 'border-red-400 focus:border-red-400 focus:ring-transparent' : 'border-[#3A3958] focus:border-violet-500 focus:ring-violet-500'} bg-[#3A3958] p-2.5 pr-12 text-violet-200 placeholder:text-[#AAAACF] focus:outline-none`}
          id="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="name@company.com"
          required
          type="email"
        />
        <span className={`${errors?.email ? 'block' : 'hidden'} absolute pt-1 text-sm text-red-400`}>
          {errors.email}
        </span>
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
      <div>
        <label htmlFor="confirmPassword" className="mb-2 block font-medium text-violet-200">
          Confirm Password
        </label>
        <div className="relative mb-4">
          <input
            className={`block w-full rounded-lg border ${errors?.confirmPassword ? 'border-red-400 focus:border-red-400 focus:ring-transparent' : 'border-[#3A3958] focus:border-violet-500 focus:ring-violet-500'} bg-[#3A3958] p-2.5 pr-12 text-violet-200 placeholder:text-[#AAAACF] focus:outline-none`}
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
          <span className={`${errors?.confirmPassword ? 'block' : 'hidden'} absolute pt-1 text-sm text-red-400`}>
            {errors.confirmPassword}
          </span>
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
