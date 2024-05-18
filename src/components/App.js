import { useState } from "react";
import List from "./List";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
//  import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/app.css'

  const initialItems = [
    
  ];



function App() {

  const [items, setItems] = useState(initialItems)
  const [text, setText] = useState(null);

  function handleOnChange(e){
    setText(e.target.value);
  }

  let nextId = 1;
  function handleOnClick(){
      
      const nextItems = [...items,{
        id:nextId, name: text
      }];
      setItems(nextItems)
      setText('');
      nextId +=1;
   
  }
  
  return (
    <>
    <Navbar/>
    <div className="homesection">
    <List items ={items} />

    <div className="container">
      <div  className= "inner">
        <h1>Welcome to My Todo App</h1>
        <p>This is a simple example of interacting with React.</p>
        <TextArea text= {text} funct ={handleOnClick} handleChange = {handleOnChange} />
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
