import { Handle } from '@xyflow/react'
import React from 'react'
import Drawer from '../shared/components/drawer/Drawer';
import EditDataForm from './EditDataForm';
import CustomNode from './customNode';
import Dropdown from '../shared/components/dropdown/Dropdown';
import { MoreOutlined } from '@ant-design/icons';
import { ReactComponent as EditIcon } from '../../public/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../public/icons/delete.svg';
import './customNode.scss';

const NodeWrapper = ({ data}) => {
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
    <> <CustomNode data={data} >
          {hasInput ? (
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
          ) : (
                  <Handle
                      type="source"
                      position="right"
                      id={title}
                      style={{ background: '#555' }}
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