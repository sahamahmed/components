import React from 'react';
import { Select as SelectComponent } from 'antd';
import './Select.scss';

const handleChange = (value) => {
    console.log(value);
};

const { Option } = SelectComponent;

const Select = ({ options = [], defaultValue = { value: '', label: '' }, label="Filter by",onChange = handleChange, ...restProps }) => (
    <div className='custom-select-container'>
        <label className='custom-select-label'>{label}</label>
        <SelectComponent
            className='custom-select'
            labelInValue
            defaultValue={defaultValue}
            {...restProps}
        >
            {options.map(option => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </SelectComponent>
    </div>
);

export default Select;
