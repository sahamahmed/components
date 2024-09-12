import React from 'react';
import { Dropdown as DropdownComponent, Space } from 'antd';
import './Dropdown.scss'
import './Select.scss'
const Select = ({ menuItems, children }) => {

    return (
        <DropdownComponent
            menu={{
                items: menuItems.map(({ label, icon: Icon, onClick }, index) => ({
                    key: index,
                    label,
                    icon: Icon && <Icon />,
                    onClick,
                }))
            }}
            trigger={['click']}
        >
            <Space>
                <div style={{height:"40px", width:"40px", background:"red"}}>

                </div>
            </Space>
        </DropdownComponent>
    );
};

export default Select;
