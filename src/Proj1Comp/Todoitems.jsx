import React, { useContext } from "react";
import ToDoitem from "../../src/Proj1Comp/ToDoitem";
import { TodoitemsContext } from "../Proj1store/todo-items-store";
export default function Todoitems() {
  // const contextObj = useContext(TodoitemsContext);
  // const todoitems = contextObj.todoitems;or:
  const { todoitems } = useContext(TodoitemsContext);
  // It's called object destructuring.
  return (
    <>
      <div className="items-container" style={{ textAlign: "left" }}>
        {todoitems.map((item) => (
          <ToDoitem
            key={item.name}
            todoName={item.name}
            todoDate={item.duedate}
            // onDeleteClick={deleteItem} when we're using context so directly we'll use it in Todoitem instead of passing as a Prop
          />
        ))}
      </div>
      {/* onDeleteClick is passed from parent to child  */}
    </>
  );
}
