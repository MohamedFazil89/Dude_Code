import './NavBar.css';
import Logo from "../../logo.svg";

export default function NavBar() {
    return (
        <nav className="NavBar-Container">
            <div className="NavBar-Left">
                <img src={Logo} alt="Logo" className="logo" />
                <span className="brand-name">Dude Code</span>
            </div>
            <ul className="NavBar-Center">
                <li className="active">Home</li>
                <li>Resource</li>
                <li className='play'>Play Ground</li>
                <li>Pricing</li>
            </ul>
            <div className="NavBar-Right">
                {/* Intentionally left blank */}
            </div>
        </nav>
    );
}
