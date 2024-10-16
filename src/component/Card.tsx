import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/Taskslice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="m-2 border p-3 w-[200px] h-[150px]">
      <span
        className="float-right p-0 cursor-pointer"
        onClick={() => dispatch(deleteTask(item.id))}
      >
        X
      </span>
    <h1 className="p-2">Title:<span className="font-bold">{item.title}</span> </h1>
      <p className="font-bold p-2">
        Completed: <span className={item.completed ? 'text-green-400':'text-red-500'}>{item.completed ? "done" : "No"}</span>
      </p>
    </div>
  );
};

export default Card;
