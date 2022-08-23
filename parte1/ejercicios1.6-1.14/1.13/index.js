import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  let [arr, setArr] = useState([0, 0, 0, 0, 0, 0])

  function next() {
    const number = (parseInt(Math.random() * 10) % 6)
    setSelected(number)
  }
  function vote() {
    const arr2 = [...arr]
    arr2[selected] += 1
    setArr(arr2)
  }
  return (
    <div>
      selected: {selected}
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>
        votes: {arr[selected]}
      </p>

      <Button handleClick={() => next()} text="next anecdote" />
      <Button handleClick={() => vote()} text="vote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button >
  )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

 


