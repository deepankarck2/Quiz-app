import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./shared";

export default function Register(){
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  function register(e){
    e.preventDefault();
    const url =  baseUrl + 'api/register/'
    
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        email : email,
        username : username,
        password : password
      }),
    }).then((response)=>{
      return response;
    }).then((data)=>{
      console.log(data);
      navigate('/login');
    })
  }

  return (
        <div className="form">
        <form onSubmit={register}>
          
        <div className="input-container">
          <label for="email">Email </label>
            
            <input type="email" 
            name="email" 
            id="email"
            required
            value={email}
            onChange={ e => {
              setEmail(e.target.value)
              }}/>
        </div>

        <div className="input-container">
            <label for="name">Username </label>
            <input type="text" 
            name="uname" 
            id="name"
            required
            value={username}
            onChange={ e => {
              setUsername(e.target.value)
              }}/>

          </div>
          <div className="input-container">
            <label for="pass">Password </label>
            <input type="password" 
            name="pass" 
            id="pass" required 
            value={password}
            onChange={ e => {
              setPassword(e.target.value)
            }}
            />
          </div>

          <div className="button-container">
            <input type="submit" id="submit" value="Register"/>
          </div>

        </form>
      </div>
    );
}