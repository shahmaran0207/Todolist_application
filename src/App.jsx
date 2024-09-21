import { useState } from 'react'
import './App.css'
import TodoBoard from "./components/TodoBoard.jsx";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addItem = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue(''); // 입력 필드를 비우기
    };

    const deleteItem = (index) => {
        const newTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(newTodoList);
    };

    return (
        <main>
            <div className="input-container">
                <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} />
                <button onClick={addItem}>추가</button>
            </div>

            <div className="todo-list-container">
                <TodoBoard todoList={todoList} deleteItem={deleteItem} />
            </div>
        </main>
    );
}

export default App;
