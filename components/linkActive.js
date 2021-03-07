import Link from "next/link";
import { useRouter } from "next/router";
import { Children, cloneElement } from "react";

export default function LinkActive({ children, ...props }) {
  const router = useRouter();

  const { href, activeClassName } = props;

  // Wrap string-only child in an anchor tag
  const child = typeof children === "string" ? <a>{children}</a> : Children.only(children);

  // Determine if the route or a child route is active
  const isRouteActive = router.pathname === href || router.pathname.startsWith(href + "/");

  // Add the activeClassName when the route is active
  let className = child.props.className || "";
  if (isRouteActive && className && activeClassName) className += " " + activeClassName;
  else if (isRouteActive && activeClassName) className = activeClassName;

  // Clone the child so we can add className to the props
  const clone = cloneElement(child, { className });

  return (
    <Link {...props}>{clone}</Link>
  );
}
