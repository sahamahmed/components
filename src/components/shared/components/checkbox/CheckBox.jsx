import React from 'react';
import { Checkbox } from 'antd';
import './CheckBox.scss';

const CheckBox = ({ onChange, checked = false, children = "Checkbox" }) => {
    return <Checkbox onChange={onChange} defaultChecked={checked} className="custom-checkbox">{children}</Checkbox>;
};

export default CheckBox;
