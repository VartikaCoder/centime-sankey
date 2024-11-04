// src/redux/dataReducer.js

import {
    ADD_NODE,
    ADD_LINK,
    EDIT_NODE,
    DELETE_NODE,
    SET_DATA,
} from './dataActions';

const initialState = {
    nodes: [],
    links: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: 
            return {
                ...state,
                nodes: action.payload.nodes,
                links: action.payload.links,
            };

        case ADD_NODE:
            return {
                ...state,
                nodes: [...state.nodes, action.payload],
            };

            case EDIT_NODE: {
                const { id, name, value } = action.payload;
                const updatedNodes = state.nodes.map((node) =>
                    node.id === id ? { ...node, name: name || node.name, value } : node
                );
                return { ...state, nodes: updatedNodes };
            }

        case DELETE_NODE: {
            const nodeId = action.payload;
            return {
                ...state,
                nodes: state.nodes.filter((node) => node.id !== nodeId),
                links: state.links.filter(
                    (link) => link.source !== nodeId && link.target !== nodeId
                ),
            };
        }
        
        case ADD_LINK:
            return {
                ...state,
                links: [...state.links, action.payload],
            };

        default:
            return state;
    }
};

export default dataReducer;
