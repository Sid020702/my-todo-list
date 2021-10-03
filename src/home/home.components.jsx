import React from "react";
import AddTodo from "../components/add-todo/add-todo.components";
import TodoList from "../components/todo-list/todo-list.components";
class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }



    addTodo = (state) => {
        let { todos } = this.state;
        if (todos.includes(state)) {
            alert('This todo is already in the list!')

        }
        else {
            this.setState(() => (todos.push(state)))
            console.log(this.state)
        }

    }

    deletetodo = (description) => {
        let { todos } = this.state;
        const todoToDelete = todos.find(todo => todo.desc == description)
        const index = todos.indexOf(todoToDelete)
        this.setState(() => (todos.splice(index, 1)))
        console.log(this.state)
    }

    render() {
        return (
            <div className='homepage'>
                <h1 className="text-center">Todo list by Sid</h1>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} deleteTodo={this.deletetodo} />
            </div>)
    }
}



export default HomePage;