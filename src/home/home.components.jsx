import React from "react";
import AddTodo from "../components/add-todo/add-todo.components";
import TodoList from "../components/todo-list/todo-list.components";
class HomePage extends React.Component {
    constructor() {
        super()
        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            todos: []
        }
    }
    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }





    addTodo = (state) => {
        let { todos } = this.state;
        if (todos.includes(state)) {
            alert('This todo is already in the list!')

        }
        else {
            todos.push(state)
            this.setState({ todos: todos })
        }

    }

    deletetodo = (description) => {
        let { todos } = this.state;
        const todoToDelete = todos.find(todo => todo.desc == description)
        const index = todos.indexOf(todoToDelete);
        todos.splice(index, 1)
        this.setState({ todos: todos })

    }

    strikeTodo = (description) => {
        let { todos } = this.state;
        const todoToStrike = todos.find(todo => todo.desc == description)
        const classname = todoToStrike.class;
        const index = todos.indexOf(todoToStrike);
        const newTodo = { ...todoToStrike, class: !classname }
        todos.splice(index, 1)
        todos.splice(index, 0, newTodo)
        this.setState({ todos: todos })
    }

    render() {
        return (
            <div className='homepage'>
                <h1 className="text-center">Todo list by Sid</h1>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} deleteTodo={this.deletetodo} strikeTodo={this.strikeTodo} />
            </div>)
    }
}



export default HomePage;