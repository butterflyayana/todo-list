import React from 'react'

const Todolistitem = (props) => {
  const {deleteTodo,doneTask, id, isDone} = props
  const textStyle = {
    textDecoration: isDone ? 'line-through' : 'none',
    color: isDone ? 'red' : 'inherit'
  };

  return (
    <li className='d-flex gap-4 justify-content-between item'>
        <span style={textStyle}>
            {props.text}
        </span >
        <span className='d-flex align-items-center gap-3 '>
            <input checked={isDone} onChange={(e) => {
              console.dir(e.target.checked); doneTask(id)
            }} className='form-check-input is-valid' type="checkbox" />
            <button className='btn btn-warning'><i className="bi bi-pen"></i></button>
            <button className='btn btn-danger' onClick={() => {deleteTodo(id)}}><i className="bi bi-trash3"></i></button>
        </span>
    </li>
  )
}

export default Todolistitem