import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import SharedLayout from './SharedLayout'

export default function Header() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SharedLayout></SharedLayout>}>
            <Route index element={<Header />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>  
  </Routes>
    </BrowserRouter>
    
    {/* <BrowserRouter>
    <Routes>

    <Route path='home' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter> */}
  </div>
   
  )
}
