import {useState, useEffect} from 'react'

import Navbar from "../components/Navbar";
import Topic from "../components/Topic";

function QuizTopics() {
    let url = 'http://localhost:8000/api/quiz_topics';
    const [topics, setTopics] = useState(null);
   
    useEffect(()=>{
        const fetchQuestion = () => {
            console.log("Fetching...");
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTopics(data);
                console.log(data);
            })
            .catch((err) => {
            // console.log(err);
            });
        }
        fetchQuestion();
    }, []);
    return(
        <div class="">
            <Navbar />
            <div class="bg-gray-50 min-h-screen">
                <div class="container mx-auto px-12">
                    <h1 class="text-2xl text-center	"> Quiz Topics</h1>
                    <hr class="my-8 h-px bg-black border-0 bg-black"></hr>
                    <div className="flex flex-wrap justify-center">
                        {topics ? 
                            topics.map((topic) =>{
                                return(
                                <Topic title= {topic.title} key={topic.id}/>
                                )
                        }) : null}
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default QuizTopics;