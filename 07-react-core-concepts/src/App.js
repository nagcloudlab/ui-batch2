import {
  useState
} from 'react'


function Hr() {
  return <hr style={
    {
      color: 'red',
      backgroundColor: 'tomato',
      height: '1px',
    }
  } />
}

function Greeting({ message = "Hello", name = "Guest" }) {

  //props.message = 'Hi' // props are read-only

  // let message = props.message || 'Hello'
  // let name = props.name || 'Guest'
  // or
  //let { message = "Hello", name = "Guest" } = props

  return (
    <div className="alert alert-danger">
      <h1>{message}  <small>{name}</small></h1>
    </div>
  )
}

function Counter() {
  console.log("Counter=>render()");
  const [count, setCount] = useState(100)
  const incrementHandler = (e) => {
    setCount(count + 1) // trigger re-render
  }
  const decrementHandler = (e) => {
    setCount(count - 1) // 
  }
  return (
    <div className="card">
      <div className="card-header">Counter</div>
      <div className="card-body">
        <h1>{count}</h1>
        <button onClick={incrementHandler} className="btn btn-primary">Increment</button>
        <button onClick={decrementHandler} className="btn btn-danger">Decrement</button>
      </div>
    </div>
  )
}


function App() {
  const person = {
    name: 'John Doe',
    age: 25,
    job: 'Web Developer'
  }
  const hobbies = ['Reading', 'Writing', 'Coding', 'Traveling', 'Gaming']
  return (
    <>
      <div className="container">
        <div className="display-1">react core concepts</div>
        <hr />
        <ol className="list-group">
          <li className="list-group-item">jsx</li>
          <li className="list-group-item">naming conventions</li>
          <li className="list-group-item">
            props - data flow from parent to child
          </li>
          <li className="list-group-item">
            state - data , that changes over time
          </li>
        </ol>
        <Hr />
        <Greeting message="hey" name="rrb" />
        <Counter />
        <hr />
        {1 + 2} <br />
        {new Date().toLocaleTimeString()} <br />
        {person.name} <br />
        {person.age} <br />
        {person.job} <br />
        {person.name.toUpperCase()} <br />
        {person.age + 10} <br />
        {person.job.length} <br />
        {person.age > 18 ? 'Adult' : 'Minor'} <br />
        <br />
        <ul className="list-group">
          {hobbies.map((h, index) => {
            return <li className="list-group-item" key={index}>{h}</li>
          })}
        </ul>
        <div style={
          {
            backgroundColor: 'lightgray',
            padding: '10px',
            margin: '10px'
          }
        }>react</div>
      </div>
    </>
  )
}

export default App;
