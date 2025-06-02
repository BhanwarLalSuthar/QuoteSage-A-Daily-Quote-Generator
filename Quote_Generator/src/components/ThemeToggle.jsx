const ThemeToggle = ({ onToggle, currentTheme })=>{
    return(
        <button
            onClick={onToggle}
            className="py-2 px-4 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
            {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;