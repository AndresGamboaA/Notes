import { StyledRegister } from "../components/styles/Register.styled";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../context/authContext";

const Login = () => {
   
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    
    const { login } = useContext(authContext);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs.email, inputs.password);
            navigate("/my-notes");
        } catch (error) {
            console.log(error);
        }
    }

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setInputs({ ...inputs, [name]: value });
    };
    
    return (
        <StyledRegister>
            <div>
                <div>
                    <h1>Notes</h1>
                    <p style={{ textAlign: "center", marginBottom: "25px" }}>
                        Remember everything important
                    </p>
                </div>
                <button>Continue with Google</button>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" onChange={(e)=>handleChange(e)} placeholder="Email" />
                    {errors.email && <span>Invalid email</span>}
                    <input
                         onChange={(e)=>handleChange(e)}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    {errors.email && <span>Invalid password</span>}
                    <input type="submit" value="Continue" />
                </form>
                <button style={{ color: "gray" }}>
                    Continue without an account
                </button>
                <p style={{ fontSize: "10px", color: "#5e5e5e" }}>
                    By creating an account, you are agreeing to our Terms of
                    Service.
                </p>
                <p style={{ textAlign: "center", marginTop: "23px" }}>
                    Already have an account?
                </p>
                <span style={{ margin: "0 auto" }}>
                    <Link to="/login">Log in</Link>
                </span>
            </div>
        </StyledRegister>
    );
};

export default Login;
