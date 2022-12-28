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
import FeedbackOptions from './FeedBackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import {Container} from './Components.styled';


class App extends Component{
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }


leaveFeedback = event =>{
  const{name} = event.target;
  this.setState(prevState=>{
    return {[name]: prevState[name]+1}
  });
};

countTotalFeedback(){
  const values = Object.values(this.state);
  let total = 0;
  for (const value of values){
    total += value;
  }
  return total;
};

countPositiveFeedbackPercentage(){
  const total = this.countTotalFeedback();
  const positivePercentage = total? ((this.state.good / total) *100).toFixed(0) : 0;
  return Number(positivePercentage);
};

render(){
  const{good, neutral, bad} = this.state;

  return(
    <Container>
      <Section title = "Please leave feedback">
        <FeedbackOptions
        options = {Object.keys(this.state)}
        onleaveFeedback = {this.leaveFeedback}>
        </FeedbackOptions>
      </Section>
      <Section title = "Statistics">
        {!this.countTotalFeedback() ? (
          <Notification message = "There is no feedback"/>
        ):(
          <Statistics 
          good={good}
          neutral={neutral}
          bad = {bad}
          total = {this.countTotalFeedback()}
          positivePercentage = {this.countPositiveFeedbackPercentage()}/>
        )
        }
      </Section>
    </Container>
  )

}
};

export default App;