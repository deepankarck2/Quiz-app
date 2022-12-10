import React, { useState } from 'react';
import cat from './img/cat_logo.png';
import cat_logo from './img/cat_logo.png';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../pages/shared";

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
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className='flex mx-auto'>
                    <div class="w-11/20">
                        <img class="h-screen  xl:bg-transparent" src="https://live.staticflickr.com/2643/3967606805_47a7e66509_b.jpg" alt=""/>
                    </div>

                    <div class="w-9/20">
                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                          <div className="w-full max-w-md space-y-8">
                            <div>
                              <img
                                className="mx-auto h-20 w-auto mix-blend-multiply"
                                src={cat_logo}
                                alt="Your Company"
                              />
                              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                              </h2>
                            </div>
                            <form className="mt-8 space-y-6" onSubmit={login}>
                              <input type="hidden" name="remember" defaultValue="true" />
                              <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                  <label htmlFor="user_name" className="sr-only">
                                  Username
                                  </label>

                                  <input
                                    type="text"                            
                                    name="uname" 
                                    id="user_name"
                                    required
                                    value={username}
                                    placeholder="Username"
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    onChange={ e => {
                                      setUsername(e.target.value)
                                    }}/>
                                    
                                </div>
                                <div>
                                  <label htmlFor="password" className="sr-only">
                                    Password
                                  </label>
                                  <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={ e => {
                                      setPassword(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <a href="#" className="font-medium text-green-500 hover:text-green-400">
                                  Sign up for free!
                                </a>
                                </div>

                                <div className="text-sm">
                                  <a href="#" className="font-medium text-green-500 hover:text-green-400">
                                    Forgot your password?
                                  </a>
                                </div>
                              </div>

                              <div>
                                <button
                                  type="submit"
                                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                  </span>
                                  Sign in
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}