'use client';

import {React, useState} from 'react';

export default function AutoTransactions() {
  const [filter, setFilter] = useState('All');

  const transactions = [
    { name: 'Public Mobile Autopay', amount: '$23.00', frequency: 'Monthly' },
    { name: 'Bell 200Mbps HomeHub', amount: '$107.59', frequency: 'Monthly' },
    { name: 'NSLSC Repayment Plan', amount: '$83.73', frequency: 'Monthly' },
    { name: 'CIBC Dividend VISA Credit', amount: '-', frequency: 'Monthly' },
    { name: 'Charitable Dono Lost Child...', amount: '$0.07', frequency: 'Biweekly' },
    { name: 'Goal Deposit: Samsung Gal...', amount: '$15.00', frequency: 'Biweekly' },
    { name: 'e-transfer Sam: Child Supp...', amount: '$258.80', frequency: 'Biweekly' },
    { name: 'Youtube Premium', amount: '$4.34', frequency: 'Weekly' },
    { name: 'Goal Deposit: Headset', amount: '$10.53', frequency: 'Weekly' },
    { name: 'e-transfer Stefan: Rent', amount: '$150.00', frequency: 'Weekly' },
  ];

  const filteredTransactions = transactions.filter((transaction) => filter === 'All' || transaction.frequency === filter);

  return (
    <div className="h-[550px] w-[550px] rounded-lg bg-[#2E2E48] p-4">
      <h2 className="mb-4 mt-1 text-center text-3xl font-semibold">Automatic Transactions</h2>
      <div className="scrollbar-custom h-[400px] overflow-y-scroll pr-2">
        <ul>
          {filteredTransactions.map((transaction, index) => (
            <li key={index} className="pb-3">
              <button className="flex w-full items-center justify-between rounded-xl bg-[#3A3958] p-3 text-xl hover:bg-[#2E2E48]">
                <div className="flex flex-1 justify-between">
                  <div className="w-4/6 truncate border-r-[3px] border-[#2E2E48] pr-2 text-left">
                    {transaction.name}
                  </div>
                  <div className="truncate pl-2 text-right">
                    {transaction.amount}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button type="button" onClick={() => setFilter('All')} className={`rounded-md px-5 py-2 text-xl font-semibold ${filter === 'All' ? 'bg-violet-500 text-white': 'bg-[#3A3958] text-violet-200'}`}>All</button>
        <button type="button" onClick={() => setFilter('Weekly')} className={`rounded-md px-5 py-2 text-xl font-semibold ${filter === 'Weekly' ? 'bg-violet-500 text-white': 'bg-[#3A3958] text-violet-200'}`}>Weekly</button>
        <button type="button" onClick={() => setFilter('Biweekly')} className={`rounded-md px-5 py-2 text-xl font-semibold ${filter === 'Biweekly' ? 'bg-violet-500 text-white': 'bg-[#3A3958] text-violet-200'}`}>Biweekly</button>
        <button type="button" onClick={() => setFilter('Monthly')} className={`rounded-md px-5 py-2 text-xl font-semibold ${filter === 'Monthly' ? 'bg-violet-500 text-white': 'bg-[#3A3958] text-violet-200'}`}>Monthly</button>
      </div>
    </div>
  );
}