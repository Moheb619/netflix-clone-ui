import React from "react";
import Banner from "../../components/Banner/Banner";
import "./HomeScreen.css";
import Nav from "../../components/Nav/Nav";
import requests from "../../utils/Request";
import Row from "../../components/Row/Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

export default HomeScreen;
