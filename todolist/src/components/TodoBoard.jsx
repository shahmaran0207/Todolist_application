import React from "react";
import TodoItem from "./TodoItem.jsx";

function TodoBoard(props) {
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item, index) => (
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    deleteItem={props.deleteItem}
                />
            ))}
        </div>
    );
}

export default TodoBoard;
