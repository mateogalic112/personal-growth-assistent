import React from 'react';

import styled from 'styled-components';

const MessageContainer = styled.div`
	font-size: 1.25rem;
	color: ${(props) => (props.error ? 'red' : 'black')};
`;

const Message = ({ children, error }) => {
	return <MessageContainer error={error}>{children}</MessageContainer>;
};

export default Message;
