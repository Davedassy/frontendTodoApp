import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from "axios"


 class LogIn extends Component {
   constructor(){
       super()
       let logedIn = false
       localStorage.getItem("token")
      this.state = {
        email:"",
        password:"",
        logedIn
    }
   }
     onchange = (e) => {
       this.setState({
           [e.target.name]:e.target.value
       })
     }

     formSubmit = (e) => {
       e.preventDefault()
       const {email,password} = this.state
       axios.post("/login",{email,password})
            .then( (req,res) => {
                const  token  = req.data
                console.log(token)
                localStorage.setItem("token",token)
                this.setState({
                    logedIn:true,
                    email:"",
                    password:""
                })
            })
            .catch(err => {
                this.setState({
                    error:"invalid credential"
                })
            })

     }
    render() {
        const {email,password,logedIn} = this.state
         if(logedIn === true) {
           return  <Redirect to="/user"/>
         }
        return (
            <React.Fragment>
                 <div>
                     <form onSubmit={this.formSubmit}>
                        
                         <div>
                            <label htmlFor="email">Email</label> 
                            <input type="email" className="icon" placeholder="&#xf007;" value={email}  name="email" onChange={this.onchange}/>
                        </div>
                      <div>
                        <label htmlFor="password">password</label>
                        <input type="password" className="icon" placeholder="" value={password}  name="password" onChange={this.onchange}/>
                     </div>
                     <button type="submit">Login</button>
                     </form>
                     {this.state.error}
                 </div>
            </React.Fragment>
        )
    }
}


export default LogIn
