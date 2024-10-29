import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNode, editNode, deleteNode, addLink } from '../redux/dataActions';

const NodeManager = () => {
    const [nodeName, setNodeName] = useState('');
    const [nodeValue, setNodeValue] = useState('');
    const [editIndex, setEditIndex] = useState('');
    const [newName, setNewName] = useState('');
    const [newValue, setNewValue] = useState('');
    const [deleteIndex, setDeleteIndex] = useState('');
    const [sourceId, setSourceId] = useState('');
    const [targetId, setTargetId] = useState('');
    const [linkValue, setLinkValue] = useState('');

    const nodes = useSelector((state) => state.data.nodes);
    const dispatch = useDispatch();

    const handleAddNode = () => {
        if (nodeName && nodeValue) {
            const newId = Date.now();
            dispatch(addNode({ id: newId, name: nodeName, value: Number(nodeValue) }));
            setNodeName('');
            setNodeValue('');
        }
    };

    const handleEditNode = () => {
        if (editIndex && newName && newValue) {
            dispatch(editNode(Number(editIndex), newName, Number(newValue)));
            setEditIndex('');
            setNewName('');
            setNewValue('');
        }
    };

    const handleDeleteNode = () => {
        if (deleteIndex) {
            dispatch(deleteNode(Number(deleteIndex)));
            setDeleteIndex('');
        }
    };

    const handleAddLink = () => {
        if (sourceId && targetId && linkValue) {
            dispatch(addLink({
                source: Number(sourceId),
                target: Number(targetId),
                value: Number(linkValue),
            }));
            setSourceId('');
            setTargetId('');
            setLinkValue('');
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h3>Manage Nodes</h3>
            <div>
                <h4>Existing Nodes</h4>
                {nodes.length > 0 ? (
                    <ul>
                        {nodes.map((node) => (
                            <li key={node.id}>
                                ID: {node.id}, Name: {node.name}, Value: {node.value}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No nodes available. Add a new node!</p>
                )}
            </div>

            <input
                type="text"
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
                placeholder="Enter node name"
            />
            <input
                type="number"
                value={nodeValue}
                onChange={(e) => setNodeValue(e.target.value)}
                placeholder="Enter node value"
            />
            <button onClick={handleAddNode}>Add Node</button>

            <input
                type="number"
                value={editIndex}
                onChange={(e) => setEditIndex(e.target.value)}
                placeholder="Enter node ID to edit"
            />
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new name"
            />
            <input
                type="number"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Enter new value"
            />
            <button onClick={handleEditNode}>Edit Node</button>

            <input
                type="number"
                value={deleteIndex}
                onChange={(e) => setDeleteIndex(e.target.value)}
                placeholder="Enter node ID to delete"
            />
            <button onClick={handleDeleteNode}>Delete Node</button>

            <h3>Manage Links</h3>

            <input
                type="number"
                value={sourceId}
                onChange={(e) => setSourceId(e.target.value)}
                placeholder="Enter source node ID"
            />
            <input
                type="number"
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                placeholder="Enter target node ID"
            />
            <input
                type="number"
                value={linkValue}
                onChange={(e) => setLinkValue(e.target.value)}
                placeholder="Enter link value"
            />
            <button onClick={handleAddLink}>Add Link</button>
        </div>
    );
};

export default NodeManager;
