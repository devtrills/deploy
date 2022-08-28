import Dashboard from "../../public/src/containers/dashboard/Dashbord";
import getUser from "../api/hooks/user";

export default function App() {
    const userObj = getUser();

    if (userObj.isLoading) return <div>Loading...</div>;
    if (userObj.error) return <div>{error.message}</div>;
    if(userObj.user){
        return(<Dashboard user={userObj.user} />)
    }
}