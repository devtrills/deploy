import React, { useState } from 'react';
// import Dashboard from '../public/src/containers/dashboard/Dashbord';
import Homepage from './home';
import getUser from './api/hooks/user';



export default function Controller () {
  console.log(getUser().user);
  // const { user, error, isLoading } = useUser();
  // if (userObj.isLoading) return <div>Loading...</div>;
  // if (userObj.error) return <div>{error.message}</div>;
  // if(userObj.user){
  //   return (
  //     <Dashboard user={userObj.user} username={JSON.stringify(userObj.user, null, 2)} />
  //     );
  //   }
  
  
    return(
        <>
          <Homepage  />
        </>
    );
}