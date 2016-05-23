var React = require('react');
var ReactDOM = require('react-dom');

var LifeStyleItem = React.createClass({

    myclick: function()
    {
        // this.props.onClickForm(this.refs.city.value);
    },

    render: function () {
        return (
          <div>
              <img src="" height="40px" style={{"margin":"10px;"}}/>
              <h1 >
                  {this.props.item.author}
              </h1>
              <div>
                  Second para
              </div>
              <div >
                  Total Views : 100
              </div>
              
          </div>

        );
    }
});

module.exports = LifeStyleItem;