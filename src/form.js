import React from 'react';
import Row from './row.js';
import CalculationRows from './calculationRows.js';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formId: this.props.formId,
            opportunity: true,
            channelType: "Яндекс.Директ",
            rows: [],
            channelData: this.props.channelData,
            rowData: [[]],
            leadSum: 60,
            leadPriceSum: 1500,
            channelCostSum: 90000,
            sales: 5,
            conversionInSales: 80,
        }
        this.handleData = this.handleData.bind(this);
    }

    handleData(rowData) {
        this.setState((state, props) => ({
            rowData: state.rowData
        }));
        this.setState(function(state, props) {
            let newChannelData = state.channelData;
            newChannelData[rowData.rowId].leads = rowData.leads;
            newChannelData[rowData.rowId].leadPrice = rowData.leadPrice;
            newChannelData[rowData.rowId].channelCost = rowData.channelCost;
            return {
                channelData: newChannelData,
            };
        }, function() {
            let newLeadSum = 0;
            let newLeadPriceSum = 0;
            let newChannelCostSum = 0;
            for (let channel of this.state.channelData) {
                newLeadSum += channel.leads;
                newLeadPriceSum += channel.leadPrice;
                newChannelCostSum += channel.channelCost;
            }
            console.log(newLeadSum);
            this.setState({
                leadSum: newLeadSum,
                leadPriceSum: newLeadPriceSum,
                channelCostSum: newChannelCostSum,
            })
        });
    }

    componentDidMount() {
        this.setState((state, props) => ({rows: [<Row key={"row"+0} name="Яндекс.Директ" opportunity={this.state.opportunity}/>]}))
    }

    change = (param) => {
        this.setState({ opportunity: param })
        console.log(this.state.opportunity);
    }

    

    newChannelClick = () => {
        this.props.handleSetCurrentForm(this.state.formId);
    }

    render() {
        return (
            <div>
                
                <button type="button">
                    <svg version="1.1" meta="vk-icons-close" width="20" height="20" viewBox="0 0 20 20">
                        <path fill="none" stroke="#000" strokeWidth="1.06" d="M16,16 L4,4"></path>
                        <path fill="none" stroke="#000" strokeWidth="1.06" d="M16,4 L4,16"></path>
                    </svg>
                </button>
                <input type="text" placeholder="Название варианта расчёта" />
                <input type="text" placeholder="Описание расчёта" />
                <button type="button" onClick={() => this.change(true)}>ОТ ВОЗМОЖНОСТЕЙ</button>
                <button type="button" onClick={() => this.change(false)}>ОТ БЮДЖЕТА</button>
                <p>Посчитайте, сколько лидов и продаж можно получить при отсутствии ограничений по бюджету. Введите
                    предельное для данной тематики количество кликов по каналам, среднюю цену клика, текущую (или
                    среднюю для тематики) конверсию сайта и текущую конверсию из лидов в продажи.</p>
                <table className="opportunityTable">
                    <thead>
                        <tr>
                            <th>КАНАЛ</th>
                            <th>КЛИКОВ</th>
                            <th>ЦЕНА КЛИКА</th>
                            <th>КОНВЕРСИЯ</th>
                            <th>ЛИДЫ</th>
                            <th>ЦЕНА ЛИДА</th>
                            <th>РАСХОДЫ НА КАНАЛ, РУБ</th>
                        </tr>
                    </thead>
                    <tbody className="calculationRows">
                        <CalculationRows channelData={this.state.channelData} opportunity={this.state.opportunity} onDataChange={this.handleData}/>
                         {/* {
                             this.state.rows
                         }
                         <Row key={"row" + this.state.rows.length} name={"dsdss"} opportunity={this.state.opportunity} /> */}
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={this.newChannelClick} className="newChannel opportunityButton" type="button">НОВЫЙ КАНАЛ{this.props.formId}</button>
                            </td>
                            <td colSpan="3">
                                Лиды (звонки и заявки)
                            </td>
                            <td className="leadSumCell">{this.state.leadSum}</td>
                            <td className="leadPriceSumCell">{this.state.leadPriceSum}</td>
                            <td className="channelCostSumCell">{this.state.channelCostSum}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                Конверсия лидов в продажи, %
                            </td>
                            <td>
                                <input type="number" defaultValue={this.state.conversionInSales} className="resultLeadsInput" onChange={(event) => this.setState({conversionInSales: event.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">Продажи</td>
                            <td className="resultLeadsCell">{this.state.leadSum / 100 * this.state.conversionInSales}</td>
                            <td className="resultLeadPriceCell">{this.state.channelCostSum / (this.state.leadSum / 100 * this.state.conversionInSales)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Form