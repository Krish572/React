import { useEffect, useState } from "react"

function App() {
  return (
    <div>
      Stop Watch
      <StopWatch/>
    </div>
  )
}

function StopwatchPractice(){

  const [sec, setSec] = useState(0);

  function increaseCount() {
    //sec value will pinned to 0
    // setSec(sec + 1);
    setSec(prev => prev+1)
  }

  useEffect(() => {
    setInterval(increaseCount, 1000);
  }, [])

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(sec);
  //     setSec(pre => pre+1)
  //   }, 1000);
  // }, [])


  return (
    <div>{sec}</div>
  )
}

function StopWatch(){
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function increaseCount(){
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(increaseCount, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning])

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => {
          setIsRunning(prev => !prev)
        }}>{isRunning ? "Resume" : "Start"}</button>
        <button onClick={() => {
          setIsRunning(false);
          setCount(0);
        }}>Reset</button>
      </div>
    </div>
  )
}

export default App
