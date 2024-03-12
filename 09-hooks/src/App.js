import { useState, useReducer, useEffect } from "react";

// useState
// when to use useState ?
// state management in functional component
// if state is simple value (number, string, boolean)
function CounterV1() {
  const [fooCount, setFooCount] = useState(0);
  const [barCount, setBarCount] = useState(function () {
    //..
    return 10;
  });

  const incrementFoo = () => {
    setFooCount(fooCount + 1);
  }
  const incrementBar = () => {
    // setBarCount(barCount + 1);
    setBarCount(prevBarCount => prevBarCount + 1); // functional update
  }
  return (
    <div className="card">
      <div className="card-header">Counter : useState</div>
      <div className="card-body">
        <div className='display-4'>{fooCount}</div>
        <button className='btn btn-primary'
          onClick={incrementFoo}>
          foo
        </button>
        <hr />
        <div className='display-4'>{barCount}</div>
        <button className='btn btn-primary'
          onClick={incrementBar}>
          bar
        </button>
      </div>
    </div>
  );
}

// useReducer
// when to use useReducer ?
// state management in functional component
// if state is complex value (object, array)
// if state transition is complex
// if state logic is complex

// what is reducer ?
// reducer is a function that receives state and action, then returns new state
// pure function
const reducer = (state, action) => {
  let { type, payload = 1 } = action;
  switch (type) {
    case 'INCREMENT':
      return { count: state.count + payload };
    case 'DECREMENT':
      return { count: state.count - payload };
    default:
      throw new Error('invalid action');
  }
}

function CounterV2() {
  const initialState = { count: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="card">
      <div className="card-header">Counter : useReducer</div>
      <div className="card-body">
        <div className='display-4'>{state.count}</div>
        <button className='btn btn-primary' onClick={e => dispatch({ type: "INCREMENT" })}>
          increment
        </button>
        <button className='btn btn-danger' onClick={e => dispatch({ type: "DECREMENT" })}>
          decrement
        </button>
        <button className='btn btn-primary' onClick={e => dispatch({ type: "INCREMENT", payload: 10 })}>
          increment by 10
        </button>
        <button className='btn btn-primary' onClick={e => dispatch({ type: "DECREMENT", payload: 10 })}>
          decrement by 10
        </button>

      </div>
    </div>
  );
}


// what is side effect ?
// network request
// DOM manipulation
// event listeners
// timers
// local storage
// animation
// document.title
// ...

// when to execute side effect ?
// when component is mounted (initial render)
// when component is updated (re-render)
// when component is unmounted (destroy)

// how to execute side effect ?
// useEffect hook
function CounterV3() {
  const [fooCount, setFooCount] = useState(0);
  const [barCount, setBarCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    console.log("on initial render - effect-1");
    // timer
    const interval = setInterval(() => {
      console.log("tick");
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // clean up
    return () => {
      console.log("clean up");
      clearInterval(interval);
    }
  }, [])
  useEffect(() => {
    console.log("on every render - effect-2");
  })
  useEffect(() => {
    console.log("on fooCount change - effect-3");
    // change document title
    document.title = `fooCount : ${fooCount}`;
  }, [fooCount]);
  useEffect(() => {
    console.log("on barCount change - effect-4");
    // network request
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => console.log(posts))
  }, [barCount]);
  useEffect(() => {
    console.log("on fooCount or barCount change - effect-5");
  }, [fooCount, barCount])

  return (
    <div className="card">
      <div className="card-header">Counter : useEffect : {time}</div>
      <div className="card-body">
        <div className='display-4'>{fooCount}</div>
        <button className='btn btn-primary' onClick={e => setFooCount(fooCount + 1)}>
          increment foo
        </button>
        <hr />
        <div className='display-4'>{barCount}</div>
        <button className='btn btn-primary' onClick={e => setBarCount(barCount + 1)}>
          increment bar
        </button>
      </div>
    </div>
  );
}


// Example  : useState + useEffect
function FetchDataFromBackend() {
  const [data, setData] = useState([]);
  const [resourceType, setResourceType] = useState(null);
  useEffect(() => {
    console.log("on initial render or resourceType change");
    if (resourceType) {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=5`)
        .then(response => response.json())
        .then(data => setData(data))
    }
  }, [resourceType]);
  return (
    <div className="card">
      <div className="card-header">FetchDataFromBackend</div>
      <div className="card-body">
        <button className='btn btn-primary' onClick={e => setResourceType("users")}>
          Top-5 Users
        </button>
        <button className='btn btn-primary' onClick={e => setResourceType("posts")}>
          Top-5 Posts
        </button>
        <button className='btn btn-primary' onClick={e => setResourceType("comments")}>
          Top-5 Comments
        </button>
        <hr />
        {resourceType}
        <hr />
        <div className='display-4'>
          {JSON.stringify(data)}
        </div>
      </div>
    </div>
  )
}



function App() {
  // const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <div className='display-1'>hooks</div>
      <hr />
      {/* <CounterV1 /> */}
      {/* <CounterV2 /> */}
      {/* <button className='btn btn-primary' onClick={e => setToggle(!toggle)}>toggle</button> */}
      {/* {toggle ? <CounterV3 /> : null} */}
      <FetchDataFromBackend />
    </div>
  );
}

export default App;
