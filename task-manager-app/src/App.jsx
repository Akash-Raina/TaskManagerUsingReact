import { useState } from 'react'
import { TaskOperation } from './components/TaskOperation';
import { IoAddCircle } from "react-icons/io5";
import './App.css'


function App() {
  const [newTask, setNewTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const takeUserInput = (event) =>{
    setNewTask(event.target.value);
  };

  const setList = () =>{
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList.length + 1,
      taskName: newTask,
      boolValue: false
    }
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) =>{

    setToDoList(toDoList.filter((taskName) =>
      taskName.id !== id
    ));
  }

  const updateTask = (id) =>{
    setToDoList(toDoList.map(value =>{
      if(value.id === id){
        return {...value, boolValue : true};
      }
      else{
        return value;
      }
    }))
  }

  return (
    <>
      <h1 className='m-5 text-black font-bold text-3xl'>Todo List</h1>
      <div className='flex gap-2 borderS mx-6 rounded-md bg-white h-9 items-center'>
        <input type="text" placeholder='Enter your task here' className='rounded-md outline-none w-[87%] mx-2' onChange={takeUserInput}/>
        <button className=' bg-white w-10 flex items-center hover:scale-110' onClick={setList}> 
          {<IoAddCircle size={28}/>}
        </button>
      </div>
      <div>
        <h2 className='m-5 text-green-500 border-b font-bold text-3xl'>All Tasks</h2>
        {
          toDoList.map((task) =>{
            return(
            <TaskOperation
              taskName = {task.taskName} 
              id = {task.id} 
              boolValue = {task.boolValue}
              updateTask ={updateTask}
              deleteTask = {deleteTask}
            />
            )
          }) 
        }
      </div>
    </>
  )
}

export default App
