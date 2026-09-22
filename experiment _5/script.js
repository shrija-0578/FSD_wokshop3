const http = require('http');

const server = http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/plain');

if (req.method === 'GET' && req.url === '/first') {
res. statusCode = 200; res.end('GET: Student_list');
} else if (req.method === 'POST' && req.url === '/first') {
res. statusCode = 201; res.end( 'POST: list created');
} else if (req.method === 'PUT' && req.url === '/first') {
res. statusCode = 200; res. end( 'PUT: list updated');
} else if (req.method === 'DELETE' && req.url === '/first') {
res. statusCode = 200; res. end( 'DELETE: list deleted');
} else { res.statusCode = 404; res.end( 'Route not found'); }
});
server. listen(500, () => console. log('Server on port 500'));