'use client';

import { useSession } from 'next-auth/react';
import React, { useState, useEffect, useRef } from 'react';

export default function GeneralInfo() {
  const { data: session } = useSession();
  const [totalSum, setTotalSum] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const dropdownRef = useRef(null);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && event.target.id !== 'dropdownMenuIconButton') {
        setIsHidden(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // hard coded data for recent transactions. Change if you want
  const data = [
    { transaction: 'Textbook Purchase', value: '$60.00' },
    { transaction: 'Charity Donation', value: '$5.00' },
    { transaction: 'Spotify Subscription', value: '$10.99' },
    { transaction: 'Mobile Phone Bill', value: '$40.00' },
    { transaction: 'Gym Membership', value: '$12.00' },
    { transaction: 'NSLSC Repayment Plan', value: '$83.73' },
    { transaction: 'Ticket Purchase', value: '$12.00' },
    { transaction: 'Bus Pass', value: '$20.00' },
    { transaction: 'Ticket Purchase', value: '$12.00' },
    { transaction: 'Bus Pass', value: '$20.00' },
    { transaction: 'Ticket Purchase', value: '$12.00' },
    { transaction: 'Bus Pass', value: '$20.00' },
  ];

  // Calculate the total amount for the recent transactions.
  const calcTotal = (data) => {
    const total = data.reduce((total, item) => {
      const value = parseFloat(item.value.replace('$', ''));
      return total + value;
    }, 0);
    setTotalSum(total);
  };

  useEffect(() => {
    calcTotal(data);
  }, []);

  return (
    <div className="relative">
      <aside id="default-sidebar" className="relative right-0 top-0 z-40 h-screen">
        <div className="flex h-full flex-col overflow-y-auto bg-[#2E2E48] py-4">
          <div className="group relative mx-3 flex items-center justify-between p-4 text-violet-200">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ms-2 whitespace-nowrap pr-14">
                {session.user.name}
              </span>
            </div>
            <button onClick={toggleVisibility} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center" type="button">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 19" fill="none">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#AAAACF"/>
                <circle cx="2.5" cy="9.5" r="2.5" fill="#AAAACF"/>
                <circle cx="2.5" cy="16.5" r="2.5" fill="#AAAACF"/>
              </svg>
            </button>
            <div ref={dropdownRef} id="dropdownDots" className={`absolute right-5 top-12 z-10 ${isHidden ? '' : 'hidden'} w-44 rounded-lg bg-[#3A3958] shadow`}>
              <ul className="text-sm text-violet-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                  <a href="#" className="block rounded-lg px-4 py-2 hover:bg-[#2E2E48]">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block rounded-lg px-4 py-2 hover:bg-[#2E2E48]">Settings</a>
                </li>
                <li>
                  <a href="#" className="block rounded-lg px-4 py-2 hover:bg-[#2E2E48]">Earnings</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="m-4 h-[75%] border-y-2 border-[#3A3958]">
            <ul className="flex h-full flex-col justify-center space-y-3 font-medium text-violet-200">
              <span className="mb-1 text-lg">Recent Transactions</span>
              <div className="scrollbar-custom h-5/6 overflow-auto pr-2">
                {data.map((item, index) =>
                  (
                    <li key={index} className="pt-3">
                      <button className="flex w-full items-center justify-between rounded-xl bg-[#3A3958] p-3 text-sm hover:bg-[#2E2E48]">
                        <div className="flex flex-1 justify-between">
                          <div className="w-4/6 truncate border-r-[3px] border-[#2E2E48] pr-2 text-left">
                            {item.transaction}
                          </div>
                          <div className="truncate pl-2 text-right">
                            {item.value}
                          </div>
                        </div>
                      </button>
                    </li>
                  ))
                }
              </div>
            </ul>
          </div>
          <div className="flex justify-between pl-5 text-sm text-violet-200">
            <div>
              Month to Date Sum:
            </div>
            <div className="pr-5">
              ${totalSum}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}