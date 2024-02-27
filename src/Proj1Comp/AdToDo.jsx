import React, { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoitemsContext } from "../Proj1store/todo-items-store";

export default function AdToDo() {
  const { addNewItem } = useContext(TodoitemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddbuttonClicked = (event) => {
    const TodoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(TodoName, dueDate);
  };
  return (
    <>
      {" "}
      <div className="container text-center" style={{ marginBottom: "30px" }}>
        <form className="row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter to do here"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} style={{ width: "100%" }} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={handleAddbuttonClicked}
            >
              <MdAddBox />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
