'use client'

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
    <div className="w-[550px] h-[550px] p-4 rounded-lg bg-[#2E2E48]">
      <ul className="space-y-3 flex flex-col h-full justify-center text-violet-200 font-medium">
        <h2 className="text-3xl font-semibold mb-4 text-center">Automatic Transactions</h2>
        <div className="h-[400px] overflow-y-auto scrollbar-custom pr-2">
          {filteredTransactions.map((transaction, index) => (
            <li key={index} className="pt-3">
              <button className="text-xl flex w-full justify-between items-center rounded-xl p-3 text-sm bg-[#3A3958] hover:bg-[#2E2E48]">
                <div className="flex flex-1 justify-between">
                  <div className="text-left w-4/6 whitespace-nowrap overflow-hidden overflow-ellipsis pr-2 border-r-[3px] border-[#2E2E48]">
                    {transaction.name}
                  </div>
                  <div className="text-right whitespace-nowrap overflow-hidden overflow-ellipsis pl-2">
                    {transaction.amount}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </div>
        <div className="items-center mt-6">
          <button type="button" onClick={() => setFilter('All')} className={`text-violet-200 px-5 py-1 rounded-md text-xl font-semibold mx-3 ${filter === 'All' ? 'bg-violet-500 text-violet-200': 'bg-[#3A3958] text-violet-200'}`}>All</button>
          <button type="button" onClick={() => setFilter('Weekly')} className={`text-violet-200 px-5 py-1 rounded-md text-xl font-semibold mx-3 ${filter === 'Weekly' ? 'bg-violet-500 text-violet-200': 'bg-[#3A3958] text-violet-200'}`}>Weekly</button>
          <button type="button" onClick={() => setFilter('Biweekly')} className={`text-violet-200 px-5 py-1 rounded-md text-xl font-semibold mx-3 ${filter === 'Biweekly' ? 'bg-violet-500 text-violet-200': 'bg-[#3A3958] text-violet-200'}`}>Biweekly</button>
          <button type="button" onClick={() => setFilter('Monthly')} className={`text-violet-200 px-5 py-1 rounded-md text-xl font-semibold mx-3 ${filter === 'Monthly' ? 'bg-violet-500 text-violet-200': 'bg-[#3A3958] text-violet-200'}`}>Monthly</button>
        </div>
      </ul>
    </div>
  )
}