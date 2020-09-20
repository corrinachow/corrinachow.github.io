---
title: Adding Slide Numbers to MDX Deck Presentations
date: "2020-07-26T22:12:03.284Z"
description: "A few things that helped me prepare for my first remote lecture, which can hopefully start a dialogue for us to share best practices."
---

MDX Deck is a fast and lightweight library that lets you write presentations in markdown. More specifically, it uses [MDX](https://github.com/mdx-js/mdx), an extension of markdown that allows you to use JSX and React components. This allows you to do cool things like import React components into your slide deck and interact with them.

First, follow the [Getting Started](https://github.com/jxnblk/mdx-deck#getting-started) instructions in the README of MDX Deck.

You should end up with the following file structure:

```md
.
├── node_modules
├── deck.mdx
├── README.md
├── package.json
├── package-lock.lock
```

Then create a `<Layout>` component:

```jsx
// layout.js

import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <footer>
        <span>My Awesome Presentation! 🚀</span>
        <span>@corrinachow</span>
      </footer>
    </>
  );
};

export default Layout;
```

You can now create slides in your `deck.mdx` file with the `Layout` component where the slide contents will render as `children`.

```md
// deck.mdx

import Layout from "./Layout";

<Layout>
  # My Awesome Presentation!
  🚀 Corrina Chow
</Layout>;
```

![MDX presentation with footer](https://dev-to-uploads.s3.amazonaws.com/i/nlkh0fenwngqd1xj6dud.png)

<figcaption>MDX Deck slide with footer using a Layout component</figcaption>

This is useful for making headers, footers or layouts for your slides.

Now if you dig into the source code, you'll see that MDX Deck uses a React Context called `useDeck` to pass deck data between components. This includes the index of the slide, speaker notes, or presentation mode!

This hook happens to be exported from the library and can be used to your advange.

In `layout.js` file, import the `useDeck` React hook from `mdx-deck`. There's a property represents index of the slide you're viewing. From that, you're able to extract slide numbers and add it to your presentation 🥳

```jsx
// layout.js

import React from "react";
import { useDeck } from "mdx-deck"; // Import useDeck

const Layout = ({ children }) => {
  const state = useDeck(); // Declare a new state variable

  const currentSlide = state.index + 1; // The slides are zero-index
  return (
    <>
      <div>{children}</div>
      <footer>
        <span>My Awesome Presentation! 🚀</span>
        <span>{currentSlide}</span>
        <span>@corrinachow</span>
      </footer>
    </>
  );
};

export default Layout;
```

![MDX Deck with slide number](https://dev-to-uploads.s3.amazonaws.com/i/xg2hmzcxqnkj7mm775r4.png)

<figcaption>MDX Deck with slide number!</figcaption>

There's a bunch of other values that can be accessed with the `useDeck` context, such as the `length` of the presentation, or HTML `head` values.

![useDeck props](https://dev-to-uploads.s3.amazonaws.com/i/cdvqlvxqqnggdemh97gc.png)

<figcaption>useDeck properties</figcaption>

Hope this was helpful 😄

## References

- [React Context](https://reactjs.org/docs/context.html)
- [MDX Docs](https://github.com/mdx-js/mdx)
- [MDX Deck](https://github.com/jxnblk/mdx-deck)
