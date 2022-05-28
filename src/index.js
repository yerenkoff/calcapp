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
            clicks: 13000,
            clickPrice: 130,
            conversion: 12,
            leads: 115,
            leadPrice: 11300,
            channelCost: 190000,
          },
        ]
      ],
      formSums: [
        {
          leadSum: 70,
          leadPriceSum: 1500,
          channelCostSum: 90000,
          conversionInSales: 90,
          // sales: 50,
          // customerPrice: 15000,
        }
      ],
      conversions: [70],
      modalClass: "modal", 
    }
    // this.handleAddChannel = this.handleAddChannel.bind(this);
    this.handleSetCurrentForm = this.handleSetCurrentForm.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleConversion = this.handleConversion.bind(this);
  }

  // componentDidMount() {
  //   this.setState((state, props) => ({ forms: <Form handleSetCurrentForm={this.handleSetCurrentForm} key={10} channelData={this.state.formData[0]} formId={10} /> }));
  // }

  handleSetCurrentForm(formId) {
    this.setState({ 
      currentForm: formId,
      modalClass: "modal modalShow",
     }, function() {
       console.log(this.state.modalClass)
     })
    console.log(formId);
  }

  handleConversion(formId, value) {
    this.setState(function (state) {
      let newConversions = state.conversions;
      newConversions[formId] = value;
      return {
        conversions: newConversions,
      }
    }, function() {
      console.log(this.state.conversions)
    })
    // console.log(formId);
  }

  handleDeleteForm(formId) {
    this.setState(function (state) {
      let newFormData = state.formData;
      newFormData.splice(formId, 1);
      let newConversions = state.conversions;
      newConversions.splice(formId, 1);
      // console.log(formId, rowId);
      // console.log(newFormData);
      return {
        formData: newFormData,
        conversions: newConversions,
      }
    }, function () {
      // console.log(this.state.formData);
    })
  }

  handleCalculate(formId, rowId, property, value, opportunity) {
    this.setState(function (state) {
      let newFormData = state.formData;
      let newFormSums = state.formSums;
      // newFormData[formId].splice(rowId, 1);
      console.log(newFormSums);
      let currentRow = newFormData[formId][rowId]
      currentRow[property] = value;

      if (opportunity) {
        currentRow.channelCost = currentRow.clicks * currentRow.clickPrice;
      } else {
        currentRow.clicks = (currentRow.channelCost / currentRow.clickPrice).toFixed(2);
      }

      currentRow.leadPrice = currentRow.clickPrice * 100 / currentRow.conversion;
      currentRow.leads = (currentRow.channelCost / Math.round(currentRow.clickPrice * 100 / currentRow.conversion)).toFixed(2);
      let newLeadSum = 0;
      let newLeadPriceSum = 0;
      let newChannelCostSum = 0;
      let currentForm = newFormData[formId];

      let currentFormSums = newFormSums[formId];
      for (let form = 0; form<currentForm.length; form++) {
        newLeadSum += parseInt(currentForm[form].leads)
        newLeadPriceSum += parseInt(currentForm[form].leadPrice)
        newChannelCostSum += parseInt(currentForm[form].channelCost)
      }
      currentFormSums.leadSum = newLeadSum;
      currentFormSums.leadPriceSum = newLeadPriceSum;
      currentFormSums.channelCostSum = newChannelCostSum;

      return {
        formData: newFormData,
        formSums: newFormSums,
      }
    }, function () {
      console.log(this.state.formSums);
    })
  }

  handleDeleteRow(formId, rowId) {
    this.setState(function (state) {
      let newFormData = state.formData;
      newFormData[formId].splice(rowId, 1);
      // console.log(formId, rowId);
      // console.log(newFormData);
      return {
        formData: newFormData,
      }
    }, function () {
      // console.log(this.state.formData);
    })
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
        clicks: 13000,
        clickPrice: 130,
        conversion: 12,
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
        <Form conversions={this.state.conversions[i]} handleConversion={this.handleConversion} handleDeleteForm={this.handleDeleteForm} handleCalculate={this.handleCalculate} handleDeleteRow={this.handleDeleteRow} handleSetCurrentForm={this.handleSetCurrentForm} key={i} channelData={this.state.formData[i]} formId={i} />
      );
    }
    return (
      <div className='container'>
        <div className={this.state.modalClass}>
          <form action="">
            <button className="close" type="button" onClick={() => this.setState({modalClass: "modal"})}>╳</button>
            <h2>Добавить канал</h2>
            <input type="radio" id="yandex" name="channelType" value="Яндекс.Директ" defaultChecked onChange={(event) => this.setState({ channelType: event.target.value })} />
            <label htmlFor="yandex">Яндекс.Директ</label><br />
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


        <button className="tableButton" onClick={() => this.setState(function (state) {
          let newFormData = state.formData;
          newFormData.push([{
            channelName: "Яндекс.Директ",
            clicks: 13000,
            clickPrice: 130,
            conversion: 12,
            leads: 15,
            leadPrice: 1300,
            channelCost: 90000,
          }]);
          let newFormSums = state.formSums;
          newFormSums.push({
            leadSum: 60,
            leadPriceSum: 1500,
            channelCostSum: 90000,
            sales: 50,
            customerPrice: 15000,
            conversionInSales: 80,
          });
          let newConversions = state.conversions;
          newConversions.push(81);
          return {
            formData: newFormData,
            formSums: newFormSums,
            conversions: newConversions,
          }
        })}>Добавить расчёт</button>
      </div>
    )
  }
}


root.render(
  <Container />
);