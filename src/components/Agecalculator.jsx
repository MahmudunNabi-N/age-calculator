import React from 'react';
import { useState } from 'react';

const Agecalculator = () => {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    return (
        //Main div 
        <div className='w-full max-w-3xl bg-blue-100 flex items-center justify-center px-4 py-6'>

            {/* Birth Date Card */}
            <div className= 'w-full max-w-md bg-white rounded-lg shadow-lg p-5 sm:p-8'>
                <h1 className='text-2xl sm:text-3xl font-bold text-blue-900 mb-7' >Your Birth Date</h1>
                {/* //date input div */}
                <div className='mb-4'>
                    <label className='block text-blue-900 text-[15px]  font-semibold mb-2' > Day </label>
                    <input type="number"
                        value={day}
                        placeholder="Day"
                        onChange={e => setDay(e.target.value)}
                        className='w-full rounded-xl border border-blue-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    />
                </div>

                {/* month input div */}
                <div className='mb-4'>
                    <label className='block text-blue-900 text-[15px] font-semibold mb-2' > Month </label>
                    <select
                        value={month}
                        onChange={e => setMonth(e.target.value)}
                        className='w-full rounded-xl border border-blue-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    >
                        <option value="">Select Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>

                {/* input year div */}
                <div className='mb-6'>
                    <label className='block text-blue-900 text-[15px] font-semibold mb-2 '> Year </label>
                    <input type="number"
                        value={year}
                        placeholder="Year"
                        onChange={e => setYear(e.target.value)}
                        className='w-full rounded-2xl border border-blue-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    />
                </div>

                <button className='w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition'>Calculate My Age</button>
            </div>

        </div>
    );
};

export default Agecalculator;