# Identifying resources on the Web

The target of an HTTP request is called a "resource", it can be a document, a photo, or anything else.

Each resource is identified by a Uniform Resource Identifier ([URI](https://developer.mozilla.org/en-US/docs/Glossary/URI)) used throughout HTTP for identifying resources.

## [URLs and URNs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urls_and_urns)

### [URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urls)

The most common form of URI is the Uniform Resource Locator ([URL](https://developer.mozilla.org/en-US/docs/Glossary/URL)), which is known as the *web address*.

```
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

Any of those URLs can be typed into your browser's address bar to tell it to load the associated page (resource).

A URL is composed of different parts, some mandatory and others are optional. A more complex example might look like this:

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### [URNs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urns)

A Uniform Resource Name (URN) is a URI that identifies a resource by name in a particular namespace.

```
urn:isbn:9780141036144  // the book Nineteen Eighty-Four by George Orwell
urn:ietf:rfc:7230  // the IETF specification 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing
```

## [Syntax of Uniform Resource Identifiers (URIs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#syntax_of_uniform_resource_identifiers_uris)

### [Scheme or protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#scheme_or_protocol)

![Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web/mdn-url-protocol@x2.png)

Common schemes are:

| Scheme      | Description                                                  |
| :---------- | :----------------------------------------------------------- |
| data        | [Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) |
| file        | Host-specific file names                                     |
| ftp         | [File Transfer Protocol](https://developer.mozilla.org/en-US/docs/Glossary/FTP) |
| http/https  | [Hyper text transfer protocol (Secure)](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) |
| javascript  | URL-embedded JavaScript code                                 |
| mailto      | Electronic mail address                                      |
| ssh         | Secure shell                                                 |
| tel         | telephone                                                    |
| urn         | Uniform Resource Names                                       |
| view-source | Source code of the resource                                  |
| ws/wss      | [WebSocket connections (Secure)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |

### [Authority](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#authority)

![Domaine Name](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web/mdn-url-domain@x2.png)

### [Port](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#port)

![Port](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web/mdn-url-port@x2.png)

### [Path](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#path)

![Path to the file](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web/mdn-url-path@x2.png)

### [Query](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#query)

![Parameters](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web/mdn-url-parameters@x2.png)

### [Fragment](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment)

![Anchor](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web/mdn-url-anchor@x2.png)

## [Usage notes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#usage_notes)

When using URLs in [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) content, you should generally only use a few of these URL schemes. When referring to subresources — that is, files that are being loaded as part of a larger document — you should only use the HTTP and HTTPS schemes. Increasingly, browsers are removing support for using FTP to load subresources, for security reasons.

FTP is still acceptable at the top level (such as typed directly into the browser's URL bar, or the target of a link), although some browsers may delegate loading FTP content to another application.

## [Examples](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#examples)

```
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```
