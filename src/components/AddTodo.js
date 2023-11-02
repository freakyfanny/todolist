import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a todo before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTodo({
        todo: value,
      })
    );

    setValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <div className="flex items-center justify-center align-middle my-2">
      <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
        <svg
          class="w-5 h-5 text-gray-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <input
          class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={handleKeyPress}
          type="text"
          placeholder="add a new task"
        />
      </button>

      <button
        className="shadow-sm bg-blue-500 dark:bg-purple-500 hover:bg-blue-700 dark:hover:bg-purple-700 border dark:border-purple-300 border-sky-500 text-white font-bold text-sm py-1 px-2 mr-2 rounded-md"
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
