import React from 'react';
import Row from './row.js';


class CalculationRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // channelData: this.props.channelData,
        }
    }

    render() {
        var indents = [];
        console.log(this.props);
        for (var i = 0; i < this.props.channelData.length; i++) {
            indents.push(<Row opportunity={this.props.opportunity} handleCalculate={this.props.handleCalculate} handleDeleteRow={this.props.handleDeleteRow} formId={this.props.formId} rowId={i} onDataChange={this.props.onDataChange} key={"row"+i} channelData={this.props.channelData[i]}/>);
        }
        return indents;
    }
}

export default CalculationRows