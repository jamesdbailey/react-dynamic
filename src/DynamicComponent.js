import React, {useState, useEffect} from 'react';
import UserA from './UserA';
import UserB from './UserB';
import Waiting from './Waiting'

let components = {
  usera: UserA,
  userb: UserB
};

let renderCount = 0;
const DynamicComponent = (props) => {
	const [oData, changeOData] = useState(null);
	const data = "This is my useful data";

	renderCount++;
	console.log(`renderCount = ${renderCount}`);

	useEffect(() => {
		props.fn("test", changeOData);
		console.log(`other data = ${oData}`);
		props.cb(data);
	}, [props, oData]);

	const SelectedUser = props.user !== "" ? components[props.user] : Waiting;
	return (<SelectedUser />);
}

export default DynamicComponent;
