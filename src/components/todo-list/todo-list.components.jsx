import React from "react";
import Todo from "../todo/todo.components";
const TodoList = ({ todos, deleteTodo }) => (
    <div className="mt-4 ml-5 w-75 p-3">
        <h4>Your Todos</h4>
        {
            todos.length > 0 ?
                todos.map((todo) => (
                    <Todo key={todo.desc} desc={todo.desc} title={todo.title} deleteTodo={deleteTodo} />
                )) :
                (<span>No Todos to display.</span>)
        }
    </div>
)

export default TodoList;