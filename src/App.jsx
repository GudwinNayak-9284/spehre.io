import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aside from './components/Aside';
function App() {
  return (
    <>
     <div className="h-full w-full">
      <Navbar/>
      <div className="flex w-full">
      <Aside/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
      </div>
    </div>
    </>
  )
}

export default App
