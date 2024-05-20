import React, { useContext } from 'react';
import { Context } from "../index.js";
import { observer } from 'mobx-react-lite';
import logo from '../assets/logo.jpg';





const NavBar = () => {
    const {user} = useContext(Context)
    const handleLoginClick = (event) => {
        event.preventDefault(); 
        user.setIsAuth(true); 
    };

    return (
        
        
        <div id="navbar">
            <a href="#"><img src={logo} className="logo" alt="Logo" /></a>

            <ul id="navbar-right-section">
                {user.isAuth ? (
                    <>
                        <li><a href="admin.html">Админ панель</a></li>
                        <li><a href="logout.html">Войти</a></li>
                    </>
                ) : (
                    <li><a href="login.html" onClick={handleLoginClick}>Авторизация</a></li>
                )}
            </ul>

            {/* <ul id="navbar-right-section">
                    <li><a class="active" href="index.html">Домой</a></li>
                    <li><a href="shop.html">Магазин</a></li>
                    <li><a id="us" href="about.html">Информация</a></li>
                    <li><a href="contact.html">Контакты</a></li>
                    <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-basket-shopping"></i></a></li>
                    
            </ul> */}

            {/* <div id="mobile">  
                <a href="cart.html"><i class="fa-solid fa-basket-shopping"></i></a>
                <i id="bar" class="fa-solid fa-bars"></i>
            </div> */}
        </div>
    )
}




export default observer(NavBar);
//export default (NavBar);


