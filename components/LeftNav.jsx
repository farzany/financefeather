'use client';
import Image from 'next/image';
import React, {useState} from 'react';
import { SignOutButton } from './Buttons';
import logo from '../public/logo.png';

export default function LeftNav() {
  const [active, setActive] = useState('Dashboard');

  const handleActiveButton = (itemName) => {
    setActive(itemName);
  };

  return (
    <div>
      <aside id="default-sidebar" className="relative left-0 top-0 z-40 h-screen w-[220px] -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
        <div className="flex h-full flex-col overflow-y-auto bg-[#2E2E48] py-4">
          <a href="" className="mb-9 mt-7 flex items-center">
            <Image
              src={logo}
              width={180}
              height={71}
              alt="Finance Feather Logo"
              className="flex shrink-0 px-6"
            />
          </a>
          <ul className="flex flex-col justify-center space-y-3 font-medium">
            <li>
              <button
                className={`flex w-full items-center text-violet-200 ${active === 'Dashboard' ? 'bg-[#3A3958]' : ''} group hover:bg-[#3A3958]`}
                onClick={() => handleActiveButton('Dashboard')}
              >
                <a href="#" className="group mx-5 flex items-center p-4 hover:bg-[#3A3958]">
                  <svg className="h-5 w-5 text-violet-200 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </a>
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center text-violet-200 ${active === 'Analytics' ? 'bg-[#3A3958]' : ''} group hover:bg-[#3A3958]`}
                onClick={() => handleActiveButton('Analytics')}
              >
                <a href="#" className="group mx-5 flex items-center rounded-lg p-4 hover:bg-[#3A3958]">
                  <svg className="h-5 w-5 shrink-0 text-violet-200 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 17 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Analytics</span>
                </a>
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center text-violet-200 ${active === 'Wallet' ? 'bg-[#3A3958]' : ''} group hover:bg-[#3A3958]`}
                onClick={() => handleActiveButton('Wallet')}
              >
                <a href="#" className="group mx-5 flex items-center rounded-lg p-4 hover:bg-[#3A3958]">
                  <svg className="h-5 w-5 shrink-0 text-violet-200 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                    <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Wallet</span>
                </a>
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center text-violet-200 ${active === 'Profile' ? 'bg-[#3A3958]' : ''} group hover:bg-[#3A3958]`}
                onClick={() => handleActiveButton('Profile')}
              >
                <a href="#" className="group mx-5 flex items-center rounded-lg p-4 hover:bg-[#3A3958]">
                  <svg className="h-5 w-5 shrink-0 text-violet-200 transition duration-75  group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Profile</span>
                </a>
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center text-violet-200 ${active === 'Transfers' ? 'bg-[#3A3958]' : ''} group hover:bg-[#3A3958]`}
                onClick={() => handleActiveButton('Transfers')}
              >
                <a href="#" className="group mx-5 flex items-center rounded-lg p-4 hover:bg-[#3A3958]">
                  <svg className="h-5 w-5 shrink-0 text-violet-200 transition duration-75  group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Transfers</span>
                </a>
              </button>
            </li>
          </ul>
          <SignOutButton/>
        </div>
      </aside>
    </div>
  );
}