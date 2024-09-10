import React from 'react';
import { Tabs as AntTabs } from 'antd';
import RunWorkflowForm from '../../../RunWorkflowForm';
import './Tabs.scss';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Form',
        children: <RunWorkflowForm />,
    },
    {
        key: '2',
        label: 'JSON',
        children: 'Content of Tab Pane 2',
    },
];
const Tabs = () => <AntTabs defaultActiveKey="1" items={items} onChange={onChange} className='tabs' />;
export default Tabs;