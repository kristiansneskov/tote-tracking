var request = require('request');
var sleep = require('sleep');

var counter = 0;

enterRequestLoop(counter);

function enterRequestLoop(count) {
var t = randomInt(2,7);
console.log('sleeping ' + t + ' sec') ;
sleep.sleep(t);
request({
url: 'http://178.62.223.30:8086/write?db=spongy',
method: 'POST',
body: 'tracking,element=gert value=1'
}, function(error,response,body) {
if (error) {
  console.log(error);
} else {
  console.log(response.statusCode, body);
if (count == 100) { 
  return;
} else {
	var newCount = count + 1;
	enterRequestLoop(newCount);
}
}
});
  
}

  /*
for (var i=0;i<3;i++) 
{

request({
url: 'http://178.62.223.30:8086/write?db=spongy',
method: 'POST',
body: 'tracking,element=gert value=1'
}, function(error,response,body) {
if (error) {
  console.log(error);
} else {
  console.log(response.statusCode, body);
}
});
}
*/

function randomInt (low, high) {
	    return Math.floor(Math.random() * (high - low) + low);
}
