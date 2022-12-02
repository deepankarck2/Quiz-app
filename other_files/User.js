import React, { useState } from 'react';
import cat from './img/cat.png';
import cat_logo from './img/cat_logo.png';

function User(){
    return (
        <>
            <div className="container mx-auto">
                <div className='flex mx-auto'>
                    <div class="w-1/2">
                        <img class="h-screen" src={cat} alt=""/>
                    </div>

                    <div class="w-1/2">
                        <img className="py-10"src={cat_logo} alt=""/>
                        <div>
                            <div className="mt-0 mx-auto">
                                <div class="bg-white py-8 px-06 shadow rounded-lg">
                                    <form class="mb-0 space-y-6" action="#" method="POST">

                                        <div>
                                            <label for="email" class="ml-8 mr-8 block text-sm font-medium text-gray-700">Email</label>
                                            <div class="mt-3 ml-8 mr-8">
                                                <input id="email" name="email" type="email" autoComplete='email' 
                                                className="w-full border border-gray-400 rounded-lg shadow-sm focus:outline-none px-2 py-2" required/> 
                                            </div>
                                        </div>

                                        <div>
                                            <label for="password" class="ml-8 mr-8 block text-sm font-medium text-gray-700">Password</label>
                                            <div class="mt-3 ml-8 mr-8">
                                                <input id="password" name="password" type="password" 
                                                className="w-full border border-gray-400 rounded-lg shadow-sm focus:outline-none px-2 py-2" required/> 
                                            </div>
                                        </div>

                                        <div>
                                            <div class="mt-3 ml-8 mr-8">
                                                <button type="submit" className='rounded-lg border border-transparent text-sm font-medium w-full flex justify-center px-2 py-2 text-white bg-black '>Submit</button>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="mt-3 ml-8 mr-8">
                                            <button type="submit" className='rounded-lg border border-transparent text-sm font-medium w-full flex justify-center px-2 py-2 text-white bg-black '>No account? Sign up and join now!</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default User; 