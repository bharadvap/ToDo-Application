import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoComponent from "../../components/TodoComponent";
import { ADD_TODO, UPDATA_TODO_LIST } from "../../redux/type";
const TodoContainer = (props) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todoReducer);
  const addTodo = (data) => {
    let todoData = { ...data };
    todoData.subTask = [];
    dispatch({
      type: ADD_TODO,
      data: todoData,
    });
  };

  const deleteTodo = (index) => {
    let todoListData = [...todoList.data];
    todoListData.splice(index, 1);
    dispatch({
      type: UPDATA_TODO_LIST,
      data: todoListData,
    });
  };

  const updateList = (index, data) => {
    let todoListData = [...todoList.data];
    let todoData = { ...todoList.data[index] };
    if (!todoData.subTask) {
      todoData.subTask = [];
    }
    let subTaskData = {
      text: `${data.title} Checklist ${todoData.subTask.length + 1}`,
      isDone: false,
    };
    todoData.subTask = [...todoData.subTask];
    todoData.subTask.push(subTaskData);
    todoListData[index] = todoData;
    dispatch({
      type: UPDATA_TODO_LIST,
      data: todoListData,
    });
  };

  const markedAsDone = (index, dataIndex, e) => {
    let todoListData = [...todoList.data];
    let todoData = { ...todoList.data[index] };
    let subTaskList = [...todoData.subTask];
    let subTaskData = { ...subTaskList[dataIndex] };
    subTaskData.isDone = e.target.checked;
    subTaskList[dataIndex] = subTaskData;
    todoData.subTask = subTaskList;
    todoListData[index] = todoData;
    dispatch({
      type: UPDATA_TODO_LIST,
      data: todoListData,
    });
  };

  return (
    <TodoComponent
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      todoList={todoList}
      updateList={updateList}
      markedAsDone={markedAsDone}
    />
  );
};
export default TodoContainer;
