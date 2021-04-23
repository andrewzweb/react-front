import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import Loader from './Loader'


function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos)
        setLoading(false)
      }, 3000)
      //setTodos(todos)
    })
  }, [])
  
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      completed: false
    }]))
  }
  
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todos: </h1>
        <AddTodo onCreate={addTodo}/>

        { loading && <Loader/>}
        { todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}/>
        ) : loading ? null : (<h2 className='message'>No todos yet.. </h2>)}
      </div>
    </Context.Provider>
  )
}

export default App
