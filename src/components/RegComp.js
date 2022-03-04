import React from 'react';

class RegComp extends React.Component {
	render() {
		console.log('Reg component render')
		return (
			<div>Reg Comp{this.props.name}</div>
		);
	}
}

export default RegComp