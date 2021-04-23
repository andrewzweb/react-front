import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'


function TodoList({onToggle, todos}) {
  return (
    <ul>
      { todos.map(( todo, index ) => {
        return <TodoItem
                 todo={todo}
                 index={index + 1}
                 key={todo.id}
                 onChange={onToggle}
               />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
