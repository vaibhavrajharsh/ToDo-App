import { useState } from 'react'
import Navbar from './components/Navbar'
import editIcon from './assets/edit.svg'
import deleteIcon from './assets/delete.svg'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit = (index)=>{
    const newTodo = prompt('Edit your todo', todos[index].todo);
    if (newTodo) {
      const updatedTodos = [...todos];
      updatedTodos[index].todo = newTodo;
      setTodos(updatedTodos);
    }
  }

  const handleDelete = (index)=>{
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleAdd = ()=>{
    setTodos([...todos,{todo, isCompleted: false}])
    setTodo("")
   
  }

  return (
    <>
       <Navbar/>
      <div className="container mx-auto my-5 rounded-lg py-4 px-5  min-h-[80vh]">
        <div className="addtodo ">
          <h2 className="text-lg py-1 font-medium">Add a New Task</h2>
          <div className='flex items-center mx-1 w-[82vw]'>
          <input onChange={handleChange} value={todo} type="text" className='w-[76vw] h-10 bg- outline-none rounded-md p-1 my-2'placeholder='Add a task'/>
          <button onClick={handleAdd} className='bg-blue-700 px-4 h-10 rounded-md mx-2 text-sm font-bold'>Add</button>
          </div>
        </div>
        <div className='line h-px w-auto m-2 bg-white'></div>
        <h2 className='text-lg '>Your Todos</h2>
        <div className="todos flex flex-col-reverse">
          {todos.map((item, index)=>{

           return <div key={index} className="todo flex justify-between rounded px-2 m-1 w-[82vw]">
            <div className='flex'>
            <input type="checkbox" name="" id=""  />
            <div className="text m-2 w-auto">{item.todo}</div>
            </div>
            <div className="buttons flex">
              <img onClick={()=>handleEdit(index)} className='w-10 rounded-md p-2  cursor-pointer' src={editIcon} alt="Edit" />
              <img onClick={()=>handleDelete(index)} className='w-10 rounded-md p-2  cursor-pointer' src={deleteIcon} alt="Delete" />
              
            </div>
          </div>

          })}
          
        </div>
      </div>

    </>
  )
}

export default App
