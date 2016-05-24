var express = require('express');
var app = express();

//  app.use(function(request, response, next){

// 	if(request.headers['x-forwarded-proto']=='https')
// 	{
// 		next();
// 	}
// 	else
// 	{
// 		response.redirect('http://' + request.hostname + request.url);
// 	}

// });

app.use(express.static('public'));

const port  = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.get('/lifestylejson', function (req, res) {
  var categoryId = req.param('category_id');

  var category48 = [
    {
      "id": 88090,
      "category_id": 48,
      "category_name": "Sam's Corner",
      "source_type": null,
      "title": "Title",
      "updated_time": "20 hours ago",
      "description": "The former fast bowler came in third, losing to the state health minister by a margin of 11,747 votes.",
      "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935423_resized_X.jpg",
      "source": {
        "name": "scroll.in",
        "icon": null,
        "location": null,
        "subscriber": null,
        "url": "http://scroll.in/latest/808417/kerala-polls-bjp-candidate-s-sreesanth-loses-to-congress-vs-sivakumar-in-thiruvananthapuram?utm_content=buffer7f886&utm_medium=social&utm_source=twitter.com&utm_campaign"
      },
      "aspect_ratio": 50,
      "share_text": "http://scroll.in/latest/808417/kerala-polls-bjp-candidate-s-sreesanth-loses-to-congress-vs-sivakumar-in-thiruvananthapuram?utm_content=buffer7f886&utm_medium=social&utm_source=twitter.com&utm_campaign\n- sent via Helpchat",
      "fb_shares": "12",
      "tag": null,
      "views": "226 views"
    },
    {
      "id": 88089,
      "category_id": 48,
      "category_name": "Sam's Corner",
      "source_type": null,
      "title": "Title2",
      "updated_time": "19 hours ago",
      "description": "The party contested 60 seats and won 12, as opposed to the 18 it won in the 2011 state polls.",
      "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935422_resized_X.jpg",
      "source": {
        "name": "scroll.in",
        "icon": null,
        "location": null,
        "subscriber": null,
        "url": "http://scroll.in/latest/808410/assam-aiudf-chief-badruddin-ajmal-loses-salmara-south-constituency-to-congress?utm_content=buffer66cd8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer"
      },
      "aspect_ratio": 50,
      "share_text": "http://scroll.in/latest/808410/assam-aiudf-chief-badruddin-ajmal-loses-salmara-south-constituency-to-congress?utm_content=buffer66cd8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer\n- sent via Helpchat",
      "fb_shares": "10",
      "tag": null,
      "views": "632 views"
    }
  ];


  var category47 = [
    {
      "id": 88091,
      "category_id": 47,
      "category_name": "Sam's Corner",
      "source_type": null,
      "title": "What has gone wrong with Congress and how Hindutva is ready to take over ",
      "updated_time": "5 hours ago",
      "description": "Like BJP rigorously stands for its Hindutva and development agenda, what does the Congress stands for? Also, behind the cacophony of election results, we can perceive the drum beat of Hindutva.",
      "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935424_resized_X.jpg",
      "source": {
        "name": "Firstpost",
        "icon": null,
        "location": null,
        "subscriber": null,
        "url": "http://www.firstpost.com/politics/what-has-gone-wrong-with-congress-and-how-hindutva-is-ready-to-take-over-2789986.html"
      },
      "aspect_ratio": 50,
      "share_text": "http://www.firstpost.com/politics/what-has-gone-wrong-with-congress-and-how-hindutva-is-ready-to-take-over-2789986.html\n- sent via Helpchat",
      "fb_shares": "58",
      "tag": null,
      "views": "891 views"
    },
    {
      "id": 88090,
      "category_id": 47,
      "category_name": "Sam's Corner",
      "source_type": null,
      "title": "Kerala polls: BJP candidate S Sreesanth loses to Congress’ VS Sivakumar in Thiruvananthapuram",
      "updated_time": "20 hours ago",
      "description": "The former fast bowler came in third, losing to the state health minister by a margin of 11,747 votes.",
      "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935423_resized_X.jpg",
      "source": {
        "name": "scroll.in",
        "icon": null,
        "location": null,
        "subscriber": null,
        "url": "http://scroll.in/latest/808417/kerala-polls-bjp-candidate-s-sreesanth-loses-to-congress-vs-sivakumar-in-thiruvananthapuram?utm_content=buffer7f886&utm_medium=social&utm_source=twitter.com&utm_campaign"
      },
      "aspect_ratio": 50,
      "share_text": "http://scroll.in/latest/808417/kerala-polls-bjp-candidate-s-sreesanth-loses-to-congress-vs-sivakumar-in-thiruvananthapuram?utm_content=buffer7f886&utm_medium=social&utm_source=twitter.com&utm_campaign\n- sent via Helpchat",
      "fb_shares": "7",
      "tag": null,
      "views": "226 views"
    },
    {
      "id": 88089,
      "category_id": 47,
      "category_name": "Sam's Corner",
      "source_type": null,
      "title": "Assam: AIUDF chief Badruddin Ajmal loses Salmara South constituency to Congress",
      "updated_time": "19 hours ago",
      "description": "The party contested 60 seats and won 12, as opposed to the 18 it won in the 2011 state polls.",
      "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935422_resized_X.jpg",
      "source": {
        "name": "scroll.in",
        "icon": null,
        "location": null,
        "subscriber": null,
        "url": "http://scroll.in/latest/808410/assam-aiudf-chief-badruddin-ajmal-loses-salmara-south-constituency-to-congress?utm_content=buffer66cd8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer"
      },
      "aspect_ratio": 50,
      "share_text": "http://scroll.in/latest/808410/assam-aiudf-chief-badruddin-ajmal-loses-salmara-south-constituency-to-congress?utm_content=buffer66cd8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer\n- sent via Helpchat",
      "fb_shares": "20",
      "tag": null,
      "views": "632 views"
    }
  ];
  var data = [];
  if(categoryId == "47"){
    data = category47;
  }else if(categoryId == "48"){
    data = category48;
  }
  res.send(data);
});

app.get('/paginationJson', function (req, res) {
  var categoryId = req.param('category_id');
  var lastItemId = req.param('item_id');
  var paginationItems = [{
    "id": 1000,
    "category_id": categoryId,
    "category_name": "Sam's Corner",
    "source_type": null,
    "title": "Pagination 1",
    "updated_time": "20 hours ago",
    "description": "The former fast bowler came in third, losing to the state health minister by a margin of 11,747 votes.",
    "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935423_resized_X.jpg",
    "source": {
      "name": "scroll.in",
      "icon": null,
      "location": null,
      "subscriber": null,
      "url": "http://scroll.in/latest/808417/kerala-polls-bjp-candidate-s-sreesanth-loses-to-congress-vs-sivakumar-in-thiruvananthapuram?utm_content=buffer7f886&utm_medium=social&utm_source=twitter.com&utm_campaign"
    },
    "aspect_ratio": 50,
    "share_text": "http://scroll.in/latest/808417/kerala-polls-bjp-candidate-s-sreesanth-loses-to-congress-vs-sivakumar-in-thiruvananthapuram?utm_content=buffer7f886&utm_medium=social&utm_source=twitter.com&utm_campaign\n- sent via Helpchat",
    "fb_shares": "12",
    "tag": null,
    "views": "226 views"
  },
    {
      "id": 1001,
      "category_id": categoryId,
      "category_name": "Sam's Corner",
      "source_type": null,
      "title": "Pagination 2",
      "updated_time": "19 hours ago",
      "description": "The party contested 60 seats and won 12, as opposed to the 18 it won in the 2011 state polls.",
      "image_url": "https://s3-ap-southeast-1.amazonaws.com/helpchat/feed/news/news_notification_images/935422_resized_X.jpg",
      "source": {
        "name": "scroll.in",
        "icon": null,
        "location": null,
        "subscriber": null,
        "url": "http://scroll.in/latest/808410/assam-aiudf-chief-badruddin-ajmal-loses-salmara-south-constituency-to-congress?utm_content=buffer66cd8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer"
      },
      "aspect_ratio": 50,
      "share_text": "http://scroll.in/latest/808410/assam-aiudf-chief-badruddin-ajmal-loses-salmara-south-constituency-to-congress?utm_content=buffer66cd8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer\n- sent via Helpchat",
      "fb_shares": "10",
      "tag": null,
      "views": "632 views"
    }];
  res.send(paginationItems);

});

