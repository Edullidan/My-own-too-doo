//import "./App.css";

import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  const appTodo = {
    textAlign: "center",
  };
  const bodyStyle = {
    backgroundColor: "#72045a",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={bodyStyle} className='App' const appTodo={appTodo}>
      <TodoWrapper />
    </div>
  );
}

export default App;
