import React, { useState } from 'react';
import { Collapse, theme } from 'antd';
import './Accordion.scss';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const itemsNest = [
    {
        key: '1',
        label: 'This is panel nest panel',
        children: <p>{text}</p>,
    },
];

const getItems = (panelStyle) => [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <Collapse defaultActiveKey="1" items={itemsNest} />,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
        style: panelStyle,
    },
];

const Accordion = () => {
    const { token } = theme.useToken();
    const [activeKeys, setActiveKeys] = useState(['1']); // Manage active keys state

    const handleChange = (keys) => {
        setActiveKeys(keys); // Update active keys state
    };

    console.log(activeKeys)

    const panelStyle = {
        marginBottom: 24,
        borderRadius: token.borderRadiusLG,
        border: '1px solid #D8E0E8',
        backgroundColor: '#ffffff',
        color: '#1C354F',
        width: '60%',
    };

    return (
        <Collapse
            ghost
            accordion
            size='large'
            bordered={false}
            activeKey={activeKeys} // Controlled component
            onChange={handleChange} // Handle change
            expandIcon={({ isActive }) => {
                console.log('isActive:', isActive); // Log isActive state
                return isActive ? (
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.6665 1.33325L6.99984 6.66658L12.3332 1.33325" stroke="#0E263F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.589844 11.1398L5.16984 6.5498L0.589844 1.9598L1.99984 0.549805L7.99984 6.5498L1.99984 12.5498L0.589844 11.1398Z" fill="black" fillOpacity="0.87" />
                    </svg>
                );
            }}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
        />
    );
};

export default Accordion;
