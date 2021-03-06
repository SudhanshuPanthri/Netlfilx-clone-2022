import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import requests from "../utils/requests";
import useAuth from "../hooks/useAuth";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "../components/Modal";

export default function Home({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  if (loading) return null;

  return (
    <div className="">
      <Head>
        <title>Netflix</title>
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals} />
        <section className="rowWrapper">
          {/* mylist component  */}
          <Row title="Netflix Originals" movies={netflixOriginals} />
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action" movies={actionMovies} />
          <Row title="Comedy" movies={comedyMovies} />
          <Row title="Horror" movies={horrorMovies} />
          <Row title="Romance" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
