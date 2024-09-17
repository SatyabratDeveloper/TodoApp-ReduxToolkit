import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-11/12 sm:w-10/12 md:w-8/12 xl:w-7/12 2xl:w-6/12 text-center pb-12">
      <h2 className="text-left mt-12 mb-5 text-xl text-[#424874] font-bold">
        Todos
      </h2>
      {todos.map((todo) => {
        if (!todo.complete) {
          return (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          );
        }
      })}

      <h2 className="text-left mt-12 mb-5 text-xl text-[#424874] font-bold">
        Completed
      </h2>
      {todos.map((todo) => {
        if (todo.complete) {
          return (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          );
        }
      })}
    </div>
  );
};
export default TodoList;
