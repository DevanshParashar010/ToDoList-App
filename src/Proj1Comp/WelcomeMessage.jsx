import React, { useContext } from "react";
import { TodoitemsContext } from "../Proj1store/todo-items-store";
import styles from "./WelcomeMessage.module.css";
export default function WelcomeMessage() {
  // const contextObj = useContext(TodoitemsContext);
  // const todoitems = contextObj.todoitems;
  const { todoitems } = useContext(TodoitemsContext);
  return (
    <>
      {todoitems.length === 0 && (
        <p className={styles.welcome}>Enjoy Your Day</p>
      )}
    </>
  );
}
