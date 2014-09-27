var sys = require("sys"),
    my_http = require("http"),
    path = require("path"),
    url = require("url"),
    fs = require("fs"),
    mime = require("mime");
my_http.createServer(function(request,response){
    var my_path = "/public"+url.parse(request.url).pathname;
    var full_path = path.join(process.cwd(), my_path);
    fs.exists(full_path,function(exists){
        if(!exists)
        {
            response.writeHead  (404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
        }  
        else
        {  
            fs.readFile(full_path, "binary", function(err, file) {
                if(err) {
                    response.writeHead(500, {"Content-Type": "text/plain"});
                    response.write(err + "\n");
                    response.end();
                }
                else
                {
                    response.setHeader("Content-Type", mime.lookup(full_path));
                    response.writeHead(200);
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
}).listen(8080);
sys.puts("Server Running on 8080");