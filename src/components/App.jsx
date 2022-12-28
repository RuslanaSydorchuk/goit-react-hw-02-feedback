// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import React, {Component} from 'react';
import Section from './Section/Section';
import FeedbackOption from './FeedBackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

import {Container} from './Components.styled';

class App extends Component{
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
};

Feedback = event =>{
  const{name} = event.target;
  this.setState(prevState=>{
    return {[name]: prevState[name]+1}
  })
};



export default App;