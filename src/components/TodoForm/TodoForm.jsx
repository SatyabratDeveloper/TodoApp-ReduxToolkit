import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!todoText) return;
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-7/12 2xl:w-6/12 text-center mt-10"
    >
      <h1 className="text-3xl font-bold text-[#424874] py-10">Todo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="px-6 py-3 w-3/5 font-medium bg-[#DCD6F7] rounded-md outline-none mr-1"
      />
      <button className="bg-[#424874] font-medium text-white px-7 py-3 rounded-md">
        ADD
      </button>
    </form>
  );
};
export default TodoForm;
