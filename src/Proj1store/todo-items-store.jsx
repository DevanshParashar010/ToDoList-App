import { createContext, useReducer } from "react";
  
export const TodoitemsContext = createContext({
  todoitems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// {todoitems:todoitems,addNewItem:addNewItem,deleteItem:deleteItem} yaha simple ye bhi likh sakte h{todoitems,addNewItem,deleteItem}
const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoitems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoitems = [
      ...currentTodoItems,
      { name: action.payload.itemName, duedate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoitems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoitems;
};
const TodoitemsContextProvider = ({ children }) => {
  const [todoitems, dispatchTodoitems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoitems(newItemAction);
  };
  const deleteItem = (todoitemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoitemName,
      },
    };
    dispatchTodoitems(deleteItemAction);
  };
  return (
    <TodoitemsContext.Provider
      value={{
        todoitems: todoitems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoitemsContext.Provider>
  );
};
export default TodoitemsContextProvider;
