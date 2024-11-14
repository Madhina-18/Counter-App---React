
import {useState} from "react"

function Counter()
{  

    var [count,setCount] = useState(0)

    function increment()
    {
       setCount(count+1)
    }

    function decrement()
    {
        setCount(count-1)
    }

    function reset()
    {
        setCount (0)
    }

  return(
    <div className="Counter__container">
   
     <div className="Counter__heading">
        <h1 style={{marginTop: "20px"}}>App Counter</h1>
     </div>


    <div className="Counter__Counting">

        <h1 style={{cursor: "pointer"}}>{count}</h1>

    </div>



     
     <div className ="Counter__btns">
        <button onClick={increment} style={{width:"60px", borderRadius:"20px", height: "20px", border: "none", cursor: "pointer",backgroundColor:"green"}}>INC + </button>
        <button  onClick={decrement} style={{width:"60px", borderRadius:"20px", height: "20px", border: "none", cursor: "pointer",backgroundColor:"green"}}>DEC - </button>
     </div>


     
     <div className="reset__btn">
        <button  onClick={reset} style={{border: "none", padding: "10px", borderRadius: "10px", cursor: "pointer",backgroundColor:"red"}}>Reset</button>

     </div>
      
  



</div>

  )
}


export default Counter