import React from 'react'
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const navigate = useNavigate();
  return (
    <div>
      <button>Home</button>
      <button onClick={()=>{navigate('/setting')}}>Settings</button>
      <button onClick={()=>{navigate('/')}}>Logout</button>
    </div>
  )
}

export default Sidebar
