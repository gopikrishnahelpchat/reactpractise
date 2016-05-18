var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var WeatherForm = require('./weatherForm.jsx');
var WeatherDisplay = require('./weatherDisplay.jsx');
//var TABS = require('./tabs.jsx');

//var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css');

// App css
//require('style!css!sass');


var WeatherParent = React.createClass({

    getInitialState: function() {
        return {temperature: 0.0}
    },

    getjson : function(abc) {

        var that = this;

        // var weatherJson = '{"coord":{"lon":139,"lat":35},"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},"wind":{"speed":7.31,"deg":187.002},"rain":{"3h":0},"clouds":{"all":92},"dt":1369824698,"id":1851632,"name":"Shuzenji","cod":200}';
        axios.get('http://api.openweathermap.org/data/2.5/weather?appid=fd8e51a8a23d22e2f1fb6733ff473fcd&q='+abc+",in")
            .then(function (response) {
                console.log(response);
                var temperature = response.data.main.temp;
                 that.setState({temperature: temperature});
               // that.setStateFromInner({temperature: temperature});
            })
            .catch(function (response) {
                console.log(response);
                alert("error " + response);
            });

        // return weatherJson;
    },
    setStateFromInner: function(obj){
        this.setState(obj);
    },
    search: function(city)
    {
        //var city = this.refs.city.value;
        this.getjson(city);

        //alert(temperature);
//            document.getElementById("weatherReport").innerHTML= "The Temperature is "+temperature;
        // <WeatherDisplay temperatueProp='24' ></WeatherDisplay>¬
    },

    render: function()
    {

        return(
            <div>
                <WeatherForm onClickForm={this.search}/>
                <WeatherDisplay temperatureProp={this.state.temperature} />

            </div>
        );


    }

});


ReactDOM.render(<WeatherParent/>, document.getElementById('main2'));
