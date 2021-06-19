var fs = require('fs');
var pdf = require('dynamic-html-pdf');
var html = fs.readFileSync('index.html', 'utf8');

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

var document = {
    type: 'file',
    template: html,
    context :{},
    path: "./Document.pdf"
};

pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });