const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''

    // 代理目标地址
    if (req.url.startsWith('/api')) {
        target = 'https://www.mexc.com' + req.url;
        console.log(target, 'target')
    }

    var options = {
        'method': 'GET',
        'url': target,
        'headers': {
            'Notion-Version': res.headers['notion-version'],
            'Authorization': res.headers['authorization']
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(response.body);
        res.end();
    });
}
