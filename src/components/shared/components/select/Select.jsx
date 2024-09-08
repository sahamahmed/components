import React from 'react';
import { Select as SelectComponent } from 'antd';
import './Select.scss';

const handleChange = (value) => {
    console.log(value);
};

const Select = ({ options = [], defaultValue = { value: '', label: 'Filter By' }, onChange = handleChange, ...restProps }) => (
    <SelectComponent
        labelInValue
        defaultValue={defaultValue}
        className='custom-select'
        onChange={onChange}
        options={options}
        {...restProps}
    />
);

export default Select;
