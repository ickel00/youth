var request = require('superagent');
request
.get('https://smobaqa.foxe.info/loveSmoba/user/op')
.end(function(res){
    console.log(res.body);
});