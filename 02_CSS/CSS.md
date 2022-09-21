# CSS Basic

## 00_Syntax

<img src="https://www.w3schools.com/css/img_selector.gif" alt="CSS selector" align="left"/>

## 01_Selector

### [Simple selectors](https://www.w3schools.com/css/css_selectors.asp)

| [Simple selectors](https://www.w3schools.com/css/css_selectors.asp) | Example    | Example description                             |
| :----------------------------------------------------------- | ---------- | :---------------------------------------------- |
| [#*id*](https://www.w3schools.com/cssref/sel_id.asp)         | #firstname | Selects the element with id="firstname"         |
| [.*class*](https://www.w3schools.com/cssref/sel_class.asp)   | .intro     | Selects all elements with class="intro"         |
| *[element.class](https://www.w3schools.com/cssref/sel_element_class.asp)* | p.intro    | Selects only <p> elements with class="intro"    |
| [*](https://www.w3schools.com/cssref/sel_all.asp)            | *          | Selects all elements                            |
| *[element](https://www.w3schools.com/cssref/sel_element.asp)* | p          | Selects all <p> elements                        |
| *[element,element,..](https://www.w3schools.com/cssref/sel_element_comma.asp)* | div, p     | Selects all <div> elements and all <p> elements |

### [Combinator selectors](https://www.w3schools.com/css/css_combinators.asp)

| [Combinator selectors](https://www.w3schools.com/css/css_combinators.asp) | Example | Example description                                          |
| :----------------------------------------------------------- | :------ | :----------------------------------------------------------- |
| [*element element*](https://www.w3schools.com/cssref/sel_element_element.asp) | div p   | Selects all <p> elements inside <div> elements               |
| [*element>element*](https://www.w3schools.com/cssref/sel_element_gt.asp) | div > p | Selects all <p> elements where the parent is a <div> element |
| [*element+element*](https://www.w3schools.com/cssref/sel_element_pluss.asp) | div + p | Selects the first <p> element that are placed immediately after <div> elements |
| [*element1~element2*](https://www.w3schools.com/cssref/sel_gen_sibling.asp) | p ~ ul  | Selects every <ul> element that are preceded by a <p> element |

### [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp)

| [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) | Example               | Example description                                          |
| :----------------------------------------------------------- | :-------------------- | :----------------------------------------------------------- |
| [:active](https://www.w3schools.com/cssref/sel_active.asp)   | a:active              | Selects the active link                                      |
| [:checked](https://www.w3schools.com/cssref/sel_checked.asp) | input:checked         | Selects every checked <input> element                        |
| [:disabled](https://www.w3schools.com/cssref/sel_disabled.asp) | input:disabled        | Selects every disabled <input> element                       |
| [:empty](https://www.w3schools.com/cssref/sel_empty.asp)     | p:empty               | Selects every <p> element that has no children               |
| [:enabled](https://www.w3schools.com/cssref/sel_enabled.asp) | input:enabled         | Selects every enabled <input> element                        |
| [:first-child](https://www.w3schools.com/cssref/sel_firstchild.asp) | p:first-child         | Selects every <p> elements that is the first child of its parent |
| [:first-of-type](https://www.w3schools.com/cssref/sel_first-of-type.asp) | p:first-of-type       | Selects every <p> element that is the first <p> element of its parent |
| [:focus](https://www.w3schools.com/cssref/sel_focus.asp)     | input:focus           | Selects the <input> element that has focus                   |
| [:hover](https://www.w3schools.com/cssref/sel_hover.asp)     | a:hover               | Selects links on mouse over                                  |
| [:in-range](https://www.w3schools.com/cssref/sel_in-range.asp) | input:in-range        | Selects <input> elements with a value within a specified range |
| [:invalid](https://www.w3schools.com/cssref/sel_invalid.asp) | input:invalid         | Selects all <input> elements with an invalid value           |
| [:lang(*language*)](https://www.w3schools.com/cssref/sel_lang.asp) | p:lang(it)            | Selects every <p> element with a lang attribute value starting with "it" |
| [:last-child](https://www.w3schools.com/cssref/sel_last-child.asp) | p:last-child          | Selects every <p> elements that is the last child of its parent |
| [:last-of-type](https://www.w3schools.com/cssref/sel_last-of-type.asp) | p:last-of-type        | Selects every <p> element that is the last <p> element of its parent |
| [:link](https://www.w3schools.com/cssref/sel_link.asp)       | a:link                | Selects all unvisited links                                  |
| [:not(selector)](https://www.w3schools.com/cssref/sel_not.asp) | :not(p)               | Selects every element that is not a <p> element              |
| [:nth-child(n)](https://www.w3schools.com/cssref/sel_nth-child.asp) | p:nth-child(2)        | Selects every <p> element that is the second child of its parent |
| [:nth-last-child(n)](https://www.w3schools.com/cssref/sel_nth-last-child.asp) | p:nth-last-child(2)   | Selects every <p> element that is the second child of its parent, counting from the last child |
| [:nth-last-of-type(n)](https://www.w3schools.com/cssref/sel_nth-last-of-type.asp) | p:nth-last-of-type(2) | Selects every <p> element that is the second <p> element of its parent, counting from the last child |
| [:nth-of-type(n)](https://www.w3schools.com/cssref/sel_nth-of-type.asp) | p:nth-of-type(2)      | Selects every <p> element that is the second <p> element of its parent |
| [:only-of-type](https://www.w3schools.com/cssref/sel_only-of-type.asp) | p:only-of-type        | Selects every <p> element that is the only <p> element of its parent |
| [:only-child](https://www.w3schools.com/cssref/sel_only-child.asp) | p:only-child          | Selects every <p> element that is the only child of its parent |
| [:optional](https://www.w3schools.com/cssref/sel_optional.asp) | input:optional        | Selects <input> elements with no "required" attribute        |
| [:out-of-range](https://www.w3schools.com/cssref/sel_out-of-range.asp) | input:out-of-range    | Selects <input> elements with a value outside a specified range |
| [:read-only](https://www.w3schools.com/cssref/sel_read-only.asp) | input:read-only       | Selects <input> elements with a "readonly" attribute specified |
| [:read-write](https://www.w3schools.com/cssref/sel_read-write.asp) | input:read-write      | Selects <input> elements with no "readonly" attribute        |
| [:required](https://www.w3schools.com/cssref/sel_required.asp) | input:required        | Selects <input> elements with a "required" attribute specified |
| [:root](https://www.w3schools.com/cssref/sel_root.asp)       | root                  | Selects the document's root element                          |
| [:target](https://www.w3schools.com/cssref/sel_target.asp)   | #news:target          | Selects the current active #news element (clicked on a URL containing that anchor name) |
| [:valid](https://www.w3schools.com/cssref/sel_valid.asp)     | input:valid           | Selects all <input> elements with a valid value              |
| [:visited](https://www.w3schools.com/cssref/sel_visited.asp) | a:visited             | Selects all visited links                                    |

### [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp)

| [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp) | Example         | Example description                                          |
| :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- |
| [::after](https://www.w3schools.com/cssref/sel_after.asp)    | p::after        | Insert content after every <p> element                       |
| [::before](https://www.w3schools.com/cssref/sel_before.asp)  | p::before       | Insert content before every <p> element                      |
| [::first-letter](https://www.w3schools.com/cssref/sel_firstletter.asp) | p::first-letter | Selects the first letter of every <p> element                |
| [::first-line](https://www.w3schools.com/cssref/sel_firstline.asp) | p::first-line   | Selects the first line of every <p> element                  |
| [::selection](https://www.w3schools.com/cssref/sel_selection.asp) | p::selection    | Selects the portion of an element that is selected by a user |

### [Attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp)

| [Attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) | Example              | Example description                                          |
| :----------------------------------------------------------- | :------------------- | :----------------------------------------------------------- |
| [[*attribute*\]](https://www.w3schools.com/cssref/sel_attribute.asp) | [target]             | Selects all elements with a target attribute                 |
| [[*attribute*=*value*\]](https://www.w3schools.com/cssref/sel_attribute_value.asp) | [target=_blank]      | Selects all elements with target="_blank"                    |
| [[*attribute*~=*value*\]](https://www.w3schools.com/cssref/sel_attribute_value_contains.asp) | [title~=flower]      | Selects all elements with a title attribute containing the word "flower" |
| [[*attribute*\|=*value*\]](https://www.w3schools.com/cssref/sel_attribute_value_lang.asp) | [lang\|=en]          | Selects all elements with a lang attribute value starting with "en" |
| [[*attribute*^=*value*\]](https://www.w3schools.com/cssref/sel_attr_begin.asp) | a[href^="https"]     | Selects every <a> element whose href attribute value begins with "https" |
| [[*attribute*$=*value*\]](https://www.w3schools.com/cssref/sel_attr_end.asp) | a[href$=".pdf"]      | Selects every <a> element whose href attribute value ends with ".pdf" |
| [[*attribute**=*value*\]](https://www.w3schools.com/cssref/sel_attr_contain.asp) | a[href*="w3schools"] | Selects every <a> element whose href attribute value contains the substring "w3schools" |

## 02_Three Ways to Insert CSS

### External CSS

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```

```css
/* mystyle.css */
body {
 background-color: lightblue;
}
h1 {
 color: navy;
 margin-left: 20px;
}
```

### Internal CSS

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}
h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```

### Inline CSS

```html
<!DOCTYPE html>
<html>
<body>
<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
</body>
</html>
```

### Cascading Order

What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

## 03_Comment

```css
/* This is a single-line comment */
p {
 color: red;
}
```

```css
p {
  color: red;  /* Set text color to red */
}
```

```css
/* This is
a multi-line
comment */
p {
  color: red;
}
```

```html
<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red; /* Set text color to red */
}
</style>
</head>
<body>
<h2>My Heading</h2>
<!-- These paragraphs will be red -->
<p>Hello World!</p>
<p>This paragraph is styled with CSS.</p>
<p>CSS comments are not shown in the output.</p>
</body>
</html>
```

## 04_Color

```css
Tomato /* CSS Color Names */
rgb(255, 99, 71) /* RGB */
rgba(255, 99, 71, 0.5) /* RGBA */
hsl(9, 100%, 64%) /* HSL */
hsla(9, 100%, 64%, 0.5) /* HSLA */
#ff6347 /* HEX */
```

## 05_Background

| Property                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [background](https://www.w3schools.com/cssref/css3_pr_background.asp) | Sets all the background properties in one declaration        |
| [background-attachment](https://www.w3schools.com/cssref/pr_background-attachment.asp) | Sets whether a background image is fixed or scrolls with the rest of the page |
| [background-clip](https://www.w3schools.com/cssref/css3_pr_background-clip.asp) | Specifies the painting area of the background                |
| [background-color](https://www.w3schools.com/cssref/pr_background-color.asp) | Sets the background color of an element                      |
| [background-image](https://www.w3schools.com/cssref/pr_background-image.asp) | Sets the background image for an element                     |
| [background-origin](https://www.w3schools.com/cssref/css3_pr_background-origin.asp) | Specifies where the background image(s) is/are positioned    |
| [background-position](https://www.w3schools.com/cssref/pr_background-position.asp) | Sets the starting position of a background image             |
| [background-repeat](https://www.w3schools.com/cssref/pr_background-repeat.asp) | Sets how a background image will be repeated                 |
| [background-size](https://www.w3schools.com/cssref/css3_pr_background-size.asp) | Specifies the size of the background image(s)                |

## 06_Border

| Property                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [border](https://www.w3schools.com/cssref/pr_border.asp)     | Sets all the border properties in one declaration: `border-width`, `border-style` (required), `border-color` |
| [border-color](https://www.w3schools.com/cssref/pr_border-color.asp) | Sets the color of the four borders                           |
| [border-radius](https://www.w3schools.com/cssref/css3_pr_border-radius.asp) | Sets all the four border-*-radius properties for rounded corners |
| [border-style](https://www.w3schools.com/cssref/pr_border-style.asp) | Sets the style of the four borders                           |
| [border-width](https://www.w3schools.com/cssref/pr_border-width.asp) | Sets the width of the four borders                           |

## 07_Margin and Padding

### Sides

```css
p {
  margin: 25px 50px 75px 100px; /* top right bottom left */
}
p {
  margin: 25px 50px 75px; /* top (right and left) bottom */
}
p {
  margin: 25px 50px; /* (top and bottom) (right and left) */
}
div {
  width: 300px;
  margin: auto; /* auto value */
  border: 1px solid red;
}
```

| Property                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [margin](https://www.w3schools.com/cssref/pr_margin.asp)     | A shorthand property for setting all the margin properties in one declaration |
| [margin-bottom](https://www.w3schools.com/cssref/pr_margin-bottom.asp) | Sets the bottom margin of an element                         |
| [margin-left](https://www.w3schools.com/cssref/pr_margin-left.asp) | Sets the left margin of an element                           |
| [margin-right](https://www.w3schools.com/cssref/pr_margin-right.asp) | Sets the right margin of an element                          |
| [margin-top](https://www.w3schools.com/cssref/pr_margin-top.asp) | Sets the top margin of an element                            |

## 08_Height and Width

### Values

- `auto` - This is default. The browser calculates the height and width
- `length` - Defines the height/width in px, cm, etc.
- `%` - Defines the height/width in percent of the containing block
- `initial` - Sets the height/width to its default value
- `inherit` - The height/width will be inherited from its parent value

### max-width

```css
div {
  max-width: 500px;
}
```

## 09_Box Model

Explanation of the different parts:

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent

## 10_Outline

CSS has the following outline properties:

- `outline-style`
- `outline-color`
- `outline-width`
- `outline-offset`
- `outline`

## 11_Text

### Text color

- `color`

### Text alignment

- `text-align`
- `text-align-last`
- `direction`
- `unicode-bidi`
- `vertical-align`

### Text Decoration

- `text-decoration-line`
- `text-decoration-color`
- `text-decoration-style`
- `text-decoration-thickness`
- `text-decoration`

### Text Transformation

- `text-transform`

### Text Spacing

- `text-indent`
- `letter-spacing`
- `line-height`
- `word-spacing`
- `white-space`

### Text Shadow

- `text-shadow`

## 12_Font

### Font Family

```css
.p {
  font-family: "Times New Roman", Times, serif;
}
```

### Font Style

```css
p {
  font-style: normal; /* other values: italic, oblique */
  font-weight: normal; /* other values: bold */
  font-variant: normal; /* other values: small-caps */
}

```

### Font Size

```css
h1 {
  font-size: 40px;
}
```

### Font Shorthand

- `font-style`
- `font-variant`
- `font-weight`
- `font-size/line-height`
- `font-family`

**Note:** The `font-size` and `font-family` values are required. If one of the other values is missing, their default value are used.

## [13_Icon](`border-color`)

## 14_Link

The four links states are:

- `a:link` - a normal, unvisited link
- `a:visited` - a link the user has visited
- `a:hover` - a link when the user mouses over it
- `a:active` - a link the moment it is clicked

```css
/* unvisited link */
a:link {
  color: red;
}
/* visited link */
a:visited {
  color: green;
}
/* mouse over link */
a:hover {
  color: hotpink;
}
/* selected link */
a:active {
  color: blue;
}
```

## 15_List

```css
ul.a {
  list-style-type: circle; /* other values: square, upper-roman, lower-alpha */
}
ul {
  list-style-image: url('sqpurple.gif');
}
ul.a {
  list-style-position: outside; /* other values: inside */
}
ul {
  list-style: square inside url("sqpurple.gif");
}
```

| Property                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [list-style](https://www.w3schools.com/cssref/pr_list-style.asp) | Sets all the properties for a list in one declaration        |
| [list-style-image](https://www.w3schools.com/cssref/pr_list-style-image.asp) | Specifies an image as the list-item marker                   |
| [list-style-position](https://www.w3schools.com/cssref/pr_list-style-position.asp) | Specifies the position of the list-item markers (bullet points) |
| [list-style-type](https://www.w3schools.com/cssref/pr_list-style-type.asp) | Specifies the type of list-item marker                       |

## [16_Table](https://www.w3schools.com/css/css_table.asp)

## 17_Display

| Property                                                     | Description                                           | Value        | Description                                                  |
| :----------------------------------------------------------- | :---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| [display](https://www.w3schools.com/cssref/pr_class_display.asp) | Specifies how an element should be displayed          | inline       | Displays an element as an inline element (like <span>). Any height and width properties will have no effect |
|                                                              |                                                       | block        | Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width |
|                                                              |                                                       | inline-block | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values |
|                                                              |                                                       | none         | The element is completely removed                            |
| [visibility](https://www.w3schools.com/cssref/pr_class_visibility.asp) | Specifies whether or not an element should be visible | visible      | Default value. The element is visible                        |
|                                                              |                                                       | hidden       | The element is hidden (but still takes up space)             |
|                                                              |                                                       | collapse     | Only for table rows (<tr>), row groups (<tbody>), columns (<col>), column groups (<colgroup>). This value removes a row or column, but it does not affect the table layout. The space taken up by the row or column will be available for other content.If collapse is used on other elements, it renders as "hidden" |

## 18_max-width

## 19_Position

| Property                                                     | Description                                      |
| :----------------------------------------------------------- | :----------------------------------------------- |
| [top](https://www.w3schools.com/cssref/pr_pos_top.asp)       | Sets the top margin edge for a positioned box    |
| [bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp) | Sets the bottom margin edge for a positioned box |
| [left](https://www.w3schools.com/cssref/pr_pos_left.asp)     | Sets the left margin edge for a positioned box   |
| [right](https://www.w3schools.com/cssref/pr_pos_right.asp)   | Sets the right margin edge for a positioned box  |
| [position](https://www.w3schools.com/cssref/pr_class_position.asp) | Specifies the type of positioning for an element |
| [clip](https://www.w3schools.com/cssref/pr_pos_clip.asp)     | Clips an absolutely positioned element           |

## 20_Z-index

## 21_Overflow

| Property                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [overflow](https://www.w3schools.com/cssref/pr_pos_overflow.asp) | Specifies what happens if content overflows an element's box |
| [overflow-wrap](https://www.w3schools.com/cssref/css3_pr_overflow-wrap.asp) | Specifies whether or not the browser can break lines with long words, if they overflow its container |
| [overflow-x](https://www.w3schools.com/cssref/css3_pr_overflow-x.asp) | Specifies what to do with the left/right edges of the content if it overflows the element's content area |
| [overflow-y](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp) | Specifies what to do with the top/bottom edges of the content if it overflows the element's content area |

The `overflow` property has the following values:

- `visible` - Default. The overflow is not clipped. The content renders outside the element's box
- `hidden` - The overflow is clipped, and the rest of the content will be invisible
- `scroll` - The overflow is clipped, and a scrollbar is added to see the rest of the content
- `auto` - Similar to `scroll`, but it adds scrollbars only when necessary

## 22_Float

The `float` property can have one of the following values:

- `left` - The element floats to the left of its container
- `right` - The element floats to the right of its container
- `none` - The element does not float (will be displayed just where it occurs in the text). This is default
- `inherit` - The element inherits the float value of its parent

When we use the `float` property, and we want the next element below (not on right or left), we will have to use the `clear` property.

The `clear` property specifies what should happen with the element that is next to a floating element.

The `clear` property can have one of the following values:

- `none` - The element is not pushed below left or right floated elements. This is default
- `left` - The element is pushed below left floated elements
- `right` - The element is pushed below right floated elements
- `both` - The element is pushed below both left and right floated elements
- `inherit` - The element inherits the clear value from its parent

## 23_inline-block+