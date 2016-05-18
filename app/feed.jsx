var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var WeatherForm = require('./weatherForm.jsx');
var WeatherDisplay = require('./weatherDisplay.jsx');
var TABS = require('./tabs.jsx');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css');

// App css
require('style!css!sass!reactswipe');


var FeedParent = React.createClass({
    render: function()
    {
        return(
            <div>
                asdfa
            </div>
        );

    }

});


ReactDOM.render(<FeedParent />, document.getElementById('main11'));
