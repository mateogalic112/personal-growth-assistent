/**
 * Display date in specific format
 *
 * @param {string} date Return specific date format
 * @return {string} (2021-03-29)
 */
export const displayDate = (date) => {
	return date.split('T')[0];
};

/**
 * Display specific hour format
 *
 * @param {string} date Returns hours
 * @return {string} (10:45:30)
 */
export const displayHour = (date) => {
	return date.split('T')[1].replace('Z', '');
};

/**
 * Gets days number in week
 *
 * @param {string} date
 * @return {number} Monday => 0
 */
export const getDayNumberInWeek = (date) => {
	return new Date(date).getDay() % 7;
};

/**
 * Format date with nice strings
 *
 * @param {string} date
 * @return {date} Saturday, April 3, 2021
 */
export const dateStringFormatter = (date) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Format date with nice strings
 *
 * @param {string} date
 * @return {date} April, 2021
 */
export const dateFormatter = (date) => {
	const options = {
		year: 'numeric',
		month: 'long',
	};
	return new Date(date).toLocaleDateString('en-US', options);
};
