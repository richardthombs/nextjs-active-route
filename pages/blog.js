import Navbar from "../components/navbar";
import Page from "../components/page";
import Link from "../components/linkActive";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Page>
        <h1 className="text-xl font-bold">Blog posts</h1>
        <ul>
          <li>
            <Link href="/blog/post-number-one">
              Post 1
            </Link>
          </li>
          <li>
            <Link href="/blog/post-number-two">
              Post 2
            </Link>
          </li>
        </ul>
      </Page>
    </div>
  );
}
