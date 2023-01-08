import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './../actions/user';

const App = () => {
	const isAuth = useSelector(state => state.user.isAuth);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(auth())
	}, [])

	return (
	<BrowserRouter>
		<div className='wrap'>
			<Navbar />
				{!isAuth &&
					<Routes>
						<Route path='/registration' element={<Registration />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				}
		</div>
	</BrowserRouter>
	)
}

export default App;
