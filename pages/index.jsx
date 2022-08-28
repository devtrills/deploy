import React, { useState } from 'react';
import Dashboard from '../public/src/containers/dashboard/Dashbord';
import Homepage from './home';
import getUser from './api/hooks/user';



export default function Controller () {
  const userObj = getUser(); 
  if (userObj.isLoading) return <div>Loading...</div>;
  if (userObj.error) return <div>{error.message}</div>;
  if(userObj.user){
    return (
      <Dashboard user={userObj.user} username={JSON.stringify(userObj.user.given_name, null, 2)} />
      );
    }else{
      return(
        <>
          <Homepage  />
        </>
    );
    }
}