import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Dashboard from '../../../public/src/containers/dashboard/Dashbord';

export default function User() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      user &&  (
          <Dashboard username={JSON.stringify(user, null, 2)} />
      )
  );
}
