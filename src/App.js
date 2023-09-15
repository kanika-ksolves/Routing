// import React from 'react';
// //import { useState } from 'react';
// import './App.css';
// import ClassCounter from './components/classCounter';
// import HOC from './HOC/hoc';
// //import Counter from './components/functionCounter';
// //import ChatRoom from './components/classLifecycle/chatRoom';
// //import ChatRoom from './components/functionLifecycle/ChatRoom';
// function App() {
//   //const [roomId, setRoomId] = useState('general')
//   //const [show, setShow] = useState(false)
//   return (
//     <div >
//       {/* <label>
//         Choose the chat room: {' '}
        
//         <select
//         value={roomId}
//         onChange={e => {
//           setRoomId(e.target.value)
//         }}
//         >
//         <option value='general'>General</option>
//         <option value='travel'>Travel</option>
//         <option value='music'>Music</option>
//         </select>
//       </label>
//       <button onClick={()=> setShow(!show)}>
//         {show ? 'Close Chat': 'Open Chat'}
//       </button>
//       {show && <hr/>}
//       {show && <ChatRoom roomId={roomId}/>} */}
//       {/* <ClassCounter>
//       <HOC cmp={ClassCounter}/>
//       </ClassCounter> */}
//       {/* <Counter/> */}
//     </div>
//   );
// }


//------------------ROUTING---------------------
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Routing/Home';
//import About from './components/Routing/About';
import Contact from './components/Routing/Contact';
import Order from './components/Routing/Order';
import { Component} from 'react';
const LazyAbout = React.lazy(()=>import('./components/Routing/About'))
//import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
        <div className='App'>
          <ul className='App-header'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/contact">Contact US</Link>
            </li>
          </ul>
        
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<React.Suspense fallback = 'Loading...'>  <LazyAbout/> </React.Suspense>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/order-summary' element={<Order/>}></Route>
      </Routes>  
      </div>
    </Router>
  );
  }
}

 export default App;
