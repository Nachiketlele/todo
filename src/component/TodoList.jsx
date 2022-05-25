import React, {useState} from 'react'

import Style from "./Todo.module.css"



const TodoList = ({todo}) => {
  const [Completed,setCompleted] = useState(false)
  return (
    <div >
           <div  className={Style.child} >
           <p className= {Completed? Style.che:"" } > {todo} </p>
         
            <input type="checkbox"className={Style.radio} checked={Completed} onChange={(e)=>setCompleted(e.target.checked)} />
           </div>

    </div>
  )
}

export default TodoList