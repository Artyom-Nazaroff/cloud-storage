import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classNames.bind(styles);

const Input = (props) => {
	return (
		<input
			onChange={(event) => props.setValue(event.target.value)}
			value={props.value}
			type={props.type}
			placeholder={props.placeholder}
		/>
	);
};

export default Input;