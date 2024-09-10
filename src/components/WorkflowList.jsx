import React from 'react'
import Typography from './shared/components/typography/Typography'
import Input from './shared/components/inputs/text/Text'
import Select from './shared/components/select/Select'
import Button from './shared/components/button/Button'
import Icon, { PlusOutlined } from '@ant-design/icons';
import './WorkflowList.scss';
import TableComponent from './shared/components/table/Table'
import ToggleSwitch from './shared/components/toggle/ToggleSwitch'
import { MoreOutlined } from '@ant-design/icons';
import BarChartComponent from './shared/components/graph/Graph'
import Dropdown from './shared/components/dropdown/Dropdown'
import {PlayCircleOutlined, EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';



const menuItems = [
    { label: 'Run Workflow', icon: PlayCircleOutlined, onClick: () => console.log('Run Workflow clicked') },
    { label: 'Edit Workflow', icon: EditOutlined, onClick: () => console.log('Edit Workflow clicked') },
    { label: 'View Workflow', icon: EyeOutlined, onClick: () => console.log('View Workflow clicked') },
    { label: 'Delete Workflow', icon: DeleteOutlined, onClick: () => console.log('Delete Workflow clicked') },
];

const WorkflowList = () => {

    const data = [
        {
            key: '1',
            templateName: 'Template 1',
            createdAt: '2 weeks ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 1',
            status: 'Active',
            lastRun: '2 hours ago',
            resultsHistory: 'History 1',
            schedule: 'Daily',
            historyData: [
                { name: 'Page A', uv: 4000 },
                { name: 'Page B', uv: 3000 },
                { name: 'Page C', uv: 2000 },
                { name: 'Page D', uv: 2780 },
                { name: 'Page E', uv: 1890 },
                { name: 'Page F', uv: 2390 },
                { name: 'Page G', uv: 3490 },
            ],
        },
        {
            key: '2',
            templateName: 'Template 2',
            createdAt: '4 days ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 2',
            status: 'Inactive',
            lastRun: '12 hours',
            resultsHistory: 'History 2',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1500 },
                { name: 'Page B', uv: 2000 },
                { name: 'Page C', uv: 1700 },
                { name: 'Page D', uv: 1200 },
                { name: 'Page E', uv: 2300 },
                { name: 'Page F', uv: 1400 },
                { name: 'Page G', uv: 1800 },
            ],
        },
    ];


    const columns = [
        {
            title: 'Template Name',
            dataIndex: 'templateName',
            key: 'templateName',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Workflow Description',
            dataIndex: 'workflowDescription',
            key: 'workflowDescription',
        },
        {
            title: 'Active/Inactive',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <ToggleSwitch
                    defaultChecked={record.status === 'Active'}
                    onChange={(checked) => console.log(record.key, checked)}
                />
            ),
        },
        {
            title: 'Last Run',
            dataIndex: 'lastRun',
            key: 'lastRun',
        },
        {
            title: 'Results History',
            dataIndex: 'resultsHistory',
            key: 'resultsHistory',
            render: (text, record) => (
                <div className='bar'>
                    <BarChartComponent
                        data={record.historyData}
                    />
                </div>
            ),
        },
        {
            title: 'Schedule',
            dataIndex: 'schedule',
            key: 'schedule',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Dropdown menuItems={menuItems}>
                    <MoreOutlined className='action-icon' />
                </Dropdown>
            ),
        }

    ];

    return (
        <div className="workflow-list-container">
            <div className="workflow-header">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.47477 5.63332L5.19144 4.56665L0.683105 9.99998L5.19144 15.4333L6.47477 14.3667L2.84977 9.99998L6.47477 5.63332ZM5.83311 10.8333H7.49977V9.16665H5.83311V10.8333ZM14.1664 9.16665H12.4998V10.8333H14.1664V9.16665ZM9.16644 10.8333H10.8331V9.16665H9.16644V10.8333ZM14.8081 4.56665L13.5248 5.63332L17.1498 9.99998L13.5248 14.3667L14.8081 15.4333L19.3164 9.99998L14.8081 4.56665Z" fill="#0E263F" />
                </svg>
                <Typography type={'page-header'}>Workflows</Typography>
            </div>

            <br />

            <div className="workflow-controls">
                <Input type="text" placeholder="Search" size="large" />
                <div className="workflow-filters">
                    <Select
                        options={[
                            { value: 'option1', label: 'Option 1' },
                            { value: 'option2', label: 'Option 2' }
                        ]}
                        disabled={false}
                        defaultValue={{value: '', label: 'Filter By' }}
                    />
                    <Select
                        options={[
                            { value: 'option1', label: 'Option 1' },
                            { value: 'option2', label: 'Option 2' }
                        ]}
                        disabled={false}
                        defaultValue={{ value: '', label: 'Sort By' }}
                    />
                    <Button type="primary" label="New Workflow">
                        <PlusOutlined />
                    </Button>
                </div>
            </div>

            <br />

            <TableComponent columns={columns} data={data} />

        </div>
    );
};

export default WorkflowList;


