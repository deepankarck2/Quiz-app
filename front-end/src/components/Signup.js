import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../pages/shared";

export default function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
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
        firstname : firstname,
        lastname : lastname,
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
      <>
      <Navbar />
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-0">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className='flex mx-auto'>
          <div className="w-1/2">
            <img class="h-screen  xl:bg-transparent" src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg" alt=""/>
          </div>
          <div className="w-1/2">
            <div className="mt-10 sm:mt-0">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={register} action="#" method="POST">
                  <div className="container mt-20 overflow-hidden">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstname}
                            onChange={ e => {
                              setFirstname(e.target.value)
                              }}
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastname}
                            onChange={ e => {
                              setLastname(e.target.value)
                              }}
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
    
                        

                      <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="uname" className="block text-sm font-medium text-gray-700">
                            Username
                          </label>
                          <input
                            type="text"
                            name="uname"
                            id="uname"
                            autoComplete=""
                            value={username}
                            onChange={ e => {
                              setUsername(e.target.value)
                              }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
    
                        <div className="col-span-3 sm:col-span-3">
                          <label htmlFor="pass" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input
                            type="password"
                            name="pass"
                            id="pass"
                            autoComplete=""
                            value={password}
                            onChange={ e => {
                              setPassword(e.target.value)
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            autoComplete="email"
                            onChange={ e => {
                              setEmail(e.target.value)
                              }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                    </div>
                  
                    <div className="bg-white px-3 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Register
                      </button>
                    </div></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
      </>
    )
  }