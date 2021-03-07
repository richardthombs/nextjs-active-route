import NavBar from "../../components/navbar";
import Page from "../../components/page";

export default function BlogPage(props) {
  console.log(props);
  return (
    <div>
      <NavBar />
      <Page>
        <h1 className="text-xl font-bold">{props.slug}</h1>
        This should display the blog entry called "{props.slug}".
      </Page>
    </div>
  );
}

export async function getStaticProps({ params }) {
  console.log("getStaticProps", params);

  return { props: params };
}

export async function getStaticPaths(x) {
  console.log("getStaticPaths", x);
  return {
    paths: [
      "/blog/post-number-one",
      "/blog/post-number-two"
    ],
    fallback: false
  };
}
