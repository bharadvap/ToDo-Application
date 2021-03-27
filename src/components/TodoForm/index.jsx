import React from "react";
const TodoForm = ({ handleOnChanges, formData, errorData, handleOnSubmit }) => {
  return (
    <div className="todo-form row">
      <h1 className={"green-color"}>Add Task</h1>
      <div className="form-group row pb-3">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Task Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={(e) => handleOnChanges(e)}
            className="form-control"
            id="staticEmail"
          />
          {errorData && errorData.title && (
            <div className="error">{errorData.title}</div>
          )}
        </div>
      </div>
      <div className="form-group row pb-3">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Task Description
        </label>
        <div className="col-sm-10">
          <textarea
            onChange={(e) => handleOnChanges(e)}
            value={formData.description}
            name="description"
            className={"form-control"}
          ></textarea>
          {errorData && errorData.description && (
            <div className="error">{errorData.description}</div>
          )}
          <button
            className="btn btn-primary mt-2"
            onClick={(e) => handleOnSubmit(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoForm;
