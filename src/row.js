import React from 'react';


class Row extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            // clicks: 3000,
            // clickPrice: 30,
            // conversion: 2,
            // leads: this.props.leads,
            // leadPrice: this.props.leadPrice,
            // channelCost: this.props.channelCost,
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
        this.props.handleCalculate(this.props.formId, this.props.rowId, property, value, this.props.opportunity);
        // this.setState({[property]: value});
        // if (this.props.opportunity) {
        //     this.setState((state, props) => ({
        //         channelCost: state.clicks * state.clickPrice,
        //         leadPrice: state.clickPrice * 100 / state.conversion,
        //         leads: state.clicks * state.clickPrice / (state.clickPrice * 100 / state.conversion),
        //     }), function() {
        //         this.props.onDataChange({
        //             rowId: this.props.rowId,
        //             leads: this.state.leads,
        //             leadPrice: this.state.leadPrice,
        //             channelCost: this.state.channelCost,
        //         });
        //     });
        // }
        // else {
        //     this.setState((state, props) => ({
        //         clicks: (state.channelCost / state.clickPrice).toFixed(2),
        //         leadPrice: state.clickPrice * 100 / state.conversion,
        //         leads: (state.channelCost / Math.round(state.clickPrice * 100 / state.conversion)).toFixed(2),
        //     }), function() {
        //         this.props.onDataChange({
        //             rowId: this.props.rowId,
        //             leads: this.state.leads,
        //             leadPrice: this.state.leadPrice,
        //             channelCost: this.state.channelCost,
        //         });
        //     });
        // }
        // let currentTable = this.myRef.current.parentElement.parentElement;
        // let rows = currentTable.getElementsByClassName("calculationRow");
        // let leadSumCell = currentTable.getElementsByClassName("leadSumCell")[0];
        // for (row of rows) {

        // }
        // console.log(currentTable);
        
    }

    render() {
        console.log(this.props.channelData.clicks);
        return (
            <tr className="calculationRow">
                <td>{this.props.channelData.channelName}</td>
                <td>
                    {
                        this.props.opportunity ? <input type="number" defaultValue={this.props.channelData.clicks} value={this.props.channelData.clicks} className="clicksInput" onChange={(event) => this.calculate("clicks", parseInt(event.target.value))} /> : this.props.channelData.clicks
                    }

                </td>
                <td><input type="number" defaultValue={this.props.channelData.clickPrice} value={this.props.channelData.clickPrice} className="clickPriceInput" onChange={(event) => this.calculate("clickPrice", parseInt(event.target.value))} />
                </td>
                <td><input type="number" defaultValue={this.props.channelData.conversion} value={this.props.channelData.conversion} className="conversionInput" onChange={(event) => this.calculate("conversion", parseInt(event.target.value))}/>
                </td>
                <td className="leadCell">{this.props.channelData.leads}</td>
                <td className="leadPriceCell">{this.props.channelData.leadPrice}</td>
                <td className="channelCostCell">
                    {
                        this.props.opportunity ? this.props.channelData.channelCost : <input type="number" defaultValue={this.props.channelData.channelCost} className="clicksInput" onChange={(event) => this.calculate("channelCost", parseInt(event.target.value))}/>
                    }
                </td>
                <td>
                    <button type="button" onClick={() => this.props.handleDeleteRow(this.props.formId, this.props.rowId)}>
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