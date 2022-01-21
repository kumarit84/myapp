import React, { Component } from 'react'

//Condition operator
class UserGreeting extends Component {
  
   constructor(props){
    super(props)

    this.state = {
     isLoggedIn:true
    }
   }

   render(){
    
    //Short Circuit operator
    return this.state.isLoggedIn && <div>Hello Kumaresan</div>
    
    //teranry operator
    //return this.state.isLoggedIn ?  (<div>Hi Kumaresan</div>) : (<div>Hi Guest</div>)
    
    //element variable operator
    //let message
    //if(this.state.isLoggedIn){
    //  message = <div>Hi Kumaresan</div> 
    //}else{
    //  message = <div>Hi Guest</div> 
    //}

    //if condition operator
    //return <div>{message}</div>
 
    // if(this.state.isLoggedIn){
    //    return <div>Hi Kumaresan</div>
    //}else{
    //    return <div>Hi Guest</div>
    //}
  }

}

export default UserGreeting