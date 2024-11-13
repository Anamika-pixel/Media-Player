
import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route element={ <Landing/> } path='/'></Route>
      <Route element={ <Home/> } path='/home'></Route>
      <Route element={ <History/> } path='/history'></Route> 
      
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
