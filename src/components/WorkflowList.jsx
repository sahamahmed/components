import React from 'react'
import Typography from './shared/components/typography/Typography'
import Input from './shared/components/inputs/text/Text'
import Select from './shared/components/select/Select'
import Button from './shared/components/button/Button'
import  { PlusOutlined } from '@ant-design/icons';
import './WorkflowList.scss';
import TableComponent from './shared/components/table/Table'
import ToggleSwitch from './shared/components/toggle/ToggleSwitch'
import { MoreOutlined } from '@ant-design/icons';
import BarChartComponent from './shared/components/graph/Graph'
import Dropdown from './shared/components/dropdown/Dropdown'
import Drawer from './shared/components/drawer/Drawer'
import { ReactComponent as RunIcon } from '../public/icons/play_circle_outline.svg';
import { ReactComponent as EditIcon } from '../public/icons/edit.svg';
import { ReactComponent as InfoIcon } from '../public/icons/info.svg';
import { ReactComponent as DeleteIcon } from '../public/icons/delete.svg';


const WorkflowList = () => {

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const handleRun = () => {
        console.log('run button clicked');
    };

    const handleCancel = () => {
        console.log('Cancel button clicked');
        setDrawerOpen(false); 
    };

    const footerButtons = [
        {
            label: 'Cancel',
            type: 'secondary',
            onClick: handleCancel
        },
        {
            label: 'Run Workflow',
            type: 'primary',
            onClick: handleRun
        }
    ];

    const menuItems = [
        { label: 'Run Workflow', icon: RunIcon , onClick: () => setDrawerOpen(prev => !prev)  },
        { label: 'Edit Workflow', icon: EditIcon, onClick: () => console.log('Edit Workflow clicked') },
        { label: 'View Workflow', icon: InfoIcon, onClick: () => console.log('View Workflow clicked') },
        { label: 'Delete Workflow', icon: DeleteIcon, onClick: () => console.log('Delete Workflow clicked') },
    ];


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
                { name: 'Page A', uv: 14 },
                { name: 'Page B', uv: 3 },
                { name: 'Page C', uv: 29 },
                { name: 'Page D', uv: 5 },
                { name: 'Page E', uv: 50 },
                { name: 'Page F', uv: 23 },
                { name: 'Page G', uv: 34 },
            ],
        },
        {
            key: '2',
            templateName: 'Template 2',
            createdAt: '4 days ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 2',
            status: 'Inactive',
            lastRun: '12 hours ago',
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
        {
            key: '3',
            templateName: 'Template 3',
            createdAt: '3 weeks ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 3',
            status: 'Active',
            lastRun: '1 hour ago',
            resultsHistory: 'History 3',
            schedule: 'Monthly',
            historyData: [
                { name: 'Page A', uv: 12 },
                { name: 'Page B', uv: 14 },
                { name: 'Page C', uv: 8 },
                { name: 'Page D', uv: 10 },
                { name: 'Page E', uv: 5 },
                { name: 'Page F', uv: 23 },
                { name: 'Page G', uv: 42 },
            ],
        },
        {
            key: '4',
            templateName: 'Template 4',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 4',
            status: 'Active',
            lastRun: '3 days ago',
            resultsHistory: 'History 4',
            schedule: 'Daily',
            historyData: [
                { name: 'Page A', uv: 120 },
                { name: 'Page B', uv: 230 },
                { name: 'Page C', uv: 180 },
                { name: 'Page D', uv: 160 },
                { name: 'Page E', uv: 140 },
                { name: 'Page F', uv: 210 },
                { name: 'Page G', uv: 320 },
            ],
        },
        {
            key: '5',
            templateName: 'Template 5',
            createdAt: '2 days ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 5',
            status: 'Inactive',
            lastRun: '4 hours ago',
            resultsHistory: 'History 5',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 340 },
                { name: 'Page B', uv: 120 },
                { name: 'Page C', uv: 240 },
                { name: 'Page D', uv: 260 },
                { name: 'Page E', uv: 320 },
                { name: 'Page F', uv: 150 },
                { name: 'Page G', uv: 400 },
            ],
        },
        {
            key: '6',
            templateName: 'Template 6',
            createdAt: '6 days ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 6',
            status: 'Active',
            lastRun: '5 hours ago',
            resultsHistory: 'History 6',
            schedule: 'Monthly',
            historyData: [
                { name: 'Page A', uv: 220 },
                { name: 'Page B', uv: 130 },
                { name: 'Page C', uv: 90 },
                { name: 'Page D', uv: 150 },
                { name: 'Page E', uv: 200 },
                { name: 'Page F', uv: 160 },
                { name: 'Page G', uv: 110 },
            ],
        },
        {
            key: '7',
            templateName: 'Template 7',
            createdAt: '1 week ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 7',
            status: 'Inactive',
            lastRun: '2 days ago',
            resultsHistory: 'History 7',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 75 },
                { name: 'Page B', uv: 95 },
                { name: 'Page C', uv: 120 },
                { name: 'Page D', uv: 180 },
                { name: 'Page E', uv: 140 },
                { name: 'Page F', uv: 160 },
                { name: 'Page G', uv: 130 },
            ],
        },
        {
            key: '8',
            templateName: 'Template 8',
            createdAt: '2 weeks ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 8',
            status: 'Active',
            lastRun: '10 minutes ago',
            resultsHistory: 'History 8',
            schedule: 'Daily',
            historyData: [
                { name: 'Page A', uv: 420 },
                { name: 'Page B', uv: 150 },
                { name: 'Page C', uv: 240 },
                { name: 'Page D', uv: 300 },
                { name: 'Page E', uv: 190 },
                { name: 'Page F', uv: 270 },
                { name: 'Page G', uv: 340 },
            ],
        },
        {
            key: '9',
            templateName: 'Template 9',
            createdAt: '1 week ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 9',
            status: 'Active',
            lastRun: '20 minutes ago',
            resultsHistory: 'History 9',
            schedule: 'Monthly',
            historyData: [
                { name: 'Page A', uv: 60 },
                { name: 'Page B', uv: 70 },
                { name: 'Page C', uv: 90 },
                { name: 'Page D', uv: 100 },
                { name: 'Page E', uv: 120 },
                { name: 'Page F', uv: 80 },
                { name: 'Page G', uv: 50 },
            ],
        },
        {
            key: '10',
            templateName: 'Template 10',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        },
        {
            key: '11',
            templateName: 'Template 11',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '12',
            templateName: 'Template 12',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '13',
            templateName: 'Template 13',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        },{
            key: '14',
            templateName: 'Template 14',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        },{
            key: '15',
            templateName: 'Template 15',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        },{
            key: '16',
            templateName: 'Template 16',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '17',
            templateName: 'Template 17',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '18',
            templateName: 'Template 18',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '19',
            templateName: 'Template 19',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '20',
            templateName: 'Template 20',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '21',
            templateName: 'Template 21',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '22',
            templateName: 'Template 22',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '23',
            templateName: 'Template 23',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '24',
            templateName: 'Template 24',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '25',
            templateName: 'Template 25',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
            ],
        }, {
            key: '26',
            templateName: 'Template 26',
            createdAt: '1 month ago',
            workflowDescription: 'Workflow description is displayed here. This is a description of Template 10',
            status: 'Inactive',
            lastRun: '3 hours ago',
            resultsHistory: 'History 10',
            schedule: 'Weekly',
            historyData: [
                { name: 'Page A', uv: 1400 },
                { name: 'Page B', uv: 1300 },
                { name: 'Page C', uv: 1200 },
                { name: 'Page D', uv: 1100 },
                { name: 'Page E', uv: 1500 },
                { name: 'Page F', uv: 1700 },
                { name: 'Page G', uv: 1600 },
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
            dataIndex: 'historyData',
            key: 'historyData',
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
            {drawerOpen && <Drawer open={drawerOpen} setOpen={setDrawerOpen} footerButtons={footerButtons} />}
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
                        type='multi'
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


