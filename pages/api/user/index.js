// change to a dynamic route later 
// import { getSession } from '../libs/session';
import Dashboard from '../../../public/src/containers/dashboard/Dashbord';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import {useRouter} from 'next/router';

const router = useRouter();
const {user} = useUser();
const User = () => {
    if (!user) {
      router.push('/api/auth/login');
    }else{
        // Show the user. 
        return (
            <Dashboard username={JSON.stringify(user, null, 2)} />
        )
    }
}

export default User;
