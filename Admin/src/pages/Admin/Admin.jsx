import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/ListProduct/ListProduct'


const Admin = () => {
  return (
    <div className='admin'>
       
        <Sidebar />
      
    <Routes>
        <Route path='/addproduct' element= {<AddProduct />}/>
        <Route path='/listproduct' element= {<ListProduct />}/>
    </Routes>

    </div>
  )
}

export default Admin