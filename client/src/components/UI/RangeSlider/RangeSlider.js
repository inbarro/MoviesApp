import React, {useState} from 'react';
import style from './RangeSlider.module.css'

const RangeSlider = ({minValue, maxValue, handleRangeChange, valueText}) => {

    const [value, setValue] = useState(minValue);

    const handleChange = (event) => {
        handleRangeChange(event.target.value);
        setValue(event.target.value);
    };

    return (
        <div className={style.container}>
            <div className={style.title}> {valueText ? valueText : 'Minimum Value Chosen: ' } {value}</div>
            <input
            type={"range"}
            min={minValue}
            max={maxValue}
            onChange={handleChange}
            step={1}
            value={value}
            >
            </input>
        </div>
    )
};

    export default RangeSlider;