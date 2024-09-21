import React from "react";
import TodoItem from "./TodoItem.jsx";

function TodoBoard(props) {
    return (
        <div>
            <h1 className="todo-list-title">Todo List</h1> {/* 클래스 추가 */}
            {props.todoList.map((item, index) => (
                <TodoItem key={index} item={item} deleteItem={() => props.deleteItem(index)} />
            ))}
        </div>
    );
}

export default TodoBoard;
