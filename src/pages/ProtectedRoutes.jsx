import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const users = useSelector(states => states.user)
  
    if(users.length >= 3){

        return <Outlet />

    }else{

        return <Navigate to='/' />

    }

}

export default ProtectedRoutes;