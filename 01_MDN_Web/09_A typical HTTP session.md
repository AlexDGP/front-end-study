# A typical HTTP session

## [Establishing a connection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session#establishing_a_connection)

## [Sending a client request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session#sending_a_client_request)

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

```
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

## [Structure of a server response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session#structure_of_a_server_response)

### [Response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session#response_status_codes)

- [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200): OK. The request has succeeded.
- [`301`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301): Moved Permanently. This response code means that the URI of requested resource has been changed.
- [`404`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404): Not Found. The server cannot find the requested resource.

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A simple webpage</title>
</head>
<body>
  <h1>Simple HTML5 webpage</h1>
  <p>Hello, world!</p>
</body>
</html>
```

```
HTTP/1.1 301 Moved Permanently
Server: Apache/2.4.37 (Red Hat)
Content-Type: text/html; charset=utf-8
Date: Thu, 06 Dec 2018 17:33:08 GMT
Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

<!DOCTYPE html... (contains a site-customized page helping the user to find the missing resource)
```

```
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 38217
Connection: keep-alive
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:35:13 GMT
Expires: Thu, 06 Dec 2018 17:35:13 GMT
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
X-Cache: Error from cloudfront

<!DOCTYPE html... (contains a site-customized page helping the user to find the missing resource)
```
