import { useState } from "react";
const Button =({handleClick, rating})=>{
  return(
    <>
      <button onClick={handleClick}>{rating}</button>
    </>
  )
}
const Statistics=({good, neutral, bad, all})=>{
  
  return(
    <table>
      <tbody>
        <StatisticLine text={"Good"} rating={good}/>
        <StatisticLine text={"Neutral"} rating={neutral}/>
        <StatisticLine text={"Bad"} rating={bad}/>
        <StatisticLine text={"All"} rating={all}/>
        <StatisticLine text={"Average"} rating={(good+(bad * -1))/all}/>
        <StatisticLine text={"Positive"} rating={good / all *100}/>
      </tbody>
    </table>
  )
}

const StatisticLine=({text, rating})=>{
  return(
    <tr>
      <td>{text} </td>
      <td>{rating}</td>
    </tr>
  )
}

const App=()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] =useState(0);
  
  
  const handleClickGood=() => {
    setTotal(total + 1);
    setGood(good + 1);
  }
  const handleClickNeutral=() => {
    setTotal(total + 1);
    setNeutral(neutral + 1);
  }
  const handleClickBad=() => {
    setTotal(total +1)
    setBad(bad + 1);

  }
  return(
    <>
      <h1>Give feedback</h1>
      <Button rating={"good"} handleClick={handleClickGood}/>
      <Button rating={"neutral"} handleClick={handleClickNeutral}/>
      <Button rating={"bad"} handleClick={handleClickBad}/>
      <h1>Statistics</h1>
      {total? <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}  
        all={total}/>
        : "No feedback given"}
    </>
  )
}

export default App;