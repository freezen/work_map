var cheerio = require("cheerio");
var download = require("./module/download");
 

var url = "http://githubranking.com/repositories";

 

download.download(url,function(data){
	if(data) {
		//console.log(data);
		var $ = cheerio.load(data);
		var item=null;

		$(".repositories_controller .col-md-6 .list-group a").each(function(i,e){
			item=$(e).find('.hidden-xs').html();
			item=item.replace(/[\r\n]/g,"");
			console.log( i+". " +item);
		});

		console.log("done");
  	}

  	else

		console.log("error"); 

});