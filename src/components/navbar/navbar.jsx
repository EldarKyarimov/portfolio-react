import "./style.css"
import { NavLink } from "react-router-dom";

function Navbar() {

    const activeLink = "nav-list-link nav-list-link_active ";
    const normLink = "nav-list-link";


    return (
        <nav className="nav">
            <div className="container">
                <div className="left">
                    <h2>Eldar Karimov</h2>
                </div>
                <div className="navbar-items">
                    <ul className="nav-list">

                        <li className="nav-list-item">
                            <NavLink to="/" className={({ isActive }) => {
                                return isActive ? activeLink : normLink;
                            }}>
                                HOME
                            </NavLink>
                            {/* <a href="/">HOME</a> */}
                        </li>

                        <li className="nav-list-item">
                            <NavLink to="/projects" className={({ isActive }) => {
                                return isActive ? activeLink : normLink;
                            }}>
                                PROJECTS
                            </NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to="/contact" className={({ isActive }) => {
                                return isActive ? activeLink : normLink;
                            }}>
                                CONTACT
                            </NavLink>

                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;