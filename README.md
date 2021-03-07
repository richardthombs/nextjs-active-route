## How to add an "activated" class to links pointing to the current route

This example shows how to build and use a `<LinkActive>` component which can be used to replace Next.js' default `<Link>` component in situations where you require the link to be styled differently when the appropriate route or child-routes are active.

If you import it as `Link` then you don't have to modify any existing navigations. As with the standard `<Link>` componet, it will accept either a string or an element as its children.

To use it:

```html
<LinkActive href="/about" activeClassName="text-white">About me</LinkActive>
```

or

```html
<LinkActive href="/blog" activeClassName="text-white">
<a>
  <div>
    Read my blog!
  </div>
</a>
</LinkActive>
```
