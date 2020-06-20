import React from 'react';
import {deleteData} from '../../../db/utils';
import {TaskWrapper, TaskStyle, TaskDescription, TaskName} from './task.styled';

const Task = ({tasks}) => {
  const handleRemove = id => {
    deleteData('tasks', 'id', id);
  };
  return (
    <TaskWrapper>
      {tasks &&
        tasks.map(({id, description, taskName}) => (
          <TaskStyle key={id}>
            <TaskDescription>Description: {description}</TaskDescription>
            <TaskName>TaskName: {taskName}</TaskName>
            <TaskName>id: {id}</TaskName>
            <button onClick={() => handleRemove(id)}> Remove Task</button>
          </TaskStyle>
        ))}
    </TaskWrapper>
  );
};
export default Task;
