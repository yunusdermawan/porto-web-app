import { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Business</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.clName} href='/'>
                                    <i className={item.icon}>{item.title}</i>
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;