import Header from "../components/Header";
import Meta from "../components/Meta";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { addNewTodo } from "../services/todo";

const NewTask = () => {
  // page content
  const pageTitle = "New Task";
  const pageDescription = "Add a new Task";

  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [dateline, setDateline] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleDatelineChange = (event) => {
    setDateline(event.target.value);
  };

  const handleAdd = (todo) => {
    addNewTodo(todo).then(() => {
      toast("Todo successfully added!");
      window.location.href = "/";
    });
  };

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd({ name, activity, dateline });
        }}
      >
        <div className="justify-content-center">
          <div class="form-group my-3">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="name of the todo"
              required
              onChange={handleNameChange}
              value={name}
            />
          </div>

          <div class="form-group my-3">
            <label for="exampleFormControlTextarea1">Activity</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleActivityChange}
              value={activity}
            ></textarea>
          </div>

          <div class="form-group my-3">
            <label for="date">Dateline:</label>
            <input
              type="date"
              class="form-control"
              id="date"
              required
              onChange={handleDatelineChange}
              value={dateline}
            />
          </div>
        </div>

        <input type="submit" class="btn btn-primary" value="Create" />
      </form>
    </div>
  );
};

export default NewTask;
