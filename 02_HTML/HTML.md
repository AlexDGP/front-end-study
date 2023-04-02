# [MDN-HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

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

| Level | Attribute Name| Elements| Description| Done |
|:---------|:-----------------|:----------------------|:--------|:--------|
||accept|<form>, <input>|List of types the server accepts, typically a file type.|√|
||accept-charset|<form>|List of supported charsets.|√|
|×|accesskey|Global attribute|Keyboard shortcut to activate or add focus to the element.|√|
||action|<form>|The URI of a program that processes the information submitted via the form.|√|
||align|<applet>, <caption>, <col>, <colgroup>, <hr>, <iframe>, <img>, <table>, <tbody>, <td>, <tfoot>, <th>, <thead>, <tr>|Specifies the horizontal alignment of the element.|√|
||allow|<iframe>|Specifies a feature-policy for the iframe.||
||alt|<applet>, <area>, <img>, <input>|Alternative text in case an image can't be displayed.||
||async|<script>|Executes the script asynchronously.||
||autocapitalize|Global attribute|Sets whether input is automatically capitalized when entered by user||
||autocomplete|<form>, <input>, <select>, <textarea>|Indicates whether controls in this form can by default have their values automatically completed by the browser.||
||autofocus|<button>, <input>, <keygen>, <select>, <textarea>|The element should be automatically focused after the page loaded.||
||autoplay|<audio>, <video>|The audio or video should play as soon as possible.||
||background|<body>, <table>, <td>, <th>|Specifies the URL of an image file.||
||bgcolor|<body>, <col>, <colgroup>, <marquee>, <table>, <tbody>, <tfoot>, <td>, <th>, <tr>|||
||Background color of the element.||||
||border|<img>, <object>, <table>|||
||The border width.||||
||buffered|<audio>, <video>|Contains the time range of already buffered media.||
||capture|<input>|From the Media Capture specification, specifies a new file can be captured.||
||challenge|<keygen>|A challenge string that is submitted along with the public key.||
||charset|<meta>, <script>|Declares the character encoding of the page or script.||
||checked|<input>|Indicates whether the element should be checked on page load.||
||cite|<blockquote>, <del>, <ins>, <q>|Contains a URI which points to the source of the quote or change.||
||class|Global attribute|Often used with CSS to style elements with common properties.||
||code|<applet>|Specifies the URL of the applet's class file to be loaded and executed.||
||codebase|<applet>|This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.||
||color|<font>, <hr>|||
||cols|<textarea>|Defines the number of columns in a textarea.||
||colspan|<td>, <th>|The colspan attribute defines the number of columns a cell should span.||
||content|<meta>|A value associated with http-equiv or name depending on the context.||
||contenteditable|Global attribute|Indicates whether the element's content is editable.||
||contextmenu|Global attribute|Defines the ID of a <menu> element which will serve as the element's context menu.||
||controls|<audio>, <video>|Indicates whether the browser should show playback controls to the user.||
||coords|<area>|A set of values specifying the coordinates of the hot-spot region.||
||crossorigin|<audio>, <img>, <link>, <script>, <video>|How the element handles cross-origin requests||
||csp Experimental|<iframe>|Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.||
||data|<object>|Specifies the URL of the resource.||
||data-|Global attribute|Lets you attach custom attributes to an HTML element.||
||datetime|<del>, <ins>, <time>|Indicates the date and time associated with the element.||
||decoding|<img>|Indicates the preferred method to decode the image.||
||default|<track>|Indicates that the track should be enabled unless the user's preferences indicate something different.||
||defer|<script>|Indicates that the script should be executed after the page has been parsed.||
||dir|Global attribute|Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)||
||dirname|<input>, <textarea>|||
||disabled|<button>, <fieldset>, <input>, <keygen>, <optgroup>, <option>, <select>, <textarea>|Indicates whether the user can interact with the element.||
||download|<a>, <area>|Indicates that the hyperlink is to be used for downloading a resource.||
||draggable|Global attribute|Defines whether the element can be dragged.||
||enctype|<form>|Defines the content type of the form data when the method is POST.||
||enterkeyhint Experimental|<textarea>, contenteditable|The enterkeyhint specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).||
||for|<label>, <output>|Describes elements which belongs to this one.||
||form|<button>, <fieldset>, <input>, <keygen>, <label>, <meter>, <object>, <output>, <progress>, <select>, <textarea>|Indicates the form that is the owner of the element.||
||formaction|<input>, <button>|Indicates the action of the element, overriding the action defined in the <form>.||
||formenctype|<button>, <input>|If the button/input is a submit button (e.g. type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.||
||formmethod|<button>, <input>|If the button/input is a submit button (e.g. type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.||
||formnovalidate|<button>, <input>|If the button/input is a submit button (e.g. type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.||
||formtarget|<button>, <input>|If the button/input is a submit button (e.g. type="submit"), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the target attribute of the button's form owner.||
||headers|<td>, <th>|IDs of the <th> elements which applies to this element.||
||height|<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>|||
||Specifies the height of elements listed here. For all other elements, use the CSS height property.||||
||hidden|Global attribute|Prevents rendering of given element, while keeping child elements, e.g. script elements, active.||
||high|<meter>|Indicates the lower bound of the upper range.||
||href|<a>, <area>, <base>, <link>|The URL of a linked resource.||
||hreflang|<a>, <area>, <link>|Specifies the language of the linked resource.||
||http-equiv|<meta>|Defines a pragma directive.||
||id|Global attribute|Often used with CSS to style a specific element. The value of this attribute must be unique.||
||integrity|<link>, <script>|||
||intrinsicsize Deprecated|<img>|This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute.||
||inputmode|<textarea>, contenteditable|Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).||
||ismap|<img>|Indicates that the image is part of a server-side image map.||
||itemprop|Global attribute|||
||keytype|<keygen>|Specifies the type of key generated.||
||kind|<track>|Specifies the kind of text track.||
||label|<optgroup>, <option>, <track>|Specifies a user-readable title of the element.||
||lang|Global attribute|Defines the language used in the element.||
||language Deprecated|<script>|Defines the script language used in the element.||
||loading Experimental|<img>, <iframe>|Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").||
||list|<input>|Identifies a list of pre-defined options to suggest to the user.||
||loop|<audio>, <bgsound>, <marquee>, <video>|Indicates whether the media should start playing from the start when it's finished.||
||low|<meter>|Indicates the upper bound of the lower range.||
||manifest Deprecated|<html>|Specifies the URL of the document's cache manifest.||
||max|<input>, <meter>, <progress>|Indicates the maximum value allowed.||
||maxlength|<input>, <textarea>|Defines the maximum number of characters allowed in the element.||
||minlength|<input>, <textarea>|Defines the minimum number of characters allowed in the element.||
||media|<a>, <area>, <link>, <source>, <style>|Specifies a hint of the media for which the linked resource was designed.||
||method|<form>|Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.||
||min|<input>, <meter>|Indicates the minimum value allowed.||
||multiple|<input>, <select>|Indicates whether multiple values can be entered in an input of the type email or file.||
||muted|<audio>, <video>|Indicates whether the audio will be initially silenced on page load.||
||name|<button>, <form>, <fieldset>, <iframe>, <input>, <keygen>, <object>, <output>, <select>, <textarea>, <map>, <meta>, <param>|Name of the element. For example used by the server to identify the fields in form submits.||
||novalidate|<form>|This attribute indicates that the form shouldn't be validated when submitted.||
||open|<details>, <dialog>|Indicates whether the contents are currently visible (in the case of a <details> element) or whether the dialog is active and can be interacted with (in the case of a <dialog> element).||
||optimum|<meter>|Indicates the optimal numeric value.||
||pattern|<input>|Defines a regular expression which the element's value will be validated against.||
||ping|<a>, <area>|The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.||
||placeholder|<input>, <textarea>|Provides a hint to the user of what can be entered in the field.||
||playsinline|<video>|A Boolean attribute indicating that the video is to be played "inline"; that is, within the element's playback area. ||
||poster|<video>|A URL indicating a poster frame to show until the user plays or seeks.||
||preload|<audio>, <video>|Indicates whether the whole resource, parts of it or nothing should be preloaded.||
||readonly|<input>, <textarea>|Indicates whether the element can be edited.||
||referrerpolicy|<a>, <area>, <iframe>, <img>, <link>, <script>|Specifies which referrer is sent when fetching the resource.||
||rel|<a>, <area>, <link>|Specifies the relationship of the target object to the link object.||
||required|<input>, <select>, <textarea>|Indicates whether this element is required to fill out or not.||
||reversed|<ol>|Indicates whether the list should be displayed in a descending order instead of an ascending order.||
||role|Global attribute|Defines an explicit role for an element for use by assistive technologies.||
||rows|<textarea>|Defines the number of rows in a text area.||
||rowspan|<td>, <th>|Defines the number of rows a table cell should span over.||
||sandbox|<iframe>|Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).||
||scope|<th>|Defines the cells that the header test (defined in the th element) relates to.||
||scoped Non-standard Deprecated|<style>|||
||selected|<option>|Defines a value which will be selected on page load.||
||shape|<a>, <area>|||
||size|<input>, <select>|Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.||
||sizes|<link>, <img>, <source>|||
||slot|Global attribute|Assigns a slot in a shadow DOM shadow tree to an element.||
||span|<col>, <colgroup>|||
||spellcheck|Global attribute|Indicates whether spell checking is allowed for the element.||
||src|<audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>|The URL of the embeddable content.||
||srcdoc|<iframe>|||
||srclang|<track>|||
||srcset|<img>, <source>|One or more responsive image candidates.||
||start|<ol>|Defines the first number if other than 1.||
||step|<input>|||
||style|Global attribute|Defines CSS styles which will override styles previously set.||
||summary Deprecated|<table>|||
||tabindex|Global attribute|Overrides the browser's default tab order and follows the one specified instead.||
||target|<a>, <area>, <base>, <form>|Specifies where to open the linked document (in the case of an <a> element) or where to display the response received (in the case of a <form> element)||
||title|Global attribute|Text to be displayed in a tooltip when hovering over the element.||
||translate|Global attribute|Specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.||
||type|<button>, <input>, <embed>, <object>, <ol>, <script>, <source>, <style>, <menu>, <link>|Defines the type of the element.|√|
||usemap|<img>, <input>, <object>|||
||value|<button>, <data>, <input>, <li>, <meter>, <option>, <progress>, <param>|Defines a default value which will be displayed in the element on page load.||
||width|<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>|||
||wrap|<textarea>|Indicates whether the text should be wrapped.||