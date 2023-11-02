import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const Todos = () => {
	const todos = useSelector((state)=>{
		return state.todos.todolist;
	});

	return (
		<ul className="flex flex-col justify-center items-center">
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default Todos;
