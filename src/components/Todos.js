import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const Todos = () => {
	const todos = useSelector((state)=>{
		return state.todos;
	});

	return (
		<ul className="flex flex-col justify-center items-center">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default Todos;
