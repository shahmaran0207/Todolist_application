//1. 인풋창 + 버튼
//2. 인풋창에 값 입력 -> 버튼 클릭 -> 아이템 추가
//3. 아이템 삭제 버튼 -> 삭제

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
            <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={addItem}>추가</button>

            <TodoBoard todoList={todoList} deleteItem={deleteItem} />
        </main>
    );
}

export default App;
