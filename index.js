const { Server } = require('http');
const CORS = {
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
		  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
		};
const s = Server((req, res) => {
  // req.headers
  if (req.url === '/login/') {
    res.writeHead(200, { 
      'Content-type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.write('79213589765\n');
  } else if (req.url.startsWith('/sample/')) {
    res.writeHead(200, { 
      'Content-type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
      // ...CORS
    });
    /* // ! ------------
    const xAll = req.url.substring(1 + req.url.indexOf('?')).split('&');
    let xNew = [];
    for (i = 0; i < xAll.length; i++) {
      xNew += xAll[i].substring(1 + xAll[i].indexOf('='));
    }
    const x1 = Number(xNew[0]);
    const x2 = Number(xNew[1]);
    function task(x) {
      return x * Math.pow(this, 2);
    }
    */ // ! ------------
      const textFunction = `function task(x) {
        return x * Math.pow(this, 2);
      }`
    return res.end(`${textFunction}\n`);
   // ! ------------
    return res.end(`${task.call(x1, x2)}\n`);
  } else {
      res.writeHead(404, { 'Content-type': 'text/html; charset=utf-8', ...CORS });
      res.write('Не найдено!\n');
  }
  res.end();
});
s.listen(4321);