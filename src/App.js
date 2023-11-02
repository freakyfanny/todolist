import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
	return (
		<div className="app flex flex-col items-center pt-4">
			<h1 className="text-xl p-2">My Tasks</h1>
      <div className="flex flex-col">
			<AddTodo />
			<Todos />
      </div>
		</div>
	);
};

export default App;
