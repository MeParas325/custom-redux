import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'


const App = () => {
  const products = useSelector((state) => state.products)
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App