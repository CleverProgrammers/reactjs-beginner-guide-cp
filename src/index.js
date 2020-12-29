// 1. import useState hook from react
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// 2. make a functional react component that has a button & a counter
const App = function() {
    // how to write `const counter = 0` in ReactJS 👇
    const [counter, setCounter] = useState(0);

    return (
    <div>
      <h2>Let's go Daniel 💥🔫!</h2>
      {/* increment counter by 1 every time you click the button */}
      <button onClick={() => setCounter(counter + 1)} >Click Me 👉 {counter}</button>
    </div>
    )
};

// 3. show it on the screen 🚀
ReactDOM.render(<App />, document.getElementById('root'))