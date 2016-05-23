var React = require('react');
var SwipeViews = require('react-swipe-views');
var LifeStyle = require('./lifeStyle.jsx');

var TABS = React.createClass({
    onTabSelected2: function(id){
        this.props.onTabClick(id);
    },
    getJsonOnCategoryId: function (id) {
        var json = this.props.tabsJson.filter(function(object, i){
            return object.id == id;
        });
        if(json.length > 0){
            return json[0].data;
        }else {
            return null;
        }
    },
    componentDidMount:function () {
        // On first load make network call of Zero tab 
        this.onTabSelected2(0);
    },

    render: function (){
        return (
            <SwipeViews onIndexChange = {this.onTabSelected2}>
                <div title="Tab 1"  >
                    <LifeStyle categoryId='47' data={this.getJsonOnCategoryId(47)}></LifeStyle>
                </div>
                <div title="Tab 2"  >
                    <LifeStyle categoryId='48' data={this.getJsonOnCategoryId(48)}></LifeStyle>
                </div>
                <div title="Tab 3" >
                    <LifeStyle categoryId='49' data={this.getJsonOnCategoryId(49)}></LifeStyle>
                </div>
            </SwipeViews>
        );
    }
});

module.exports = TABS;
