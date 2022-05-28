import React from 'react';
import Row from './row.js';


class CalculationRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channelData: this.props.channelData,
        }
    }

    render() {
        var indents = [];
        for (var i = 0; i < this.state.channelData.length; i++) {
            indents.push(<Row rowId={i} onDataChange={this.props.onDataChange} key={"row"+i} name={this.props.channelData[i].channelName} leads={this.props.channelData[i].leads} leadPrice={this.props.channelData[i].leadPrice} channelCost={this.props.channelData[i].channelCost} opportunity={this.props.opportunity}/>);
        }
        return indents;
    }
}

export default CalculationRows