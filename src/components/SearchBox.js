import React from 'react';

function SearchBox({searchChange}) {
	return (
		<div>
			<input 
				className='pa3 ba b--green bg-light-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;