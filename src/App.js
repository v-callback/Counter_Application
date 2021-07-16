import React,{useState} from 'react'
import "./style.css"

const App = ()=>{
    let [score, setScore] = useState(0)
    return(
        <div>
            <h1> Hey... This is my Counter Application </h1>
            <h4> The value of Your counting score is {score}</h4>
            <button onClick={()=>(score<25)? setScore(score+1) : "" }> INCREMENT </button>
            <button onClick={()=>(score>0)? setScore(score-1) : "" }> Decrement </button>
            <button onClick={()=>{setScore(0)}}> RESTART </button>
            <h5> Warning!! : This Counter Application will stop at the 25 number.</h5>
            
        </div>
        
    )
}

export default App