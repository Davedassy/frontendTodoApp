import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from "axios"


 class User extends Component {
   constructor(){
       super()
       let logedIn = false
       const token = localStorage.getItem("token")
       if(token) logedIn = true;

      this.state = {
        todos:[],
        logedIn
    }
    
   }
   


     logout = () => {
         this.setState({
             logedIn:false
         })
     }
    render() {
        const {logedIn} = this.state
         if(logedIn === false) {
           return <Redirect to="/logout"/>
         }
        return (
            <React.Fragment>
                 <div>
                     hello
                 </div>
                 <button onClick={this.logout}>Logout</button>
            </React.Fragment>
        )
    }
}

export default User

