import { Link } from "react-router-dom";
function Topic (props){
    return(
            <div class="m-3 py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="Woman's Face"/>
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        {props.title}
                    </p>
                    <br></br>
                    </div>
                    <Link to={'/take/' + props.title}>
                        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Take Quiz</button>
                    </Link>
                </div>      
            </div>
    )
}

export default Topic;