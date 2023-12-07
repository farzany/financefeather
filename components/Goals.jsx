'use client'

import { useSession } from "next-auth/react";
import {React, useState} from "react"

export default function Goals({ goals }) {
  const { data: session, status } = useSession();
  const [goalName, setGoalName] = useState('');
  const [goalCreated, setGoalCreated] = useState(false);
  const [goalsLocal, setGoalsLocal] = useState(goals);

  const handleCreateGoal = () => {
    setGoalCreated(true);
  };

  const handleCreatedGoal = async () => {
    await fetch("http://localhost:3000/goal/create", {
      method: "POST",
      body: JSON.stringify({
        userId: session.user.id,
        name: goalName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    setGoalsLocal([ {userId: session.user.id, name: goalName, percentage: 0,}, ...goalsLocal]);
    setGoalCreated(false); 
    setGoalName('');
  };

  const handleGoalNameInputChange = (e) => {
    setGoalName(e.target.value);
  };

  const renderGoalHome = () => (
    <div>
          <div className="h-[400px] overflow-y-scroll scrollbar-custom pr-2">
            {goalsLocal.map((goal, index) => (
              <div key={index} className="p-4 rounded-lg mb-4 bg-[#3A3958]">
                <div className="flex justify-between mb-2 p-2">
                  <span className="text-violet-200 text-xl font-medium">{goal.name}</span>
                  <span className="text-violet-200 text-xl font-medium">
                    {goal.percentage < 100 ? `${goal.percentage}%` : 'Complete'}
                  </span>
                </div>
                <div className="w-full rounded-full h-2.5 bg-[#2E2E48]">
                  <div
                    className="h-2.5 rounded-full bg-violet-200"
                    style={{ width: `${goal.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-6">
            <button onClick={handleCreateGoal} className="text-violet-200 bg-violet-500 px-3 py-1 rounded-md text-xl font-semibold">New Goal</button>
          </div>
        </div>
  );

  const renderGoalForm = () => (
    <div className="bg-[#3A3958] p-4 rounded-lg w-full mx-auto max-w-[475px]">
      <h2 className="text-violet-200 text-2xl font-semibold">New Goal</h2>
      <div className="border-t-2 border-violet-200 pt-4 text-xl">
        <div className="py-4 flex justify-between items-center">
          <label className="text-violet-200 font-medium mb-2 pt-0.5" htmlFor="goalName">Goal Name:</label>
          <div className="flex-grow pl-4">
            <input className="bg-[#2E2E48] w-full rounded-sm border text-violet-200 border-[#3A3958] p-1 placeholder:text-[#AAAACF] focus:outline-none focus:border-violet-500 focus:ring-violet-500" type="text" id="goalName" value={goalName} onChange={handleGoalNameInputChange} placeholder="New No-Name Shoes" />
          </div>
        </div>
        <div className="py-4 flex justify-between items-center">
          <label className="text-violet-200 font-medium mb-2 block pt-0.5" htmlFor="goalValue">Value:</label>
          <div className=" flex">
            <h2 className="text-violet-200 text-2xl px-1 pt-0.5">$</h2>
            <input className="bg-[#2E2E48] w-full rounded-sm border text-violet-200 border-[#3A3958] p-1 placeholder:text-[#AAAACF] focus:outline-none focus:border-violet-500 focus:ring-violet-500" type="text" id="goalValue" placeholder="130.00" />
          </div>
        </div>
        <div className="py-4">
          <label className="text-violet-200 font-medium block" htmlFor="autoDeposit">Auto-deposit:</label>
          <div className="flex justify-between items-center pl-8 py-4">
            <select className="bg-[#2E2E48] text-[#AAAACF] rounded-sm p-1 w-full" id="autoDeposit">
              <option>Biweekly</option>
            </select>
          </div>
          <div className="flex justify-between items-center pl-8">
            <h2 className="text-violet-200 text-2xl px-1 pt-0.5">$</h2>
            <input className="bg-[#2E2E48] w-full rounded-sm border text-violet-200 border-[#3A3958] p-1 placeholder:text-[#AAAACF] focus:outline-none focus:border-violet-500 focus:ring-violet-500" type="text" placeholder="20.00" />
          </div>
        </div>
        <div className="text-center mt-5">
        <button onClick={handleCreatedGoal} className="text-violet-200 bg-violet-500 px-3 py-1 rounded-md text-xl font-semibold">Create Goal</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[550px] h-[550px] p-4 rounded-lg bg-[#2E2E48]">
      <h2 className="text-violet-200 text-3xl font-semibold mb-4 text-center">Financial Goals</h2>
      {goalCreated ? renderGoalForm() : renderGoalHome() }
    </div>
  );
}