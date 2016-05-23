var React = require('react');
var LifeStyleItemNew = require('./lifestyleItemNew.jsx');
var axios = require('axios');


var LifeStyleParent = React.createClass({

    defaultProps: function () {
        return {data: []};
    },
    myclick: function()
    {
    },
    componentDidMount: function () {
        // http://localhost:3000/lifestylejson
        // http://172.16.1.100:8080/feed/mobileapp/v4/news/47
        // 'X-AKOSHA-AUTH': 'eyJ1c2VyX25hbWUiOm51bGwsImlkIjo0NzU2MjcsIm1vYmlsZSI6Ijk5NzIzNjA2MDYiLCJleHBpcmVzIjoxNzc5MDIwOTg1MDcxfQ==.hheyv5gZTc/sxAoGLiZp/MiDxq8ebwRme0wR4y1bKso=',
    },

    render: function () {
        return (
            <div>
                {this.props.data.map(function(object, i){
                    return <LifeStyleItemNew item={object} key={object.id} />;
                })}

            </div>

        );
    }
});

module.exports = LifeStyleParent;