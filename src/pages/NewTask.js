import Header from "../components/Header";
import Meta from "../components/Meta";

const NewTask = () => {
  // page content
  const pageTitle = "New Task";
  const pageDescription = "Add a new Task";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      <form>
        <div className="justify-content-center">
          <div class="form-group my-3">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="name of the todo"
            />
          </div>

          <div class="form-group my-3">
            <label for="exampleFormControlTextarea1">Activity</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group my-3">
            <label for="date">Dateline:</label>
            <input
              type="date"
              class="form-control"
              id="date"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
