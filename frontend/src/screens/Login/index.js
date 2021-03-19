import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../actions/userActions'

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { LoadMoreBtn } from '../../theme/Button';
import InputField from '../../components/InputField';
import Loader from '../../components/Loader';

import { StyledForm } from './style';

const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

	const validateForm = () => {
		return state.email.length > 2 && state.password.length > 2;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post('/api/v1/users/login', {
				email: state.email,
				password: state.password,
			})
			.then((res) => {
				if (res.status === 200) {
					window.localStorage.setItem('token', res.data);
				}
				history.push('/');
			})
			.catch((error) => {
				console.dir(error);
			});
	};

	const handleChange = (e) => {
		console.log(e);
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<StyledForm onSubmit={handleSubmit}>
				<InputField
					big
					icon={<AiOutlineMail />}
					input={
						<input
							type='email'
							required
							name='email'
							value={state.email}
							onChange={handleChange}
							placeholder='Email'
						/>
					}
				/>
				<InputField
					big
					icon={<RiLockPasswordLine />}
					input={
						<input
							type='password'
							required
							name='password'
							value={state.password}
							onChange={handleChange}
							placeholder='Password'
						/>
					}
				/>
				<LoadMoreBtn disabled={!validateForm()}>Login</LoadMoreBtn>
			</StyledForm>
		</div>
	);
};

export default Login;
