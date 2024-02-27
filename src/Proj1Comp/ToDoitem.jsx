import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoitemsContext } from "../Proj1store/todo-items-store";

export default function ToDoitem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoitemsContext);
  return (
    <>
      {" "}
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => deleteItem(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
