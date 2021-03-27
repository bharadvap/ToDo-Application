import React, { useState } from "react";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import "./style.css";
const TodoComponent = ({
  addTodo,
  todoList,
  updateList,
  deleteTodo,
  markedAsDone,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [errorData, setErrorData] = useState({
    title: "",
  });

  const handleOnChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    let title,
      description = "";
    if (formData && formData.title === "") {
      title = "Please enter title";
    } else {
      title = "";
    }

    if (title) {
      setErrorData({
        ...errorData,
        title: title,
      });
    } else {
      setErrorData({
        title: "",
      });
      addTodo(formData);
      setFormData({
        title: "",
        description: "",
      });
    }
  };

  const checkAllisChecked = (data) => {
    let isDone;
    let dataArray = [];
    data.map((sub) => {
      dataArray.push(sub.isDone);
      if (dataArray.includes(false)) {
        isDone = false;
      } else {
        isDone = sub.isDone;
      }
    });
    return isDone;
  };

  return (
    <>
      <hr />
      <TodoForm
        handleOnChanges={handleOnChanges}
        formData={formData}
        errorData={errorData}
        handleOnSubmit={handleOnSubmit}
      />
      <hr />
      <TodoList
        todoList={todoList}
        updateList={updateList}
        deleteTodo={deleteTodo}
        markedAsDone={markedAsDone}
        checkAllisChecked={checkAllisChecked}
      />
    </>
  );
};
export default TodoComponent;
