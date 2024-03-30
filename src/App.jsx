import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Update from "./Components/Update"
import Books from "./Components/Books"
import Add from "./Components/Add"

function App() {
 

  return (
    <>
  
      <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/update/:id" element={<Update/>}/>




      </Routes>
      
      
      
      </BrowserRouter>
    </>
  )
}

export default App
