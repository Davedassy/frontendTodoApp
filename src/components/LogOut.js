import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from "axios"


 class LogIn extends Component {
   constructor(){
       super()
       localStorage.removeItem("token")
   }
   

    
    render() {
       
        return (
            <Redirect to="/"/>
        )
    }
}

export default LogIn
