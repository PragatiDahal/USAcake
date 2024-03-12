import './App.css'
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Main from "./Components/Main"
import Bestcakes from './Components/Bestcakes'
import Trendingcake from './Components/Trendingcake'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar/>
      <Search/>
      <Main/>
      <Bestcakes/>
      <Trendingcake/>
       <Routes>
      <Route path="*" element={<Navigate to='/'/>} />
      </Routes> 
      </BrowserRouter> 
      
      
    </>
  )
}

export default App
