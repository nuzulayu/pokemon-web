// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Pokemon from './component/pokemon/Pokemon';

const App = () =>{
  return(
    <div className="App">
      <Pokemon />
    </div>
  )
}

// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <Pokemon />
//       </div>
//     );
    
//   }


//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
// }

export default App;
