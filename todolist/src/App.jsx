import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [inputValue,setInputValue]=useState('')

    const[todoList, SetTodoList]=useState([])

    const addItem=()=>{
        SetTodoList([...todoList, inputValue])
    }

  return (
      <main>
          <input value={inputValue} type="text" onChange=
              {(event)=>setInputValue((event.target.value))}/>
          <button onClick={addItem}>추가</button>
      </main>

  );
}

export default App
