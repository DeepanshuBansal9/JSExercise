import logo from './logo.svg';
import './App.css';
import { HelloWorld, ByeWorld } from './Components/HelloWorld';
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Link}from 'react-router-dom'
import Contact from'./Components/Contact';

function App() {
 
  const [counter, setCounter] = useState(0);
  
  
  const increment = ()=>{
      setCounter(counter +1)
  }

  console.log(counter)
  useEffect(()=> {
    document.title = `clicked ${counter} times`
  },[counter])
 
 
  return (
    <div className="App">
    <Router>
    <nav>
    <Link to='/' className='text'>Home</Link>
    <Link to='/Contact' className='text'>Contact</Link>
    <Link to='/about' className='text'>About</Link>
       </nav>
       <Route exact path='/' render={()=>(
        <>

        <h1>Hello World</h1>
      <p>Deepu is teaching</p>
      <HelloWorld/>
      <HelloWorld text="Hey! bansal how are u?"/>
      <HelloWorld/>
      <ByeWorld text="Good Bye"/ >
      <button onClick={increment}>Click me!</button>
      <h1>{counter}</h1>
      </>
        )}/>
     
      <Route path='/Contact' component= {Contact} />
    </Router>
   </div>
  );
}

export default App;
