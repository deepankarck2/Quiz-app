import Navbar from "./Navbar"
import { useState } from "react";
import {Link} from 'react-router-dom'

export default function AllCards(){
    const [front, setFront] = useState([]);
    const [back, setBack] = useState([]);
    const [current, setCurrent] = useState(0);
    const front_items = ['AI', 'Floating point', 'Linear Regression', 'You have reached the end of your cards']
    const back_items = [
    "AI (short for artificial intelligence) is the simulation of human intelligence in machines that are programmed to think and act like humans. AI is a broad field that encompasses a wide range of technologies and techniques, including machine learning, natural language processing, and robotics. The goal of AI is to create machines that can perform tasks that typically require human intelligence, such as problem-solving, decision-making, and learning.",
    "A floating point number is a type of numerical representation that is used to store and manipulate decimal values in computer programs. In contrast to fixed point numbers, which have a fixed number of decimal places, floating point numbers use a dynamic decimal point that can move to represent a wider range of values.",
    "Linear regression is a statistical method that is used to model the relationship between a dependent variable and one or more independent variables. In a linear regression model, the dependent variable is assumed to be linearly related to the independent variables, and the model estimates the parameters of the linear relationship using a set of data.",
    ]
    function handleClick() {
        {back_items.length <= current ? setCurrent(prevIndex => prevIndex - 1) : 
        setCurrent(prevIndex => prevIndex + 1); }
    }
    function handleClick2() {
        setCurrent(prevIndex => prevIndex - 1);
    }

    return(
        <>
        <Navbar />
        <section class="mt-[50px] bg-white h-screen flex justify-center gap-x-16 text-black">
            <div class="mb-[350px] flex justify-center items-center">
                <div class="">
                    <button onClick={handleClick2} class="bg-red-200 border border-brown-light rounded-lg w-[90px] h-[40px]">Previous</button>
                </div>
            </div>
            <div class= "w-[700px] h-[400px] bg-transparent cursor-pointer group perspective">
                <div class = "relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
                    <div class="border-2 absolute backface-hidden w-full h-full">
                        <div class="text-center flex flex-col items-center justify-center h-full">
                            <p class="">
                                {front_items.map((item, index) => (index === current && <p>{item}</p> ))}</p>
                        </div>
                    </div>
                    <div class="absolute rotate-y-180 backface-hidden border-2 w-full h-full bg-gray-100 overflow-hidden">
                        <div class="text-center flex flex-col items-center justify-center h-full">
                            <p class="">
                                {back_items.map((item, index) => (index === current && <p>{item}</p> ))}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-[350px] flex justify-center items-center">
                <div class="">
                    <button onClick={handleClick} class="bg-green-200 border border-brown-light rounded-lg w-[90px] h-[40px]">Next</button>
                </div>
            </div>
        </section>
        </>
    );
}