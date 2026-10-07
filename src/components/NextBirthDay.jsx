const NextBirthday = ({ day, month, year }) => {

    if (!day || !month || !year) {
        return (
            <div className="text-center bg-white rounded-lg px-6 py-4 mb-6">

                <h3 className="text-lg font-semibold text-blue-800">
                    Next Birthday
                </h3>

                <p className="text-4xl font-bold text-blue-800">
                    --
                </p>

                <p className="text-blue-800 font-semibold">
                    DAYS
                </p>

            </div>
        );
    }

    const today = new Date();

    const nextBirthday = new Date(
        today.getFullYear(),
        Number(month),
        Number(day)
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(
            today.getFullYear() + 1
        );
    }

    const differenceInTime = nextBirthday - today;

    const daysLeft = Math.ceil(
        differenceInTime / (1000 * 60 * 60 * 24)
    );

    return (
        <div className="text-center bg-white rounded-lg px-6 py-4 mb-6">

            <h3 className="text-lg font-semibold text-blue-800">
                Next Birthday
            </h3>

            <p className="text-4xl font-bold text-blue-800">
                {daysLeft}
            </p>

            <p className="text-blue-800 font-semibold">
                DAYS
            </p>

        </div>
    );
};

export default NextBirthday;