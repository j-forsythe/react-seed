var React = require('react');
var PropTypes = React.PropTypes;
import Api from './api.jsx';

var Content = React.createClass({

  render: function() {
    return (
      <ul className="firstLevel">
        {this.props.ghData.map((el, i)=>{
          if (el.type === 'blob') {
            return <div key={i} >{el.path}</div>;
          }
          else {
            return  <li key={i} >{el.path}</li>;
          }
        })}
      </ul>
    );
  }

});

module.exports = Content;
