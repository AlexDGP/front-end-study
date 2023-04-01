# MDN-HTML reference

## 1 HTML elements reference

### 1.1 Main root

- [x] `<html>`

### 1.2 Document metadata

- [x] `<base>`
- [x] `<head>`
- [ ] `<link>`(难)
- [ ] `<meta>`
- [x] `<style>`
- [x] `<title>`

### 1.3 Sectioning root

- [x] `<body>`

### 1.4 Content Sectioning

- [x] `<address>`
- [x] `<article>`
- [x] `<aside>`
- [x] `<footer>`
- [x] `<header>`
- [x] `<h1>`-`<h6>`
- [x] `<main>`
- [x] `<nav>`
- [x] `<section>`

### 1.5 Text content

- [x] `<blockquote>`
- [x] `<dd>`
- [x] `<div>`
- [x] `<dl>`
- [x] `<dt>`
- [x] `<figcaption>`
- [x] `<figure>`
- [x] `<hr>`
- [x] `<li>`
- [x] `<menu>`
- [x] `<ol>`
- [x] `<p>`
- [x] `<pre>`
- [x] `<ul>`

### 1.6 Inline text semantics

- [x] `<a>`
- [x] `<abbr>`
- [x] `<b>`
- [x] `<bdi>`
- [x] `<bdo>`
- [x] `<br>`
- [x] `<cite>`
- [x] `<code>`
- [x] `<data>`
- [x] `<dfn>`
- [x] `<em>`
- [x] `<i>`
- [x] `<kbd>`
- [x] `<mark>`
- [x] `<q>`
- [x] `<rp>`
- [x] `<rt>`
- [x] `<ruby>`
- [x] `<s>`
- [x] `<samp>`
- [x] `<strong>`
- [x] `<sub>`
- [x] `<sup>`
- [x] `<time>`
- [x] `<u>`
- [x] `<var>`
- [x] `<wbr>`

### 1.7 Image and multimedia

- [x] `<area>`
- [ ] `<audio>`
- [ ] `<img>`
- [ ] `<map>`
- [ ] `<track>`
- [ ] `<video>`

### 1.8 Embedded content

- [ ] `<embed>`
- [ ] `<iframe>`
- [ ] `<object>`
- [ ] `<picture>`
- [ ] `<portal>`
- [ ] `<source>`

### 1.9 SVG and MathML

- [ ] `<svg>`
- [ ] `<math>`

### 1.10 Script

- [ ] `<canvas>`
- [ ] `<noscript>`
- [ ] `<script>`

### 1.11 Demarcating edits

- [ ] `<del>`
- [ ] `<ins>`

### 1.12 Table content

- [ ] `<caption>`
- [ ] `<col>`
- [ ] `<colgroup>`
- [ ] `<table>`
- [ ] `<tbody>`
- [ ] `<td>`
- [ ] `<tfoot>`
- [ ] `<th>`
- [ ] `<thead>`
- [ ] `<tr>`

### 1.13 Forms

- [ ] `<button>`
- [x] `<datalist>`
- [ ] `<fieldset>`
- [ ] `<form>`
- [ ] `<input>`
- [ ] `<label>`
- [ ] `<legend>`
- [x] `<meter>`
- [ ] `<optgroup>`
- [ ] `<option>`
- [ ] `<output>`
- [x] `<progress>`
- [ ] `<select>`
- [ ] `<textarea>`

### 1.14 Interactive elemets

- [x] `<details>`
- [ ] `<dialog>`
- [x] `<summary>`

### 1.15 Web Components

- [ ] `<slot>`
- [ ] `<template>`

### 1.16 Obsolete and deprecated elements

## 2 HTML attribute reference

### 2.1 Attribute list

| Attribute Name                                               | Elements                                                     | Description                                                  | Done |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ---- |
| [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) | [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | List of types the server accepts, typically a file type.     |      |
| `accept-charset`                                             | [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | List of supported charsets.                                  |      |
| `accesskey`                                                  | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Keyboard shortcut to activate or add focus to the element.   |      |
| `action`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | The URI of a program that processes the information submitted via the form. |      |
| `align`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption), , , [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), , `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), , `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th), , | Specifies the horizontal alignment of the element.           |      |
| `allow`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) | Specifies a feature-policy for the iframe.                   |      |
| `alt`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | Alternative text in case an image can't be displayed.        |      |
| `async`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Executes the script asynchronously.                          |      |
| `autocapitalize`                                             | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Sets whether input is automatically capitalized when entered by user |      |
| `autocomplete`                                               | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Indicates whether controls in this form can by default have their values automatically completed by the browser. |      |
| `autofocus`                                                  | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | The element should be automatically focused after the page loaded. |      |
| `autoplay`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | The audio or video should play as soon as possible.          |      |
| `background`                                                 | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) | Specifies the URL of an image file.**Note:** Although browsers and email clients may still support this attribute, it is obsolete. Use CSS [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) instead. |      |
| `bgcolor`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body), , , [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), , , `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th), | Background color of the element.**Note:** This is a legacy attribute. Please use the CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) property instead. |      |
| `border`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | The border width.**Note:** This is a legacy attribute. Please use the CSS [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) property instead. |      |
| `buffered`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Contains the time range of already buffered media.           |      |
| `capture`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | From the [Media Capture specification](https://w3c.github.io/html-media-capture/#the-capture-attribute), specifies a new file can be captured. |      |
| `challenge`                                                  | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen) | A challenge string that is submitted along with the public key. |      |
| `charset`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Declares the character encoding of the page or script.       |      |
| `checked`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | Indicates whether the element should be checked on page load. |      |
| `cite`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q) | Contains a URI which points to the source of the quote or change. |      |
| `class`                                                      | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Often used with CSS to style elements with common properties. |      |
| `code`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet) | Specifies the URL of the applet's class file to be loaded and executed. |      |
| `codebase`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet) | This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored. |      |
| `color`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr) | This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.**Note:** This is a legacy attribute. Please use the CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) property instead. |      |
| `cols`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Defines the number of columns in a textarea.                 |      |
| `colspan`                                                    | `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) | The colspan attribute defines the number of columns a cell should span. |      |
| `content`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) | A value associated with `http-equiv` or `name` depending on the context. |      |
| `contenteditable`                                            | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Indicates whether the element's content is editable.         |      |
| `contextmenu`                                                | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Defines the ID of a [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) element which will serve as the element's context menu. |      |
| `controls`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Indicates whether the browser should show playback controls to the user. |      |
| `coords`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) | A set of values specifying the coordinates of the hot-spot region. |      |
| `crossorigin`                                                | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | How the element handles cross-origin requests                |      |
| `csp` Experimental                                           | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) | Specifies the Content Security Policy that an embedded document must agree to enforce upon itself. |      |
| `data`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object) | Specifies the URL of the resource.                           |      |
| `data-*`                                                     | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Lets you attach custom attributes to an HTML element.        |      |
| `datetime`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) | Indicates the date and time associated with the element.     |      |
| `decoding`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) | Indicates the preferred method to decode the image.          |      |
| `default`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) | Indicates that the track should be enabled unless the user's preferences indicate something different. |      |
| `defer`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Indicates that the script should be executed after the page has been parsed. |      |
| `dir`                                                        | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left) |      |
| `dirname`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) |                                                              |      |
| `disabled`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Indicates whether the user can interact with the element.    |      |
| `download`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) | Indicates that the hyperlink is to be used for downloading a resource. |      |
| `draggable`                                                  | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Defines whether the element can be dragged.                  |      |
| `enctype`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | Defines the content type of the form data when the `method` is POST. |      |
| `enterkeyhint` Experimental                                  | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea), [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) | The [`enterkeyhint`](https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute) specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of `textarea` elements), or in elements in an editing host (e.g., using `contenteditable` attribute). |      |
| `for`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) | Describes elements which belongs to this one.                |      |
| `form`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Indicates the form that is the owner of the element.         |      |
| `formaction`                                                 | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) | Indicates the action of the element, overriding the action defined in the [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form). |      |
| `formenctype`                                                | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | If the button/input is a [submit button](https://developer.mozilla.org/en-US/docs/Glossary/Submit_button) (e.g. `type="submit"`), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the `enctype` attribute of the button's [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) owner. |      |
| `formmethod`                                                 | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | If the button/input is a [submit button](https://developer.mozilla.org/en-US/docs/Glossary/Submit_button) (e.g. `type="submit"`), this attribute sets the submission method to use during form submission (`GET`, `POST`, etc.). If this attribute is specified, it overrides the `method` attribute of the button's [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) owner. |      |
| `formnovalidate`                                             | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | If the button/input is a [submit button](https://developer.mozilla.org/en-US/docs/Glossary/Submit_button) (e.g. `type="submit"`), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the `novalidate` attribute of the button's [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) owner. |      |
| `formtarget`                                                 | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | If the button/input is a [submit button](https://developer.mozilla.org/en-US/docs/Glossary/Submit_button) (e.g. `type="submit"`), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the `target` attribute of the button's [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) owner. |      |
| `headers`                                                    | `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) | IDs of the `<th>` elements which applies to this element.    |      |
| `height`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Specifies the height of elements listed here. For all other elements, use the CSS [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) property.**Note:** In some instances, such as [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div), this is a legacy attribute, in which case the CSS [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) property should be used instead. |      |
| `hidden`                                                     | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Prevents rendering of given element, while keeping child elements, e.g. script elements, active. |      |
| `high`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) | Indicates the lower bound of the upper range.                |      |
| `href`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) | The URL of a linked resource.                                |      |
| `hreflang`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) | Specifies the language of the linked resource.               |      |
| `http-equiv`                                                 | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) | Defines a pragma directive.                                  |      |
| `id`                                                         | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Often used with CSS to style a specific element. The value of this attribute must be unique. |      |
| `integrity`                                                  | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Specifies a [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) value that allows browsers to verify what they fetch. |      |
| [`intrinsicsize`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#intrinsicsize) Deprecated | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) | This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute. |      |
| [`inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea), [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) | Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of `textarea` elements), or in elements in an editing host (e.g., using `contenteditable` attribute). |      |
| `ismap`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) | Indicates that the image is part of a server-side image map. |      |
| `itemprop`                                                   | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) |                                                              |      |
| `keytype`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen) | Specifies the type of key generated.                         |      |
| `kind`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) | Specifies the kind of text track.                            |      |
| `label`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) | Specifies a user-readable title of the element.              |      |
| `lang`                                                       | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Defines the language used in the element.                    |      |
| `language` Deprecated                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Defines the script language used in the element.             |      |
| `loading` Experimental                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) | Indicates if the element should be loaded lazily (`loading="lazy"`) or loaded immediately (`loading="eager"`). |      |
| `list`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | Identifies a list of pre-defined options to suggest to the user. |      |
| `loop`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Indicates whether the media should start playing from the start when it's finished. |      |
| `low`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) | Indicates the upper bound of the lower range.                |      |
| `manifest` Deprecated                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) | Specifies the URL of the document's cache manifest.**Note:** This attribute is obsolete, use [``](https://developer.mozilla.org/en-US/docs/Web/Manifest) instead. |      |
| `max`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) | Indicates the maximum value allowed.                         |      |
| `maxlength`                                                  | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Defines the maximum number of characters allowed in the element. |      |
| `minlength`                                                  | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Defines the minimum number of characters allowed in the element. |      |
| `media`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) | Specifies a hint of the media for which the linked resource was designed. |      |
| `method`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | Defines which [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method to use when submitting the form. Can be `GET` (default) or `POST`. |      |
| `min`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) | Indicates the minimum value allowed.                         |      |
| `multiple`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) | Indicates whether multiple values can be entered in an input of the type `email` or `file`. |      |
| `muted`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Indicates whether the audio will be initially silenced on page load. |      |
| `name`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param) | Name of the element. For example used by the server to identify the fields in form submits. |      |
| `novalidate`                                                 | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | This attribute indicates that the form shouldn't be validated when submitted. |      |
| `open`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) | Indicates whether the contents are currently visible (in the case of a `<details>` element) or whether the dialog is active and can be interacted with (in the case of a `<dialog>` element). |      |
| `optimum`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) | Indicates the optimal numeric value.                         |      |
| `pattern`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) | Defines a regular expression which the element's value will be validated against. |      |
| `ping`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) | The `ping` attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink. |      |
| `placeholder`                                                | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Provides a hint to the user of what can be entered in the field. |      |
| `playsinline`                                                | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | A Boolean attribute indicating that the video is to be played "inline"; that is, within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen. |      |
| `poster`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | A URL indicating a poster frame to show until the user plays or seeks. |      |
| `preload`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | Indicates whether the whole resource, parts of it or nothing should be preloaded. |      |
| `readonly`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Indicates whether the element can be edited.                 |      |
| `referrerpolicy`                                             | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) | Specifies which referrer is sent when fetching the resource. |      |
| `rel`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) | Specifies the relationship of the target object to the link object. |      |
| `required`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Indicates whether this element is required to fill out or not. |      |
| `reversed`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) | Indicates whether the list should be displayed in a descending order instead of an ascending order. |      |
| `role`                                                       | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Defines an explicit role for an element for use by assistive technologies. |      |
| `rows`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Defines the number of rows in a text area.                   |      |
| `rowspan`                                                    | `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) | Defines the number of rows a table cell should span over.    |      |
| `sandbox`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) | Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows). |      |
| `scope`                                                      | `](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) | Defines the cells that the header test (defined in the `th` element) relates to. |      |
| `scoped` Non-standard Deprecated                             | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) |                                                              |      |
| `selected`                                                   | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) | Defines a value which will be selected on page load.         |      |
| `shape`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) |                                                              |      |
| `size`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) | Defines the width of the element (in pixels). If the element's `type` attribute is `text` or `password` then it's the number of characters. |      |
| `sizes`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source) |                                                              |      |
| `slot`                                                       | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Assigns a slot in a shadow DOM shadow tree to an element.    |      |
| `span`                                                       | ,                                                            |                                                              |      |
| `spellcheck`                                                 | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Indicates whether spell checking is allowed for the element. |      |
| `src`                                                        | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | The URL of the embeddable content.                           |      |
| `srcdoc`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) |                                                              |      |
| `srclang`                                                    | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) |                                                              |      |
| `srcset`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source) | One or more responsive image candidates.                     |      |
| `start`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) | Defines the first number if other than 1.                    |      |
| `step`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) |                                                              |      |
| `style`                                                      | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Defines CSS styles which will override styles previously set. |      |
| `summary` Deprecated                                         | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) |                                                              |      |
| `tabindex`                                                   | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Overrides the browser's default tab order and follows the one specified instead. |      |
| `target`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) | Specifies where to open the linked document (in the case of an `<a>` element) or where to display the response received (in the case of a `<form>` element) |      |
| `title`                                                      | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Text to be displayed in a tooltip when hovering over the element. |      |
| `translate`                                                  | [Global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | Specify whether an element's attribute values and the values of its `Text` node children are to be translated when the page is localized, or whether to leave them unchanged. |      |
| `type`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) | Defines the type of the element.                             |      |
| `usemap`                                                     | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object) |                                                              |      |
| `value`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param) | Defines a default value which will be displayed in the element on page load. |      |
| `width`                                                      | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object), [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) | For the elements listed here, this establishes the element's width.**Note:** For all other instances, such as [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div), this is a legacy attribute, in which case the CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) property should be used instead. |      |
| `wrap`                                                       | [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) | Indicates whether the text should be wrapped.                |      |