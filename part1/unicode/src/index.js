import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  if (props.total > 0) {
    return (
      <div>      
        <table>
          <tbody>
            <tr>
              <td width="50pixels">{props.cat}</td>
              <td>{props.result} {props.extra}</td>
            </tr>
          </tbody>
        </table>     
      </div>
    )
  } 
  if (props.cat === "good") {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p></p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good +1)} text="good"/>        
      <Button onClick={() => setNeutral(neutral +1)} text="neutral"/> 
      <Button onClick={() => setBad(bad +1)} text="bad"/> 
      <h1>statistics</h1>
      <Statistics cat="good" result={good} extra={""} total={good+neutral+bad}/>
      <Statistics cat="neutral" result={neutral} extra={""} total={good+neutral+bad}/>
      <Statistics cat="bad" result={bad} extra={""} total={good+neutral+bad}/>
      <Statistics cat="all" result={good+bad+neutral} extra={""} total={good+neutral+bad}/>
      <Statistics cat="average" result={(good-bad)/(good+bad+neutral)} extra={""} total={good+neutral+bad}/>
      <Statistics cat="positive" result={(good*100)/(good+bad+neutral)} extra={"%"} total={good+neutral+bad}/>      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
