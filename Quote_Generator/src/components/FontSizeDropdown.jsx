const FontSizeDropDown = ({ fontSize, onChange }) => {
    return (
        <select
            value={fontSize}
            onChange={(e) => onChange(e.target.value)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            >
            <option value="text-sm">Small</option>
            <option value="text-base">Medium</option>
            <option value="text-lg">Large</option>
            <option value="text-xl">Extra Large</option>
        </select>
    )
}

export default FontSizeDropDown;