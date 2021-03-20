import React from 'react';

const SelectField = () => {
	return (
		<select name='interests' placeholder='Select interests:' multiple>
			<option value='volvo'>Volvo</option>
			<option value='saab'>Saab</option>
			<option value='opel'>Opel</option>
			<option value='audi'>Audi</option>
		</select>
	);
};

export default SelectField;
