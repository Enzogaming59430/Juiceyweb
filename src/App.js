import "./App.css";
import { useState, useEffect, Component } from "react";
import "./movingwindow.js"
import clip from './bg.mp4'; 
import Draggable from "react-draggable";


function App() {


  let build = "???";
  const version = 0.81;
  if (process.env.NODE_ENV === 'development') {
    console.log(process.env.NODE_ENV)
    let build = "DEVELOPPEMENT";
} else {
  let build = "PRODUCTION";
}

 let promptvar ="Welcome to JTERMINAL version "+version+" on a " + build + " build!"


  function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Username");
    let password = prompt("Please enter your password:", "Password");
    if (person == null || person == "") {
      setMyArray([...myArray, inputValue, "Acess denied"]);
    } else {
      if (person == "enzo" && password == "1234"){
        setMyArray([...myArray, person + " Authentified! "]);
        user1auth = true
      }else{
        setMyArray([...myArray, person + " Is not in the user list, Aborting.. "]);
        document.cookie = "authuser1=true; path=/"
      }
    }
    document.getElementById("demo").innerHTML = text;
  }
  function prompt() {
    let text;
    let prompt = prompt("Please enter your name:", "Username");

    if (prompt == null || prompt == "") {
      setMyArray([...myArray, inputValue, "Acess denied"]);
    } else {
      promptvar = prompt
    }
    document.getElementById("demo").innerHTML = text;
  }


useEffect(()=>{
  let x = document.cookie;
  console.log(x)
  if (x == true) {
    setMyArray([...myArray, "Welcome back Enzo !"]);
  } else {
    setMyArray([...myArray, promptvar])
  }
}, [])

  const user1auth = false;
  const [inputValue, setInputValue] = useState("");
  const [myArray, setMyArray] = useState([]);

  const handleInput = (e) => {
    const value =  e.target.value

    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "delete") {
      setMyArray([...myArray, inputValue, "Acess denied"]);
    } else if (inputValue === "clear") {
      setMyArray([]);
    }
  else if (inputValue === "reset") {
    window.location.reload(false);
  }
  else if (inputValue === "unauth") {
    document.cookie = "authuser1=false; path=/";
    window.location.reload(false);
  }
  else if (inputValue === "auth") {
    setMyArray([...myArray, inputValue]);
    myFunction()
  }
  else if (inputValue === "help") {
    setMyArray([...myArray, inputValue, "List of help", "reset - Resets page / console", "clear - Clears the console", "auth - Identify yourself to gain acess to some of the console commands", "delete - [AUTH REQUIRED] Deletes a file", "help - Shows this help", "secret - enable VERY secret mode, grants acess to the website code"]);
  }
  else if (inputValue === " ") {
    setMyArray([...myArray, ""]);
  }
  else if (inputValue === "secret") {
    setMyArray([...myArray,inputValue, "secret activated"]);
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }
  else if (inputValue === "version") {
    setMyArray([...myArray, inputValue, "Jterminal Version " +version]);
  }
  else if (inputValue === "prompt" ) {
    setMyArray([...myArray, inputValue, "Prompt Saved"]);
  }
  else if (inputValue === "showprompt") {
    setMyArray([...myArray, inputValue, prompt]);
  }
  else if (inputValue === "party") {
    setMyArray([...myArray, inputValue]);
    return(<redirect to="/d"></redirect>)
  }
    else {
      setMyArray([...myArray, inputValue, inputValue + " is not a function or a file" ]);
    }
    setInputValue([]);
  };
  

  return (
    
    <div className="App">
    {build}
      <div className="Console"></div>
      <div className="children">
        {myArray.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
   <input id="input" autocomplete="off" value={inputValue} onChange={(e) => handleInput(e)} autoFocus></input> 
   <audio control src="./med.mp3"></audio>
        </form>
      </div>
    </div>
  );
}

export default App;
