---
layout: center
---

# Tools

---
layout: center
---

# Tools

## Developing & Debugging

---

# Tools / Chrome DevTools

- In all major browsers
- Set of web authoring and debugging tools
- Your console.logs end up here
- Network inspector
- A lot more

---

# Tools / Packages

- You don't have to write all the code yourself
- Packages are pieces of code that you can re-use in your own code
- You can install packages using native imports or a package manager

native import:
```javascript
import { sum } from 'https://cdn.skypack.dev/lodash';

sum([1, 2, 3, 4, 5]);
```

package manager + bundler:
```javascript
import { sum } from 'lodash-es';

sum([1, 2, 3, 4, 5]);
```

---

# Tools / Bundlers
- Bundlers are tools that bundle your code and all its dependencies into a single file
- They optimize your code for production
- They can also transpile your code to make it compatible with older browsers
- Webpack, Parcel, Rollup, Snowpack, Vite, ...

<div class="grid grid-cols-3 gap-4">

<div>

Source:
```javascript
export function sum (a, b) {
    return a + b;
}
```

```javascript
import { sum } from './sum.js';

sum(10, 11);
```

</div>

<div>

Bundled:
```javascript
// project/sum.js
function sum(a, b) {
  return a + b;
}

// project/index.ts
sum(1, 2);
```

</div>

<div>

Minified:
```javascript
function r(m,o){return m+o}r(1,2);
```

</div>

</div>

---

# Tools / Typescript

- Typescript is a superset of Javascript
- It adds types to Javascript

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);
```

---
