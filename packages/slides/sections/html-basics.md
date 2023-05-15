---
layout: center
---

# HTML Basics

---

# HTML Basics / HTML

- HTML stands for HyperText Markup Language
- Tree structure (DOM), which looks like XML
- Founded by Tim Berners-Lee for researchers to share information
- Informs the browser how to display the content and add semantic meaning to elements

<!-- 
    - Explain HTML: HyperText Markup Language
    - Tim Berners-Lee was a researcher and invented the web
    - A way for researchers to share information.
-->

---

# HTML Basics / Elements

<img class="my-14" src="/images/html-element.png" />

Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document

---

# HTML Basics / Tree structure

- Browsers use the HTML DOM (Document Object Model) to render the page
- The DOM is a tree structure of HTML elements

<div class="grid grid-cols-2 gap-4">
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <header>
      <h1>Heading 1</h1>
    </header>
    <section>
      <h2>My First Heading</h2>
      <p>My first paragraph.</p>
    </section>
  </body>
</html>
```

<img src="/images/html-tree.png" width="250" />
</div>

<!--
  - Explain DOM: Document Object Model
  - Explain tree structure: parent, child, sibling, root 
-->

---

# HTML Basics / Syntax

```html {all|1|2-10|3-5|6-9|7|8|all}
<!DOCTYPE html> 
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

<img src="/images/syntax.png" width="300" />

<!--
  - Explain syntax: opening tag, closing tag, self-closing tag
  - Explain root element: html
  - Explain head and body
-->

---

# HTML Basics / Attributes

- Provide additional information about HTML elements
- Always specified in the start tag
- Usually come in name/value pairs like: `src="/image.jpg"`

```html
<img src="/image.jpg" alt="Picture of a cat" />
```

<img src="http://placekitten.com/200/300" width="150" />

<!--
  - Explain attributes: provide additional information about HTML elements
  - Explain start tag: <img>
  - Explain name/value pairs: src="/image.jpg"
  - Self closing tag: <img />
-->

---

# HTML Basics / Attributes

- Provide additional information about HTML elements
- Always specified in the start tag
- Usually come in name/value pairs like: `src="/image.jpg"`

```html
<img src="/image.jpg" alt="Picture of a cat" />
```

<img src="/images/image-not-found.png" width="300" />

---

# HTML Basics / Examples

<div class="grid grid-cols-2 gap-4">
```html
<!-- Heading -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
etc...

<!-- Paragraph --> 
<p>Paragraph</p>

<!-- Image --> 
<img src="/image.jpg" alt="My Image" />

<!-- Link --> 
<a href="https://google.com">Google</a>

<!-- List --> 
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
```html
<!-- Table --> 
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
    </tr>
  </tbody>
</table>
```
</div>


All elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

---
layout: center
---

# 🏋️ Exercise 1 🏋️

- Create a page about yourself
- Add basic HTML structure: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document
- It needs to contain the following:
  - a \<head\> element with nescessary meta tags
  - a \<body\> element
  - a \<h1> \element with the title of your page
  - a \<p> e\lement with some text
  - a \<ul> \element with a list of your interests 
  - an \<img>\ element with a picture of a cat

---

# HTML Basics / Forms

- Used to collect user input
- Initialized using the `<form>` element
- Variaty of input types: text, email, password, checkbox, radio, select, textarea

```html
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" />

  <label for="message">Message</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">Submit</button>
</form>
```

---

# HTML Basics / Forms

- Method attribute on form: GET or POST
- POST: data is sent in the request body (use for sensitive data)
- GET: data is appended to the URL (use for non-sensitive data)

<div class="grid grid-cols-2 gap-4">
<div>
```html
<form method="get" action="/search">
  <label for="query">Query</label>
  <input type="text" id="query" name="query" />

  <button type="submit">Submit</button>
</form>
```

<p>Results in the following URL:</p>
<code>https://example.com/search?query=cats</code>
</div>
<div>
```html
<form method="post" action="/login">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />

  <button type="submit">Submit</button>
</form>
```

<p>Results in the following request body:</p>
<code>name=John</code>
</div>
</div>

<!-- 
  - Refer back to HTTP request methods slides
-->

---

# HTML Basics / Accessibility

- Screen readers
- Keyboard navigation

<div class="grid grid-cols-2 gap-4">
```html
 bad 
<div>
  <p>Name</p>
  <input type="text" name="name" />

  <p>Email</p>
  <input type="email" name="email" />

  <button>Submit</button>
</div>
```

```html
 good 
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Submit</button>
</form>
```
</div>

<!--
  - Explain accessibility: screen readers, keyboard navigation
-->

---
layout: center
---

# HTML Basics / Semantics

- Goes hand in hand with accessibility
- HTML elements are used to describe the meaning of the content
- Accessibility
- SEO

<div class="grid grid-cols-2 gap-4">
```html
 bad 
<body>
  <div>
    <p>Site title</p>
    <div>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </div>
  </header>
  <div>
    <div>
      <p>Article title</h1>
      <p>Article content</p>
    </div>
  </div>
</body>
```

```html
 good 
<body>
  <header>
    <h1>Site title</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Article title</h2>
      <p>Article content</p>
    </article>
  </main>
</body>
```
</div>

<!--
  - Explain semantics: meaning of the content
  - Explain accessibility: screen readers, keyboard navigation
-->

---

# 🏋️ Exercise 2 🏋️

- Add semantic meaning to the elements on the page 
- Think of the following things:
  - What is the main heading of the page?
  - How do we indicate that the input elements are related to each other?
  - How do we link the label to the input?
  - How do we submit the form?

---
layout: center
---

# 🏋️ Exercise 3 🏋️

1. Add required meta tags
2. Add a title of the webpage
3. Add a header section, containing the title of the page
4. Add the main part of the page
    1. Add a section where the list with the forecast will be rendered
    2. Add a paragraph with information about the forecast
5. Add list items with information about each day's weather
    1. Add a list item for each day
    2. Add a paragraph with the day's date
6. Add a footer with a message and a link to the footer
    1. Add a paragraph with a message
    2. Add a link to Deltares