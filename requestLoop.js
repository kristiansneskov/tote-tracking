var request = require('request');

var counter = 0;

if (process.argv.length != 3) {
  console.log('please specify element name');
  return;
}
var elementName = process.argv[2];

enterRequestLoop(counter);

function enterRequestLoop(count) {
request({
url: 'http://178.62.223.30:8086/write?db=spongy',
method: 'POST',
body: 'tracking,element='+elementName+' value=1'
}, function(error,response,body) {
if (error) {
  console.log(error);
} else {
  console.log(response.statusCode, body);
if (count == 100) { 
  return;
} else {
var t = randomInt(1,5);
console.log('sleeping ' + t + ' sec') ;
setTimeout(function() {
	var newCount = count + 1;
	enterRequestLoop(newCount);
}, t*1000);
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
