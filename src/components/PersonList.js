import React from 'react'
import Person from './Person'

function PersonList(){
  const person = [{id:1,age:23,name:'kumar'},{id:2,age:25,name:'valli'},{id:5,age:28,name:'rithu'}]
  //const personList = persons.map(person => <h1>{person.id} age is {person.age} and name {person.name}</h1>)
  const personList = person.map((person,index) => (<Person key={person.id} person={person} />))
  return <div>{personList}</div>
}

export default PersonList