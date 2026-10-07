import React from 'react';

const Calculateage = ({ day, month, year, onCalculate }) => {

    const calculateAge = () => {
        if (!day || !month || !year) {
            alert("Please enter your birth date");
            return;
        }

        const birthDate = new Date(
            Number(year),
            Number(month), // Months are zero-indexed in JavaScript
            Number(day)
        );

        const today = new Date();

        if (birthDate > today) {
            alert("Birth date cannot be in the future");
            return;
        }

        let years = today.getFullYear() - birthDate.getFullYear();

        const birthDaythisYear = new Date(
            today.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        );

        if(birthDaythisYear > today) {
            years--;
        }

         const lastBirthday = new Date(
            birthDate.getFullYear() + years,
            birthDate.getMonth(),
            birthDate.getDate()
        );
        


        let months = today.getMonth() - birthDate.getMonth();

        if (today.getDate() < lastBirthday.getDate()) {
            months--;
        }

       if (months < 0) {
            months += 12;
        }

          const tempDate = new Date(lastBirthday);

        tempDate.setMonth(tempDate.getMonth() + months);

        const differenceInTime = today - tempDate;

        const days = Math.floor(
            differenceInTime / (1000 * 60 * 60 * 24)
        );

        onCalculate({
            years,
            months,
            days
        });        

    }



    return (
        <button onClick={calculateAge}
        className='w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition'>
            Calculate My Age
        </button>
    );
};

export default Calculateage;