import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvide'

const App = () => {

  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUSer = localStorage.getItem("loggedInUser")
  //     if(loggedInUSer){
  //       setUser(loggedInUSer.role)
  //     }
  //   }
  //  }, [authData])
  useEffect(()=>{
     const loggedInUser= localStorage.getItem('loggedInUser')
     if(loggedInUser){
      const userData= JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
   

     }
  },[])
  

 const handleLogin = (email,password)=>{
  if(email=='admin@me.com'&&password=='123'){

  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',}))
}
else if(authData){
  const employee=authData.employees.find((e)=>email==e.email&&e.password==password)
  if(employee){
  setUser('employee')
  setLoggedInUserData(employee)

  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
  }
}
else{
alert("invalid credentials")  
}
 }



 
  
 return (
  <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDash changeUser={setUser} />}
    {user === 'employee' && <EmployeeDash changeUser={setUser} data={loggedInUserData} />}
  </>
    
  )
}

export default App