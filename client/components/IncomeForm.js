import React from 'react';

export default class ChatFormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  didSubmitForm(e) {
    e.preventDefault();

    if (!this.refs.income.value) {
      return;
    }

    const data = {
      income: this.refs.income.value,
    };

    this.props.submitIncome(data);
  }

  render() {
    return (
      <form onSubmit={this.didSubmitForm.bind(this)}>

        <div className="row text-center" style={{marginTop: 20}}>
          <h3>Your Household Income:</h3>
        </div>
        <div className="row" style={{marginTop: 20}}>
          <div className="col-sm-6 col-sm-offset-3">
            <input style={{height: 50, fontSize: 22}} type="number" required pattern="\d*"
              className=" form-control" ref="income" placeholder="Enter your annual household income." />
          </div>
        </div>
        <div className="row" style={{marginTop: 20}}>
          <div className="text-center">
            <button className="btn btn-primary btn-lg">How much will I save?</button>
          </div>
        </div>
        <div className="row" style={{marginTop: 20}}>
          <div className="text-center">
            <p>
            Using data compiled by <a target="_blank" href="http://datatitian.com/bernie-tax/">
              Will Murphy</a> for a family of four.
            </p>
          </div>
        </div>
      </form>
    )
  }
}
