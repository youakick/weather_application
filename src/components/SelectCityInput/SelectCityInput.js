import React, { useState } from 'react';

import './SelectCityInput.css';

const SelectCityInput = (props) => {
    const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
        props.onSelectChange(e.target.value)
    }

    return (
        <div>
            <input 
                className='cityInput' 
                type='text' 
                placeholder='Chose city'
                value={inputValue}
                onChange={handleChange}/>        
        </div>
    );
};

export default SelectCityInput;