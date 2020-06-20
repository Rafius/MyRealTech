import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getData} from '../../db/utils';
import {TaskListWrapper} from './taskList.styled';
import Task from './task';
import Pagination from '../pagination';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(10);
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = getData('tasks', setTasks);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    chunkArray();
  }, [tasks, size, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [tasks, size]);

  const chunkArray = () => {
    const tempArray = [];
    for (let index = 0; index < tasks?.length; index += size) {
      tempArray.push(tasks.slice(index, index + size));
    }
    console.log(tempArray[currentPage - 1]);
    setCurrentTasks(tempArray[currentPage - 1]);
  };

  return (
    <TaskListWrapper>
      <Task tasks={currentTasks} />
      <Pagination
        size={size}
        setSize={setSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationCount={tasks?.length}
      />

      <Link to="/create-task">Create a new Task</Link>
    </TaskListWrapper>
  );
};

export default TaskList;
