import React, { useState } from 'react';
import { Dropdown as DropdownComponent, Space, Badge } from 'antd';
import { ReactComponent as DownArrow } from '../../../../public/icons/arrowdown.svg';
import './Select.scss';
import CheckBox from '../checkbox/CheckBox';

const Select = ({
    options = [],
    defaultValue = { value: '', label: 'Select' },
    onChange = () => { },
    type = 'single'
}) => {
    const [selectedValue, setSelectedValue] = useState(type === 'single' ? defaultValue : []);

    const handleSelect = (value, label) => {
        if (type === 'single') {
            setSelectedValue({ value, label });
            onChange(value);
        } else {
            const updatedSelection = selectedValue.some(item => item.value === value)
                ? selectedValue.filter(item => item.value !== value)
                : [...selectedValue, { value, label }];

            setSelectedValue(updatedSelection);
            onChange(updatedSelection.map(item => item.value)); 
        }
    }; 

    const menuItems = options.map(option => ({
        key: option.value,
        label: type === 'multi' ? (
            <CheckBox
                onChange={() => handleSelect(option.value, option.label)}
                checked={selectedValue.some(item => item.value === option.value)}
            >
                {option.label}
            </CheckBox>
        ) : (
            option.label
        ),
        onClick: () => handleSelect(option.value, option.label)
    }));

    return (
        <div className="custom-select-container">
            <DropdownComponent
                menu={{ items: menuItems }}
                trigger={['click']}
            >
                <Space className="custom-select">
                    <div className="select-value">
                        <span className="select-label">
                            {type === 'single' ? (selectedValue.label || defaultValue.label) : defaultValue.label}
                            {type === 'multi' && selectedValue.length > 0 && (
                                <Badge size='small' count={selectedValue.length} className='badge' />
                            )}
                        </span>
                        <DownArrow className="dropdown-arrow" />
                    </div>
                </Space>
            </DropdownComponent>
        </div>
    );
};

export default Select;
