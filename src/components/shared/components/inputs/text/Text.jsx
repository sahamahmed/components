import React, { useState } from 'react';
import { Input as InputComponent } from 'antd';
import { ReactComponent as SearchIcon } from '../../../../../public/icons/search-icon.svg';
import { ReactComponent as CrossIcon } from '../../../../../public/icons/cross-icon.svg';
import './Text.scss';

const Input = ({ placeholder = "Search", size = "large", type = "text", ...restProps }) => {
    const [value, setValue] = useState(''); 

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <div className={`custom-input`}>
            <InputComponent
                placeholder={placeholder}
                size={size}
                prefix={<SearchIcon />}
                suffix={value ? <CrossIcon onClick={handleClear} style={{ cursor: 'pointer' }} /> : null}
                type={type}
                value={value}
                onChange={handleChange}
                {...restProps}
            />
        </div>
    );
};

export default Input;
