import React from 'react';

const Background = (props) => {
	return (
		<div className={`bg-[url('/src/images/background.jpg')] min-h-[100vh]`}>
			<div className='bg-gradient-to-r from-zinc-900 via-zinc-900/75 min-h-[100vh] ' >
				{props.children}
			</div>
		</div>
	)
}

export default Background;
