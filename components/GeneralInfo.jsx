'use client';
import React, { useState, useEffect} from "react";

export default function GeneralInfo() {
    const [totalSum, setTotalSum] = useState(0);

    // hard coded data for recent transactions. Change if you want
    const data = [
        { transaction: "Textbook Purchase", value: "$60.00" },
        { transaction: "Charity Donation", value: "$5.00" },
        { transaction: "Spotify Subscription", value: "$10.99" },
        { transaction: "Mobile Phone Bill", value: "$40.00" },
        { transaction: "Gym Membership", value: "$12.00" },
        { transaction: "NSLSC Repayment Plan", value: "$83.73" },
        { transaction: "Ticket Purchase", value: "$12.00" },
        { transaction: "Bus Pass", value: "$20.00" },
        { transaction: "Ticket Purchase", value: "$12.00" },
        { transaction: "Bus Pass", value: "$20.00" },
        { transaction: "Ticket Purchase", value: "$12.00" },
        { transaction: "Bus Pass", value: "$20.00" },
    ];

    // Calculate the total amount for the recent transactions.
    const calcTotal = (data) => {
        const total = data.reduce((total, item) => {
            const value = parseFloat(item.value.replace('$', ''));
            return total + value;
        }, 0);
        setTotalSum(total);
    }

    useEffect(() => {
        calcTotal(data);
    }, [])

    return (
        <div>
            <aside id="default-sidebar" className="relative top-0 right-0 z-40 w-full h-screen">
            <div className="flex flex-col h-full py-4 overflow-y-auto bg-[#2E2E48]">
                <a href="#" className="flex items-center p-4 mx-3 text-violet-200 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <span className="ms-2 pr-14 whitespace-nowrap">Cameron Murphy</span>

                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 19" fill="none">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#AAAACF"/>
                        <circle cx="2.5" cy="9.5" r="2.5" fill="#AAAACF"/>
                        <circle cx="2.5" cy="16.5" r="2.5" fill="#AAAACF"/>
                    </svg>
                </a>

                <div className="border-t h-[75%] m-4 border-b">
                    <ul className="space-y-3 flex flex-col h-full justify-center text-violet-200 font-medium">
                        <span className="text-sm mb-1 pl-5">Recent Transactions</span>
                        <div className="h-5/6 overflow-auto">
                            {data.map((item, index) => 
                                (
                                <li key={index} className="pt-3">  
                                    <button className="flex w-full justify-between items-center rounded-xl p-3 text-sm bg-[#3A3958] hover:bg-[#2E2E48]">
                                        <div className="flex flex-1 justify-between">
                                            <div className="text-left w-4/6 whitespace-nowrap overflow-hidden overflow-ellipsis pr-2 border-r-[3px] border-[#2E2E48]">
                                                {item.transaction}
                                            </div>
                                            <div className="text-right whitespace-nowrap overflow-hidden overflow-ellipsis pl-2">
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
                <div className="flex justify-between pl-5 text-violet-200 text-sm">
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
    )
}