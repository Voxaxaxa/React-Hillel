import "./Login.css";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";

function Login () {
    return (
        <div className="containet">
            <div className="containet-logo">
            <div className="login-menu">
                <Logo/>
                <Input/>
            </div>
            </div>
        </div>
    )
}

export default Login; 