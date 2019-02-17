
import React, { useState } from 'react';
import {
  IconButton,
  ListItem,
  ListItemText,
  Checkbox,
} from '@material-ui/core';
import {
  Delete as DeleteIcon
} from '@material-ui/icons';
import styles from './TodoList.module.css';

export default (props) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <ListItem button onMouseOver={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
      <>
        <IconButton onClick={props.onCheck} className={styles.checkbox_container} aria-label="Checkbox" >
          <Checkbox color="primary" className={styles.checkbox} />
        </IconButton>
        <ListItemText primary={props.text} />
        {showDelete &&
          <IconButton aria-label="Delete" onClick={props.onDelete}>
            <DeleteIcon className={styles.delete_icon} />
          </IconButton>
        }
      </>
    </ListItem>
  );
}