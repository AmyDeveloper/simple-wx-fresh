

var MINE_TYPES = {
	'html': 	'text/html',
	'xml': 		'text/xml',
	'txt': 		'text/plain',
	'css': 		'text/css',
	'js': 		'text/javascript',
	'json': 	'application/json',
	'pdf': 		'application/pdf',
	'swf': 		'application/x-shockwave-flash',
	'svg': 		'image/svg+xml',
	'tiff': 	'image/tiff',
	'png': 		'image/png',
	'gif': 		'image/gif',
	'ico': 		'image/x-icon',
	'jpg': 		'image/jpeg',
	'jpeg': 	'image/jpeg',
	'wav': 		'audio/x-wav',
	'wma': 		'audio/x-ms-wma',
	'wmv': 		'video/x-ms-wmv',
	'woff2': 	'application/font-woff2'
};
var HTTP_PORT = 80;
var HTTPS_PORT = 3001;
var http = require('http');
var https = require('https');
var url = require('url');
var fs = require('fs');
var path = require('path');
var root = process.cwd();

function app(request, response) {
	var pathname = decodeURIComponent(url.parse(request.url).pathname);
	var realPath = path.join(root, pathname);
	var ext = path.extname(realPath);
	if (!ext) {
		realPath = path.join(realPath, '/index.html');
		ext = '.html'
	}
	fs.exists(realPath, function(exists) {
		if (exists) {
			fs.readFile(realPath, 'binary', function(err, file) {
				if (!err) {
					response.writeHead(200, {
						'Content-Type': MINE_TYPES[ext.slice(1)] || 'text/plain'
					});
					response.write(file, 'binary');
					response.end();
				} else {
					response.writeHead(500, {
						'Content-Type': 'text/plain'
					});
					response.write('ERROR, the reason of error is ' + err.code + '; Error number is ' + err.errno + '.');
					response.end();
				}
			})
		} else {
			response.writeHead(404, {
				'Content-Type': 'text/plain'
			});
			response.write('This request URL ' + pathname + ' was not found on this server.');
			response.end();
		}
	});

}
var privateKey  = fs.readFileSync('./ssl/private.pem', 'utf8');
var certificate = fs.readFileSync('./ssl/file.crt', 'utf8');
var credentials = {
	key: privateKey, 
	cert: certificate
};

http.createServer(app).listen(HTTP_PORT, function() {
	console.log("http server running at port " + HTTP_PORT);
});
https.createServer(credentials, app).listen(HTTPS_PORT, function() {
	console.log("https server running at port " + HTTPS_PORT);
});

