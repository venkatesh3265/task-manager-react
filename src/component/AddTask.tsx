import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Taskslice";

const AddTask = () => {
  const [newTask, setNewTask] = React.useState("");
  const dispatch = useDispatch()
  function onsubmit() {
    dispatch(addTask(newTask))
    setNewTask('')
  }
  return (
    <div className="flex flex-col m-2 p-2 items-center justify-center border border-black  ">
      <input
        type="text"
        className="m-2 border border-black rounded p-1"
        placeholder="Enter task name"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-1 rounded-lg" onClick={onsubmit}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
