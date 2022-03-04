import React from 'react';

class PureComp extends React.PureComponent {

	render() {
		console.log('Pure component render')
		
		return (
			<div>Pure Component{this.props.name}</div>
		);
	}
}

export default PureComp