// change to a dynamic route later 
// import { getSession } from '../libs/session';
import Dashboard from '../../../public/src/containers/dashboard/Dashbord';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
// import {useRouter} from 'next/router';


export default function User () {
    // const router = useRouter();

      // Fetch the user client-side
    const { user } = useUser({ redirectTo: '/login' })

    // Server-render loading state
    if (!user || user.isLoggedIn === false) {
        return <Layout>Loading...</Layout>
    }

    // Show the user. 
    return (
        <Dashboard username={JSON.stringify(user, null, 2)} />
    )
}
