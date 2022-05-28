import React from 'react';


class Row extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            clicks: 3000,
            clickPrice: 30,
            conversion: 2,
            leads: this.props.leads,
            leadPrice: this.props.leadPrice,
            channelCost: this.props.channelCost,
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

    calculate = (property, value) => {
        this.setState({[property]: value});
        if (this.props.opportunity) {
            this.setState((state, props) => ({
                channelCost: state.clicks * state.clickPrice,
                leadPrice: state.clickPrice * 100 / state.conversion,
                leads: state.clicks * state.clickPrice / (state.clickPrice * 100 / state.conversion),
            }), function() {
                this.props.onDataChange({
                    rowId: this.props.rowId,
                    leads: this.state.leads,
                    leadPrice: this.state.leadPrice,
                    channelCost: this.state.channelCost,
                });
            });
        }
        else {
            this.setState((state, props) => ({
                clicks: (state.channelCost / state.clickPrice).toFixed(2),
                leadPrice: state.clickPrice * 100 / state.conversion,
                leads: (state.channelCost / Math.round(state.clickPrice * 100 / state.conversion)).toFixed(2),
            }), function() {
                this.props.onDataChange({
                    rowId: this.props.rowId,
                    leads: this.state.leads,
                    leadPrice: this.state.leadPrice,
                    channelCost: this.state.channelCost,
                });
            });
        }
        // let currentTable = this.myRef.current.parentElement.parentElement;
        // let rows = currentTable.getElementsByClassName("calculationRow");
        // let leadSumCell = currentTable.getElementsByClassName("leadSumCell")[0];
        // for (row of rows) {

        // }
        // console.log(currentTable);
        
    }

    render() {
        return (
            <tr className="calculationRow">
                <td>{this.props.name}</td>
                <td>
                    {
                        this.props.opportunity ? <input type="number" defaultValue={this.state.clicks} className="clicksInput" onChange={(event) => this.calculate("clicks", parseInt(event.target.value))} /> : this.state.clicks
                    }

                </td>
                <td><input type="number" defaultValue={this.state.clickPrice} className="clickPriceInput" onChange={(event) => this.calculate("clickPrice", parseInt(event.target.value))} />
                </td>
                <td><input type="number" defaultValue={this.state.conversion} className="conversionInput" onChange={(event) => this.calculate("conversion", parseInt(event.target.value))}/>
                </td>
                <td className="leadCell">{this.state.leads}</td>
                <td className="leadPriceCell">{this.state.leadPrice}</td>
                <td className="channelCostCell">
                    {
                        this.props.opportunity ? this.state.channelCost : <input type="number" defaultValue={this.state.channelCost} className="clicksInput" onChange={(event) => this.calculate("channelCost", parseInt(event.target.value))}/>
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