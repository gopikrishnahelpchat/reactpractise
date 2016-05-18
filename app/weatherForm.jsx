
var React = require('react');
var ReactDOM = require('react-dom');

var WeatherForm = React.createClass({
    
    myclick: function()
    {
        this.props.onClickForm(this.refs.city.value);
    },

    render: function () {
        return (
            <h1 style={{color:'red'}}>
                <input id="cityTextBox" ref="city"  type="text" placeholder="Please enter a city "  />
                <button onClick={this.myclick}>Submit</button>
            </h1>

        );
    }
});

module.exports = WeatherForm;