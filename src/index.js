// 1. import react & reactdom ✅
import React from 'react';
import ReactDOM from 'react-dom';

// 2. make a react component (function or class)
const App = function() {

    return (
    <div>
      <h2>Let's go Daniel 💥🔫!</h2>
    </div>
    )
};

// 3. show it on the screen 🚀
ReactDOM.render(<App />, document.getElementById('root'))