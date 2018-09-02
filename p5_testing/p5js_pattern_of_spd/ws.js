var fs = require('fs');
var http = require('http');
var path = require('path');

var handleRequest = function (request, response) {
	var pathname = request.url;

	if (pathname == '/') {
		pathname = '/index.html';
	}

	var ext = path.extname(pathname);

	var typeExt = {
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.css': 'text/css'
	};

	var contentType = typeExt[ext] || 'text/plain';

	fs.readFile(__dirname + pathname,
			function (err, data) {
				if (err) {
					response.writeHead(500);
					return response.end('Error loading ' + pathname);
				}
				response.writeHead(200, {'Content-Type':contentType});
				response.end(data);
			}
		   );
}

var server = http.createServer(handleRequest);
server.listen(8080);

console.log('Server started on port 8080');
