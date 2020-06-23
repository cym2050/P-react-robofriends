import React from 'react';


function Scroll(props) {
	console.log(props);
	return(
		<div style={{overflow: 'scroll', border: '5px solid black', height: '70vh'}}>
			{ props.children }
		</div>
	);
}

export default Scroll;