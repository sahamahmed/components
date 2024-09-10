import React, { useState } from 'react';
import { Drawer as AntDrawer } from 'antd';
import Tabs from '../tabs/Tabs';
import './Drawer.scss';  
import Button from '../button/Button';

const Drawer = ({ open, setOpen,footerButtons }) => {

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AntDrawer
                title="Run Workflow"
                placement={'right'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'right'}
                className="drawer" 

                footer={
                    <div className="drawer-footer">
                        {footerButtons && footerButtons.map((button, index) => (
                            <Button
                                key={index}
                                type={button.type || 'primary'}
                                onClick={button.onClick}
                                className="footer-button"
                                label={button.label}
                            ></Button>
                        ))}
                    </div>
                } 
            >
                <Tabs />
            </AntDrawer>
        </>
    );
};

export default Drawer;
