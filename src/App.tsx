import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
    <h1>Todo List</h1>
      {todos.map((item, idx) => {
        <Todos nome={item.nome} id={idx}></Todos>
      })}
      <h3>slaa</h3>
    </>
  )
}

export default App
