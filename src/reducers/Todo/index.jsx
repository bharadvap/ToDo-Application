import { ADD_TODO, UPDATA_TODO_LIST, DELETE_TODO } from "../../redux/type";

export default function todoReducer(
  state = {
    todoList: {
      data: [],
    },
  },
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todoList: {
          ...state.todoList,
          data: [...state.todoList.data, action.data],
        },
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todoList: {
          ...state.todoList,
          data: state.todoList.data.splice(action.data, 1),
        },
      });
    case UPDATA_TODO_LIST:
      return Object.assign({}, state, {
        todoList: {
          ...state.todoList,
          data: action.data,
        },
      });
    default:
      return state;
  }
}
