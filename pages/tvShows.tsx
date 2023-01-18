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
import Header from "../components/Header";

interface Props {
  title: string;
  movies: Data[];
}
interface Props {
  movie: Data;
}

interface Props {
  netflixOriginalsTv: Data[];
  topRatedTv: Data[];
  comedyTv: Data[];
  dramaTv: Data[];
  crimeTv: Data[];
  kidsTv: Data[];
  realityTv: Data[];
  scifiTv: Data[];
  talkTv: Data[];
  documentaryTv: Data[];
  familyTv: Data[];
  warTv: Data[];
  mysteryTv: Data[];
}

function tvShows({
  netflixOriginalsTv,
  topRatedTv,
  comedyTv,
  dramaTv,
  crimeTv,
  kidsTv,
  realityTv,
  scifiTv,
  talkTv,
  documentaryTv,
  familyTv,
  warTv,
  mysteryTv,
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
          <title>TV Shows - Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
          <Banner netflixOriginals={netflixOriginalsTv} />
          <section className="md:space-y-24">
            <Row title="Top Rated" movies={topRatedTv} />
            <Row title="Crime Shows" movies={dramaTv} />
            <Row title="War Shows" movies={warTv} />
            <Row title="Drama Shows" movies={kidsTv} />
            <Row title="Comedy Shows" movies={comedyTv} />
            <Row title="Documentaries" movies={crimeTv} />
            {/* My List */}
            {list.length > 0 && <Row title="My List" movies={list} />}
            {/* My List */}
            <Row title="Sci-Fi Shows" movies={documentaryTv} />
            <Row title="Kids Shows" movies={realityTv} />
            <Row title="Mysteries" movies={scifiTv} />
            <Row title="Reality Shows" movies={talkTv} />
            <Row title="Talk Shows" movies={familyTv} />
            <Row title="Family Shows" movies={mysteryTv} />
          </section>
        </main>
        {showModal && <Modal />}
      </div>
    </>
  );
}
export default tvShows;
export const getServerSideProps = async () => {
  const [
    netflixOriginalsTv,
    topRatedTv,
    comedyTv,
    dramaTv,
    crimeTv,
    kidsTv,
    realityTv,
    scifiTv,
    talkTv,
    documentaryTv,
    familyTv,
    warTv,
    mysteryTv,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginalsTv).then((res) => res.json()),
    fetch(requests.fetchTopRatedTv).then((res) => res.json()),
    fetch(requests.fetchComedyTv).then((res) => res.json()),
    fetch(requests.fetchCrimeTv).then((res) => res.json()),
    fetch(requests.fetchDocumentaryTv).then((res) => res.json()),
    fetch(requests.fetchDramaTv).then((res) => res.json()),
    fetch(requests.fetchKidsTv).then((res) => res.json()),
    fetch(requests.fetchMysteryTv).then((res) => res.json()),
    fetch(requests.fetchRealityTv).then((res) => res.json()),
    fetch(requests.fetchSciFaTv).then((res) => res.json()),
    fetch(requests.fetchTalkTv).then((res) => res.json()),
    fetch(requests.fetchWarTv).then((res) => res.json()),
    fetch(requests.fetchFamilyTv).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginalsTv: netflixOriginalsTv.results,

      topRatedTv: topRatedTv.results,
      comedyTv: comedyTv.results,
      dramaTv: dramaTv.results,
      crimeTv: crimeTv.results,
      kidsTv: kidsTv.results,
      realityTv: realityTv.results,
      scifiTv: scifiTv.results,
      talkTv: talkTv.results,
      documentaryTv: documentaryTv.results,
      familyTv: familyTv.results,
      warTv: warTv.results,
      mysteryTv: mysteryTv.results,
    },
  };
};
