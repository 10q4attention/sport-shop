

import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
//import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const click = async () => {
    //     try {
    //         let data;
    //         if (isLogin) {
    //             data = await login(email, password);
    //         } else {
    //             data = await registration(email, password);
    //         }
    //         user.setUser(user);
    //         user.setIsAuth(true);
    //         navigate(SHOP_ROUTE);
    //     } catch (e) {
    //         alert(e.response.data.message);
    //     }
    // };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <form className="auth-form">
                    <input
                        className="auth-form-control"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <input
                        className="auth-form-control"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="auth-row">
                        {isLogin ? (
                            <div className="auth-nav-link">
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                        ) : (
                            <div className="auth-nav-link">
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        )}
                        <button className="auth-btn">
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default Auth;



