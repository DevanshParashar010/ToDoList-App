
import AdToDo from "../../src/Proj1Comp/AdToDo";

import Todoitems from "../../src/Proj1Comp/Todoitems";
import WelcomeMessage from "../../src/Proj1Comp/WelcomeMessage";
import TodoitemsContextProvider from "../../src/Proj1store/todo-items-store";



export default function Comp1() {
  
  

  return (
    <div>
      {" "}
      <TodoitemsContextProvider>
        <center className="todo-container">
          <h1>To do app</h1>
          <AdToDo />
          <Todoitems />
          <WelcomeMessage />
        </center>
      </TodoitemsContextProvider>
    </div>
  );
}
