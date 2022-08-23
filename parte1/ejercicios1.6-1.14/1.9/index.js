import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [types, setTypes] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  )
  const [arr, setArr] = useState([])

  const func = (props) => {
    const AddReview = () => {
      const newType = {
        ...types,
        [props]: types[props] + 1
      }
      setTypes(newType)
      setArr(arr.concat(props))
    }
    return AddReview
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={func('good')} text="good" />
      <Button handleClick={func('neutral')} text="neutral" />
      <Button handleClick={func('bad')} text="bad" />
      <Stadistics good={types.good} neutral={types.neutral} bad={types.bad} arr={arr} />

    </div>
  )
}
const Stadistics = (props) => {
  if (props.arr.length == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <Stats type={props.good} text="good" />
        <Stats type={props.neutral} text="neutral" />
        <Stats type={props.bad} text="bad" />

        <All type={props.arr} text="all" />
        <Average good={props.good} bad={props.bad} arr={props.arr} text="average" />
        <Positive good={props.good} arr={props.arr} text="positive" />
      </div>
    )
  }

}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.text}
      </button >
    </div>

  )
}
const Stats = (props) => {
  return (
    <div>
      {props.text} {props.type}
    </div>
  )
}
const All = (props) => {
  return (
    <div>
      {props.text} {props.type.length}
    </div>
  )
}
const Average = (props) => {
  if (props.arr.length == 0) {
    return (
      <div>
        {props.text} 0
      </div>
    )
  } else {
    return (
      <div>
        {props.text} {((props.good - props.bad) / props.arr.length)}
      </div>
    )
  }
}
const Positive = (props) => {
  if (props.arr.length == 0) {
    return (
      <div>
        {props.text} 0
      </div>
    )
  } else {
    return (
      <div>
        {props.text} {(props.good / props.arr.length) * 100} %
      </div>
    )
  }
}



ReactDOM.render(<App />,
  document.getElementById('root')
)
