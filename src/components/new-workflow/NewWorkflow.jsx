import React, { useRef, useCallback } from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Sidebar from './Sidebar';
import { DnDProvider, useDnD } from './DnDContext'; 
import Typography from '../shared/components/typography/Typography';
import './newWorkflow.scss';
import CustomNode from './customNode';
import Button from '../shared/components/button/Button';
import { ReactComponent as EditIcon } from '../../public/icons/edit.svg';
import CustomControls from './customController';

const initialNodes = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { screenToFlowPosition } = useReactFlow();
    const [type] = useDnD();

    const onConnect = useCallback(
        (params) => {
            console.log('connection', params)
            setEdges((eds) => addEdge({ ...params, type: "step" }, eds))
        },
        []
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => { 
            event.preventDefault();

            if (!type) { 
                return;
            }
            addNewNode({
                x: event.clientX, y: event.clientY,
                type: 'selectorNode',
                data: { ...type, isInflow: true }, });
        },
        [screenToFlowPosition, type], 
    );

    const handleDeleteNode = (node) => {
        console.log(node);
        setNodes(prev => prev.filter(n => n.title !== node.title));
    };

    const addNewNode = (event) => {
        const position = screenToFlowPosition({ x: event.x || 500, y: event.y || 300});
        const newNode = {
            id: getId(),
            type: event.type,
            position,
            data: event.data,
            onDelete: (e) => { handleDeleteNode(e) }
        };
        setNodes((nds) => nds.concat(newNode));
    };

    return (
        <div className="dndflow">
            <Sidebar 
                onAddNode={e => {
                    addNewNode({ type: 'selectorNode', data: {...e, isInflow: true }});
                }}
            />

            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <div className="workflow-header"  >
                    <Typography type={'section-header'}>Logic Board - Company Workflow </Typography>
                    <EditIcon />
                </div>

                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    nodeTypes={{ selectorNode: CustomNode }}
                    connectionLineStyle={{ stroke: '#0E263F' }}
                >
                    <CustomControls />
                </ReactFlow>
            </div>
        </div>
    );
};

const NewWorkflow = () => {  
    return (
        <div className='workflow-list-container'>
            <div className="workflow-header">
                <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8332 5.83329H9.1665V9.16663H5.83317V10.8333H9.1665V14.1666H10.8332V10.8333H14.1665V9.16663H10.8332V5.83329ZM9.99984 1.66663C5.39984 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.39984 18.3333 9.99984 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.99984 1.66663ZM9.99984 16.6666C6.32484 16.6666 3.33317 13.675 3.33317 9.99996C3.33317 6.32496 6.32484 3.33329 9.99984 3.33329C13.6748 3.33329 16.6665 6.32496 16.6665 9.99996C16.6665 13.675 13.6748 16.6666 9.99984 16.6666Z" fill="#0E263F" />
                </svg>
                <Typography type={'page-header'}>New Workflow</Typography>
            </div>

            <br />

            <ReactFlowProvider>
                <DnDProvider>
                    <DnDFlow />
                </DnDProvider>
            </ReactFlowProvider>

            <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center", gap:"8px", margin:"16px 0"}}>
                <Button type="destructive" label="Reset Data" />
                <Button type="primary" label="Save Workflow" />
            </div>

        </div>
    );
};

export default NewWorkflow;
