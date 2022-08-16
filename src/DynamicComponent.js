import React, {useEffect} from 'react';
import UserA from './UserA';
import UserB from './UserB';
import Waiting from './Waiting'

let components = {
  usera: UserA,
  userb: UserB
};

let renderCount = 0;
let effectCount = 0;
const DynamicComponent = (props) => {
	const data = "This is my useful data";

	renderCount++
	props.fn(`renderCount = ${renderCount}`);

	useEffect(() => {
		effectCount++;
		props.fn(`effectCount = ${effectCount}`);
		props.cb(data);
	});

	const SelectedUser = props.user !== "" ? components[props.user] : Waiting;
	return (<SelectedUser />);
}

export default DynamicComponent;
