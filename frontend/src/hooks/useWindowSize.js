import React from 'react';

export function useWindowSize() {
	const isWindow = typeof window !== 'undefined';
	const [windowSize, setWindowSize] = React.useState({
		width: isWindow ? window.innerWidth : 320,
		height: isWindow ? window.innerHeight : 600,
	});

	function changeWindowSize() {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	}

	React.useEffect(() => {
		window.addEventListener('resize', changeWindowSize);

		return () => {
			window.removeEventListener('resize', changeWindowSize);
		};
	}, []);

	return windowSize;
}
