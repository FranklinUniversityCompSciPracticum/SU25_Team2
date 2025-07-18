import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import ListProduct from '../../Components/ListProduct/ListProduct'


const App = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/addproduct" element={<div>Add Product</div>} />
      </Routes>
    </div>
  )
}


export default App