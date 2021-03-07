import Navbar from "../components/navbar";
import Page from "../components/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page>
        <h1 className="text-xl font-bold">Home</h1>
        Welcome!
        </Page>
    </div>
  );
}
