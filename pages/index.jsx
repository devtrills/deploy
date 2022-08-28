import React, { useState } from 'react';
// import Dashboard from '../public/src/containers/dashboard/Dashbord';
import Homepage from './home';
import getUser from './api/hooks/user';



export default function Controller () {
  console.log();
  if (getUser().isLoading) return <div>Loading...</div>;
  if (getUser().error) return <div>{error.message}</div>;
  if(getUser().user){
    return (
      <Dashboard user={userObj.user} username={JSON.stringify(userObj.user, null, 2)} />
      );
    }else{
      return(
        <>
          <Homepage  />
        </>
    );
    }
}