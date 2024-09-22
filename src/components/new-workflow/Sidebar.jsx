import React from 'react';
import { useDnD } from './DnDContext';
import Typography from '../shared/components/typography/Typography'
import Select from '../shared/components/select/Select'
import { ReactComponent as Icon } from '../../public/icons/sphere.svg'
import CustomNode from './customNode';
import './newWorkflow.scss'
import Dropdown from '../shared/components/dropdown/Dropdown';
import { ReactComponent as EditIcon } from '../../public/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../public/icons/delete.svg';
import { MoreOutlined } from '@ant-design/icons';

const nodes = [
    { icon: <Icon />, title: 'Website Search Robot' },
    { icon: <Icon />, title: 'Scraper' },
    { icon: <Icon />, title: 'Map' },
    { icon: <Icon />, title: 'Sequence' },
    {
        icon: <Icon />, 
        title: 'Google', 
        children: <Dropdown menuItems={
            [
                { label: 'Edit Data', icon: EditIcon, onClick: () => console.log('Edit Workflow clicked') },
                { label: 'Delete Node', icon: DeleteIcon, onClick: () => console.log('Delete Workflow clicked') },
            ]}>
            <MoreOutlined className='action-icon' />
        </Dropdown>
    },
    { icon: <Icon />, title: 'Concat' },
    { icon: <Icon />, title: 'Filter' },
    { icon: <Icon />, title: 'Batch' }
];

const Sidebar = () => {
    const [_, setType] = useDnD();

    const onDragStart = (event, node) => {
        setType(node);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <div className="workflow-sidebar">
                <div className="workflow-select-node">
                    <div className="select-node">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6.5" cy="9.5" r="6.5" fill="#0066CE" />
                            <circle cx="18" cy="4" r="4" fill="#0066CE" />
                            <circle cx="16.5" cy="16.5" r="3.5" fill="#0066CE" />
                        </svg>
                        <Typography type="section-header">Select Nodes</Typography>
                    </div>
                    <Select type="single" defaultValue={{ value: "", label: "Type" }} />
                </div>

                {nodes.map((node, index) => (
                    <div
                        className="workflow-node"
                        key={index}
                        onDragStart={(event) => onDragStart(event, node)}
                        draggable
                    >
                        <CustomNode data={node} />
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;