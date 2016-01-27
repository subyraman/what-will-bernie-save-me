import React from 'react';
import TaxDataTable from './TaxDataTable';

import {numberWithCommas} from '../serializers';


export default class TaxDataView extends React.Component {
  constructor(props) {
    super(props);
  }

  saveOrCost() {
    if (this.props.taxData.tax_difference_after_bernie < 0) {
        return <h3>You will pay:</h3>
    }

    return <h3>You will save:</h3>;
  }

  classForNumber(data) {
    if (data < 0) {
        return {color: 'red'};
    }

    return {color: 'green'};
  }

  totalCost() {
    const ret = numberWithCommas(this.props.taxData.tax_difference_after_bernie)
    return ret.replace('-', '');
  }

  render() {
    return (
      <div className="text-center row" style={{backgroundColor: 'rgba(240, 248, 255, 0.48)', padding: 10}}>
        <div>
            {this.saveOrCost()}
            <h1 style={this.classForNumber(this.props.taxData.tax_difference_after_bernie)}>
                {this.totalCost()}
            </h1>
            <div className="col-sm-10 col-sm-offset-1">
                <TaxDataTable data={this.props.taxData} />
                <small>Based on the closest data point of {numberWithCommas(this.props.taxData.Income)}.</small>
            </div>
        </div>
      </div>
    );
  }
}
