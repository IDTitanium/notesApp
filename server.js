const http = require('http');
const fs = require('fs');
function helloWorldHandler(req, res) {
	var url = req.url;
	const acceptedUrls = [
		'/',
		'/index.html',
		'/index2.html',
		'/index.css',
		'/index.js',
	];
	if (!acceptedUrls.includes(url)) {
		res.statusCode = 400;
		return res.end();
	}
	const stripInitialSlash = (url) => {
		return url.substring(1);
	};
	const getContentType = (url) => {
		let dotIndex = -1;
		for (let i = 0; i < url.length; i++) {
			const character = url[i];
			if (character === '.') {
				dotIndex = i;
				return url.substring(i + 1);
			}
		}
	};
	const fileName = stripInitialSlash(url);
	const contentType = getContentType(url);
	fs.readFile(fileName, function (err, data) {
		res.writeHead(200, { 'Content-Type': `text/${contentType}` });
		res.write(data);
		res.end();
	});
}
const server = http.createServer(helloWorldHandler);
server.listen(8080);
