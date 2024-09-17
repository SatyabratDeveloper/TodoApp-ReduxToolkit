import { TodoForm, TodoList } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-[#F4EEFF]">
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
