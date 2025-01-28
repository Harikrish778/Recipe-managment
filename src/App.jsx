import { useState } from 'react'
import Foods from './components/Foods'
import Add from './components/Add'

import './App.css'

function App() {
  const [success,Setsuccess]=useState("")

  return (
    <>
    <nav className="navbar navbar-expand d-flex justify-content-between" style={{backgroundColor:"rgba(255, 117, 0, 0.8)"}}>
        <a className="navbar-brand ms-4" href="">
          {' '}
          <i className="fa-solid fa-utensils text-dark me-2 "></i>
          <b className="text-light"> Recipie managment</b>
          </a>
          <div className="me-5">
        <Add val={Setsuccess}/>
      </div>

      </nav>
      <div className="container-fluid">
        <Foods success={success}/>
     
      </div>
    </>
  )
}

export default App
