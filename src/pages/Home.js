import Header from "../components/Header";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {toast} from 'react-toastify';
import { deleteTodo, getTodos, updateTodoStatus } from "../services/todo";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(0);
  const [productivityScore, setProductivityScore] = useState([]);

  useEffect(() => {
    getTodos().then((items) => {
      setTodos(items.data.todos);
      setProductivityScore(items.data.productivity_score);
    });
  }, [updated]);


  const handleAdd = () => {

  }

  const handleUpdate = (todo) => {
    setUpdated(1);
    updateTodoStatus(todo).then(() =>{
      toast("Todo successfully updated!");
      setTimeout( window.location.reload(), 1000 );
    }); 
  }

  const handleDelete = (todo_id) => {
    setUpdated(1);
    deleteTodo(todo_id).then(() =>{
      toast("Todo successfully deleted!");
      setTimeout( window.location.reload(), 1000 );
    }) 
  }

  // page content
  const pageTitle = "Todo App";
  const pageDescription =
    "welcome to todo App where you can track your productivity";

  return (
    <React.Fragment>
      <ToastContainer />
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      
      <Link
          to="/new"
          className=""
        >
          <button className="btn btn-primary" >
          Add New Task
          </button>
        </Link>
       

        <div className="text-right my-3">
          <h4> Productivity Score: {productivityScore}</h4>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Activity</th>
              <th>State</th>
              <th>Dateline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.activity}</td>
                <td>{todo.state}</td>
                <td>{todo.dateline}</td>
                <td>
                  <button
                    className="btn `${ todo.state == 'undone' ? 'btn-warning': 'btn-info'}` btn-info btn-sm mx-2"
                    onClick={() => {
                      handleUpdate(todo)
                      setUpdated(1);
                    }}
                  >
                    { todo.state == 'undone' ? 'Mark as Done': 'Mark as not done'}
                  </button>

                  <button
                    className=" btn btn-danger btn-sm mx-2"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </React.Fragment>
  );
};

export default Home;
