'use client';
import { PieChart } from '@mui/x-charts/PieChart';
import { motion } from 'framer-motion';
import React, {useState} from 'react';

export default function Distributions() {
  const [isSelected, setIsSelected] = useState('Debit');
  const variants = {
    closed: { scale: 0.9, opacity: 0.4,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    open: { scale: 1, opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="-mb-12 flex items-center whitespace-nowrap py-4 text-3xl font-bold">
        <span>Financial Distributions</span>
      </div>
      <div className="relative grid h-full w-full grid-cols-6 grid-rows-1 items-center gap-4 px-12">

        <motion.div
          className={`relative flex cursor-pointer items-center justify-center ${isSelected === 'Debit' ? 'col-span-4' : 'col-span-1 hover:bg-[#504e78]'} row-span-1 h-3/4 rounded-2xl bg-[#3A3958]`}
          onClick={() => setIsSelected('Debit')}
          variants={variants}
          initial="closed"
          animate={isSelected === 'Debit' ? 'open' : 'closed'}
        >
          <div className="absolute left-0 top-0 p-8 text-xl font-medium">
            Debit
          </div>
          {/* Debit Pie chart */}
          <PieChart
            colors={['#fb923c', '#facc15', '#f87171', '#e879f9']} // Use palette
            margin={{bottom: 10, left: 200}}
            series={[{
              data: [
                { id: 0, value: 10, label: 'Checking TD' },
                { id: 1, value: 15, label: 'Checking CIBC' },
                { id: 2, value: 20, label: 'Savings CIBC' },
                { id: 3, value: 30, label: 'SINJA' },
              ],
              innerRadius: 40, // inside circle
              outerRadius: 100, // outside circle
              paddingAngle: 2,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 0,
              cy: 150,
            }]}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 21,
                  fill: '#AAAACF',
                },
                markGap: 5,
                itemGap: 40,
              },
            }}
            width={600}
            height={300}
          />
        </motion.div>

        <motion.div className={`relative flex cursor-pointer items-center justify-center ${isSelected === 'Credit' ? 'col-span-4' : 'col-span-1 hover:bg-[#504e78]'} row-span-1 h-3/4 rounded-2xl bg-[#3A3958]`}
          onClick={() => setIsSelected('Credit')}
          variants={variants}
          initial="closed"
          animate={isSelected === 'Credit' ? 'open' : 'closed'}
        >
          <div className="absolute left-0 top-0 p-8 text-xl font-medium">
            Credit
          </div>
          {/* Credit Pie Chart */}
          <PieChart
            colors={['#db2777', '#a855f7', '#fb7185', '#c026d3']} // Use palette
            margin={{bottom: 10, left: 200}}
            series={[{
              data: [
                { id: 0, value: 25, label: 'CIBC Dividend' },
                { id: 1, value: 30, label: 'PC Optimum' },
                { id: 2, value: 25, label: 'TD Gold Points' },
                { id: 3, value: 20, label: 'Extra Credit' },
              ],
              innerRadius: 40, // inside circle
              outerRadius: 100, // outside circle
              paddingAngle: 2,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 0,
              cy: 150,
            }]}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 21,
                  fill: '#AAAACF',
                },
                markGap: 5,
                itemGap: 40,
              },
            }}
            width={600}
            height={300}
          />
        </motion.div>

        <motion.div className={`relative flex cursor-pointer items-center justify-center ${isSelected === 'Investments' ? 'col-span-4' : 'col-span-1 hover:bg-[#504e78]'} row-span-1 h-3/4 rounded-2xl bg-[#3A3958]`}
          onClick={() => setIsSelected('Investments')}
          variants={variants}
          initial="closed"
          animate={isSelected === 'Investments' ? 'open' : 'closed'}
        >
          <div className="absolute left-0 top-0 p-8 text-xl font-medium">
            Investments
          </div>
          {/* Investments Pie Chart */}
          <PieChart
            colors={['#fb923c', '#facc15', '#f87171', '#e879f9']} // Use palette
            margin={{bottom: 10, left: 200}}
            series={[{
              data: [
                { id: 0, value: 20, label: 'Yahoo Stocks' },
                { id: 1, value: 5, label: 'BTC' },
                { id: 2, value: 10, label: 'Gold Bars' },
                { id: 3, value: 65, label: 'Rap Bars' },
              ],
              innerRadius: 40, // inside circle
              outerRadius: 100, // outside circle
              paddingAngle: 2,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 0,
              cy: 150,
            }]}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 21,
                  fill: '#AAAACF',
                },
                markGap: 5,
                itemGap: 40,
              },
            }}
            width={600}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
}