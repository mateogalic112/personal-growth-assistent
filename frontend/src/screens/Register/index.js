import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../actions/userActions';

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { Gi3DHammer } from 'react-icons/gi';

import { AuthBtn } from '../../theme/Button';
import InputField from '../../components/InputField';
import Loader from '../../components/Loader';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';
import SelectField from '../../components/SelectField';

import RegisterImage from '../../assets/svg/register.svg';

import { StyledForm, LoginIllustration, selectStyles } from './style';
import Message from '../../components/Message';

const Register = () => {
	const [state, setState] = useState({
		username: '',
		email: '',
		password: '',
		occupation: '',
		interests: [],
		gender: '',
	});

	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	const history = useHistory();

	const dispatch = useDispatch();
	const { loading, error, userInfo } = useSelector(
		(state) => state.userRegister
	);

	useEffect(() => {
		if (userInfo) {
			history.push('/');
		}
	}, [userInfo, history]);

	const validateForm = () => {
		return (
			state.email.length > 2 &&
			state.password.length > 2 &&
			state.gender.length > 0
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			userRegister(
				state.username,
				state.email,
				state.password,
				state.interests,
				state.occupation,
				state.email.gender
			)
		);
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
					<Title>Regsiter</Title>
					<LoginIllustration
						src={RegisterImage}
						alt='Register illustartion'
					/>
				</TitleBar>
				<InputField
					big
					icon={<AiOutlineUser />}
					input={
						<input
							type='username'
							required
							name='username'
							value={state.username}
							onChange={handleChange}
							placeholder='Username'
						/>
					}
				/>
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
				<InputField
					big
					icon={<Gi3DHammer />}
					input={
						<input
							type='occupation'
							required
							name='occupation'
							value={state.occupation}
							onChange={handleChange}
							placeholder='Occupation'
						/>
					}
				/>
				<Select
					name='interests'
					styles={selectStyles}
					options={options}
					isMulti
				/>

				<AuthBtn
					type='submit'
					disabled={!validateForm()}
					style={{ marginTop: '1rem' }}
				>
					Register
				</AuthBtn>
			</StyledForm>
		</div>
	);
};

export default Register;
