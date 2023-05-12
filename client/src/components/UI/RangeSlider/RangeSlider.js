import React, {useState} from 'react';

const RangeSlider = ({minValue, maxValue, handleRangeChange}) => {

    const [year, setYear] = useState(minValue);

    const handleChange = (event) => {
        handleRangeChange(event.target.value);
        setYear(event.target.value);
    };

    return (
        <>
            <div> Minimum released year: {year}</div>
            <input
            type={"range"}
            min={minValue}
            max={maxValue}
            onChange={handleChange}
            step={1}
            value={year}

            >
            </input>
        </>
    )
};

    export default RangeSlider;