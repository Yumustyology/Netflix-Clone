import './App.css';
import Banner from './components/banner';
import Navbar from './components/navbar';
import Row from './components/row';
import request from './request'
function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchTNetflixOriginals} isRowLarge={true}/>
        <Row title='Trending Now' fetchUrl={request.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={request.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
