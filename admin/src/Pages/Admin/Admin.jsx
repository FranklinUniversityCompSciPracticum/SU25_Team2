import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import ListProduct from '../../Components/ListProduct/ListProduct'
import AddProduct from '../../Components/AddProduct/AddProduct'


const App = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  )
}


export default App