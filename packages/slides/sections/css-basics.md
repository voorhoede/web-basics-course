---
layout: center
---

# CSS Basics

---

# CSS Basics / CSS

- Cascading Style Sheets
- Select HTML elements and change how they look
- Style and layout web pages
- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

<!--
    - CSS is a language for styling web pages
    - is also used for layout
    - is used to select HTML elements and change how they look
-->

---

# CSS Basics / Syntax

- Selector: `h1`, `p`, `.class`, `#id`
- Property: `color`, `background-color`, `font-size` and a lot more
- Value: `red`, `#ff0000`, `16px` and also a lot more

```css {all|1|2|all}
selector {
  property: value;
}
```

<!--
    - Selector: selects the HTML element(s) you want to style
    - Property: the style you want to change
    - Value: the value you want to set for the property
    - Rule: a combination of a selector and one or more properties
    - Learning CSS is like learning words in a new language
    - You have to repeat them a lot to remember them
-->

---

# CSS Basics / Inheritance

```html
<body>
    <h1 class="heading">Heading 1</h1>
</body>
```

```css
body {
    color: red;
}
```

<img src="/images/inheritance.png" width="200" />

--- 

# CSS Basics / Cascade & Specificity

- Combination of specificity and order
- Order (last one wins)
- Specificity (inline > id > class > tag)

<div class="grid grid-cols-2 gap-4">

```html
<body>
    <h1 class="heading" id="heading-1">Heading 1</h1>
</body>
```

```css {all|1-3|5-12}
body {
    color: red;
}

#heading-1 {
    color: blue;
}

.heading {
    color: red;
}
```

</div>

<img src="/images/cascade.png" width="200" />

<!--
    - Click through slide for explanation
-->

--- 

# CSS Basics / Inline vs. External

```html
<html>
    <head>
        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1 style="color:blue;">Heading 1</h1>
    </body>
</html>
```

```html
<html>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h1>Heading 1</h1>
    </body>
</html>
```

---

# CSS Basics / Layout

- `display: grid`: for creating a grid layout
- `display: flex`: for creating a flex layout
- `grid` for layout, `flex` for components

<div class="grid grid-cols-2 gap-4">
    <img src="/images/grid-vs-flexbox.png" />
    <img src="/images/grid-vs-flexbox-1.png" />
</div>

source: https://ishadeed.com/article/grid-layout-flexbox-components/

---

# CSS Basics / Units

- `px`: pixels
- `em`: relative to the font-size of the element
- `rem`: relative to the font-size of the root element
- `%`: relative to the parent element
- `vw`: relative to 1% of the width of the viewport
- `vh`: relative to 1% of the height of the viewport

---

# CSS Basics / Box model

<CodepenEmbed slug-hash="LYJvdbZ" user="sjoerdb" height="400" />

<!--
    - Shoe box comparison
    - Explain padding, margin, border
    - Show devtools
-->

---

# CSS Basics / Media queries

<div class="grid grid-cols-2 gap-4">

```css
.selector {
    color: blue;
}

@media (max-width: 800px) {
    .selector {
        color: green;
    }
}

@media (min-width: 1000px) {
    .selector {
        color: red;
    }
}

@media print {
    .selector {
        color: purple;
    }
}
```

<MediaQueryDemo />

</div>

---
layout: center
---

# 🏋️ Exercise 4 🏋️

- Add a basic layout to the page using `display: grid` and `gap`

---

# CSS Basics / Common properties

<div class="grid grid-cols-2 gap-4">

<div>

## Colors

```css
.selector {
    color: red;
    background-color: #ff0000;
}
```

<br />

## Sizes

```css
.selector {
    width: 100px;
    height: 100px;
}
```

</div>

<div>

## Fonts
    
```css
.selector {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    text-decoration: underline;
}
```

</div>

</div>

All CSS properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

---
layout: center
---

# 🏋️ Exercise 5 🏋️

1. Add a custom sans-serif font (`font-family`)
2. Make the links in the footer white (`color`)
3. Make the main heading larger (`font-size`)
4. Align the main heading to the center (`text-align`)
5. Add responsive styles (`@media`) to make the headings larger on wider screens (`font-size`)

---

# CSS Basics / Document flow

- `display: block` & `display: inline`
- Block elements
    - Start on a new line
    - Take up the full width available
    - `div`, `p`, `h1` and [many more](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- Inline elements
    - Start on the same line
    - Only take up the width needed
    - `span`, `a` and [many more](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

---

# CSS Basics / Document flow

- `position: static | relative | absolute | fixed`

<CodepenEmbed slug-hash="LYgGyNv" user="sjoerdb" height="400" />

---

# CSS Basics / Scroll containers

- `overflow: auto | scroll | hidden`

<CodepenEmbed slug-hash="JjmvVBQ" user="sjoerdb" height="400" />

---
layout: center
---

# 🏋️ Exercise 6 🏋️

- Style the forecast list
- Use the following selectors: `.forecast-list`, `.forecast-item`, `.forecast-emoji`
