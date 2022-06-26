import React from 'react';

const Text = ({ color, size, text }) => {
	return (
		<p style={{ color: color, fontSize: size }} className='text'>
			{text}
		</p>
	);
};

export default Text;
