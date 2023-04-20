---
layout: center
---

# How the web works

---

# How the web works / Components

- Client
- Server
- Protocols

---

# How the web works / HTTP request

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Server
    C->>+S: Send HTTP request with method, headers, and body
    S->>-C: Send HTTP response with status code, headers, and body
    C->>C: Display website content based on response
```

--- 

# How the web works / Request methods

- `GET` - Retrieve data
- `POST` - Create data
- `PUT` - Update data
- `DELETE` - Delete data
- `OPTIONS` - Check available methods etc., executed automatically by the browser

<FormDemo />

---

# How the web works / HTML - CSS - JS

- Web pages use HTML for content and structure.
- CSS is used for styling.
- JavaScript adds interactivity and dynamic functionality.
- HTML is the foundation, while CSS and JavaScript enhance the web page.
- These technologies work together to create dynamic, interactive, and visually appealing web pages.
---

# How the web works / Server side rendering

```mermaid
graph LR
B[Browser] --> C[Server]
C --> D[Dynamic Web Page]
D --> E[Database]
D --> F[Server-side script]
D --> G[Third party service]
F --> D
G --> D
E --> D
D --> B
```

---

# How the web works / Client side rendering

```mermaid
graph LR
B[Browser] --> C[Server]
C --> D[Static web page]
D --> B
B --> E[Database]
B --> F[Server-side script]
B --> G[Third party service]
F -->B 
G -->B 
E -->B 
```
