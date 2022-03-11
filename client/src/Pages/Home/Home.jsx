import "./home.scss"
import {useState,useRef,useEffect} from "react"
import { useSelector } from "react-redux";
import axios from "axios";


function Home() {

  const [editing, setEditing] = useState(false)
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const taskref = useRef(null)

  const { currentUser } = useSelector((state) => state.user);
const BASE_URL = window.location.hostname === "localhost" ? "http://localhost:8800/api" 
: "https://to-do-yy.herokuapp.com/api";



  //--- functions ---

  // get all tasks
  useEffect(()=>{
try {
  const allTasks =async ()=>{
    const data = await axios.get(`${BASE_URL }/task/all/${currentUser.username}`)
    setTasks(data.data)
  }
  allTasks()
} catch (error) {
  console.log(error)
}
  },[BASE_URL,currentUser.username])

  // add a task
  const handleSubmit = async(e)=>{
    e.preventDefault()
   try {
    const myTask = await axios.post(`${BASE_URL }/task`,{task,username:currentUser.username})
    setTasks([...tasks,myTask.data])
     setTask("")
     setEditing(false)
   } catch (error) {
     console.log(error)
     
   }
      }
        // delete task
  const handleDelete =async (id)=>{
    
    try {
      await axios.delete(`${BASE_URL }/task/${id}`)
      const newTasks = tasks.filter((item)=>{
        return item._id !== id
      })
      setTasks(newTasks)
     } catch (error) {
       console.log(error)
       
     }
  }
   // edit task
   const handleEdit = (id)=>{
    setEditing(true)
   const myTask = tasks.filter((item)=>{
     return item._id === id
   })
   handleDelete(id)

  setTask(myTask[0].task)
  taskref.current.focus()
  }
  return (
    <div className="App">
      <h1 className="title">Text Management</h1>
    <form className="head" onSubmit={handleSubmit}>
      <div className="input-feel">
        <input required type="text" ref={taskref}
         placeholder="What do you have planned" value={task}
          onChange={(e)=>setTask(e.target.value)}  className="input" />
        <input type="submit" value={editing ? "edit":"Add Task"} className="submit-btn" />
      </div>
    </form>
    <main>
        <div className="tasks">
            <h1 className="tasks-header">Tasks</h1>
                {tasks.map((task)=>{
                  return <div key={task._id} className="task">
                  <p className="todo">{task.task}</p>
                <div className="actions">
                    <button className="btn edit" onClick={()=>handleEdit(task._id)}>Edit</button>
                    <button className="btn delete" onClick={()=>handleDelete(task._id)}>Delete</button>

                </div>
            </div>
                })}
        </div>
    </main>
    </div>
  );
}

export default Home;