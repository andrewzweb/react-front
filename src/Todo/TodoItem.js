import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../context'


function TodoItem({todo, index, onChange}){
  const {removeTodo} = useContext(Context)
  const classes = []

  if (todo.completed){
    classes.push('doneTodo')
  }
  
  return (
    <li >
      <span key={index} className={classes.join(' ')}>
        <input className='custom-checkbox'
               type="checkbox"
               defaultChecked={ todo.completed ? 'cheked' : ''}
               onChange={() => onChange(todo.id)}/>
        <strong>{ index }</strong>
        { todo.title }
      </span>
      <button className='removeButton'
              onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
