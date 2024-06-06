
import { Route, Routes } from 'react-router-dom'
import Home from './HomePage/Home'
import AllQuote from './AllQuotes/AllQuote'
import Connect from './Contect/Connect'
import Aboutme from './About/Aboutme'

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/freequotes' element={<AllQuote/>}/>
      <Route path='/contect' element={<Connect/>}/>
      <Route path='/about' element={<Aboutme/>}/>
      </Routes>
    </>
  )
}

export default App
