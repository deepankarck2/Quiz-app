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
                    <button onClick={() => window.location.reload(false)}>Well done you got it right!</button>
                </div>
            );
        }else if(answerCheck === false){
            return (
                <div>
                    <h1> Wrong Answer. Try Again! </h1>
                </div>
            )
        } else{
            <></>
        }
    }

    return (
        <div>
            <Navbar></Navbar>
              <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800"> Random Question from General </h1>
              <hr class="my-8 h-px bg-black border-0 bg-black"></hr>
                {questions 
                ? questions.map((question, index) => {
                    return (<div  key={index}>
                        <h4>Question: {question.title}</h4>
                        <form>
                        {question.answer.map((ans,index) => {
                            return(
                                <div key={index}>
                                    <input onChange={ handleRadioChange } id={index} type='radio' value={ans.id} name="ans_vslues"/> 
                                    <label for="anss"> {ans.answer_text} </label>
                                </div>
                            )
                        } )}
                        </form>
                        <button type="submit" onClick= { checkAnswer }> Check Answer </button>
                        <Result />
                    </div>)
                })
                : null}
                <br></br>
              <a href='/' className="rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">Go Home</a>
        </div>
    )
}
 export default Random;