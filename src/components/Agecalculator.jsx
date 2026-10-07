import React from 'react';
import { useState } from 'react';
import AgeCalculation from './Calculateage';
import Calculateage from './Calculateage';

const Agecalculator = () => {

    // state for input values
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    // state for age result
    const [age, setAge] = useState({
        years: "--",
        months: "--",
        days: "--",
    });


    return (

        //Main div 
        <div className="min-h-screen w-full bg-blue-100 flex items-center justify-center p-4">

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Birth Date Card */}
                <div className='w-full bg-white rounded-lg shadow-lg p-5 sm:p-8'>
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
                            <option value="0">January</option>
                            <option value="1">February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                            <option value="4">May</option>
                            <option value="5">June</option>
                            <option value="6">July</option>
                            <option value="7">August</option>
                            <option value="8">September</option>
                            <option value="9">October</option>
                            <option value="10">November</option>
                            <option value="11">December</option>
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

                    <Calculateage
                        day={day}
                        month={month}
                        year={year}
                        onCalculate = {setAge} />
                </div>


                {/* Your Age Result Card */}
                <div className='w-full bg-blue-300 rounded-lg shadow-lg p-5 sm:p-8'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-blue-900 mb-7'>Your Age Result</h1>

                    {/* Year/Month/Day */}
                    <div className='grid grid-cols-3 gap-4 mb-6 sm:grid-cols-3 items-center'>
                        {/* Year */}
                        <div className='text-center  bg-white rounded-lg px-6 py-4'>
                            <h3 className='text-4xl mt-2 font-bold text-blue-800'>
                                {age.years}
                            </h3>

                            <p className='text-blue-800 font-semibold'>
                                YEAR
                            </p>

                        </div>
                        {/* Month */}
                        <div className='text-center  bg-white rounded-lg px-3 p-3 py-4'>

                            <h3 className='text-4xl mt-2 font-bold text-blue-800'>
                                {age.months}
                            </h3>

                            <p className='text-blue-800 font-semibold'>
                                MONTH
                            </p>

                        </div>
                        {/* Day */}
                        <div className='text-center  bg-white rounded-lg px-6 py-4'>
                            <h3 className='text-4xl mt-2 font-bold text-blue-800'>
                                {age.days}
                            </h3>
                            <p className='text-blue-800 font-semibold'>
                                DAY
                            </p>
                        </div>

                    </div>


                    {/* Next Birthday */}
                    <div className='text-center  bg-white rounded-lg px-6 py-4 mb-6'>
                        <h3 className='text-lg font-semibold text-blue-800'>Next Birthday</h3>
                        <p className='text-4xl font-bold text-blue-800'>--</p>
                        <p className='text-blue-800 font-semibold'>DAYS</p>
                    </div>

                    <button className='w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition'>Share Result</button>


                </div>
            </div>
        </div>

    );
};

export default Agecalculator;