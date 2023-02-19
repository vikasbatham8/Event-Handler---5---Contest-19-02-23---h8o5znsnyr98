import React from 'react'
import '../styles/App.css';
const App = () => {
   const sumit=()=>{
    console.log("form sumitted");
   }

  return (
    <div id="main">
      <form>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit' onclick="sumit()">Submit</button>
      </form>
    </div>
  )
}


export default App;
