import { Link } from "@remix-run/react";

export default function Index({ className = "", to, children, ...rest }) {
  return (
    <Link
      to={to}
      // tabIndex="-1"

      className={`textDecNone ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
