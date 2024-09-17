import { useState } from "react";
import {
  MdEdit,
  MdClose,
  MdSave,
  MdOutlineCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  updateTodo,
  updatePriority,
  updateCompleteStatus,
  removeTodo,
} from "../../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);

  const dispatch = useDispatch();

  const changeCompleted = () => {
    dispatch(updateCompleteStatus(todo.id));
  };

  const updateTodoText = () => {
    setIsEditable((prev) => !prev);
    if (isEditable) {
      dispatch(updateTodo({ id: todo.id, text: todoText }));
    }
  };

  const changeTodoPriority = () => {
    const priority =
      todo.priority === "Low"
        ? "Medium"
        : todo.priority === "Medium"
        ? "High"
        : "Low";

    dispatch(updatePriority({ id: todo.id, priority }));
  };

  return (
    <div className="flex items-center gap-1 bg-[#424874] px-4 sm:px-7 md:px-10 py-2 sm:py-4 md:py-6 rounded-lg mb-2">
      <button
        onClick={changeCompleted}
        className="text-xl sm:text-2xl md:text-3xl text-[#F4EEFF] hover:text-[#DCD6F7]"
      >
        {todo.complete ? <MdCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </button>
      <input
        type="text"
        disabled={!isEditable}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className={`w-full min-w-20 px-4 py-2 rounded-md outline-none bg-[#424874] text-xs sm:text-base text-white font-medium ${
          isEditable ? "bg-[#DCD6F7] text-[#424874]" : ""
        }`}
      />
      <button
        onClick={updateTodoText}
        disabled={todo.complete}
        className={`min-h-7 min-w-8 sm:min-h-9 sm:min-w-10 md:min-h-10 md:min-w-12 bg-[#A6B1E1] text-[#424874] rounded-md disabled:opacity-50 ${
          !todo.complete ? "hover:bg-[#DCD6F7] text-[#424874]" : ""
        }`}
      >
        {isEditable ? (
          <MdSave className="m-auto" />
        ) : (
          <MdEdit className="m-auto" />
        )}
      </button>
      <button
        onClick={changeTodoPriority}
        disabled={todo.complete}
        className={`min-h-7 min-w-16 sm:min-h-9 sm:min-w-20 md:min-h-10 md:min-w-20 text-xs font-semibold sm:font-bold rounded-md disabled:opacity-50 ${
          todo.priority === "High"
            ? "bg-red-300 hover:bg-red-400"
            : todo.priority === "Medium"
            ? "bg-yellow-200 hover:bg-yellow-300"
            : "bg-green-300 hover:bg-green-400"
        }`}
      >
        {todo.priority}
      </button>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="min-h-7 min-w-8 sm:min-h-9 sm:min-w-10 md:min-h-10 md:min-w-12 bg-[#A6B1E1] text-[#424874] hover:bg-red-400 hover:text-white rounded-md"
      >
        <MdClose className="m-auto" />
      </button>
    </div>
  );
};
export default TodoItem;
