import React, { memo } from 'react';
import { Handle } from '@xyflow/react';
import { PlusOutlined } from '@ant-design/icons';


const CustomNode = memo(({ data, index, hoveredNode, handleAddNode , children}) => {
    const {icon, title, isInflow} = data;


    return (
        <>
            <div className='main'>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div className='icon'>
                        {icon}
                    </div>
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
