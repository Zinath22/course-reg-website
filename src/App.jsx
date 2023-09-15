

import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'


function App() {


  return (
    <>
    <div className="justify-center items-center text-center mt-10 mx-20">
    <Nav></Nav>
    <Toaster></Toaster>
    <Home></Home>
     
    </div>
      
      
      
  </>
  )
}

export default App


