import React from 'react';

const Button = ({ variant, size, text, action }) => {
	let buttonClassName = 'button';

	switch (variant) {
		case 'primary':
			buttonClassName = `${buttonClassName} primary-button`;
			break;
		case 'secondary':
			buttonClassName = `${buttonClassName} secondary-button`;
			break;
		default:
			break;
	}

	switch (size) {
		case 'small':
			buttonClassName = `${buttonClassName} small-button`;
			break;
		case 'large':
			buttonClassName = `${buttonClassName} large-button`;
			break;
		default:
			break;
	}

	return (
		<button className={buttonClassName} onClick={action}>
			{text}
		</button>
	);
};

export default Button;
