import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Button, Container, Row, Col } from "reactstrap";
import "./components/styles/searchartist.css";
import "./App.css";
import axios from "axios";
import AlbumList from "./components/AlbumList";

export default function App() {
  const [artistname, ArtistName] = useState("");
  const [artistdata, setArtistData] = useState([]);

  const handleArtistName = e => {
    e.preventDefault();
    ArtistName(e.target.value);
  };

  const searchAlbum = async () => {
    const api = await axios({
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistname}`,
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "rbuVFEFqf7mshEu9T3FimKegzCj2p1ZFN2rjsnzRO421Q2DgSk"
      }
    });
    setArtistData(api.data.data);
  };

  console.log(artistdata)

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12" className="search-artist">
            <div className="title-form">
              <FontAwesomeIcon icon={faMusic} size="3x" spin />
              <h1 className="h1-responsive mx-3">Music master</h1>
            </div>
            <Form className="form-search">
              <Input
                name="artistname"
                type="text"
                value={artistname}
                placeholder="Artist name"
                onChange={handleArtistName}
              />
              <Button color="primary" onClick={searchAlbum} onKeyUp={searchAlbum} className="mx-1">
                Search
              </Button>
            </Form>
            <i className="">Search your artist and listen the music !</i>
          </Col>
        </Row>
      </Container>
      <AlbumList artistname={artistname} datamusic={artistdata} />
    </>
  );
}
