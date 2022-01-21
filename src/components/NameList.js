import React from 'react'

function NameList(){
  const names = ['kumar','Nik','tam']
  const nameList = names.map(name => <h1>{name}</h1>)
  return <div>{nameList}</div>
}

export default NameList