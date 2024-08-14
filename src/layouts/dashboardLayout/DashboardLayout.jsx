import React from 'react'
import './dashboardLayout.css'
import { Outlet } from 'react-router-dom'
const DashboardLayout = () => {
  return (
    <div className='dashboardLayout'>
        <div className='menu'>
            Menu
        </div>
        <div className='Content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout