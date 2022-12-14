import {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Navbar from '../components/Navbar';

function TakeQuiz(){
    let url = 'http://localhost:8000/api/General/get_question';
    const [questions, setQuestions] = useState(null);

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

    return (
        <div>
            <Navbar />
              <h1> Take Quiz Page</h1>
                {questions ? questions.map((question, index) => {
                    return (
                    <div  key={index}>
                        <h4>Question: {question.title}</h4>
                        <form>
                        {question.answer.map((ans,index) => {
                            return(
                                <div key={index}>
                                    <input id="anss" type='radio' value={ans.answer_text} name="ans_vslues"/> 
                                    <label for="anss">{ans.answer_text}</label>
                                </div>
                            )
                        } )}
                        </form>
                        <button type="submit"> Submit </button>
                    </div>)
                })
                : null}
                <br></br>
              <a href='/'>Go Home</a>
        </div>
    )
}

export default TakeQuiz;