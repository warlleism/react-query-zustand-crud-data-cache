import { Link } from "react-router-dom";

export const LoginPage = () => {

    return (
        <>
            <div>Login</div>
            <Link to={'/homepage'}>Home Page</Link>
        </>
    );
};