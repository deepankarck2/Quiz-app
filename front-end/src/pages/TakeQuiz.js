import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

function TakeQuiz(){
    let {topic} = useParams();
    let url = 'http://localhost:8000/api/' + topic +'/get_question';
    const [questions, setQuestions] = useState(null);
    const [showQues, setShowQues] = useState(0);

    useEffect(()=>{
        const fetchQuestion = () => {
            console.log("Fetching...");
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuestions(data);
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

    function nextQusFunc(e){
        setShowQues(showQues + 1);
        setSelanswer({});
        setAnswerCheck();
    }

    function Result(){
        if(answerCheck === true){
            return(
                <div>
                    <h1 class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-green-500 text-white"> Good! Right Answer </h1>
                </div>
            );
        }else if(answerCheck === false){
            return (
                <div>
                    <h1 class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg bg-red-500 text-white"> Wrong Answer </h1>
                </div>
            )
        } else{
            <><h1></h1></>
        }
    }

    return (
        <div class='antialiased text-gray-700 bg-gray-100'>
            <Navbar />
            <div class="flex w-full h-screen justify-center">
            <div class="w-full max-w-xl p-3">
              <h1 class="font-bold text-5xl text-center text-indigo-700"> { topic} Quiz</h1>
              <hr class="my-8 h-px bg-black border-0 bg-black"></hr>
              <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
                {questions ? questions.map((question, index) => {
                    if(index === showQues){
                        return (
                            <div  key={index}>
                                <p class="text-2xl font-bold">{question.title}</p>
                                <form>
                                {question.answer.map((ans,index) => {
                                    return(
                                        <div key={index} class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">
                                            <input onChange={handleRadioChange} id={index} type='radio' value={ans.id} name="ans_values" /> 
                                            <label for={index}>  {ans.answer_text} </label>
                                        </div>
                                    )
                                } )}
                                </form>
                                <div class="flex space-x-52 mt-4">
                                    <button type="submit" onClick={ checkAnswer } class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-5"> Check Answer </button>
                                    <button type='button' className='btn text-right' onClick={ nextQusFunc }> Next Question</button>
                                </div>
                                <Result />
                            </div>)
                    }
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

export default TakeQuiz;
