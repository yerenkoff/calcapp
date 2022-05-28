import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './form.js';
// console.log(document.querySelector('input[name="channelType"]:checked'));
const root = ReactDOM.createRoot(document.getElementById('root'));

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [<Form key={0}/>],
    }
    
  }
  
  render() {
    return (
      <div className='container'>
        
        <h1>Calculator</h1>
        {
          this.state.forms
        }
        
        <button className="addFormButton" onClick={() => this.setState((state, props) => ({
          forms: state.forms.concat([<Form key={state.forms.length}/>])
        }))}>Добавить расчёт</button>
      </div>
    )
  }
}


root.render(
  <Container />
);