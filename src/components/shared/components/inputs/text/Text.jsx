import React from 'react';
import { Input as InputComponent } from 'antd';
import { ReactComponent as SearchIcon } from '../../../../../public/icons/search-icon.svg';
import { ReactComponent as CrossIcon } from '../../../../../public/icons/cross-icon.svg';
import './Text.scss';

const Input = ({ placeholder = "Search", size = "large", type = "text", ...restProps }) => (
    <div className={`custom-input `}>
        <InputComponent
            placeholder={placeholder}
            size={size}
            prefix={<SearchIcon />}
            suffix={<CrossIcon />}
            type={type}
            {...restProps}
        />
    </div>
);

export default Input;