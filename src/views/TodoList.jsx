import React, { useState, useReducer, Fragment } from 'react';
import {
  Button,
  Paper,
  List,
  Divider,
  Icon,
  TextField
} from '@material-ui/core';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import { addTodo, removeTodo, toggleTodoStatus } from '../actions/TodoListActions';
import EmptyTodoItem from '../components/EmptyTodoItem';
import {useStore} from '../store/useStore';

export default () => {
  const [text, setText] = useState('');
  const [state, dispatch] = useStore();
  const { todos, todoCount } = state;

  const handleAddClick = e => {
    if (text.length > 0) {
      dispatch(addTodo(text))
      setText('');
    }
  }

  return (
    <div className={styles.list_container}>
      <Paper className={styles.todo_list_paper}>
        <List component="nav" className={styles.todo_list}>
          <EmptyTodoItem todo={todoCount} done={todos.length - todoCount} />
          {todos.map(todo =>
            <Fragment key={todo.id}>
              <TodoItem
                text={todo.text}
                key={todo.id}
                onCheck={() => dispatch(toggleTodoStatus(todo.id))}
                onDelete={() => dispatch(removeTodo(todo.id))}
              />
              <Divider />
            </Fragment>
          )}
        </List>
      </Paper>

      <div>
        <TextField
          id="standard-full-width"
          className={styles.text}
          value={text}
          placeholder="Todo..."
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleAddClick(e)}
        />

        <Button variant="contained" color="inherit" className={styles.button} onClick={handleAddClick}>
          Add
        <Icon className={styles.send_icon}>send</Icon>
        </Button>
      </div>
    </div>
  )
}