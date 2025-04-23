import React from 'react'
import { Todo } from "../model";
import { MdEdit, MdDelete, MdOutlineDone} from "react-icons/md";
import "./styles.css"
import TodoList from './TodoList';


type Props = {
	todo: Todo,
	todos: Todo[],
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo = ({todo,todos,setTodos}: Props) => {
	const handleDone = (id: number) => {
		setTodos(todos.map((todo)=>todo.id === id?{...todo,isDone:!todo.isDone} : todo))
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo)=>todo.id!==id));
	}
	return (
		<form className="todos_single">
			{todo.isDone ? (<s className="todos_single--text">{todo.todo}</s>): 
				(<span className="todos_single--text">{todo.todo}</span>)
			}
			<div>
				<span className="icon">
					<MdEdit />
				</span>
				<span className="icon" onClick={()=>handleDelete(todo.id)}>
					<MdDelete />
				</span>
				<span className="icon" onClick={()=>handleDone(todo.id)}>
					<MdOutlineDone />
				</span>
			</div>

		</form>
	)
}

export default SingleTodo