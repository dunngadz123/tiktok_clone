import { useStore, actions } from "./Index2";

function App1() {
  const [state, distpath] = useStore();

  const { todos, todoInput } = state;

  const handleAdd = () => {
    distpath(actions.addTodo(todoInput));
  };
  return (
    <div>
      <input
        type="text"
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          distpath(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App1;
