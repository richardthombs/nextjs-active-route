import Link from "./linkActive";

export default function NavBar() {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto text-gray-500 flex items-center px-8 py-4">
        <div className="text-gray-50 text-2xl uppercase font-semibold mr-16">
          <Link href="/">
            <a>Brand</a>
          </Link>
        </div>
        <div className="mr-8">
          <Link href="/blog" activeClassName="text-white">
            <a>Blog</a>
          </Link>
        </div>

        <div className="mr-8">
          <Link href="/about" activeClassName="text-white">
            <a>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
