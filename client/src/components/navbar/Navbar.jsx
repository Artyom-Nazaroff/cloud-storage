import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/navbar-logo.svg'
import avatar from '../../assets/img/avatar.svg'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../reducers/userReducer';

const cn = classNames.bind(styles);

const Navbar = () => {
	const isAuth = useSelector(state => state.user.isAuth);
	const dispatch = useDispatch();

	const logOut = () => {
		dispatch(logout())
		localStorage.removeItem('token');
	}

	return (
		<div className={cn('navbar')}>
			<div className={cn("container")}>
				<img src={logo} alt="" className={cn("navbar__logo")} />
				<div className={cn("navbar__header")}>MERN CLOUD</div>
				{!isAuth &&
					<div className={cn("navbar__login")}>
						<NavLink to="/login">Войти</NavLink>
					</div>
				}
				{!isAuth &&
					<div className={cn("navbar__registration")}>
						<NavLink to="/registration">Регистрация</NavLink>
					</div>
				}
				{isAuth &&
					<div
						className={cn("navbar__login")}
						onClick={logOut}
					>
						Выход
					</div>
				}
				<NavLink to='/profile'>
					<img
						className={cn("navbar__avatar")}
						src={avatar}
						alt=""
					/>
				</NavLink>
			</div>
		</div>
	)
}

export default Navbar
