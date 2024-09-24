import React, { memo } from 'react';
import { Handle } from '@xyflow/react';
import { PlusOutlined } from '@ant-design/icons';
import Dropdown from '../shared/components/dropdown/Dropdown';
import { MoreOutlined } from '@ant-design/icons';
import { ReactComponent as EditIcon } from '../../public/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../public/icons/delete.svg';
import './customNode.scss';
import Drawer from '../shared/components/drawer/Drawer';
import EditDataForm from './EditDataForm';

const CustomNode = memo(({ data, index, hoveredNode, handleAddNode, onDelete }) => {
    const {icon, title, isInflow, hasInput= true} = data;
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const onSubmit = () => {
        console.log('Edit Data submitted');
    };

    const deleteNodeHandler = (node) => {
        console.log(onDelete);
        if (onDelete) {
            onDelete(node);
        }
    };

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
                        data?.isInflow && (
                            <Dropdown menuItems={
                                [
                                    { label: 'Edit Data', icon: EditIcon, onClick: () => setDrawerOpen(true) },
                                    { label: 'Delete Node', icon: DeleteIcon, onClick: () => deleteNodeHandler(data) }
                                ]
                            }>
                                <MoreOutlined className='action-icon' />
                            </Dropdown>
                        )
                    }
                </div>

                {!isInflow && hoveredNode === index && (
                    <div className="add-node-icon" onClick={() => handleAddNode(data)}>
                        <PlusOutlined style={{ fontSize: '16px', cursor: 'pointer' }} />
                    </div>
                )}

                {isInflow && hasInput && (
                    <>
                        <Handle
                            type="source"
                            position="right"
                            id={title}
                            style={{ background: '#555' }}
                        />
                        <Handle
                            type="target"
                            position="left"
                            id={title}
                            style={{ background: '#555' }}
                        />
                    </>
                )
                }

                {
                    isInflow && !hasInput && (
                        <Handle
                            type="source"
                            position="right"
                            id="a"
                            style={{ background: '#555' }}
                        />
                    )
                }

            </div>
                
            { drawerOpen && <Drawer 
                open={drawerOpen} 
                setOpen={setDrawerOpen}
                title={'Edit Data'} 
                >
                    <EditDataForm onCancel={() => setDrawerOpen(false)} onSubmit={onSubmit} />
                </Drawer>
            }
        </>
    );
});

export default CustomNode;
