import React, { useState } from 'react';
import Homepage from './home';
import getUser from './api/hooks/user';
import App from './app';



export default function Controller () {
  const userObj = getUser(); 
  if (userObj.isLoading) return <div>Loading...</div>;
  if (userObj.error) return <div>{error.message}</div>;
  if(userObj.user){
    // username={JSON.stringify(userObj.user.given_name, null, 2)}
    return (
      <App user={userObj.user} />
      );
    }else{
      return(
        <>
          <Homepage  />
        </>
    );
    }
}