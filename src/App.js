import Todo from "./components/Todo";
import PingComponent from "./components/PingComponent";

function App() {
  return (
    <div>
      <h1>Vaarini's Today's Todos!!</h1>
      <Todo text='Learn react'/>
      <Todo text='Setup postgres'/>
      <Todo text='Update progress to Ludwig'/>
      <PingComponent text='Ping umbau server'/>
  </div>

  );
}

export default App;
