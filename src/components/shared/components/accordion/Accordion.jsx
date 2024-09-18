import React, { useState } from 'react';
import { Collapse, theme } from 'antd';
import './Accordion.scss';
import Typography from '../typography/Typography';

const Accordion = ({ items, type = 'main' }) => {
    const { token } = theme.useToken();
    const [activeKey, setActiveKey] = useState(['0']);

    const handleChange = (key) => {
        setActiveKey(key);
    };

    const panelStyle = {
        marginBottom: 24,
        borderRadius: token.borderRadiusLG,
        border: '1px solid #D8E0E8',
        backgroundColor: '#ffffff',
        color: '#1C354F',
    };

    const getAccordionContent = (item) => {
        return (
            <>
                {item.children.map((child) => (
                    <div key={child.name}>
                        <div className="accordion-section">
                            <Typography type="header">{child.name}</Typography>
                            <div className='content'>{child.content}</div>
                        </div>
                        <br />
                    </div>
                ))}
            </>
        );
    };


    const getDynamicItems = (panelStyle, activeKey) => {
        return items.map((item) => ({
            key: item.key,
            label: (
                <>
                    <div className="accordion-label">
                        <div className='section-titles'>
                            <Typography type={'section-header'}>{item.label}</Typography>
                            {activeKey[0] === item.key && (
                                <>
                                    <Typography type={'section-header'}>{item.title}</Typography>
                                </>
                            )}
                        </div>

                        {activeKey[0] === item.key && (
                            <Typography type={'helper-text'}>{item.created}</Typography>
                        )}
                    </div>
                </>
            ),
            children: getAccordionContent(item), 
            style: {
                ...panelStyle,
                width: type ==='main' ? activeKey[0] === item.key ? '100%' : '60%' : '100%'
            },
        }));
    };

    return (
        <Collapse
            ghost
            accordion
            size="large"
            bordered={false}
            activeKey={activeKey}
            onChange={handleChange}
            expandIcon={({ isActive }) => {
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
            items={getDynamicItems(panelStyle, activeKey)}
        />
    );
};

export default Accordion;
