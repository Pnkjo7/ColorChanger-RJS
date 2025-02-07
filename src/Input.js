import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <br></br>

            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
                >
                Toogle Text Color
            </button>

        </form>

    )
}

export default Input