import React from 'react';

export default Text = ({ color, size, text }) => {
	return (
		<p style={{ color: color, fontSize: size }} class='text'>
			{text}
		</p>
	);
};
