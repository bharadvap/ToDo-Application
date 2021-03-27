import React from "react";
import plusIcon from "../../assets/image/plus-solid.svg";
import crossIcon from "../../assets/image/times-solid.svg";

const TodoList = ({
  todoList,
  deleteTodo,
  updateList,
  markedAsDone,
  checkAllisChecked,
}) => {
  return (
    <div className="to-do-list">
      <h1 className={"green-color"}>Task List</h1>
      <div className="row">
        {todoList &&
          todoList.data &&
          todoList.data.length > 0 &&
          todoList.data.map((todo, index) => {
            return (
              <div key={index} className="col-sm-6">
                <div
                  className="todo-content p-4 mb-3"
                  style={
                    checkAllisChecked(todo.subTask)
                      ? { background: "#E77C7F" }
                      : {}
                  }
                >
                  <div className="todo-title">
                    <div className="d-flex justify-content-between pb-2">
                      <span className={"green-color"}>{todo.title}</span>
                      <div className="todo-actions">
                        <img
                          src={plusIcon}
                          onClick={(e) => updateList(index, todo)}
                        />
                        <img
                          src={crossIcon}
                          onClick={(e) => deleteTodo(index)}
                        />
                      </div>
                    </div>
                    <div className="todo-desctiption">{todo.description}</div>
                    <hr />
                    <div className="todo-subtask">
                      {todo &&
                        todo.subTask &&
                        todo.subTask.length > 0 &&
                        todo.subTask.map((sub, subIndex) => {
                          return (
                            <div className="subtask" key={subIndex}>
                              <input
                                type="checkbox"
                                onClick={(e) =>
                                  markedAsDone(index, subIndex, e)
                                }
                                defaultChecked={sub.isDone ? true : false}
                              />{" "}
                              {sub.text}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default TodoList;
