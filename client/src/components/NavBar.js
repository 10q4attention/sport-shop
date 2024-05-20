import React, {useContext, useState } from 'react';
import {Context} from "../index"
import { NavLink } from 'react-router-dom';


// const Navbar = () => {
//     const [active, setActive] = useState('home');
//     const {user} = useContext(Context)

//     return (
//         <ul id="navbar">
//             <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setActive('home')}>Домой</NavLink></li>
//             <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setActive('shop')}>Магазин</NavLink></li>
//             <li><NavLink to="/about" id="us" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setActive('about')}>Информация</NavLink></li>
//             <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setActive('contact')}>Контакты</NavLink></li>
//             <li id="lg-bag"><NavLink to="/cart"><i className="fa-solid fa-basket-shopping"></i></NavLink></li>
//             <NavLink to="#" id="close"><i className="fa-solid fa-xmark"></i></NavLink>
//         </ul>
//     );
// };


const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <ul id="navbar">
                    <li><a class="active" href="index.html">Домой</a></li>
                    <li><a href="shop.html">Магазин</a></li>
                    <li><a id="us" href="about.html">Информация</a></li>
                    <li><a href="contact.html">Контакты</a></li>
                    <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-basket-shopping"></i></a></li>
                    {/* <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a> */}
            </ul>


            <div id="mobile">  
                <a href="cart.html"><i class="fa-solid fa-basket-shopping"></i></a>
                <i id="bar" class="fa-solid fa-bars"></i>
            </div>
        </div>

      
    )
}


export default NavBar;

 


