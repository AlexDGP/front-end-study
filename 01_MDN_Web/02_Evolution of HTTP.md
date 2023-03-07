# Evolution of HTTP

## [Invention of the World Wide Web](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#invention_of_the_world_wide_web)

*World Wide Web* built over the existing TCP and IP protocols, it consisted of 4 building blocks:

- **HTML**: A textual format to represent hypertext documents, the *[HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)* (HTML).
- **HTTP**: A simple protocol to exchange these documents, the *HyperText Transfer Protocol* (HTTP).
- **Browser**: A client to display (and edit) these documents, the first web browser called the *WorldWideWeb*.
- **Server**: A server to give access to the document, an early version of *httpd*.

## [HTTP/0.9 – The one-line protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http0.9_–_the_one-line_protocol)

request-response pair:

```
GET /mypage.html

<html>
A very simple HTML page
</html>
```

## [HTTP/1.0 – Building extensibility](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http1.0_–_building_extensibility)

request-response pair:

```
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>
```

```
  GET /myimage.gif HTTP/1.0
  User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

  200 OK
  Date: Tue, 15 Nov 1994 08:12:32 GMT
  Server: CERN/3.0 libwww/2.17
  Content-Type: text/gif
  (image content)
```

## [HTTP/1.1 – The standardized protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http1.1_–_the_standardized_protocol)

A typical flow of requests, all through one single connection, looked like this:

```
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)

GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
```

## [More than 15 years of extensions](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#more_than_15_years_of_extensions)

- [Using HTTP for secure transmissions](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#using_http_for_secure_transmissions)

- [Using HTTP for complex applications](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#using_http_for_complex_applications)

- [Relaxing the security-model of the web](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#relaxing_the_security-model_of_the_web)

## [HTTP/2 – A protocol for greater performance](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http2_–_a_protocol_for_greater_performance)

## [Post-HTTP/2 evolution](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#post-http2_evolution)

## [HTTP/3 - HTTP over QUIC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#http3_-_http_over_quic)
