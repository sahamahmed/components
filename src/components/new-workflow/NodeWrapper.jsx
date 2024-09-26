import { Handle, useConnection, useEdges, useHandleConnections } from '@xyflow/react'
import React from 'react'
import Drawer from '../shared/components/drawer/Drawer';
import EditDataForm from './EditDataForm';
import CustomNode from './customNode';
import Dropdown from '../shared/components/dropdown/Dropdown';
import { MoreOutlined } from '@ant-design/icons';
import { ReactComponent as EditIcon } from '../../public/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../public/icons/delete.svg';
import './customNode.scss';

const CustomHandle = (props) => {
    const connections = useHandleConnections({
        type: props.type,
    });
    console.log('connections', connections);

    return (
        <Handle
            {...props}
            isConnectable={connections.length < props.connectionCount}
        />
    );
};



const NodeWrapper = ({ data }) => {
    const { title, hasInput, onDelete} = data;
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const onSubmit = () => {
        console.log('Edit Data submitted');
    };

    const deleteNodeHandler = (node) => {
        if (onDelete) {
            onDelete(node);
        }
    };
  return (
    <> 
        <CustomNode data={data} >
          {hasInput ? (
              <>
                  <CustomHandle
                      type="source"
                      position="right"
                      id={title}
                      style={{ background: '#555' }}
                      connectionCount={2}

                  />
                  <CustomHandle
                      type="target"
                      position="left"
                      id={title}
                      style={{ background: '#555' }}
                      connectionCount={2}
                  />
              </>
          ) : (
                  <CustomHandle
                      type="source"
                      position="right"
                      id={title}
                      style={{ background: '#555' }}
                      connectionCount={2}
                  />
          )
          }
          <Dropdown menuItems={
              [
                  { label: 'Edit Data', icon: EditIcon, onClick: () => setDrawerOpen(true) },
                  { label: 'Delete Node', icon: DeleteIcon, onClick: () => deleteNodeHandler(data) }
              ]
          }>
              <MoreOutlined className='action-icon' />
          </Dropdown>

      </CustomNode>

          {
            drawerOpen && <Drawer
                open={drawerOpen}
                setOpen={setDrawerOpen}
                title={'Edit Data'}
            >
                <EditDataForm onCancel={() => setDrawerOpen(false)} onSubmit={onSubmit} />
            </Drawer>
          }
    </>
  )
}

export default NodeWrapper