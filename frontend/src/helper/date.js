export const displayDate = (date) => {
	return date.split('T')[0];
};

export const displayHour = (date) => {
	return date.split('T')[1].replace('Z', '');
};

export const getDayNumberInWeek = (date) => {
	return new Date(date).getDay() % 7;
};
