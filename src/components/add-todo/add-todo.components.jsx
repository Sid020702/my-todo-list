import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            class: false
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);


    }

    render() {
        return (
            <form className="mt-4 ml-5 w-75 p-3" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <h3 className=" my-10">Add a todo</h3>
                    <label className="form-label">Todo Title</label>
                    <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={this.handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Todo Description</label>
                    <input type="text" name="desc" className="form-control" id="exampleInputPassword1"
                        onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}






export default AddTodo;