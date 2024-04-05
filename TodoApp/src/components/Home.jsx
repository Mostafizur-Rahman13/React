import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from "uuid";

// const dummyTodos = [
//   {
//     id: 1,
//     tittle: "todo tittle 1",
//     desc: "todo1 description here..."

//   },
//   {
//     id: 2,
//     tittle: "todo tittle 2",
//     desc: "todo1 description here..."

//   }
// ];



const Home = () => {

  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }]
    });
  }

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const removefilter = prevTodos.filter((todo) => todo.id !== id)
      return removefilter;
    })
  }


  return (
    <div className='h-screen w-4/5 mx-auto flex justify-center items-center text-white bg-slate-800 flex-col '>

      <h1 className='text-white text-2xl'> Todo App </h1>

      <NewTodo onAddTodo={handleAddTodo} />

      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home