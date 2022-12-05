import React, { useState } from 'react';
import cat from './img/cat.png';
import cat_logo from './img/cat_logo.png';
import { LockClosedIcon } from '@heroicons/react/20/solid';

function User(){
    return (
        <>
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
                            <form className="mt-8 space-y-6" action="#" method="POST">
                              <input type="hidden" name="remember" defaultValue="true" />
                              <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                  <label htmlFor="email-address" className="sr-only">
                                    Email address
                                  </label>
                                  <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                  />
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
export default User; 