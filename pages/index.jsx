import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import Dashboard from '../public/src/containers/dashboard/Dashbord';
import Homepage from './home';

// function Heeader({ title }) {
// return <h1>{title ? title : 'Default title'}</h1>;
// }

export default function Controller () {
  const { user, error, isLoading } = useUser();
  console.log(user);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if(user){
    return (
      <Dashboard user={user} username={JSON.stringify(user, null, 2)} />
      );
    }else{
      return(<Homepage user={user} /> );
    }

}