import { useState,useEffect } from 'react'

function App() {
  const [state, setState] = useState(true)
  const [count, setCount] = useState(0)
  const [count00,setCount00] = useState(0)
  const [count000,setCount000] = useState(0)
  const [count0000,setCount0000] = useState(0)
  const [count00000,setCount00000] = useState(0)
  const [count000000,setCount000000] = useState(0)


  useEffect(() => {
    if (state === true) {
      setTimeout(() => {
        
        if(count<9){
          setCount(count+1)
        }else if(count === 9){
          setCount(0)
          setCount00(count00+1)
        }
        if (count00 === 9 && count === 9){
          setCount00(0)
          setCount000(count000+1)
        }

        if (count00 === 9 && count === 9 && count000===9){
          setCount00(0)
          setCount000(0)
          setCount0000(count0000+1)
        }
        if (count00 === 9 && count === 9 && count000===9 && count0000===9){
          setCount00(0)
          setCount000(0)
          setCount0000(0)
          setCount00000(count00000+1)
        }
        if (count00 === 9 && count === 9 && count000===9 && count0000===9 && count00000===9){
          setCount00(0)
          setCount000(0)
          setCount0000(0)
          setCount00000(0)
          setCount000000(count000000+1)
        }
        if (count00 === 9 && count === 9 && count000===9 && count0000===9 && count00000===9 && count000000===9){
          setCount000000(0)
          setState(false)
        }

      }, 10);
    }
  },);

  function handleStopBtn (){
    setState(false)
  }
  
  function handleResumeBtn(){
    setState(true)
  }

  function handleResetBtn (){
    setCount(0)
    setCount00(0)
    setCount000(0)
    setCount0000(0)
    setCount00000(0)
    setCount000000(0)
    setState(false)
  }


  return (
    <>
      <div className='counterContainer'>
        <p className='numeros'>{count}</p>
        <p className='numeros'>{count00}</p>
        <p className='numeros'>{count000}</p>
        <p className='numeros'>{count0000}</p>
        <p className='numeros'>{count00000}</p>
        <p className='numeros'>{count000000}</p>
        <i className="numeros fa-regular fa-clock fa-5x "></i>
      </div>
      <div className='btnContainer'>
        <button onClick={handleStopBtn}>Stop</button>
        <button onClick={handleResumeBtn}>Resume</button>
        <button onClick={handleResetBtn}>Reset</button>
      </div>
    </>
  )
}

export default App
