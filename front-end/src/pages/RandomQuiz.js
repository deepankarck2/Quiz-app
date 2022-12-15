import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import React from 'react';

function Random(){
    let url = 'http://localhost:8000/api/General/random_ques';
    const [questions, setQuestions] = useState(null);
    const [showQues] = useState(0);

    useEffect(()=>{
        const fetchQuestion = () => {
            console.log("Fetching...");
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuestions(data);
                console.log(data);
            })
            .catch((err) => {
            // console.log(err);
            });
        }
        fetchQuestion();
    }, []);

    const [answerCheck, setAnswerCheck] = useState();

    function checkAnswer(e){
        const selected_answers = selanswer;

        const asnwer_choices = questions[showQues].answer;

        let right_choice = null;

        asnwer_choices.map((anss) => {
            if(anss.is_right == true){
                right_choice = anss.id;
            }
        })

        const selected_answer = Object.keys(selected_answers)[0];

        setAnswerCheck( right_choice == selected_answer );
    }

    const [selanswer, setSelanswer] = useState({});

    function handleRadioChange(e){
        setSelanswer({[e.target.value] : e.target.checked});
    }

    function Result(){
        if(answerCheck === true){
            return(
                <div>
                    <button type="button" onClick={() => window.location.reload(false)} class="mt-4 border bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-600 hover:border-green-800 rounded">Another Question</button>
                    <h1 class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-green-500 text-white"> Well done you got it right! </h1>
                </div>
            );
        }else if(answerCheck === false){
            return (
                <div>
                    <h1 class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-red-500 text-white"> Wrong Answer. Try Again! </h1>
                </div>
            )
        } else{
            <></>
        }
    }

    return (
        <div class='antialiased text-gray-700 bg-gray-100'>
            <Navbar></Navbar>
            <div class="flex w-full h-screen justify-center">
            <div class="w-full max-w-xl p-3">
              <h1 class="font-bold text-5xl text-center text-indigo-700"> Random Question </h1>
              <hr class="my-8 h-px bg-black border-0 bg-black"></hr>
              <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
                {questions 
                ? questions.map((question, index) => {
                    return (<div  key={index}>
                        <h4 class="text-2xl font-bold">Question: {question.title}</h4>
                        <form>
                        {question.answer.map((ans,index) => {
                            return(
                                <div key={index} class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">
                                    <input onChange={ handleRadioChange } id={index} type='radio' value={ans.id} name="ans_vslues"/> 
                                    <label for={index}> {ans.answer_text} </label>
                                </div>
                            )
                        } )}
                        </form>
                        <div class="flex space-x-20 mt-4">
                                    <button type="submit" onClick={ checkAnswer } class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Check Answer </button>
                        </div>
                        <Result />
                    </div>)
                })
                : null}
                </div>
                <br></br>
              <a href='/quiz-topics' class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">More Quizes</a>
                
            </div>
            </div>
        </div>
    )
}
 export default Random;