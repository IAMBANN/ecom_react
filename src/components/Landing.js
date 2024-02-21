import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
 
const Landing = () => {
 
        const [userData, setUserData] = useState(null);
     
        useEffect(() => {
          const userLoginData = localStorage.getItem("user");
          if (userLoginData) {
            setUserData(JSON.parse(userLoginData)[0]);
          }
        }, []);
 
    const navigate = useNavigate();
 
 
 
const userlogout = () => {
    localStorage.removeItem("user")
    navigate("/");
}
 
 
// return (
//     <>
//     <h1>Dashboard Page</h1>
//     <h2>Welcome, {userData.name}!</h2>
//     </>
//   );
 
  return (
    <>
      <h1>euuuu cart </h1>
      {userData ? (
        <div>
        <h6>Welcome, {userData.name}!</h6>
        <Header/>
        <Button onClick={userlogout}>Log Out</Button>
        </div>

      ) : (
        <p>Login to get Excited Deals!!!</p>
      )}
      {/* ... */} 
    </>
  );
 
}
 
export default Landing