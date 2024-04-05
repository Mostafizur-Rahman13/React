import React from 'react'
import { useState } from 'react';

const NewTodo = (props) => {

  const [todo, setTodo] = useState({ tittle: "", desc: "" })

  const { tittle, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ tittle: "", desc: "" })
  }



  return (
    <form onSubmit={handleSubmit} className='w-11/12  px-10  text-center bg-slate-900 rounded-lg my-5'>
      <div className='flex mt-2'>
        <label htmlFor="title"> Tittle  :</label>

        <input className='w-[74%] text-black h-8 rounded-lg ms-5' type="text" id='tittle' name='tittle'
          value={tittle} onChange={handleChange} />
      </div>

      <div className='flex align-center'>
        <label htmlFor="title"> Descre : </label>

        <textarea className='w-[74%] text-black h-20 rounded-lg mt-2 ms-2' type="text" id='desc' name='desc'
          value={desc} onChange={handleChange} />
      </div>

      <button className='bg-red-700 p-2 w-56 rounded-lg my-2'>Add</button>

    </form>
  )
}

export default NewTodo