import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
export default function SharedLayout() {
  return (
    <>
    <Navbar/>
    <section className="section p-2">
        <Outlet/>   
    </section>
    </>
  )
}
