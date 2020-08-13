import React from 'react';


function Scroll(props) {
	console.log(props);
	return(
		<div style={{overflow: 'auto', border: '5px solid black', height: '800px'}}>
			{ props.children }
		</div>
	);
}

export default Scroll;