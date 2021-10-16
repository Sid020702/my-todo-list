import React from "react";
import { Link } from "react-router-dom";
const AboutPage = () => (
    <div className="jumbotron">
        <h1 className="display-4">About this app</h1>
        <p className="lead">This is a todo list like any other wherein you can add, delete and strike the todos (once done) to make your day productive and keep you organised.</p>
        <hr className="my-4" />
        <p>It is a project built using React framework and the basics of web development.</p>
        <Link to='/' className="btn btn-primary btn-lg" href="#" role="button">Start making your todo list!</Link>
    </div>
)

export default AboutPage;