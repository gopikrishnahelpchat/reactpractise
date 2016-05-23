var React = require('react');
var ReactDOM = require('react-dom');

var LifeStyleItemNew = React.createClass({

    myclick: function()
    {
        // this.props.onClickForm(this.refs.city.value);
    },

    render: function () {
        return (
          <div>
              <div className="item card" id="70687_share" data-id="70687">
                  <a id="70687" href="http://www.google.com"></a>

                  <div className="row" style={{"paddingBottom":"10px"}}>
                      <div className="col-xs-10" style={{"display": "flex","padding":"0px 5px"}} onclick="profileClickMedia(70687,7)">
                          <img className="authorImage" src="https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10724730_787691874628470_1106071288_a.jpg" />

                          <img className="sourceLogo" src="/feed/webforms/img/ic_instagram_icon.png" />


                          <div className="authorName">
                              <span className="authorName">{this.props.item.title}</span>
                          </div>
                      </div>
                      <div className="col-xs-2" style={{"display": "flex"}}>
                          <span className="publishTime">1h</span>
                      </div>
                  </div>
                  <div className="row" style={{"padding": "0px 0px 10px 5px"}}>
                      <div className="description">
                          {this.props.item.description}
                      </div>
                  </div>
                  <div className="row">

                      <img className="insta-image" style={{"minHeight":"100px"}} src={this.props.item.image_url} />
                  </div>

                  <div className="row" style={{"marginTop":"1px","padding": "10px 0px 10px 10px"}}>

                      <div className="col-xs-9" style={{"color":"#125689","padding":"0px 5px"}} onclick="likeClickMedia(70687,7)">
                          <img src="/feed/webforms/img/ic_insta_heart.png" height="10px" />
                              <span style={{"fontWeight": "600","fontSize": "14px","paddingLeft": "5px"}}>{this.props.item.fb_shares} likes</span>
                      </div>


                      <div className="col-xs-3" onclick="shareClickMedia(70687,7)" style={{"display":"flex"}}>
                          <img src="/feed/webforms/img/share.png" height="17px" style={{"marginTop":"2px"}} onclick="share('https://content.helpchat.in/social/1463638783395-the-game-itself-is-about-competition-take-a-look-at-how-one-of-our-reliancefoundation-young-champs-contests-a-readingfc-academy-player-youngchampsinengland-heroisl-letsfootball?utm_source=share\n- sent via Helpchat')" />
                              <span style={{"color":"#757f7e","float":"right","padding":"0px 10px","fontWeight":"bold"}} onclick="share('https://content.helpchat.in/social/1463638783395-the-game-itself-is-about-competition-take-a-look-at-how-one-of-our-reliancefoundation-young-champs-contests-a-readingfc-academy-player-youngchampsinengland-heroisl-letsfootball?utm_source=share\n- sent via Helpchat')">Share</span>

                      </div>
                  </div>
                  <hr style={{"margin":"0px -16px 0px -16px","display":"none"}} />
              </div>
          </div>

        );
    }
});

module.exports = LifeStyleItemNew;