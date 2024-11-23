
import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
            <ToastContainer position="top-right" autoClose={5000} theme="light" />


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
