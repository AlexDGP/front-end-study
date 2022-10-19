# Overview of HTTP

HTTP is a protocol for fetching resources from web server.

- CS(client-server) protocol

  Client, usually a Web browser, send **requests** to server. 

  Server send **responses** to client as an answer. 

<img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png" alt="A Web document is the composition of different resources" style="zoom:70%;" align="left"/>

- Application layer protocol

  HTTP protocol is based on TCP

  <img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http-layers.png" alt="HTTP as an application layer protocol, on top of TCP (transport layer) and IP (network layer) and below the presentation layer." style="zoom:33%;" align="left"/>

## [Components of HTTP-based systems](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#components_of_http-based_systems)

<img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/client-server-chain.png" alt="Client server chain" style="zoom:80%;" align="left"/>

- [Client: the user-agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#client_the_user-agent)

- [The Web server](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#the_web_server)

- [Proxies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#proxies)

  **caching** (the cache can be public or private, like the browser cache)

  **filtering** (like an antivirus scan or parental controls)

  **load balancing** (to allow multiple servers to serve different requests)

  **authentication** (to control access to different resources)

  **logging** (allowing the storage of historical information)

## [Basic aspects of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#basic_aspects_of_http)

- [HTTP is simple](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_is_simple)
- [HTTP is extensible](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_is_extensible)
- [HTTP is stateless, but not sessionless](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless)
- [HTTP and connections](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_and_connections)

## [What can be controlled by HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#what_can_be_controlled_by_http)

- *[Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)* 
- *Relaxing the origin constraint*
- *Authentication*
- *[Proxy and tunneling](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling)*
- *Sessions*

## [HTTP flow](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_flow)

1. Open a TCP connection.

2. Send an HTTP message.

   ```
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Read the response sent by the server.

   ```
   HTTP/1.1 200 OK
   Date: Sat, 09 Oct 2010 14:28:02 GMT
   Server: Apache
   Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
   ETag: "51142bc1-7449-479b075b2891b"
   Accept-Ranges: bytes
   Content-Length: 29769
   Content-Type: text/html
   
   <!DOCTYPE html... (here come the 29769 bytes of the requested web page)
   ```

4. Close or reuse the connection for further requests.

## [HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_messages)

### [Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#requests)

### ![A basic HTTP request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_request.png)

### [Responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#responses)

### ![HTTP Response image](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_response.png)

## [APIs based on HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#apis_based_on_http)

- [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

- [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)