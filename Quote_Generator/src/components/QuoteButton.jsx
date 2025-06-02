const QouteButton = ({ onClick, children }) =>{
    return (
        <button 
            onClick={onClick}
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
            {children}
        </button>
    )
}

export default QouteButton