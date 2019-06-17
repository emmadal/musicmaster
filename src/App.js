import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Button, Container, Row, Col, Spinner } from "reactstrap";
import "./components/styles/searchartist.css";
import "./App.css";
import axios from "axios";
import AlbumList from "./components/AlbumList";

export default function App() {
  const [artistname, ArtistName] = useState("");
  const [artistdata, setArtistData] = useState([]);
  const [req, setReq] = useState(0);

  const handleArtistName = e => {
    ArtistName(e.target.value);
  };

  const searchAlbum = async e => {
    e.preventDefault();
    const api = await axios({
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistname}`,
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "rbuVFEFqf7mshEu9T3FimKegzCj2p1ZFN2rjsnzRO421Q2DgSk"
      }
    });
    setArtistData(api.data.data);
    setReq(api.status);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="12" className="search-artist">
            <div className="title-form">
              <FontAwesomeIcon icon={faMusic} size="3x" spin />
              <h1 className="h1-responsive mx-3">Music master</h1>
            </div>
            <Form
              className="form-search"
              onSubmit={artistname !== "" ? searchAlbum : ""}
            >
              <Input
                name="artistname"
                type="text"
                value={artistname}
                placeholder="Artist name"
                onChange={handleArtistName}
              />
              <Button color="primary" type="submit" className="mx-1">
                Search
              </Button>
            </Form>
            <i className="">Search your artist and listen the music !</i>
          </Col>
        </Row>
      </Container>
      <Container className="container-spinner mt-5">
        <Row>
          <Col sm="12">
            {req !== 200 ? (
              <Spinner
                color="info"
                type="border"
                style={{ width: "8rem", height: "8rem" }}
              />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      <AlbumList datamusic={artistdata} />
    </>
  );
}
