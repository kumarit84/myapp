import React from 'react';

import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'


class ParentComp extends React.Component {

 	constructor(props) {
		super(props);

		this.state = {
			name :'kumar'
		}

	}

    componentDidMount(){
    	setInterval(() => {
    		this.setState({
    			name:'kumar'
    		})
    	},2000)
    }

	render() {
				console.log('**********Parent component render*********')

		return (
			<div>Parent Component
            <MemoComp name={this.state.name}/>
            {/*<RegComp name={this.state.name}/>*/}
			{/*<PureComp name={this.state.name}/>*/}
			</div>
			
		);
	}
}

export default ParentComp 
