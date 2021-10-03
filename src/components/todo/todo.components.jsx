import React from "react";
import "./todo.styles.css";
class Todo extends React.Component {
    constructor() {

        super()
    }





    handleCheck = () => {
        const { desc } = this.props
        const content = document.getElementById(desc)
        content.classList.toggle('striked')


    }

    handleClick = () => {
        let { desc, deleteTodo } = this.props
        deleteTodo(desc)

    }
    render() {
        return (
            <div className='mt-4' id={this.props.desc}>
                <h5>{this.props.title}</h5>
                <p >{this.props.desc}</p>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={this.handleCheck}></input>
                    <label className="form-check-label">Done</label>
                </div>
                <button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}


export default Todo;