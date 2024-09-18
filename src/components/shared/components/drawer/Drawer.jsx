import React, { useState } from 'react';
import { Drawer as AntDrawer } from 'antd';
import Tabs from '../tabs/Tabs';
import './Drawer.scss';
import Button from '../button/Button';
import RunWorkflowForm from '../../../RunWorkflowForm';

const Drawer = ({ open, setOpen, footerButtons }) => {

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
            >
                <RunWorkflowForm />
            </AntDrawer>
        </>
    );
};

export default Drawer;
