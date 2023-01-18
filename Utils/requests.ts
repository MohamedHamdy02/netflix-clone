const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  // M O V I E S --- A P I s //
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchWarMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
  fetchMusicMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`,
  fetchFamilyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  fetchMysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchDocumentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchHistoryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`,
  fetchCrimeMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  // M O V I E S --- A P I s //

  // TV SHOWS --- A P I s //
  fetchNetflixOriginalsTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedTv: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchComedyTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchCrimeTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchDocumentaryTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchDramaTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchKidsTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10762`,
  fetchMysteryTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchRealityTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10764`,
  fetchSciFaTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`,
  fetchTalkTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10767`,
  fetchWarTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10768`,
  fetchFamilyTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  // TV SHOWS --- A P I s //
}

export default requests