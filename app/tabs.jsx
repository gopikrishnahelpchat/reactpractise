var React = require('react');
var ReactDOM = require('react-dom');
// import { Link } from 'react-router';
var {Route, Router, IndexRoute, hashHistory, Link} = require('react-router');
var SwipeViews = require('react-swipe-views');


var TABS = React.createClass({

    render: function (){
        return (
            <SwipeViews>
                <div title="Tab 1">
                    asdf
                </div>
                <div title="Tab 2">
                    Page 2
                </div>
                <div title="Tab 3">
                    Page 3
                </div>
            </SwipeViews>
        );
    }
});

module.exports = TABS;
