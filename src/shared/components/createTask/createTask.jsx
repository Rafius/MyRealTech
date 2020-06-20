import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {insertData} from '../../db/utils';

const CreateTask = () => {
  useEffect(() => {}, []);
  const create = () => {
    insertData('tasks', {taskName: 'test', description: 'description'});
  };
  return (
    <div>
      createTask
      <button onClick={create}>Create task</button>
      <Link to="/"> List Task</Link>
    </div>
  );
};

export default CreateTask;
