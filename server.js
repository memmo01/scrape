// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");

console.log("\n****************** ls*****************\n" +
            "Grabbing every thread name and link\n" +
            "from mugglenet board:" +
            "\n***********************************\n");

request("http://www.mugglenet.com/", function(error, response, html) {

  
  var $ = cheerio.load(html);

  var result = [];

   $("h2.post-title.entry-title").each(function(i, element) {

 
    var title = $(this).text();

   
    var link = $(element).children().attr("href");

    
    result.push({
      title: title,
      link: link
    });

  });


  console.log(result);
});
