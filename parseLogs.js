var parse = require('csv-parse');
var fs = require('fs');
var request = require('request');

if (process.argv.length != 3) {
  console.log("Please specify name of log to parse");
  return;
}
  
var content = fs.readFileSync('./'+process.argv[2]);

var count = content.length;

var items = [];
var gert = parse(content, function(err,output) {

console.log(output.length);
output.forEach(function(elm,index) {
	
  var reggie = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{4})/;
var dateArray = reggie.exec(elm[0]);
//console.log(dateArray[0]+"-"+ dateArray[1]+"-"+dateArray[2]);
  var d = new Date("20"+dateArray[1],dateArray[2]-1,dateArray[3],dateArray[4],dateArray[5],dateArray[6],dateArray[7]);
//console.log(d);
//  console.log(dateArray);
var item = {timestamp:d.getTime()+'000000', tote:elm[1], element:elm[2]};
console.log(item);
 sendRequest(item); 
});
});

function sendRequest(json) {

request({
url: 'http://178.62.223.30:8086/write?db=spongy',
method: 'POST',
body: 'trackingDUS,tote='+json.tote+',element='+json.element+' value=1 '+json.timestamp
}, function(error,response,body) {
if (error) {
  console.log(error);
} else {
  console.log(response.statusCode, body);
}
});

/*
request({
url: 'http://178.62.223.30:8086/write?db=spongy',
method: 'POST',
body: 'cpu,host=serverC,region=us_west value=0.33'
}, function(error,response,body) {
if (error) {
  console.log(error);
} else {
  console.log(response.statusCode, body);
}
});
*/

}



