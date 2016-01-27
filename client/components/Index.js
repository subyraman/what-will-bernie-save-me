import React from 'react';
import {getDataFromIncome} from '../constants/BernieSavings';
import IncomeForm from './IncomeForm';
import TaxDataView from './TaxDataView';
import SupportBernie from './SupportBernie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        taxData: null,
    }
  }

  submitIncome(data) {
    const taxData = getDataFromIncome(data.income);

    this.setState({
        taxData: taxData,
    });
    
  }

  renderTaxData() {
    if (!this.state.taxData) {
        return false;
    }

    else {
        return (
            <TaxDataView taxData={this.state.taxData} />
        );
    }
  }

  renderBernie() {
    if (!this.state.taxData) {
        return false;
    }

    else {
        return  <SupportBernie />;
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{padding: 0}}>
        <IncomeForm submitIncome={this.submitIncome.bind(this) } />
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.renderTaxData()}
          {this.renderBernie()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
