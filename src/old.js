import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 50,
      // second: this.state.first,
      third: 100,
    }
  }

  change = (n) => {
    this.setState({first: n})
    console.log(n);
  }

  render() {
    return (
      <div className='container'>
        <h1>Calculator</h1>
        <form action="">
          <input type="text" defaultValue={this.state.first} onChange={(event) => this.change(parseInt(event.target.value))}/>
          <p>{this.state.first + this.state.third}</p>
          <input type="text" defaultValue={this.state.third}/>
        </form>
      </div>
    )
  }
}


root.render(
  <Container />
);




// ----------------








import React from 'react';


class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 3000,
            clickPrice: 30,
            conversion: 2,
            leads: 15,
            leadPrice: 1300,
            channelCost: 90000,
            // channelCost: function () {
            //     return this.clicks * this.clickPrice;
            // },
            // a: {
            //     clicks: 3000,
            //     clickPrice: 30,
            //     channelCost: function() {
            //         return this.clicks + " " + this.clickPrice;
            //       }
            // }
            // get channelCost() {
            //     return this.clicks;
            //   }
        }
    }

    changeColor = () => {
        this.setState({ color: "blue" });
    }

    render() {
        return (
            <tr className="calculationRow">
                <td>Яндекс.Директ</td>
                <td>
                    {
                        this.props.opportunity ? <input type="number" defaultValue={this.state.clicks} className="clicksInput" onChange={(event) => this.setState({ clicks: parseInt(event.target.value) })} /> : this.state.clicks
                    }

                </td>
                <td><input type="number" defaultValue={this.state.clickPrice} className="clickPriceInput" onChange={(event) => this.setState({ clickPrice: parseInt(event.target.value) })} />
                </td>
                <td><input type="number" defaultValue="2" className="conversionInput" />
                </td>
                <td className="leadCell">15</td>
                <td className="leadPriceCell">1300</td>
                <td className="channelCostCell">
                    {
                        this.props.opportunity ? this.state.channelCost() : <input type="number" defaultValue={this.state.channelCost()} className="clicksInput" />
                    }
                </td>
                <td>
                    <button type="button">
                        <svg version="1.1" meta="vk-icons-close" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="none" stroke="#000" strokeWidth="1.06" d="M16,16 L4,4"></path>
                            <path fill="none" stroke="#000" strokeWidth="1.06" d="M16,4 L4,16"></path>
                        </svg>
                    </button>
                </td>
            </tr>
        )
    }
}

export default Row