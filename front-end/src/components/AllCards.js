import Navbar from "./Navbar"
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function AllCards(){

    return(
        <>
        <Navbar />
        <div class= "cursor-pointer group">
            <div className="duration-300 perserve-3d group-hover:rotate-y-180 bg-white mt-10 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl ">
                <div className="front back-hidden flex justify-center bg-white rounded shadow-lg p-6">
                    Front
                </div>
                <div className="px-10 back back-hidden flex justify-center bg-gray-300 rounded shadow-lg p-6">
                    Back
                </div>
            </div>
        </div>
        </>
    );
}