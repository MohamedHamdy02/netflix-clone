import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";
import useList from "../hooks/useList";
import { Data } from "../typings";
import requests from "../Utils/requests";

interface Props {
  netflixOriginals: Data[];
  trendingNow: Data[];
  topRated: Data[];
  actionMovies: Data[];
  comedyMovies: Data[];
  horrorMovies: Data[];
  romanceMovies: Data[];
  warMovies: Data[];
  crimeMovies: Data[];
}

const Home = ({
  netflixOriginals,
  actionMovies,
  horrorMovies,
  warMovies,
  romanceMovies,
  topRated,
  trendingNow,
  crimeMovies,
}: Props) => {
  const { loading, user } = useAuth();
  const showModal = useRecoilValue(modalState);
  const list = useList(user?.uid);

  if (loading) return null;

  return (
      <div
        className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
          showModal && `!h-screen overflow-hidden`
        }`}
      >
        <Head>
          <title>Home - Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
          <Banner netflixOriginals={netflixOriginals} />
          <section className="md:space-y-24">
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies} />
            <Row title="Crime Movies" movies={crimeMovies} />
            {/* My List */}
            {list.length > 0 && <Row title="My List" movies={list} />}
            {/* My List */}
            <Row title="War Movies" movies={warMovies} />
            <Row title="Scary Movies" movies={horrorMovies} />
            <Row title="Romance Movies" movies={romanceMovies} />
          </section>
        </main>
        {showModal && <Modal />}
      </div>
  );
};

export default Home;

export const getServerSideProps : GetServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    warMovies,
    crimeMovies,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchCrimeMovies).then((res) => res.json()),
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
      warMovies: warMovies.results,
      crimeMovies: crimeMovies.results,
    },
  };
};
