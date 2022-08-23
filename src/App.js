// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Invoice from './components/Invoice';
import Tree from './components/Tree';
import TreeID from './components/TreeID';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/invoice'} className="nav-link">Invoice</Link></li>
            <li><Link to={'/tree'} className="nav-link">Tree</Link></li>
            <li><Link to={'/treeid'} className="nav-link">TreeID</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes >
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/invoice' element={<Invoice />} />
              <Route path='/invoice/:invoiceId' element={<Invoice />} />
              <Route path='/tree' element={<Tree />} />
              <Route path='/treeid/:idtree' element={<TreeID />} />
          </Routes >
        </div>
      </Router>
    );
  }
}

export default App;
