import React from "react";
import logo from "../public/logo.png"
import Image from 'next/image'

export default function LeftNav() {
    return (
        <div>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 max-w-full h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="flex flex-col h-full py-4 overflow-y-auto bg-[#2E2E48]">
                <a href="" className="flex items-center mb-9 mt-7">
                    <Image
                    src={logo}
                    width={180}
                    height={71}
                    alt="Finance Feather Logo"
                    className="flex flex-shrink-0 px-6"
                    />
                </a>
                <ul className="space-y-3 flex flex-col justify-center font-medium">
                    <li>
                        <button className="flex w-full items-center rounded-2xl text-violet-200 hover:bg-[#3A3958] group">
                            <a href="#" className="flex items-center p-4 mx-5 hover:bg-[#3A3958] group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Dashboard</span>
                            </a>
                        </button>
                    </li>
                    <li>
                        <button className="flex w-full items-center rounded-2xl text-violet-200 hover:bg-[#3A3958] group">
                            <a href="#" className="flex items-center p-4 mx-5 rounded-lg hover:bg-[#3A3958] group">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 17 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
                            </a>         
                        </button>
                    </li>
                    <li>
                        <button className="flex w-full items-center rounded-2xl text-violet-200 hover:bg-[#3A3958] group">
                            <a href="#" className="flex items-center p-4 mx-5 rounded-lg hover:bg-[#3A3958] group">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Wallet</span>
                            </a>             
                        </button>
                    </li>
                    <li>
                        <button className="flex w-full items-center rounded-2xl text-violet-200 hover:bg-[#3A3958] group">
                            <a href="#" className="flex items-center p-4 mx-5 rounded-lg hover:bg-[#3A3958] group">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </a>    
                        </button>
                    </li>
                    <li>
                        <button className="flex w-full items-center rounded-2xl text-violet-200 hover:bg-[#3A3958] group">
                            <a href="#" className="flex items-center p-4 mx-5 rounded-lg hover:bg-[#3A3958] group">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Transfers</span>
                            </a>                        
                        </button>
                    </li>
                </ul>
                <button className="absolute bottom-12 w-full rounded-2xl text-violet-200 hover:bg-[#3A3958] group">
                    <a href="#" className="flex items-center p-4 mx-5 rounded-lg hover:bg-[#3A3958] group">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>

                    <span className="flex-1 whitespace-nowrap">Sign Out</span>
                    </a>   
                </button>
            </div>
            </aside>
        </div>
    )
}