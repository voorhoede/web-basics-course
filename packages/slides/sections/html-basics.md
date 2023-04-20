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

---

# HTML Basics / Attributes

- Provide additional information about HTML elements
- Always specified in the start tag
- Usually come in name/value pairs like: src="/image.jpg"

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

---

# HTML Basics / Accessibility

- Screen readers
- Keyboard navigation
- Goes hand in hand with semantics

<div class="grid grid-cols-2 gap-4">
```html
<!-- bad -->
<div>
  <p>Name</p>
  <input type="text" name="name" />

  <p>Email</p>
  <input type="email" name="email" />

  <button>Submit</button>
</div>
```

```html
<!-- good -->
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Submit</button>
</form>
```
</div>

---
layout: center
---

# 🏋️ Exercise 2 🏋️

---

# HTML Basics / Semantics

- HTML elements are used to describe the meaning of the content
- Accessibility
- SEO

<div class="grid grid-cols-2 gap-4">
```html
<!-- bad -->
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
<!-- good -->
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

---
layout: center
---

# 🏋️ Exercise 3 🏋️
