import './App.css';
import React, {useState} from 'react';
import DynamicComponent from './DynamicComponent';
import UserButton from './UserButton';

/*
	update the DynamicComponent user on a UI click but after
	a async delay. This is similar to asking the MQ for data
	on an async function and waiting to update the UI with
	data returned.
*/
const App = (props) => {
	const [user, changeUser] = useState("");

	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function changeToUserA() {
		changeUser("");
		await delay(1000);
		changeUser("usera");
	}

	async function changeToUserB() {
		changeUser("");
		await delay(1000);
		changeUser("userb");
	}

	const dynamicCallback = (datain) => {
		if (user !== "") {
			console.log(`data out = ${datain}`);
			console.log(`Called Back for ${user} !`);
		}
	}

	const otherFunction = (text) => {
		if (text !== "") {
			console.log(text);
		}
	}

	return (
		<div className="App">
			<DynamicComponent user={user} cb={dynamicCallback} fn={otherFunction}/>
			<UserButton onClick={changeToUserA} buttonText="Switch user-a" />
			<UserButton onClick={changeToUserB} buttonText="Switch user-b" />
		</div>
	);
}

export default App;
