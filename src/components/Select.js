import React from 'react';

const Select = ({ options, size, label, onChange }) => {
	let selectClassName = 'select';

	switch (size) {
		case 'small':
			selectClassName = `${selectClassName} small-select`;
			break;
		case 'large':
			selectClassName = `${selectClassName} large-select`;
			break;
		default:
			break;
	}

	const displayedOptions = options
		? options.map((option) => {
				return (
					<option className='select-option' value={option.value}>
						{option.name}
					</option>
				);
		  })
		: [];

	return (
		<>
			{label && label.length ? (
				<div className='select-container'>
					<p className='select-label'>{label}</p>
					<select
						onChange={onChange}
						className={selectClassName}
						placeholder='Enter value...'
					>
						{displayedOptions}
					</select>
				</div>
			) : (
				<div className='select-container'>
					<select
						onChange={onChange}
						className={selectClassName}
						placeholder='Enter value...'
					>
						{displayedOptions}
					</select>
				</div>
			)}
		</>
	);
};

export default Select;
