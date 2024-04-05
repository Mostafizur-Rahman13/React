import React from 'react'
import Todo from './Todo'

const Todos = (props) => {

  return (
    <section className='h-2/5 w-11/12  px-10'>

      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveItem={props.onRemoveTodo} />
      ))}

    </section>
  )
}

export default Todos