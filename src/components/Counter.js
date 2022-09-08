import React,{useEffect, useState} from 'react'


const Counter = () => {
  const[timer,setTimer] = useState(-1)
  useEffect(()=>{
 const interval = setInterval(()=>{
  setTimer(timer + 1)
 }, 1000)
  },[timer])
  
  
  const [word,setWord]= useState("")
  const [count,setCount]=useState(0)
  
  function handleChange(e){
    setWord(e.target.value)
    
  }

  function handleSubmit(e){
    e.preventDefault()

    const newLength =  count + word.length
    setWord("")
   setCount(newLength)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={word}
      onChange={handleChange}
      >
        
      </input>
      
      <button>Click me</button>
      
      </form>
      <h1>{count}</h1>
      <h1>{timer}</h1>
    </div>
  )
}

export default Counter



// Add a controlled form that includes:X
// A text inputX
// A button with the text of “Click Me!”X
// A p tag that has a counter that starts at 0X
// When they input text in the text field, the text input should reset x
//and based on word length, the counter should increment.
// The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.

// add onchnage we need a handlechange to do the job
