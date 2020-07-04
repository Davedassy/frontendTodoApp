import React, { Component } from 'react';
import axios from "axios"


 class Register extends Component {
     state = {
         name:"",
         email:"",
         password:"",
     }
     onchange = (e) => {
       this.setState({
           [e.target.name]:e.target.value
       })
     }

     formSubmit = (e) => {
       e.preventDefault()
       const {name,email,password} = this.state
       axios.post("/register",{name,email,password})
            .then( () => {
                this.setState({
                    name:"",
                    email:"",
                    password:""
                })
            })
            .catch(err => {
                this.setState({
                    error:err.message
                })
            })

     }
    render() {
        const {name,email,password} = this.state
        return (
            <React.Fragment>
                 <div>
                     <form onSubmit={this.formSubmit}>
                         <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="" value={name}  name="name" onChange={this.onchange}/>
                         </div>
                         <div>
                            <label htmlFor="email">Email</label> 
                            <input type="email" placeholder="" value={email}  name="email" onChange={this.onchange}/>
                        </div>
                      <div>
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="" value={password}  name="password" onChange={this.onchange}/>
                     </div>
                     <button type="submit">Register</button>
                     </form>
                 </div>
            </React.Fragment>
        )
    }
}

export default Register
