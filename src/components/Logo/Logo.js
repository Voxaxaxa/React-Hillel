import logo from "../../assets/Logo.png"
import "./Logo.css";

const Logo = () => {
    return (
        <div className="container-logo">
            <img className="logo" src={logo} alt="logo" />
        </div>
    )
}

export default Logo;