import React, {useEffect} from 'react';

const UserButton = (props) => {
	useEffect(() => {
		console.log(`button: ${props.buttonText}`);
	}, [props.buttonText]);

	return (
		<div>
			<button onClick={props.onClick}>{props.buttonText}</button>
		</div>
	);
}

export default UserButton;
