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

  return (
    <div className="flex items-center justify-center align-middle my-2">
      <input
        type="text"
        className="rounded-md block w-full py-2 px-4 mr-1 bg-white border border-black-900 text-sm shadow-md placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button
        className="shadow-sm bg-blue-500 hover:bg-blue-700 border border-sky-500 text-white font-bold text-sm py-2 px-4 rounded-md"
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
