
var React = require('react');
var WeatherDisplay = React.createClass({

    renderTemp : function()
    {
        if(this.props.temperatureProp==0)
        {
            return <div></div>;
        }
        else {

            return (
                <div>
                    Details of the city :
                    <span id="weatherReport" >
                        The temperature is {this.props.temperatureProp}
                    </span>
                </div>

            );

        }
    },

    render: function () {

        return this.renderTemp();
    }
});

module.exports = WeatherDisplay;