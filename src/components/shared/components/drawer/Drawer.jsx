import React, { useState } from 'react';
import { Drawer as AntDrawer } from 'antd';
import Tabs from '../tabs/Tabs';
import './Drawer.scss';
import Button from '../button/Button';

const Drawer = ({ open, setOpen, title, children }) => {

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AntDrawer
                title={title}
                placement={'right'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'right'}
                className="drawer"
            >
                {children}
            </AntDrawer>
        </>
    );
};

export default Drawer;
