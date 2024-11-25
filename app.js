var http = require('http'),
    httpProxy = require('http-proxy'),
    proxyServer = httpProxy.createServer({
        hostnameOnly: true,
        router: {
            '127.0.0.1':        '127.0.0.1:8080'
        }
    });

proxyServer.listen(8888);