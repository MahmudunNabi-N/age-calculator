const ShareResult = ({ age }) => {

    const handleShare = async () => {

        const shareText = `I am ${age.years} years, ${age.months} months and ${age.days} days old.`;

        if (navigator.share) {
            await navigator.share({
                title: "My Age Result",
                text: shareText
            });

        }
        else {

            await navigator.clipboard.writeText(shareText);
            alert("Age result copied!");
        }
    };

    return (
        <button
            onClick={handleShare}
            className='w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition'
        >
            Share Result
        </button>
    );
};

export default ShareResult;