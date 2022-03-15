import http from "../services/httpService";
const baseApi = "http://ho-todo.herokuapp.com/api/todos";

export function getTodos() {
  return http.get(baseApi).then((data) => data.data);
}

export function getTodosByStatus(status) {
  return http.get(baseApi, { status }).then((data) => data.data);
}

export function getById(id) {
  return http.get(baseApi / `${id}`);
}

export function updateTodoStatus(todo) {
  let status_to_update = todo.state === "undone" ? "done" : "undone";
  let to_update = todo.id;
  return http.put(
    `${baseApi}/${to_update}`,
    { state: status_to_update },
    { headers: { "content-type": "application/json" } }
  );
}

export function addNewTodo(todo) {
  return http.post(baseApi, todo);
}

export function deleteTodo(todoId) {
  return http.delete(`${baseApi}/${todoId}`);
}
