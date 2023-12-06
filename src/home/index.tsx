import { Link } from "react-router-dom";

export const HomePage = () => {

    return (
        <>
            <div>Home Page</div>
            <Link to={'/character'}>character</Link>
        </>
    );
};