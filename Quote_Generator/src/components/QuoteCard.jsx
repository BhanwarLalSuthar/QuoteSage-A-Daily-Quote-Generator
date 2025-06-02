const QuoteCard = ({ quote, author, liked, onLikeToggle, fontSize, theme }) => {
    return (
        <div className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 
            ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}
            `}>
            <p className={`italic mb-4 ${fontSize}`}>{`“${quote}”`}</p>
            <div className="flex justify-between items-center">
                <p className="font-semibold">– {author}</p>
                <button
                onClick={onLikeToggle}
                className={`text-xl transition-colors duration-300 
                    ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}
                `}
                aria-label="Like Quote"
                >
                {liked ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
};

export default QuoteCard