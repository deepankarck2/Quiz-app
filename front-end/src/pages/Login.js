import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./shared";
import Navbar from "../components/Navbar";

export default function Login(){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function login(e){
    e.preventDefault();
    const url =  baseUrl + 'api/token/'
    
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        username : username,
        password : password,
      }),
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data);
      navigate("/take");
    })
  }

  return (
    <div>
        <Nav/>
        <div className="form">
        <form onSubmit={login}>
          <div className="input-container">
            <label htmlfor="name">Username </label>
            
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
            <label htmlfor="pass">Password </label>
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
            <input type="submit" id="submit" value="Submit"/>
          </div>

        </form>
      </div>
    </div>
    );
}