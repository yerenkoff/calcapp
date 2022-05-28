import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './form.js';
// console.log(document.querySelector('input[name="channelType"]:checked'));
const root = ReactDOM.createRoot(document.getElementById('root'));

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 0,
      // forms: [],
      formData: [
        [
          {
            channelName: "Яндекс.Директ",
            leads: 15,
            leadPrice: 1300,
            channelCost: 90000,
          },
        ]
      ],
    }
    // this.handleAddChannel = this.handleAddChannel.bind(this);
    this.handleSetCurrentForm = this.handleSetCurrentForm.bind(this);
  }

  // componentDidMount() {
  //   this.setState((state, props) => ({ forms: <Form handleSetCurrentForm={this.handleSetCurrentForm} key={10} channelData={this.state.formData[0]} formId={10} /> }));
  // }

  handleSetCurrentForm(formId) {
    this.setState({ currentForm: formId })
    console.log(formId);
  }

  // handleAddChannel(formId) {
  //   this.setState(function (state, props) {
  //     let newFormData = state.formData;
  //     newFormData[formId].concat({
  //       channelName: document.querySelector('input[name="channelType"]:checked').value,
  //       leads: 15,
  //       leadPrice: 1300,
  //       channelCost: 90000,
  //     })
  //     return {
  //       formData: newFormData,

  //     }
  //   })
  // }

  addRow = () => {
    // console.log(this.state.currentForm);
    this.setState(function (state, props) {
      let newFormData = state.formData;
      newFormData[this.state.currentForm].push({
        channelName: document.querySelector('input[name="channelType"]:checked').value,
        leads: 15,
        leadPrice: 1300,
        channelCost: 90000,
      })
      // console.log(newFormData[this.state.currentForm]);
      return {
        formData: newFormData,

      }
    }, function () {
      console.log(this.state.formData);
    })
  }

  render() {
    var indents = [];
    for (var i = 0; i < this.state.formData.length; i++) {
      indents.push(
        <Form handleSetCurrentForm={this.handleSetCurrentForm} key={i} channelData={this.state.formData[i]} formId={i} />
      );
    }
    return (
      <div className='container'>
        <div className="modal">
          <form action="">
            <button className="close" type="button">╳</button>
            <h2>Добавить канал</h2>
            <input type="radio" id="yandex" name="channelType" value="Яндекс.Директ" defaultChecked onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="yandex">Яндекст.Директ</label><br />
            <input type="radio" id="google" name="channelType" value="Google.Adwords" onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="google">Google.Adwords</label><br />
            <input type="radio" id="seo" name="channelType" value="SEO" onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="seo">SEO</label><br />
            <input type="radio" id="vk" name="channelType" value="ВКонтакте" onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="vk">ВКонтакте</label><br />
            <input type="radio" id="ok" name="channelType" value="Одноклассники" onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="ok">Одноклассники</label><br />
            <input type="radio" id="email" name="channelType" value="Email рассылка" onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="email">Email рассылка</label><br />
            <button id="buttonAdd" type="button" onClick={this.addRow}>Добавить</button>
          </form>
        </div>
        <h1>Calculator</h1>
        {
          indents
        }


        <button className="addFormButton" onClick={() => this.setState(function(state){
          let newFormData = state.formData;
          newFormData.push([{
            channelName: "Яндекс.Директ",
            leads: 15,
            leadPrice: 1300,
            channelCost: 90000,
          }])
          return {
            formData: newFormData,
          }
        })}>Добавить расчёт</button>
      </div>
    )
  }
}


root.render(
  <Container />
);