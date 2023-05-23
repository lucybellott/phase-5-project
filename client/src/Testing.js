import {useState, useEffect} from 'react';

function Testing () {

    const [content, setContent] = useState([])
    const [counter, setCounter] = useState(0)

    const handleCounter = () => setCounter(counter + 1)

    const [isBold, setWeight] = useState(false)

    const handleClick = () => {
     
      setWeight(!isBold)
    }

    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    const handleTimer = () => setTimerOn(true)

    useEffect(() => {
        let interval = null;
        timerOn ? interval = setInterval(() => {
            setTime(prevTime => prevTime + 10)
        }, 10)
        : clearInterval(interval)
    }, [timerOn])

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(data => setContent(data))
    },[])

    const contentP = content.map((cont) => {
        return <div key={cont.id}>{cont.title}</div>
    })



    
   return (
       <div>
            <p>counter: {counter}</p>
            <button onClick={handleCounter}>up</button>
            <br/>
    
            { isBold ? 
                <div>
                <button style={{fontWeight: 'bold'}}  onClick={handleClick}>button A</button>
                <button>button B</button> 
                </div> :
                <div>
                <button >button A</button>
                <button style={{fontWeight: 'bold'}}  onClick={handleClick}>button B</button> 
                </div>
                }
            <p>StopWatch</p>
            <p>Time : {time}</p>
            <button onClick={handleTimer}>Start</button>

            <p>{contentP}</p>
       
         </div>
   )
}
export default Testing;