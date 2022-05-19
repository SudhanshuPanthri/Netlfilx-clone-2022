import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="parent">
      <Head>
        <title>Netflix</title>
      </Head>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}
