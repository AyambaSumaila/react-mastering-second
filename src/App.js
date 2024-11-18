import AddTask from "./components/AddTask";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


const App = () => {
  const [showAddTask, setShowAddTask] =useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study Node JS',
      day: 'March 10th at 11:00am',
      reminder: true,

    },

    {
      id: 2,
      text: 'Learn Coding',
      day: 'Jan 20th at 12:30am',
      reminder: true,

    },

    {
      id: 3,
      text: 'Study Database Management',
      day: 'Feb 20th at 10:30am',
      reminder: true,

    },

    {
      id: 4,
      text: 'Study Data Science',
      day: 'Feb 28th at 12:30am',
      reminder: true,

    },

    {
      id: 5,
      text: 'Doctors Appointment',
      day: 'Feb 4th at 12:30am',
      reminder: true,
    }

  ])

  const addTask=(task)=>{
    const id= Math.floor(Math.random() * 1000) + 1

    const newTask={id, ...task}
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id? { ...task, reminder:
         !task.reminder } : task))
  }

  return (
    <div className="container"> 
      <Header onAdd={()=>setShowAddTask
      (!showAddTask)} />

      {showAddTask &&  <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to Show"}
    </div>
  );
}

export default App;
