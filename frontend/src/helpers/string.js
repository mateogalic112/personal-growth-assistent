/**
 * Capitalize First Letter
 *
 * @param {string} s Word to capitalize.
 * @return {string} Capitalized first letter
 */
export const capitalize = (s) => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};
