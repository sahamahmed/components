import React, { useRef, useCallback } from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    useReactFlow,
    reconnectEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Sidebar from './Sidebar';
import { DnDProvider, useDnD } from './DnDContext'; 
import Typography from '../shared/components/typography/Typography';
import './newWorkflow.scss';
import Button from '../shared/components/button/Button';
import { ReactComponent as EditIcon } from '../../public/icons/edit.svg';
import CustomControls from './customController';
import NodeWrapper from './NodeWrapper';

const initialNodes = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const edgeReconnectSuccessful = useRef(true);
    const { screenToFlowPosition } = useReactFlow();
    const [type] = useDnD();


    const onReconnectStart = useCallback(() => {
        edgeReconnectSuccessful.current = false;
    }, []);

    const onReconnect = useCallback((oldEdge, newConnection) => {
        edgeReconnectSuccessful.current = true;
        setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    }, []);

    const onReconnectEnd = useCallback((_, edge) => {
        if (!edgeReconnectSuccessful.current) {
            setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }

        edgeReconnectSuccessful.current = true;
    }, []);


    const onConnect = useCallback(
        (params) => {
            // console.log('connection', params)
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
        setNodes(prev => prev.filter(n => n.data.title !== node.title));
    };

    const addNewNode = (event) => {
        const lastNode = nodes[nodes.length - 1];
        const newXPosition = lastNode?.position.x + lastNode?.measured.width + 50  || 100;
        const newYPosition = lastNode?.position.y || 210;

        let position 

        event.x && event.y ? position = screenToFlowPosition({ x: event.x , y: event.y  }) : position = { x: newXPosition, y: newYPosition }
        
  
        const newNode = {
            id: getId(),
            type: event.type,
            position,
            data: { ...event.data, hasInput: true, onDelete: handleDeleteNode },
        };
        setNodes((nds) => nds.concat(newNode)); 

        if (lastNode) {
            const newEdge = {
                id: `xy-edge__${lastNode.id}-${newNode.id}`, 
                source: lastNode.id, 
                sourceHandle: lastNode.data.title || 'source', 
                target: newNode.id,
                targetHandle: newNode.data.title || 'target', 
                type: 'step',
            };

            setEdges((eds) => eds.concat(newEdge));
        }      
    };

    const handleResetData = () => {
        setNodes([]);
        setEdges([]);
    }

  
    return (
        <div className='dndflow-container'>
            <div className="dndflow">
                <Sidebar
                    onAddNode={e => {
                        addNewNode({ type: 'selectorNode', data: { ...e, isInflow: true } });
                    }}
                />

                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <div className="workflow-header"  >
                        <Typography type={'section-header'}> Logic Board - Company Workflow </Typography>
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
                        nodeTypes={{ selectorNode: NodeWrapper }}
                        connectionLineStyle={{ stroke: '#0E263F' }}
                        onReconnect={onReconnect}
                        onReconnectStart={onReconnectStart}
                        onReconnectEnd={onReconnectEnd}
                        maxZoom={1.75}
                        minZoom={0.75}
                    >
                        <CustomControls />
                    </ReactFlow>
                </div>
            </div>

            <div className='buttons'>
                <Button type="destructive" label="Reset Data" onClick={handleResetData} />
                <Button type="primary" label="Save Workflow" />
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

        </div>
    );
};

export default NewWorkflow;
