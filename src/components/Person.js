import React from 'react'

function Person({person}){

  return (<div><h2>{person.id} age is {person.age} and name {person.name}</h2></div>)
}

export default Person