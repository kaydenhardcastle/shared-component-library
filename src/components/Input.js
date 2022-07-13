import React from 'react';

const Input = ({ type, size, label, onChange }) => {
	const inputType = type && type.length ? type : 'text';

	let inputClassName = 'input';

	switch (size) {
		case 'small':
			inputClassName = `${inputClassName} small-input`;
			break;
		case 'large':
			inputClassName = `${inputClassName} large-input`;
			break;
		default:
			break;
	}

	return (
		<>
			{label && label.length ? (
				<div className='input-container'>
					<p className='input-label'>{label}</p>
					<input
						type={inputType}
						onChange={onChange}
						className={inputClassName}
						placeholder='Enter value...'
					></input>
				</div>
			) : (
				<div className='input-container'>
					<input
						type={inputType}
						onChange={onChange}
						className={inputClassName}
						placeholder='Enter value...'
					></input>
				</div>
			)}
		</>
	);
};

export default Input;
