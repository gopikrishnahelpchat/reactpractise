var React = require('react');


var Utils = React.createClass({
    statics: {
        customMethod: function(foo) {
            var result = foo + " Added Part";
            console.log("customMethod result is " + result);
            alert(result);
            return result;

        },
        getNetworkUrl: function (categoryId) {
            var url = 'http://localhost:3000/lifestylejson?category_id='+categoryId+'';
            return url;
        }
    },

    render: function (){
    }
});

module.exports = Utils;
