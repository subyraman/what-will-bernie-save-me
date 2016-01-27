import React from 'react';

export default class SupportBernie extends React.Component {
  constructor(props) {
    super(props);
    this.bernieStyles = {
        backgroundImage: 'url(http://subyraman.s3.amazonaws.com/bernie/bernie.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '50%',
        backgroundPositionY: '50%',
        backgroundSize: '40%',
        height: 300,
    }
  }

  render() {
    return (
      <div className="row text-center" style={{marginBottom: 50}}>
        <div className="banner" style={this.bernieStyles}>
        </div>
        <h3>Like what you see? <a href="https://berniesanders.com">Support Bernie!</a></h3>
        <p><a href="https://go.berniesanders.com/page/s/volunteer-for-bernie?source=web_main_nav">Donate to his campaign</a></p>
        <p><a href="https://secure.actblue.com/contribute/page/lets-go-bernie?refcode=homepage_main_nav">Contribute to his campaign</a></p>
        <small>This website is not affiliated with the Bernie Sanders campaign. Interface written by <a href="http://twitter.com/subyraman">Suby Raman</a>. Data compiled by <a href="http://datatitian.com/bernie-tax/">Will Murphy</a>.</small>
      </div>
    );
  }
}
