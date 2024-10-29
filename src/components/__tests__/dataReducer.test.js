import dataReducer from '../../redux/dataReducer';
import { addNode, editNode, deleteNode, addLink, setData } from '../../redux/dataActions';
import '@testing-library/jest-dom';

const initialState = { nodes: [], links: [] };

test('adds a new node to the state', () => {
    const newNode = { id: 1, name: 'Salary', value: 5000 };
    const newState = dataReducer(initialState, addNode(newNode));
    expect(newState.nodes).toContainEqual(newNode);
});

test('edits an existing node in the state', () => {
    const initialState = { nodes: [{ id: 1, name: 'Salary', value: 5000 }], links: [] };
    const newState = dataReducer(initialState, editNode(1, 'Updated Salary', 6000));

    expect(newState.nodes[0].name).toBe('Updated Salary');
    expect(newState.nodes[0].value).toBe(6000);
});

test('deletes a node from the state', () => {
    const initialState = { nodes: [{ id: 1, name: 'Salary', value: 5000 }], links: [] };
    const newState = dataReducer(initialState, deleteNode(1));
    expect(newState.nodes.length).toBe(0);
});

test('adds a link between two nodes', () => {
    const initialState = { nodes: [{ id: 1 }, { id: 2 }], links: [] };
    const newLink = { source: 1, target: 2, value: 3000 };
    const newState = dataReducer(initialState, addLink(newLink));

    expect(newState.links).toContainEqual(newLink);
});

test('sets the initial state data', () => {
    const initialData = {
        nodes: [{ id: 1, name: 'Salary', value: 5000 }],
        links: [{ source: 1, target: 2, value: 3000 }],
    };
    const newState = dataReducer(initialState, setData(initialData));

    expect(newState.nodes).toEqual(initialData.nodes);
    expect(newState.links).toEqual(initialData.links);
});
