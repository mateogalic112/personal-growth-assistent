import { NotifierContainer } from '../Notifier/style';

const CrudButton = ({ loading, handleClick, children }) => {
	return (
		<NotifierContainer small onClick={handleClick} disabled={loading}>
			{children}
		</NotifierContainer>
	);
};

export default CrudButton;
