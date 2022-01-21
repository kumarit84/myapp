import React from 'react'

//function Greet(){
//	return <h1>Hello world test dfdf</h1>
//}

const Greet = (props) => {
	console.log(props)
	return (
		<div>
		<h1>hello {props.name} aka {props.heroName}</h1>
		{props.children}
		</div>
		)
   }

//const Greet = props => {
//	const {name,heroName,children} = props
//	return (
//		<div>
//		<h1>hi {name} alias {heroName}</h1>
//		{children}
//		</div>
//		)
//}

export default Greet
