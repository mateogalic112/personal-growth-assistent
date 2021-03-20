import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../actions/userActions';

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { AuthBtn } from '../../theme/Button';
import InputField from '../../components/InputField';
import Loader from '../../components/Loader';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';

import LoginImage from '../../assets/svg/login.svg';

import { StyledForm, LoginIllustration } from './style';
import Message from '../../components/Message';

const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

	const dispatch = useDispatch();
	const { loading, error, userInfo } = useSelector(
		(state) => state.userLogin
	);

	useEffect(() => {
		if (userInfo) {
			history.push('/');
		}
	}, [userInfo, history]);

	const validateForm = () => {
		return state.email.length > 2 && state.password.length > 2;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(userLogin(state.email, state.password));
	};

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<StyledForm onSubmit={handleSubmit}>
				{loading && <Loader />}
				{error && <Message error>{error}</Message>}
				<TitleBar>
					<Title>Login</Title>
					<LoginIllustration
						src={LoginImage}
						alt='Login illustartion'
					/>
				</TitleBar>
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
				<AuthBtn type='submit' disabled={!validateForm()}>
					Login
				</AuthBtn>
			</StyledForm>
		</div>
	);
};

export default Login;
