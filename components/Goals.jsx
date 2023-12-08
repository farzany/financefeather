'use client';

import { useSession } from 'next-auth/react';
import { React, useState } from 'react';
import Spinner from './Spinner';

export default function Goals({ goals }) {
  const { data: session } = useSession();
  const [goalName, setGoalName] = useState('');
  const [goalCreated, setGoalCreated] = useState(false);
  const [goalsLocal, setGoalsLocal] = useState(goals);
  const [creatingGoal, setCreatingGoal] = useState(false);

  const handleCreateGoal = () => {
    setGoalCreated(true);
  };

  const handleCreatedGoal = async (event) => {
    event.preventDefault();
    setCreatingGoal(true);

    await fetch('http://localhost:3000/goal/create', {
      method: 'POST',
      body: JSON.stringify({
        userId: session.user.id,
        name: goalName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    setGoalsLocal([{ userId: session.user.id, name: goalName, percentage: 0 }, ...goalsLocal]);
    setGoalCreated(false);
    setGoalName('');
    setCreatingGoal(false);
  };

  const handleGoalNameInputChange = (e) => {
    setGoalName(e.target.value);
  };

  const renderGoalHome = () => (
    <div>
      <div className="scrollbar-custom h-[400px] overflow-y-auto pr-2">
        {goalsLocal.map((goal, index) => (
          <div key={index} className="mb-4 rounded-lg bg-[#3A3958] p-4">
            <div className="mb-2 flex justify-between p-2">
              <span className="text-xl font-medium text-violet-200">{goal.name}</span>
              <span className="text-xl font-medium text-violet-200">
                {goal.percentage < 100 ? `${goal.percentage}%` : 'Complete'}
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-[#2E2E48]">
              <div
                className="h-2.5 rounded-full bg-violet-200"
                style={{ width: `${goal.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <button type="button" onClick={handleCreateGoal} className="w-full rounded-md bg-violet-500 px-3 py-2 text-xl font-semibold text-white">
          New Goal
        </button>
      </div>
    </div>
  );

  const renderGoalForm = () => (
    <form className="mx-auto w-full rounded-lg bg-[#3A3958] p-4" onSubmit={handleCreatedGoal}>
      <h2 className="border-b-2 border-violet-200 pb-2 text-2xl font-semibold text-violet-200">
        New Goal
      </h2>
      <div className="pt-4 text-xl">
        <div>
          <label className="font-medium text-violet-200" htmlFor="goalName">
            Goal Name
          </label>
          <input required className="my-2 w-full rounded-md border border-[#3A3958] bg-[#2E2E48] p-2 px-3 text-lg text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500" type="text" id="goalName" value={goalName} onChange={handleGoalNameInputChange} placeholder="New No-Name Shoes" />
        </div>
        <div className="flex items-center">
          <label className="mr-4 block font-medium text-violet-200" htmlFor="goalValue">
            Value
          </label>
          <div className="flex items-center">
            <h2 className="mr-2 text-2xl text-violet-200">$</h2>
            <input required className="w-full rounded-md border border-[#3A3958] bg-[#2E2E48] p-1 px-2 text-lg text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500" type="numeric" id="goalValue" placeholder="130.00" />
          </div>
        </div>
        <div className="pb-2 pt-6">
          <label className="block font-medium text-violet-200" htmlFor="autoDeposit">Auto Deposit</label>
          <div className="flex items-center justify-between pt-2">
            <select className="w-full rounded-md border border-[#3A3958] bg-[#2E2E48] px-3 py-2 text-lg text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500" id="autoDeposit">
              <option disabled selected>Select Frequency</option>
              <option>Weekly</option>
              <option>Biweekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <h2 className="mr-2 text-2xl text-violet-200">$</h2>
            <input className="w-full rounded-md border border-[#3A3958] bg-[#2E2E48] p-1 px-2 text-lg text-violet-200 placeholder:text-[#AAAACF] focus:border-violet-500 focus:outline-none focus:ring-violet-500" type="text" placeholder="20.00" />
          </div>
        </div>
        <div className="mt-9 text-center">
          <button type="submit" className="w-full rounded-md bg-violet-500 px-3 py-2 text-xl font-semibold text-white">
            {creatingGoal ? (
              <Spinner />
            ) : 'Create Goal'}
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="h-[550px] w-[550px] rounded-lg bg-[#2E2E48] p-4">
      <h2 className="mb-4 mt-1 text-center text-3xl font-semibold text-violet-200">Financial Goals</h2>
      {goalCreated ? renderGoalForm() : renderGoalHome() }
    </div>
  );
}