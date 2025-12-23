import './App.css'
import AddTasks from './Components/AddTasks'
import ListTask from './Components/ListTask'
import TaskProvider from './Context/Context'

function App() {
  return (
  <div className="min-h-screen w-full bg-white relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
<div className='absolute text-black flex items-center justify-center w-full'>
 <div>
    <TaskProvider>
    <h2>Add All of Your task</h2>
    <AddTasks />
    <ListTask />
   </TaskProvider>

 </div>
</div>
</div>
  )
}

export default App
