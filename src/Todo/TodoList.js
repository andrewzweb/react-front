import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'


function TodoList(props) {
  return (
    <ul>
      { props.todos.map((todo, index, onChange) => {
        return <TodoItem
                 todo={todo}
                 index={index + 1}
                 key={todo.id}
                 onChange={props.onToggle}
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
