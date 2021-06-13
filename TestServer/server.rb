require 'webrick'
server = WEBrick::HTTPServer.new :Port => 80
server.mount "/", WEBrick::HTTPServlet::FileHandler, '../SITE/'
trap('INT') { server.stop }
server.start