import { NotifierContainer } from './style';

const Notifier = ({ children, handleClick }) => {
	return (
		<NotifierContainer onClick={handleClick}>{children}</NotifierContainer>
	);
};

export default Notifier;
