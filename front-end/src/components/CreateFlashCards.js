import Navbar from "./Navbar"
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function CreateFlashCards(){
    const [front, setFront] = useState();
    const [back, setBack] = useState("");

    return(
        <>
        <Navbar/>
        <div class="container mx-auto mt-10 overflow-hidden">
            <div class="flex justify-center items-center">
                <div class="bg-white">
                    <div class="grid grid-cols-8 gap-10 w-screen">
                        <div class="col-span-1 sm:col-span-1"></div>
                        <div class="col-span-2 sm:col-span-3 border rounded-lg shadow-lg">
                            <div className="bg-gray-50 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div class="flex justify-center"> 
                                <text class="focus:outline-none break-all">{front}</text>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 sm:col-span-3 border rounded-lg shadow-lg">
                            <div className="bg-gray-50 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div class="flex justify-center"> 
                                    <text class="focus:outline-none break-all">{back}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    </br>
                    <div className="border rounded shadow-lg mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-4 lg:max-w-6xl lg:px-6">
                        <div class="grid grid-cols-8 gap-10 w-fill">
                            <div class="col-span-1 sm:col-span-1"></div>
                            <div class="col-span-2 sm:col-span-3">
                            <label for="front" class="block mb-2 text-sm font-medium text-gray-700">Front of flashcard</label>
                                    <div class="flex justify-center"> 
                                    <textarea onChange={(e) => {
                                        setFront(e.target.value)
                                    }}
                                    id="front" 
                                    rows="4" 
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Front of the card"></textarea>
                                    </div>
                            </div>
                            <div class="col-span-2 sm:col-span-3">
                            <label for="back" class="block mb-2 text-sm font-medium text-gray-700">Back of flashcard</label>
                                    <div class="flex justify-center"> 
                                    <textarea onChange={(e) => {
                                        setBack(e.target.value)
                                    }} 
                                    id="back" 
                                    rows="4" 
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Back of the card"></textarea>
                                    </div>
                            </div>
                            
                        </div>
                        <div class="mt-5 ">
                            <div class="grid grid-cols-8 gap-3">
                                <div class="col-span-1 m:col-span-1"></div>
                                    <div class="col-span-2 m:col-span-2 px-5 py-3 bg-gray-400 rounded shadow-lg text-white text-center align-middle"> 
                                        <button class= "">Create</button>
                                        {/* onClick  */}
                                    </div>
                                    <div class="col-span-4 sm:col-span-4 px-5 py-3 bg-gray-400 rounded shadow-lg text-white text-center align-middle">
                                        <Link to="/AllCards" class="">
                                            <button class=""> Show other cards </button>
                                        </Link> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
