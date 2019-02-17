import actionTypes from './actionTypes';

export const addTodo = (text) => ({ type: actionTypes.ADD_TODO, payload: { text } });

export const removeTodo = (id) => ({ type: actionTypes.REMOVE_TODO, payload: { id } });

export const toggleTodoStatus = (id) => ({ type: actionTypes.TOGGLE_TODO_STATUS, payload: { id } });
