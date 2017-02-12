var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var article1={
    title:'Article1|Nishant',
    heading:'Article1',
    date:'Feb 12 ,2017',
    content:` <p>
                this is aricle 1. Hare Krishna!!!this is aricle 1. Hare Krishna!!!this is aricle 1. Hare Krishna!!!
                this is aricle 1. Hare Krishna!!!this is aricle 1. Hare Krishna!!!
                this is aricle 1. Hare Krishna!!!
            </p>
            <hr/>
            <p>
                this is aricle 1. Hare Krishna!!!this is aricle 1. Hare Krishna!!!this is aricle 1. Hare Krishna!!!
                this is aricle 1. Hare Krishna!!!
            </p>`
        
};
function createtemplate(data){
    var title=data.title;
    var date =data.date;
    var heading=data.heading;
    var content =data.content;

var htmltemplate=`<!Doctype html>
    <head>
        <title>
            Article1 |Nishant Prakash
        </title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />

        
    </head>
    <body>
     <div class="container">
           <div >
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
     </div>
    </body>
</html>
`;
return htmltemplate;
}



app.get('/article1',function(req,res)
{
  res.send(createtemplate(article1));
});
app.get('/article2',function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
app.get('/article3',function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
