# Data URLs

**Data URLs**, URLs prefixed with the `data:` scheme, allow content creators to embed small files inline in documents.

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#syntax)

Data URLs are composed of four parts:

- a prefix (`data:`)
- a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- an optional `base64` token if non-textual,
-  the data itself

```
data:[<mediatype>][;base64],<data>
```

A few examples:

- [percent-encoded](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding): `data:,Hello%2C%20World%21`

- base64-encoded: `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
- An HTML document: `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
- An HTML document that executes a JavaScript alert: `data:text/html,<script>alert('hi');</script>`

## [Encoding data into base64 format](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#encoding_data_into_base64_format)

Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. By consisting only of ASCII characters, base64 strings are generally url-safe, and that's why they can be used to encode data in Data URLs.

### [Encoding in Javascript](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#encoding_in_javascript)

The Web APIs have native methods to encode or decode to base64: [Base64 encoding and decoding](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

### [Encoding on a Unix system](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#encoding_on_a_unix_system)

Base64 encoding of a file or string on Linux and macOS systems can be achieved using the command-line `base64` (or, as an alternative, the `uuencode` utility with `-m` argument).

```bash
echo -n hello|base64
# outputs to console: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# outputs to console: aGVsbG8=

base64 a.txt>b.txt
# outputs to file b.txt: aGVsbG8=
```

### [Encoding on Microsoft Windows](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#encoding_on_microsoft_windows)

On Windows, [Convert.ToBase64String](https://docs.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) from PowerShell can be used to perform the Base64 encoding:

```shell
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

Alternatively, a GNU/Linux shell (such as [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) provides the utility `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## [Common problems](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#common_problems)

- Syntax

  The format for `data` URLs is very simple, but it's easy to forget to put a comma before the "data" segment, or to incorrectly encode the data into base64 format.

- Formatting in HTML

- Length limitations

- Lack of error handling

- No support for query strings, etc.

This section describes problems that commonly occur when creating and using `data` URLs.

```
data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val
```

This represents an HTML resource whose contents are:

```
lots of text...<p><a name="bottom">bottom</a>?arg=val
```

- Security issues
