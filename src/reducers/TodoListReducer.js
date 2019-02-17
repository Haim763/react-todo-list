import actionTypes from '../actions/actionTypes';

export default (state, action) => {
  let todos = state.todos.slice(0);
  const { todosIdsCounter, todoCount } = state;
  let newTodoCount = todoCount;
  let todoIndex;

  switch (action.type) {
    case actionTypes.ADD_TODO:
      todos.push({
        id: todosIdsCounter,
        text: action.payload.text,
        isDone: false
      });
      return { ...state, todos, todosIdsCounter: todosIdsCounter + 1, todoCount: todoCount + 1 };

    case actionTypes.REMOVE_TODO:
      todoIndex = getTodoIndexById(todos, action.payload.id);
      newTodoCount = todos[todoIndex].isDone ? todoCount : todoCount-1;
      removeItemById(todos, action.payload.id);
      return { ...state, todos, todoCount: newTodoCount }

    case actionTypes.TOGGLE_TODO_STATUS:
      todoIndex = getTodoIndexById(todos, action.payload.id);
      newTodoCount = todoCount;

      if (todoIndex > -1) {
        const todo = todos[todoIndex];
        newTodoCount = todo.isDone ? todoCount + 1 : todoCount - 1;

        todos[todoIndex].isDone = !todos[todoIndex].isDone;
      }
      return { ...state, todos, todoCount: newTodoCount }
    default:
      throw new Error();
  }
}

const removeItemById = (todos, id) => {
  let removeIndex = getTodoIndexById(todos, id);

  if (removeIndex > -1)
    return todos.splice(removeIndex, 1);
  else return todos;
}

const getTodoIndexById = (todos, id) => {
  let todoIndex = -1;
  todos.forEach((todo, index) => {
    if (todo.id === id)
      todoIndex = index;
  });

  return todoIndex;
}