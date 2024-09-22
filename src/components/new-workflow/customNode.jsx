import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import './customNode.scss';

const CustomNode = memo(({ data }) => {
    return (
        <div className='main'>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div className='icon'>
                    {data.icon}
                </div>
                <div className='title'>
                    <strong>{data.title}</strong>
                </div>
            </div>

            <div>
                {data?.isInflow && data?.children && (
                    <div>
                        {data.children}
                    </div>
                ) }
            </div>
             { data.isInflow && (
                <>
                    <Handle
                        type="source"
                        position="right"
                        id="a"
                        style={{ background: '#555' }}
                    />
                    <Handle
                        type="target"
                        position="left"
                        id="b"
                        style={{ background: '#555' }}
                    />
                    <Handle
                        type="target"
                        position="right"
                        id="c"
                        style={{ background: '#555' }}
                    />
                    <Handle
                        type="source"
                        position="left"
                        id="d"
                        style={{ background: '#555' }}
                    />
                </>
             )}
        </div>
    );
});

export default CustomNode;
