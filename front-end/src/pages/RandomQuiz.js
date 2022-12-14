import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';

function Random(){
    let url = 'http://localhost:8000/api/General/random_ques';
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
            <Navbar></Navbar>
              <h1> Random Question from General </h1>
                {questions 
                ? questions.map((question, index) => {
                    return (<div  key={index}>
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
 export default Random;