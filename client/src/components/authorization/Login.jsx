import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Authorization.module.scss';
import Input from "../../utils/input/Input";
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

const cn = classNames.bind(styles);

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	return (
		<div className={cn('authorization')}>
			<div className={cn("authorization__header")}>
				Авторизация
			</div>
			<Input
				value={email}
				setValue={setEmail}
				type="text"
				placeholder="Введите email..."
			/>
			<Input
				value={password}
				setValue={setPassword}
				type="password"
				placeholder="Введите пароль..."
			/>
			<button
				className={cn("authorization__btn")}
				onClick={() => dispatch(login(email, password))}
			>
				Войти
			</button>
		</div>
	);
};

export default Login;