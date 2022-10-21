# MIME types (IANA media types)

A **media type** (also known as a **Multipurpose Internet Mail Extensions or MIME type**) indicates the nature and format of a document, file, or assortment of bytes. MIME types are defined and standardized in IETF's [RFC 6838](https://datatracker.ietf.org/doc/html/rfc6838).

The [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) is responsible for all official MIME types, and you can find the most up-to-date and complete list at their [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) page.

## [Structure of a MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#structure_of_a_mime_type)

A MIME type most-commonly consists of just two parts: a *type* and a *subtype*, separated by a slash (`/`) — with no whitespace between:

```
type/subtype
type/subtype;parameter=value
```

- The ***type*** represents the general category into which the data type falls.

- The ***subtype*** identifies the exact kind of data of the specified type the MIME type represents. 

- An optional **parameter** can be added to provide additional details:

MIME types are case-insensitive but are traditionally written in lowercase. The parameter values can be case-sensitive.

### [Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#types)

There are two classes of type: **discrete** and **multipart**.

- **Discrete types** are types which represent a single file or medium, such as a single text or music file, or a single video. A multipart type is one which represents a document that's comprised of multiple component parts, each of which may have its own individual MIME type; 

- **Multipart type** may encapsulate multiple files being sent together in one transaction. For example, multipart MIME types are used when attaching multiple files to an email.

#### Discrete types

The discrete types currently registered with the IANA are:

- `application`

- `audio`

- `example`

- `font`

- `image`

- `model`

- `text`

- `video`

#### Multipart types

**Multipart** types indicate a category of document broken into pieces, often with different MIME types; they can also be used — especially in email scenarios — to represent multiple, separate files which are all part of the same transaction. They represent a **composite document**.

- `multipart/form-data`

- `multipart/byteranges`

There are two multipart types:

- `message`

- `multipart`

## [Important MIME types for Web developers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#important_mime_types_for_web_developers)

- [application/octet-stream](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#applicationoctet-stream)

- text types

  [text/plain](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#textplain)

  [text/css](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#textcss)

  [text/html](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#texthtml)

  [text/javascript](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#textjavascript)

- [Image types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#image_types)

  [`image/apng`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)

  [`image/avif`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image)

  [`image/gif`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format)

  [`image/jpeg`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image)

  [`image/png`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#png_portable_network_graphics)

  [`image/svg+xml`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)

  [`image/webp`](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image)

- [Audio and video types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#audio_and_video_types)

  `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav`

  `audio/webm`

  `audio/ogg`

  `video/webm`

  `video/ogg`

- [multipart/form-data](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#multipartform-data)

- [multipart/byteranges](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#multipartbyteranges)

## [Importance of setting the correct MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#importance_of_setting_the_correct_mime_type)

Most web servers send unrecognized resources as the `application/octet-stream` MIME type. For security reasons, most browsers do not allow setting a custom default action for such resources, forcing the user to save it to disk to use it.

Some common incorrect server configurations:

- RAR-compressed files. In this case, the ideal would be the true type of the original files; this is often impossible as .RAR files can hold several resources of different types. In this case, configure the server to send `application/x-rar-compressed`.
- Audio and video. Only resources with the correct MIME Type will be played in [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) or [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) elements. Be sure to specify the correct [media type for audio and video](https://developer.mozilla.org/en-US/docs/Web/Media/Formats).
- Proprietary file types. Avoid using `application/octet-stream` as most browsers do not allow defining a default behavior (like "Open in Word") for this generic MIME type. A specific type like `application/vnd.mspowerpoint` lets users open such files automatically in the presentation software of their choice.

## [MIME sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#mime_sniffing)

## [Other methods of conveying document type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#other_methods_of_conveying_document_type)