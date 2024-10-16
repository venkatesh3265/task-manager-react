import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import Card from "./component/Card";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "./redux/Taskslice";

function App() {
  
  const dispatch = useDispatch();
  const task = useSelector((state)=> state?.task?.tasks);
  const fetchTask = async () =>{
    const task = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await task.json();
    dispatch(getTask(data));

  }

  useEffect(()=>{
     fetchTask()
  },[])

  return (
    <>
      <div className="m-5 p-5">
        <AddTask />
      <div className="flex m-2 p-5 flex-wrap">
      {task.map((item)=>{
        return <Card key={item.id} item={item} />
       })

       }

      </div>
       
      
      </div>
    </>
  );
}

export default App;
