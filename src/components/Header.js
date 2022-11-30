import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../assets/pokedex.png'
import "./Header.scss"
import Search from './Search';


const Header = () => {

    const user = JSON.parse(localStorage.getItem('userInfo'))
    const logout = () =>{
        localStorage.clear()
        window.location.href= '/'
    }
    return (
        <header>
            <div className='navbar'>
                <Container>
                    <div className='icon'>
                        <Link to='/'><img src={icon} alt='icon' /></Link>
                    </div>
                    <div className='search-bar'>
                        <Search />
                    </div>
                    <div className='right-side'>
                        {user.firstname}
                        {user.lastname}
                        <button onClick={()=> logout()}>LOG OUT</button>
                    </div> 
                </Container>
            </div>
        </header>
    )
}

export default Header;
