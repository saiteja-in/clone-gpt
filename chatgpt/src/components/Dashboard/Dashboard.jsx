import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Dashboard
