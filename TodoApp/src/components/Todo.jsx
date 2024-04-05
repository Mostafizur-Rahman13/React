import React from 'react'

const Todo = (props) => {

  const { tittle, desc } = props.todo;
  const { id } = props;

  const handleClick = () => {
    props.onRemoveItem(id)
  }

  return (
    <article className='flex justify-between gap-5 items-center p-4 my-2 bg-slate-700 rounded-lg ' >

      <div>

        <h3 className='text-green-500'>
          {tittle}</h3>

        <p>{desc}</p>

      </div>

      <div>

        <button onClick={handleClick}>
          <i className='text-red-500 fa fa-trash fa-2x'></i>
        </button>

      </div>

    </article>
  )
}

export default Todo