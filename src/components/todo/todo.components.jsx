import React from "react";
import "./todo.styles.css";
class Todo extends React.Component {
    constructor() {

        super()
    }
    componentDidMount() {
        const { strikeTodo, desc } = this.props
        if (this.props.class) {
            document.getElementById(this.props.desc).click()
            strikeTodo(desc)
        }
    }



    handleCheck = () => {
        const { desc, strikeTodo } = this.props
        strikeTodo(desc);


    }

    handleClick = () => {
        let { desc, deleteTodo } = this.props
        deleteTodo(desc)

    }

    render() {
        return (
            <div className={`mt-4 ${this.props.class ? 'striked' : null}`}>
                <h5>{this.props.title}</h5>
                <p >{this.props.desc}</p>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id={this.props.desc} onClick={this.handleCheck}></input>
                    <label className="form-check-label">Done</label>
                </div>
                <button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}


export default Todo;