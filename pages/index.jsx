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
  const [ userObj, setUserObj ] = useState({user: user, error: error, isLoading: isLoading});

  // setUserObj();

  // const { user, error, isLoading } = useUser();
  console.log(this.state.userObj);
  if (this.state.userObj.isLoading) return <div>Loading...</div>;
  if (this.state.userObj.error) return <div>{error.message}</div>;
  if(this.state.userObj.user){
    return (
      <Dashboard user={this.state.userObj.user} username={JSON.stringify(this.state.userObj.user, null, 2)} />
      );
    }
  
  
    return(<Homepage user={this.state.userObj.user} /> );
}