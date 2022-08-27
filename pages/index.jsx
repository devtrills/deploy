import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import Dashboard from '../public/src/containers/dashboard/Dashbord';
import Homepage from './home';

// function Heeader({ title }) {
// return <h1>{title ? title : 'Default title'}</h1>;
// }
const returnUser = () => {
  const { user, error, isLoading } = useUser();

  return { user, error, isLoading };
}

export default function Controller () {
  // Hook
  const [ userObj, setUserObj ] = useState(() => returnUser());

  // const { user, error, isLoading } = useUser();
  console.log(userObj);
  if (userObj.isLoading) return <div>Loading...</div>;
  if (userObj.error) return <div>{error.message}</div>;
  if(userObj.user){
    return (
      <Dashboard user={userObj.user} username={JSON.stringify(userObj.user, null, 2)} />
      );
    }else{
      return(<Homepage user={userObj.user} /> );
    }

}