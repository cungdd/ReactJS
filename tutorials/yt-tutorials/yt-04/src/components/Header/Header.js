import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


class Header extends Component {
    render() {
        return (
        // <Router>
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-info">
                    <a className="navbar-brand" href="/" aria-hidden="true" >----WWW----</a>
                    <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#" aria-hidden="true" aria-controls="menu">
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Navbar Search*/}
                    {/* <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="fas fa-search"/></button>
                        </div>
                    </div>
                </form> */}
                    {/* Navbar*/}
                    <ul className="navbar-nav d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <li className="nav-item dropdown">
                            {/* <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User &nbsp;<i className="fas fa-user fa-fw"/></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">Settings</a>
                                <a className="dropdown-item" href="#">Activity Log</a>
                                <div className="dropdown-divider"/>
                                <a className="nav-link"> 
                                    <Link to="/Login">Log out</Link>
                                </a>
                            </div> */}
                            <a className="text-white">User &nbsp;</a>
                            <Link to="/Login"><div className="fa fa-sign-out-alt fa-fw text-white" /></Link>
                        </li>
                    </ul>
                </nav>

                <div id="menu">
                    <Menu/>
                </div>

            </div>
        // </Router>
        );
    }
}
export default Header;