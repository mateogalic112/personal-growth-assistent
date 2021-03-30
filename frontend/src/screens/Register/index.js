import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Select from 'react-select';

import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/actions/userActions';

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { Gi3DHammer } from 'react-icons/gi';

import { AuthBtn } from '../../theme/Button';
import InputField from '../../components/InputField';
import Loader from '../../components/Loader';
import TitleBar from '../../components/TitleBar';
import Title from '../../components/TitleBar/Title';

import RegisterImage from '../../assets/svg/register.svg';

import {
	StyledForm,
	LoginIllustration,
	selectStyles,
	RadioWrapper,
	RadioField,
	FormRedirect,
} from './style';
import Message from '../../components/Message';

const Register = () => {
	const [state, setState] = useState({
		username: '',
		email: '',
		gender: 'male',
		password: '',
		occupation: '',
	});
	const [interests, setInterests] = useState([]);

	const options = [
		{ value: 'crypto', label: 'Crypto' },
		{ value: 'finance', label: 'Finance' },
		{ value: 'health', label: 'Health' },
		{ value: 'lifestyle', label: 'Lifestyle' },
		{ value: 'sport', label: 'Sport' },
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
		return state.email.length > 2 && state.password.length > 2;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const submitInterests = interests.map((i) => i.value);
		dispatch(
			userRegister(
				state.username,
				state.email,
				state.password,
				state.occupation,
				submitInterests,
				state.gender
			)
		);
	};

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	console.log(state);

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
				<RadioWrapper>
					<RadioField isSelected={state.gender === 'male'}>
						<input
							type='radio'
							id='male'
							name='gender'
							value='male'
							checked={state.gender === 'male'}
							onChange={handleChange}
						/>
						<label htmlFor='male'>Male</label>
					</RadioField>
					<RadioField isSelected={state.gender === 'female'}>
						<input
							type='radio'
							id='female'
							name='gender'
							value='female'
							checked={state.gender === 'female'}
							onChange={handleChange}
						/>
						<label htmlFor='female'>Female</label>
					</RadioField>
				</RadioWrapper>

				<Select
					name='interests'
					placeholder='Interests'
					onChange={setInterests}
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

				<FormRedirect>
					<span>Already have an account?</span>
					<Link to='/login'>Login</Link>
				</FormRedirect>
			</StyledForm>
		</div>
	);
};

export default Register;
