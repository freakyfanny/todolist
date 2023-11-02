import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const markAsDone = (e) => {
    dispatch(
		toggleTodo({
        id: id,
		status: e.target.checked,
      })
    );
  };

  return (
    <li className="px-1 py-1 dark:text-white text-black flex w-full items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md">
	<input className="hidden" type="checkbox" id="task_1" checked={completed} onChange={(e) => {markAsDone(e);}} />
	<label className="flex items-center h-10 rounded cursor-pointer" htmlFor="task_1">
		<span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full dark:border-gray-500">
			<svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
			</svg>
		</span>
		<span className="ml-4 text-sm">{title}</span>
	</label>	
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
