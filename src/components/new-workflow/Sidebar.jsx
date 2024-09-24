import React, { useState } from 'react';
import { useDnD } from './DnDContext';
import Typography from '../shared/components/typography/Typography';
import Select from '../shared/components/select/Select';
import { ReactComponent as Icon } from '../../public/icons/sphere.svg';
import CustomNode from './customNode';
import './newWorkflow.scss';

const nodesArr = [
    { icon: <Icon />, title: 'Website Search Robot' },
    { icon: <Icon />, title: 'Scraper', hasInput: true },
];

const Sidebar = ({ onAddNode, onDelete }) => {
    const [_, setType] = useDnD();
    const [hoveredNode, setHoveredNode] = useState(null);

    const onDragStart = (event, node) => {
        setType(node);
        event.dataTransfer.effectAllowed = 'move';
    };

    const handleMouseEnter = (index) => {
        setHoveredNode(index);
    };

    const handleMouseLeave = () => {
        setHoveredNode(null);
    };

    const handleAddNode = (node) => {
        setType(node);
        if (onAddNode) {
            onAddNode(node);
        }
    };

    const handleDeleteNode = (node) => {
        if (onDelete) {
            onDelete(node);
        }
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

                {nodesArr.map((node, index) => (
                    <div
                        className="workflow-node"
                        key={index}
                        onDragStart={(event) => onDragStart(event, node)}
                        draggable
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CustomNode data={node} index={index} hoveredNode={hoveredNode} handleAddNode={handleAddNode} onDelete={handleDeleteNode} />
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
