// src/redux/dataActions.js

export const ADD_NODE = 'ADD_NODE';
export const ADD_LINK = 'ADD_LINK';
export const EDIT_NODE = 'EDIT_NODE';
export const DELETE_NODE = 'DELETE_NODE';
export const SET_DATA = 'SET_DATA'; 

export const addNode = (node) => ({
    type: ADD_NODE,
    payload: node,
});

export const addLink = (link) => ({
    type: ADD_LINK,
    payload: link,
});

export const editNode = (id, updatedName, updatedValue) => ({
    type: EDIT_NODE,
    payload: { id, name: updatedName, value: updatedValue },
});

export const deleteNode = (index) => ({
    type: DELETE_NODE,
    payload: index,
});


export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});