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
var categoryTabMapper = {
    "47": "0",
    "48": "1",
    "49": "2"
};
var WeatherParent = React.createClass({

    // Tab 0 is first tab ...
    getInitialState: function () {
        return {currentTab: 0, tabsJson: [{"id": 47, "data": []}, {"id": 48, "data": []}, {"id": 49, "data": []}]}
    },
    getJsonOnCategoryId: function (id) {
        var json = this.state.tabsJson.filter(function (object, i) {
            return object.id == id;
        });
        return json;
    },
    isNetworkCallRequired: function (id) {
        var object = this.getJsonOnCategoryId(id);
        console.log(object.length);
        if (object.length > 0 && object[0].data.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    getTabIndexFromCategory: function (categoryId) {
        var tabIndex = categoryTabMapper[categoryId];
        return tabIndex;
    },

    onTabClick: function (id) {
        // Change the Tab Number 0 to 47 , 1 to 48 etc
        this.setState({currentTab: id});
        var id = tabMapper[id];
        var that = this;
        var url = UTILS.getNetworkUrl(id);
        if (this.isNetworkCallRequired(id)) {
            alert('data not present making network call for Tab ' + id);
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
                    var tabIndexFromCategory = that.getTabIndexFromCategory(id);
                    if (tabIndexFromCategory >= 0 && tabIndexFromCategory < tabJsonInfo.length) {
                        tabJsonInfo[tabIndexFromCategory].data = response.data;
                    }
                    that.setState({tabsJson: tabJsonInfo});
                })
                .catch(function (response) {
                    console.log(response);
                    alert("error " + response);
                });
        } else {
            alert('data already exist for tab ' + id);
        }
    },
    onScrollEnd: function (articleId) {
        that = this;
        if(articleId != null){
        axios.get("http://localhost:3000/paginationJson?categoryId=" + this.state.currentTab + "&articleId=" + articleId, {
                headers: {
                    'X-AKOSHA-AUTH': 'eyJ1c2VyX25hbWUiOm51bGwsImlkIjo0NzU2MjcsIm1vYmlsZSI6Ijk5NzIzNjA2MDYiLCJleHBpcmVzIjoxNzc5MDIwOTg1MDcxfQ==.hheyv5gZTc/sxAoGLiZp/MiDxq8ebwRme0wR4y1bKso=',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(function (response) {
                console.log(response.data);
                alert(response.data);
                var tabJsonInfo = that.state.tabsJson;
                tabJsonInfo[that.state.currentTab].data.push(response.data);

                that.setState({tabsJson: tabJsonInfo});
            })
            .catch(function (response) {
                console.log(response);
                alert("error " + response);
            });
    }else {
        alert('invalid articleId ' + articleId);
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
