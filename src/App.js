import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/navbar/navbar.components';
import AboutPage from "./about/about.components";
import AddTodo from './components/add-todo/add-todo.components';
import TodoList from './components/todo-list/todo-list.components';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }


    addTodo = (state) => {
        let { todos } = this.state;
        this.setState(() => (todos.push(state)))
        console.log(this.state)

    }

    deletetodo = (index) => {
        let { todos } = this.state;
        this.setState(() => (todos.splice(index, 1)))
        console.log(this.state)
    }



    render() {
        return (
            <div className="App">
                <Nav />
                <h1 className="text-center">Todo list by Sid</h1>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} deleteTodo={this.deletetodo} />
                <Switch>
                    <Route exact path='/about' component={AboutPage} />
                </Switch>
            </div>
        )
    }

}



export default App;
