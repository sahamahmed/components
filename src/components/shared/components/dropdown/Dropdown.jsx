import React from 'react';
import { Dropdown as DropdownComponent, Space } from 'antd';
import './Dropdown.scss'
const Dropdown = ({ menuItems, children }) => {

    return (
        <DropdownComponent
            menu={{
                items: menuItems.map(({ label, icon: Icon, onClick }, index) => ({
                    key: label,
                    label,
                    icon: Icon && <Icon />,
                    onClick,
                }))
            }}
            trigger={['click']}
        >
            <Space>
                {children}
            </Space>
        </DropdownComponent>
    );
};

export default Dropdown;
