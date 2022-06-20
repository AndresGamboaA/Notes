import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h1>Notes</h1>
            <p>Remember everything with Notes</p>
            <Link to="/register">Register</Link>
            <br />
            <Link to="/login">Log in</Link>
        </div>
    );
};

export default Home;
