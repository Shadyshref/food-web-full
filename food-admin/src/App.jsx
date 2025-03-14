
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import  { Route,Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer} from 'react-toastify';
  


function App() {
  const url = "http://localhost:5000"
  return (
    <>
    
      <div >
        <ToastContainer/>
      <NavBar/>
      <hr />
      <div className=' flex'>
        <SideBar/>
       <Routes>
        <Route path='/Add' element={<Add url={url} />}/>
        <Route path='/List' element={<List url={url}/>}/>
        <Route path='/Orders' element={<Orders url={url}/>}/>
       </Routes>
      </div>
       
      </div>
     
    </>
  )
}

export default App
