import React from 'react'
import NavigationComponent from '../../components/HomePageComponents/Navigation'
import { useSelector } from 'react-redux'
const HomePage = () => {

 const {isAuthenticated, user}  = useSelector(state => state.auth)

  return (
    <>
    <main>
    <NavigationComponent/>
    { isAuthenticated ? (
      <>
 <h1 className="display-1 my-5 text-center"> Welcome Back </h1>
 <h1 className=" display-1 text-center my-0 mt-1 mx-2">
                  {user.displayName}
                  </h1>
                  </>
    ) : (
  
    <h5 className="display-1 my-5 text-center"> Welcome To Our File Manager </h5>
   ) }
    </main>
    </>

  )

}

export default HomePage