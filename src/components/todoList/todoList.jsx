import React from 'react'

const TodoList = () => {
  return (
    <div className='mt-5'>
        <h2 className='text-center'>Todolist</h2>

        <div className='d-flex gap-4 justify-content-between'>
        {['All', 'Done', 'ToDo'].map( btn => {
            return <button key={btn} className='w-25 btn btn-info'>{btn}</button>
        } )}
        </div>
    </div>
  )
}

export default TodoList