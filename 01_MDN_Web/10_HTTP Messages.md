# HTTP Messages

HTTP requests, and responses, share similar structure and are composed of:

1. A *start-line* describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
2. An optional set of *HTTP headers* specifying the request, or describing the body included in the message.
3. A blank line indicating all meta-information for the request has been sent.
4. An optional *body* containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

![Requests and responses share a common structure in HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/httpmsgstructure2.png)

## [HTTP Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http_requests)

### [Start line](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#start_line)

1. An *[HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)*

2. The *request target*, usually a [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL), or the absolute path of the protocol, port, and domain are usually characterized by the request context. The format of this request target varies between different HTTP methods. It can be

   - **An absolute path,** ultimately followed by a `?`and query string. This is the most common form, known as theorigin form, and is used with `GET`, `POST`, `HEAD `, `OPTIONS`methods.
     - `POST / HTTP/1.1`
     - `GET /background.png HTTP/1.0`
     - `HEAD /test.html?query=alibaba HTTP/1.1`
     - `OPTIONS /anypage.html HTTP/1.0`

   - **A complete URL**, known as the *absolute form*, is mostly used with `GET` when connected to a proxy. 
     - `GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1`
   - **The authority component of a URL**, consisting of the domain name and optionally the port (prefixed by a `':'`), is called the *authority form*. It is only used with `CONNECT` when setting up an HTTP tunnel. 
     - `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - **The *asterisk form***, a simple asterisk (`'*'`) is used with `OPTIONS`, representing the server as a whole. 
     - `OPTIONS * HTTP/1.1`

3. The *HTTP version*

### [Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#headers)

Many different headers can appear in requests. They can be divided in several groups:

- [General headers](https://developer.mozilla.org/en-US/docs/Glossary/General_header), like [`Via`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via), apply to the message as a whole.
- [Request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), like [`User-Agent`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) or [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept), modify the request by specifying it further (like [`Accept-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)), by giving context (like [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)), or by conditionally restricting it (like [`If-None`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None)).
- [Representation headers](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header) like [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) that describe the original format of the message data and any encoding applied (only present if the message has a body).

<img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/http_request_headers3.png" alt="Example of headers in an HTTP request" />

### [Body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#body)

Bodies can be broadly divided into two categories:

- Single-resource bodies, consisting of one single file, defined by the two headers: [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length).
- [Multiple-resource bodies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), consisting of a multipart body, each containing a different bit of information. This is typically associated with [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms).

## [HTTP Responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http_responses)

### [Status line](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#status_line)

The start line of an HTTP response, called the *status line*, contains the following information:

1. The *protocol version*, usually `HTTP/1.1`.
2. A *status code*, indicating success or failure of the request. Common status codes are [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200), [`404`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404), or [`302`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
3. A *status text*. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

A typical status line looks like: `HTTP/1.1 404 Not Found`.

### [Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#headers_2)

Many different headers can appear in responses. These can be divided into several groups:

- [General headers](https://developer.mozilla.org/en-US/docs/Glossary/General_header), like [`Via`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via), apply to the whole message.
- [Response headers](https://developer.mozilla.org/en-US/docs/Glossary/Response_header), like [`Vary`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) and [`Accept-Ranges`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges), give additional information about the server which doesn't fit in the status line.
- [Representation headers](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header) like [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) that describe the original format of the message data and any encoding applied (only present if the message has a body).

![Example of headers in an HTTP response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/http_response_headers3.png)

### [Body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#body_2)

Bodies can be broadly divided into three categories:

- Single-resource bodies, consisting of a single file of known length, defined by the two headers: [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length).
- Single-resource bodies, consisting of a single file of unknown length, encoded by chunks with [`Transfer-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding) set to `chunked`.
- [Multiple-resource bodies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), consisting of a multipart body, each containing a different section of information. These are relatively rare.

## [HTTP/2 Frames](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http2_frames)

HTTP/1.x messages have a few drawbacks for performance:

- Headers, unlike bodies, are uncompressed.
- Headers are often very similar from one message to the next one, yet still repeated across connections.
- No multiplexing can be done. Several connections need opening on the same server: and warm TCP connections are more efficient than cold ones.

HTTP/2 introduces an extra step: it divides HTTP/1.x messages into frames which are embedded in a stream. Data and header frames are separated, which allows header compression. Several streams can be combined together, a process called *multiplexing*, allowing more efficient use of underlying TCP connections.

![HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/binary_framing2.png)
