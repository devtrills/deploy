// change to a dynamic route later 
// import { getSession } from '../libs/session';
import Dashboard from '../../../public/src/containers/dashboard/Dashbord';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';

export const getServerSideProps = useUser(async function ({ req, res }) {
  const { user } = req.session
  console.log(req);
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
})

const User = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <Dashboard username={JSON.stringify(user, null, 2)} />
  )
}

export default User;
