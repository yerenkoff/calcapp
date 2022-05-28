import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './form.js';
// console.log(document.querySelector('input[name="channelType"]:checked'));
const root = ReactDOM.createRoot(document.getElementById('root'));

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.sumLeads = this.sumLeads.bind(this);
    this.state = {
      
    }
    
  }

  

  sumLeads() {
    // this.setState({temperature: e.target.value});
  }

  

  

  render() {
    return (
      <div className='container'>
        
        <h1>Calculator</h1>
        <Form />
      </div>
    )
  }
}


root.render(
  <Container />
);