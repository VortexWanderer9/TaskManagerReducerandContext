import './App.css'
import AddTasks from './Components/AddTasks'
import ListTask from './Components/ListTask'
import TaskProvider from './Context/Context'

function App() {
  return (
  <div className="min-h-screen w-full bg-white relative">
  <div
    className="fixed inset-0 z-0"
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
 <div className='w-full'>
    <TaskProvider>
    <h2 className='text-center text-2xl font-bold mask-t-to-10 mt-5'>Add All of Your task</h2>
    <AddTasks />
    <h2 className='font-bold text-2xl mask-b-from-1.5'>Tasks :</h2>
    <ListTask />
   </TaskProvider>
 </div>
</div>
</div>
  )
}

export default App
