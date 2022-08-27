import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import Dashboard from '../public/src/containers/dashboard/Dashbord';
import Homepage from './home';

// function Heeader({ title }) {
// return <h1>{title ? title : 'Default title'}</h1>;
// }
const returnUser = () => {
  console.log(user);

  return ;
}

export default function Controller () {
  // user
  const { user, error, isLoading } = useUser();
  // Hook
  const [ userObj, setUserObj ] = useState({ user: null, error: null, isLoading: false});

  setUserObj({user: user, error: error, isLoading: isLoading});

  // const { user, error, isLoading } = useUser();
  console.log(this.state);
  // if (userObj.isLoading) return <div>Loading...</div>;
  // if (userObj.error) return <div>{error.message}</div>;
  // if(userObj.user){
  //   return (
  //     <Dashboard user={userObj.user} username={JSON.stringify(userObj.user, null, 2)} />
  //     );
  //   }
  
  
    return(<Homepage user={'jh'} /> );
}