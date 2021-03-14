import React from 'react';

import { ContainerCenter, Spinner } from './style';

const Loader = () => {
	return (
		<ContainerCenter>
			<Spinner>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</Spinner>
		</ContainerCenter>
	);
};

export default Loader;
