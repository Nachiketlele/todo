import React, {useState} from 'react'
import TodoList from './TodoList'
import Style from "./Todo.module.css"

const Todo = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])


  const addTodos = (newTodos) =>{
    setTodos([...todos, newTodos])
  }
  return (
    <div >
        <h1>TODO LIST</h1>
        <div className={Style.parent}>
        {todos.map((todo)=>{
       return (
        <TodoList  todo={todo} />
       ) 
      })}
        </div>
        
        <input className={Style.in} placeholder='Write Something'
        value={value}
         onChange={(e)=>{
          setValue(e.target.value)
          }}/>



        <button className={Style.btn} onClick={()=>{
          addTodos(value)
          setValue("")
          }}>+</button>
       
    </div>
    
  )
}

export default Todo