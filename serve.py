import http.server, os

os.chdir("/Users/giuseppeallocca/Downloads/Claude Code")

class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

http.server.HTTPServer(("", 8080), H).serve_forever()
