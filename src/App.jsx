import { Outlet } from "react-router-dom"


function App() {


  return (
    <>
    <div className="bg-cyan-800">
    <Outlet></Outlet>
    </div>
     
    </>
  )
}

export default App
