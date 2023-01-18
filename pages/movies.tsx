import Row from "../components/Row";
import { Data } from "../typings";
import requests from "../Utils/requests";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Modal from "../components/Modal";
import useList from "../hooks/useList";
import useAuth from "../hooks/useAuth";
import Banner from "../components/Banner";
import Head from "next/head";

interface Props {
  title: string;
  movies: Data[];
}
interface Props {
  movie: Data;
}

interface Props {
  netflixOriginals: Data[];
  actionMovies: Data[];
  comedyMovies: Data[];
  horrorMovies: Data[];
  romanceMovies: Data[];
  musicMovies: Data[];
  familyMovies: Data[];
  warMovies: Data[];
  mysteryMovies: Data[];
  documentaryMovies: Data[];
  historyMovies: Data[];
  crimeMovies: Data[];
}

function Movies({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  mysteryMovies,
  horrorMovies,
  warMovies,
  romanceMovies,
  musicMovies,
  familyMovies,
  documentaryMovies,
  historyMovies,
  crimeMovies,
}: Props) {
  const showModal = useRecoilValue(modalState);
  const { loading, user } = useAuth();
  const list = useList(user?.uid);

  return (
    <>
      <div
        className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
          showModal && `!h-screen overflow-hidden`
        }`}
      >
        <Head>
          <title>Movies - Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
          <Banner netflixOriginals={netflixOriginals} />
          <section className="md:space-y-24">
            <Row title="Action Thrillers" movies={actionMovies} />
            <Row title="Crime Movies" movies={crimeMovies} />
            <Row title="War Movies" movies={warMovies} />
            <Row title="Mystery" movies={mysteryMovies} />
            {/* My List */}
            {list.length > 0 && <Row title="My List" movies={list} />}
            {/* My List */}
            <Row title="History" movies={historyMovies} />
            <Row title="Scary Movies" movies={horrorMovies} />
            <Row title="Romance Movies" movies={romanceMovies} />
            <Row title="Comedies" movies={comedyMovies} />
            <Row title="Family" movies={familyMovies} />
            <Row title="Music" movies={musicMovies} />
            <Row title="Documentaries" movies={documentaryMovies} />
          </section>
        </main>
        {showModal && <Modal />}
      </div>
    </>
  );
}
export default Movies;
export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    musicMovies,
    warMovies,
    familyMovies,
    mysteryMovies,
    documentaryMovies,
    historyMovies,
    crimeMovies,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchMusicMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchFamilyMovies).then((res) => res.json()),
    fetch(requests.fetchMysteryMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaryMovies).then((res) => res.json()),
    fetch(requests.fetchHistoryMovies).then((res) => res.json()),
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
      musicMovies: musicMovies.results,
      familyMovies: familyMovies.results,
      warMovies: warMovies.results,
      mysteryMovies: mysteryMovies.results,
      documentaryMovies: documentaryMovies.results,
      historyMovies: historyMovies.results,
      crimeMovies: crimeMovies.results,
    },
  };
};
