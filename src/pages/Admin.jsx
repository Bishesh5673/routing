import { NavLink, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className='flex'>
      <div className=''>
            <NavLink to="productmanagement">Product Management</NavLink>
            <NavLink to="usermanagement">User Management</NavLink>
      </div>
      <div className='border'>
            <Outlet/>
      </div>
    </div>
  )
}

export default Admin
