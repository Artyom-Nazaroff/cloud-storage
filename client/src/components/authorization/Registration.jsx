import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Authorization.module.scss';
import Input from "../../utils/input/Input";
import { registration } from '../../actions/user';

const cn = classNames.bind(styles);

const Registration = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div className={cn('authorization')}>
			<div className={cn("authorization__header")}>
				Регистрация
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
				onClick={() => registration(email, password)}
			>
				Зарегистрироваться
			</button>
		</div>
	);
};

export default Registration;

// 8 video 6:35