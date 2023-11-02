import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todosSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <li className="shadow-sm bg-gray-200 px-2 py-2  text-black rounded-md flex my-1 w-full items-center justify-between">
      <p>{title}</p>
      <div>
        <button
          className="shadow-sm bg-red-500 hover:bg-red-700 border border-red-500 text-white font-bold text-sm py-1 px-2 rounded-md"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
