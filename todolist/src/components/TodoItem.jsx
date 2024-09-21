import React from "react";
import { FaTrash } from 'react-icons/fa';

function TodoItem(props) {
    return (
        <div className="todo-item">
            {props.item}
            <button onClick={() => props.deleteItem(props.index)}>
                <FaTrash /> 삭제
            </button>
        </div>
    );
}

export default TodoItem;
