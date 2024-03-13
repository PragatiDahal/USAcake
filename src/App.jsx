import './App.css'
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Main from "./Components/Main"
import Bestcakes from './Components/Bestcakes'
import Trendingcake from './Components/Trendingcake'
import Review from "./Components/Review"
// import Timeline from "./Components/Timeline"
import Joinus from "./Components/Joinus"
import Footer from "./Components/Footer"
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
      <Review/>
      {/* <Timeline/> */}
      <Joinus/>
      <Footer/>
       <Routes>
      <Route path="*" element={<Navigate to='/'/>} />
      </Routes> 
      </BrowserRouter> 
      
      
    </>
  )
}

export default App
