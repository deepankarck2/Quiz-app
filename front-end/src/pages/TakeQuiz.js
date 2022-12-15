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
                right_choice = anss.id
            }
        })
        console.log(asnwer_choices);
        const selected_answer = Object.keys(selected_answers)[0];

        setAnswerCheck( right_choice == selected_answer );
    }

    const [selanswer, setSelanswer] = useState({});

    function handleRadioChange(e){
        setSelanswer({[e.target.value] : e.target.checked});
    }

    function nextQusFunc(e){
        setShowQues(showQues + 1);
        setSelanswer({})
        setAnswerCheck()
    }

    function Result(){
        if(answerCheck === true){
            return(
                <div>
                    <h1> Good Right Answer </h1>
                </div>
            );
        }else if(answerCheck === false){
            return (
                <div>
                    <h1> Wrong Answer </h1>
                </div>
            )
        } else{
            <></>
        }
    }

    return (
        <div>
            <Navbar />
              <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800"> Take Quiz Page</h1>
              <hr class="my-8 h-px bg-black border-0 bg-black"></hr>
                {questions ? questions.map((question, index) => {
                    if(index === showQues){
                        
                        return (
                            <div  key={index}>
                                <h4>Question: {question.title}</h4>
                                <form>
                                {question.answer.map((ans,index) => {
                                    return(
                                        <div key={index}>
                                            <input onChange={handleRadioChange} id={index} type='radio' value={ans.id} name="ans_values"/> 
                                            <label for="anss">  {ans.answer_text} </label>
                                        </div>
                                    )
                                } )}
                                </form>
                                <button type="submit" onClick={ checkAnswer }> Submit </button>
                                <br></br>
                                <button type='button' className='btn' onClick={ nextQusFunc }> Next Question</button>
                                <Result />
                            </div>)
                    }
                })
                : null}
                <br></br>
              <a href='/'>Go Home</a>
        </div>
    )
}

export default TakeQuiz;