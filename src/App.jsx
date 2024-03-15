import './App.css'
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Main from "./Components/Main"
import Bestcakes from './Components/Bestcakes'
import Trendingcake from './Components/Trendingcake'
import Review from "./Components/Review"
import Timeline from "./Components/Timeline"
import Joinus from "./Components/Joinus"
import Footer from "./Components/Footer"
import Cakes from './Components/Cakes'
import About from './Components/About'
import Homepage from './Components/Homepage'
import Birthday from './Components/Birthday'
import Wedding from './Components/Wedding'
import Graduation from './Components/Graduation'
import Theme from './Components/Theme'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage />} />
     <Route path="/Search" element={<Search />} />
    <Route path="/Main" element={<Main />} />
    <Route path="/Bestcakes" element={<Bestcakes />} />
    <Route path="/Trendingcake" element={<Trendingcake />} />
    <Route path="/Review" element={<Review />} />
    <Route path="/Joinus" element={<Joinus />} />
     <Route path="/Timeline" element={<Timeline/>}/>
    <Route path="/Cakes" element={<Cakes />} />
    <Route path="/About" element={<About />} /> 
    <Route path="/Birthday" element={<Birthday/>} />
    <Route path="/Wedding" element={<Wedding/>} />
    <Route path="/Graduation" element={<Graduation/>} />
    <Route path="/Theme" element={<Theme/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="*" element={<Navigate to='/'/>} />
  </Routes>
  <Footer/>
</BrowserRouter>  
    </>
  )
}

export default App
