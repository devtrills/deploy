// change to a dynamic route later 
// import { getSession } from '../libs/session';
import Dashboard from '../../../public/src/containers/dashboard/Dashbord';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';

const { user, error, isLoading } = useUser();
export const getServerSideProps = async function () {
//   const { user } = req.session

  if (!user) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
};

const User = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <Dashboard username={JSON.stringify(user, null, 2)} />
  )
}

export default User;
