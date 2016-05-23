var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var TABS = require('./tabs.jsx');
var UTILS = require('./utils.jsx');

require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('style!css!app/styles/SwipeViews.css');
require('style!css!app/styles/lifestyle.css');

var tabMapper = {
    "0": "47",
    "1": "48",
    "2": "49"
};
var WeatherParent = React.createClass({

    getInitialState: function() {
        return {temperature: 0.0,tabsJson : [{"id":47,"data":[]},{"id":48,"data":[]},{"id":49,"data":[]} ]}
    },
    getJsonOnCategoryId: function (id) {
        var json = this.state.tabsJson.filter(function(object, i){
                return object.id == id;
        });
        return json;
    },
    isNetworkCallRequired: function (id) {
        var object = this.getJsonOnCategoryId(id);
        console.log(object.length);
        if(object.length > 0 && object[0].data.length == 0){
            return true;
        }else {
            return false;
        }
    },

    onTabClick: function(id){
        // Change the Tab Number 0 to 47 , 1 to 48 etc
        var id = tabMapper[id];
        var that = this;
        var url = UTILS.getNetworkUrl(id);
        if(this.isNetworkCallRequired(id)) {
            alert('data not present making network call' + id);
            axios.get(url, {
                    headers: {
                        'X-AKOSHA-AUTH': 'eyJ1c2VyX25hbWUiOm51bGwsImlkIjo0NzU2MjcsIm1vYmlsZSI6Ijk5NzIzNjA2MDYiLCJleHBpcmVzIjoxNzc5MDIwOTg1MDcxfQ==.hheyv5gZTc/sxAoGLiZp/MiDxq8ebwRme0wR4y1bKso=',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data);
                    var tabJsonInfo = that.state.tabsJson;
                    if(id == 47) {
                        tabJsonInfo[0].data = response.data;
                    }else if (id == 48) {
                        tabJsonInfo[1].data = response.data;
                    }
                    that.setState({tabsJson: tabJsonInfo});
                })
                .catch(function (response) {
                    console.log(response);
                    alert("error " + response);
                });
        }else {
            alert('data already exist in state variable ' + id);
        }
    },
    render: function()
    {
        return(
            <div>
                <TABS onTabClick={this.onTabClick} tabsJson={this.state.tabsJson} />
            </div>
        );
    }

});


ReactDOM.render(<WeatherParent/>, document.getElementById('main2'));
