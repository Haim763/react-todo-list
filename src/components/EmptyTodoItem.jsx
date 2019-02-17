import React from 'react';
import { ListItemText, Divider } from '@material-ui/core';

export default (props) => {
  const { done, todo } = props;

  return (
    <>
      <ListItemText
        primary={
          todo > 0 ?
            `${done} done out of ${todo + done}`
            :
            done > 0 ?
              'Everything is completed. yay!'
              :
              'No Todos!'
        }
      />
      <Divider />
    </>
  );
}