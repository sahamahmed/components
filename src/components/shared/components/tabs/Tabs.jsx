import React from 'react';
import { Tabs as AntTabs } from 'antd';
import RunWorkflowForm from '../../../RunWorkflowForm';
import './Tabs.scss';


const Tabs = ({items, onChange}) => <AntTabs defaultActiveKey="1" items={items} onChange={onChange} className='tabs' />;
export default Tabs;