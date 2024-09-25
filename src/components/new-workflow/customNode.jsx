import React, { memo } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import './customNode.scss';

const CustomNode = memo(({ data, index, hoveredNode, handleAddNode, children}) => {
    const {icon, title, isInflow, class: iconClass} = data;
    
    return (
        <>
            <div className='main'>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className={`icon ${iconClass || ''}`}>
                        {icon && <i className={`fa ${icon}`}></i>}
                    </span>
                    <div className='title'>
                        <strong>{title}</strong>
                    </div>
                </div>

                <div>
                    {
                        data?.isInflow && children
                    }
                </div>

                {!isInflow && hoveredNode === index && (
                    <div className="add-node-icon" onClick={() => handleAddNode(data)}>
                        <PlusOutlined style={{ fontSize: '16px', cursor: 'pointer' }} />
                    </div>
                )}
            </div>
        </>
    );
});

export default CustomNode;
