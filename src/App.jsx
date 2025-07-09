import { useState } from 'react';
import  './App.css'

function App() {
  let randomson = Math.floor(Math.random()*90+10);
  let [raqam, setRaqam]= useState(randomson);
  let [hidden,setHidden] = useState(true);
  let [text, setText] = useState("");
  console.log(raqam);
  function plus() {
    setRaqam(raqam+1)
  }
  function minus() {
    setRaqam(raqam-1);
  }
  function handleChange(e){
    setText(e.target.value);
  }
  return (
    <div>
      <h2>Random son:</h2>
      <h1>{raqam}</h1>
       <button onClick={plus}>Plus</button>
       <button onClick={minus}>Minus</button>
       <hr />
       <h3>Hidden Component</h3>
       <button onClick={()=>setHidden (false)}>Hidden</button>
       <button onClick={()=>setHidden(true)}>Show</button>
       <div style={{display:hidden==true?"block":"none"}} >
        <p>Hello my name is marslikbola</p>
        <img src="" alt="" />
       </div>
       <hr />
       <h2>Input Change</h2>
       <input type="text" placeholder='Yozing..' onChange={handleChange}/>
       <p><b>Your text:</b>{text}</p>
    </div>
  )
}

export default App