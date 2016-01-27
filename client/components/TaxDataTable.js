import React from 'react';
import {numberWithCommas} from '../serializers';

export default class TaxDataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) {
      return;
    }

    return (
      <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Currently</th>
              <th>Under Bernie</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>Income Tax Burden</td>
            <td>{numberWithCommas(this.props.data.income_tax_at_present)}</td>
            <td>{numberWithCommas(this.props.data.income_tax_with_bernie)}</td>
          </tr>
          <tr>
            <td>Social Security Tax</td>
            <td>{numberWithCommas(this.props.data.social_security_tax_at_present)}</td>
            <td>{numberWithCommas(this.props.data.social_security_tax_with_bernie)}</td>
          </tr>
          <tr>
            <td>Medicare Tax</td>
            <td>{numberWithCommas(this.props.data.medicare_tax_at_present)}</td>
            <td>{numberWithCommas(this.props.data.medicare_tax_with_bernie)}</td>
          </tr>
          <tr>
            <td>Medicare Tax For All</td>
            <td>{numberWithCommas(this.props.data.medicare_for_all_tax_at_present)}</td>
            <td>{numberWithCommas(this.props.data.medicare_for_all_tax_with_bernie)}</td>
          </tr>
          <tr>
            <td>Family Leave Tax</td>
            <td>{numberWithCommas(this.props.data.family_leave_tax_at_present)}</td>
            <td>{numberWithCommas(this.props.data.family_leave_tax_with_bernie)}</td>
          </tr>
          <tr>
            <td>Healthcare Premiums</td>
            <td>{numberWithCommas(this.props.data.healthcare_premiums_at_present)}</td>
            <td>{numberWithCommas(this.props.data.healthcare_premiums_with_bernie)}</td>
          </tr>
          <tr>
            <td>Healthcare Expenses</td>
            <td>{numberWithCommas(this.props.data.healthcare_expenses_at_present)}</td>
            <td>{numberWithCommas(this.props.data.healthcare_expenses_with_bernie)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
