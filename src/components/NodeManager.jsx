import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNode, editNode, deleteNode, addLink } from '../redux/dataActions';
import { FaTrashAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './NodeManager.css';

const NodeManager = () => {
    const { t } = useTranslation();
    const [nodeName, setNodeName] = useState('');
    const [nodeValue, setNodeValue] = useState('');
    const [selectedNodeId, setSelectedNodeId] = useState('');
    const [newValue, setNewValue] = useState('');
    const [sourceId, setSourceId] = useState('');
    const [targetId, setTargetId] = useState('');
    const [linkValue, setLinkValue] = useState('');
    const [parentNodeId, setParentNodeId] = useState('');

    const nodes = useSelector((state) => state.data.nodes);
    const links = useSelector((state) => state.data.links);
    const dispatch = useDispatch();

    const handleAddNode = () => {
        if (nodeName && nodeValue) {
            const newId = Date.now();
            dispatch(addNode({ id: newId, name: nodeName, value: Number(nodeValue) }));

            // Find the index of the parent node
            if (parentNodeId) {
                const parentIndex = nodes.findIndex(node => node.id === Number(parentNodeId));
                const newNodeIndex = nodes.length; // The new node will be added at the end

                // Only add link if parent exists
                if (parentIndex !== -1) {
                    dispatch(addLink({
                        source: parentIndex,
                        target: newNodeIndex,
                        value: Number(nodeValue)
                    }));
                }
            }

            setNodeName('');
            setNodeValue('');
            setParentNodeId('');
        }
    };


    const handleEditNode = () => {
        if (selectedNodeId && newValue) {
            const node = nodes.find((node) => node.id === Number(selectedNodeId));
            if (node) {
                dispatch(editNode(Number(selectedNodeId), node.name, Number(newValue)));
                setSelectedNodeId('');
                setNewValue('');
            }
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

    const hasDependencies = (nodeId) => {
        return links.some(link => link.source === nodeId);
    };

    return (
        <div className="node-manager-container">
            <h3>{t('manage_nodes')}</h3>

            <div className="node-list">
                <h4>{t('existing_nodes')}</h4>
                {nodes.length > 0 ? (
                    <ul>
                        {nodes.map((node) => (
                            <li key={node.id} className="node-item">
                                <span>{t(node.name, { defaultValue: node.name })} - {node.value}</span>
                                {!hasDependencies(node.id) && (
                                    <FaTrashAlt
                                        onClick={() => dispatch(deleteNode(node.id))}
                                        title={t('delete_node')}
                                        className="delete-icon"
                                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>{t('no_nodes_available')}</p>
                )}
            </div>

            <div className="input-section">
                <input
                    type="text"
                    value={nodeName}
                    onChange={(e) => setNodeName(e.target.value)}
                    placeholder={t('enter_node_name')}
                />
                <input
                    type="number"
                    value={nodeValue}
                    onChange={(e) => setNodeValue(e.target.value)}
                    placeholder={t('enter_node_value')}
                />

                {/* Parent Node Selection */}
                <select value={parentNodeId} onChange={(e) => setParentNodeId(e.target.value)}>
                    <option value="">{t('select_parent_node', { defaultValue: 'Select Parent Node (optional)' })}</option>
                    {nodes.map((node) => (
                        <option key={node.id} value={node.id}>
                            {node.name}
                        </option>
                    ))}
                </select>

                <button onClick={handleAddNode}>{t('add_node')}</button>
            </div>


            <div className="dropdown-section">
                <select
                    value={selectedNodeId}
                    onChange={(e) => {
                        setSelectedNodeId(e.target.value);
                        const node = nodes.find((n) => n.id === Number(e.target.value));
                        if (node) setNewValue(node.value);
                    }}
                >
                    <option value="">{t('select_node_to_edit')}</option>
                    {nodes.map((node) => (
                        <option key={node.id} value={node.id}>
                            {node.name} - {node.value}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder={t('enter_new_value')}
                />
                <button onClick={handleEditNode} disabled={!selectedNodeId}>{t('edit_node')}</button>
            </div>

            <h3>{t('manage_links')}</h3>

            <div className="link-section">
                <select value={sourceId} onChange={(e) => setSourceId(e.target.value)}>
                    <option value="">{t('select_source_node')}</option>
                    {nodes.map((node) => (
                        <option key={node.id} value={node.id}>
                            {node.name}
                        </option>
                    ))}
                </select>

                <select value={targetId} onChange={(e) => setTargetId(e.target.value)}>
                    <option value="">{t('select_target_node')}</option>
                    {nodes.map((node) => (
                        <option key={node.id} value={node.id}>
                            {node.name}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    value={linkValue}
                    onChange={(e) => setLinkValue(e.target.value)}
                    placeholder={t('enter_link_value')}
                />
                <button onClick={handleAddLink}>{t('add_link')}</button>
            </div>
        </div>
    );
};

export default NodeManager;
